/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable mocha/no-setup-in-describe */
import nacl from "@toruslabs/tweetnacl-js";
import { ErrorTypes as ErrorTypesEthereum } from "@web3auth/sign-in-with-ethereum";
import { ErrorTypes as ErrorTypesSolana } from "@web3auth/sign-in-with-solana";
import { ErrorTypes as ErrorTypesStarkware } from "@web3auth/sign-in-with-starkware";
import assert from "assert";
import base58 from "bs58";
import { Wallet } from "ethers";
import { ec, hash, stark, typedData } from "starknet";

import { Signature, SIWWeb3 } from "../src/index";
import parsingPositiveEthereum from "./parsing_positive_ethereum.json";
import parsingPositiveSolana from "./parsing_positive_solana.json";
import parsingPositiveStarkware from "./parsing_positive_starkware.json";
import validationNegativeEthereum from "./validation_negative_ethereum.json";
import validationNegativeSolana from "./validation_negative_solana.json";
import validationNegativeStarkware from "./validation_negative_starkware.json";
import validationPositiveEthereum from "./validation_positive_ethereum.json";
import validationPositiveSolana from "./validation_positive_solana.json";
import validationPositiveStarkware from "./validation_positive_starkware.json";

describe(`Message Generation from payload`, function () {
  Object.entries(parsingPositiveEthereum).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const { payload, network, header } = value.fields;
      const msg = new SIWWeb3({ payload, network, header });
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveStarkware).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const { payload, network, header } = value.fields;
      const msg = new SIWWeb3({ payload, network, header });
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const { payload, network, header } = value.fields;
      const msg = new SIWWeb3({ payload, network, header });
      assert.equal(msg.toMessage(), value.message);
    });
  });
});

describe(`Message Generation from message`, function () {
  Object.entries(parsingPositiveEthereum).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const msg = new SIWWeb3(value.message);
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveStarkware).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const msg = new SIWWeb3(value.message);
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const msg = new SIWWeb3(value.message);
      assert.equal(msg.toMessage(), value.message);
    });
  });
});

describe(`Message Validation`, function () {
  Object.entries(validationPositiveEthereum).forEach(([test, value]) => {
    it(`Validates message successfully - ethereum : ${test}`, async function () {
      const { payload, signature, network, header } = value;
      const msg = new SIWWeb3({ payload, network, header });
      const verify = await msg.verify(payload, signature);
      assert.equal(verify.success, true);
    });
  });

  Object.entries(validationPositiveSolana).forEach(([test, value]) => {
    it(`Validates message successfully - solana: ${test}`, async function () {
      const { payload, signature, network, header } = value;
      const msg = new SIWWeb3({ payload, network, header });
      const verify = await msg.verify(payload, signature);
      assert.equal(verify.success, true);
    });
  });

  Object.entries(validationPositiveStarkware).forEach(([test, value]) => {
    it(`Validates message successfully - starkware: ${test}`, async function () {
      const { payload, signature, network, header } = value;
      const msg = new SIWWeb3({ payload, network, header });
      const starkKeyPair = ec.getKeyPair(payload.address);
      const verify = await msg.verify(payload, signature, starkKeyPair);
      assert.equal(verify.success, true);
    });
  });

  Object.entries(validationNegativeEthereum).forEach(([test, value]) => {
    it(`Fails to verify message: ${test}`, async function () {
      try {
        const { payload, signature, network, header } = value;
        const msg = new SIWWeb3({ payload, network, header });
        const error = await msg.verify(payload, signature);
        assert(Object.values(ErrorTypesEthereum).includes(error.error.type));
      } catch (error) {
        // this is for time error
        assert((Object.values(ErrorTypesEthereum) as string[]).includes((error as Error).message));
      }
    });
  });

  Object.entries(validationNegativeSolana).forEach(([test, value]) => {
    it(`Fails to verify message: ${test}`, async function () {
      try {
        const { payload, signature, network, header } = value;
        const msg = new SIWWeb3({ payload, network, header });
        const error = await msg.verify(payload, signature);
        assert(Object.values(ErrorTypesSolana).includes(error.error.type));
      } catch (error) {
        // this is for time error
        assert((Object.values(ErrorTypesEthereum) as string[]).includes((error as Error).message));
      }
    });
  });

  Object.entries(validationNegativeStarkware).forEach(([test, value]) => {
    it(`Fails to verify message: ${test}`, async function () {
      try {
        const { payload, signature, network, header } = value;
        const msg = new SIWWeb3({ payload, network, header });
        const kp = ec.getKeyPair(payload.address);
        const error = await msg.verify(payload, signature, kp);
        assert(Object.values(ErrorTypesStarkware).includes(error.error.type));
      } catch (error) {
        // this is for time error
        assert((Object.values(ErrorTypesEthereum) as string[]).includes((error as Error).message));
      }
    });
  });
});

describe(`Round Trip Ethereum`, function () {
  const wallet = Wallet.createRandom();

  Object.entries(parsingPositiveEthereum).forEach(([test, el]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async function () {
      const { payload, network, header } = el.fields;
      payload.address = wallet.address;
      const msg = new SIWWeb3({ payload, network, header });
      const signature = new Signature();
      signature.s = await wallet.signMessage(msg.toMessage());
      signature.t = "eip191";
      const success = await msg.verify(payload, signature);
      assert.ok(success);
    });
  });
});

describe(`Round Trip Solana`, function () {
  const rbytes = nacl.randomBytes(32);
  const keypair = nacl.sign.keyPair.fromSeed(rbytes);
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async function () {
      const { payload, network, header } = value.fields;
      payload.address = base58.encode(keypair.publicKey);
      const msg = new SIWWeb3({ payload, network, header });
      const encodedMessage = new TextEncoder().encode(msg.prepareMessage());
      const signatureEncoded = base58.encode(nacl.sign.detached(encodedMessage, keypair.secretKey));
      const signature = new Signature();
      signature.s = signatureEncoded;
      signature.t = "sip99";
      const { success } = await msg.verify(payload, signature, keypair);
      assert.equal(success, true);
    });
  });
});

describe(`Round Trip Starkware`, function () {
  const privateKey = stark.randomAddress();
  const starkKeyPair = ec.getKeyPair(privateKey);
  const fullPublicKey = ec.getStarkKey(starkKeyPair);
  Object.entries(parsingPositiveStarkware).forEach(([test, el]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async function () {
      const { payload } = el.fields;
      payload.address = fullPublicKey;
      const msg = new SIWWeb3({ payload });
      const signature = new Signature();
      const message = hash.starknetKeccak(msg.prepareMessage()).toString("hex").substring(0, 31);
      const typedMessage: typedData.TypedData = {
        domain: {
          name: "Example DApp",
          chainId: payload.chainId,
          version: "0.0.1",
        },
        types: {
          StarkNetDomain: [
            { name: "name", type: "felt" },
            { name: "chainId", type: "felt" },
            { name: "version", type: "felt" },
          ],
          Message: [{ name: "message", type: "felt" }],
        },
        primaryType: "Message",
        message: {
          message,
        },
      };
      signature.s = ec.sign(starkKeyPair, typedData.getMessageHash(typedMessage, payload.address));
      signature.t = "eip191";
      const success = await msg.verify(payload, signature, starkKeyPair);
      assert.ok(success);
    });
  });
});
