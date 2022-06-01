/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable mocha/no-setup-in-describe */
import assert from "assert";
import base58 from "bs58";
import { Wallet } from "ethers";
import { ec } from "starknet";
import nacl from "tweetnacl";

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
      const { payload, network } = value.fields;
      const msg = new SIWWeb3({ payload, network });
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveStarkware).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const { payload, network } = value.fields;
      const msg = new SIWWeb3({ payload, network });
      assert.equal(msg.toMessage(), value.message);
    });
  });
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, function () {
      const { payload, network } = value.fields;
      const msg = new SIWWeb3({ payload, network });
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
    it(`Validates message successfully: ${test}`, async function () {
      const { payload } = value;
      const { signature } = value;
      const { network } = value;
      const msg = new SIWWeb3({ payload, network });
      const verify = await msg.verify(payload, signature);
      assert.equal(verify.success, true);
    });
  });

  Object.entries(validationPositiveSolana).forEach(([test, value]) => {
    it(`Validates message successfully - solana: ${test}`, async function () {
      const { payload } = value;
      const { signature } = value;
      const { network } = value;
      const msg = new SIWWeb3({ payload, network });
      const verify = await msg.verify(payload, signature);
      assert.equal(verify.success, true);
    });
  });

  Object.entries(validationPositiveStarkware).forEach(([test, value]) => {
    it(`Validates message successfully - starkware: ${test}`, async function () {
      const { payload } = value;
      const { signature } = value;
      const { network } = value;
      const msg = new SIWWeb3({ payload, network });
      const starkKeyPair = ec.getKeyPair(payload.address);
      const verify = await msg.verify(payload, signature, starkKeyPair);
      assert.equal(verify.success, true);
    });
  });

  test.concurrent.each(Object.entries(validationNegativeEthereum))("Fails to verify message: %s", async (_n, testFields) => {
    try {
      const { payload } = testFields;
      const { signature } = testFields;
      const { network } = testFields;
      const msg = new SIWWeb3({ payload, network });
      await msg.verify(payload, signature);
    } catch (error) {
      expect(Object.values(SIWWeb3).includes(error));
    }
  });

  test.concurrent.each(Object.entries(validationNegativeSolana))("Fails to verify message: %s", async (_n, testFields) => {
    try {
      const { payload } = testFields;
      const { signature } = testFields;
      const { network } = testFields;
      const msg = new SIWWeb3({ payload, network });
      await msg.verify(payload, signature);
    } catch (error) {
      expect(Object.values(SIWWeb3).includes(error));
    }
  });

  test.concurrent.each(Object.entries(validationNegativeStarkware))("Fails to verify message: %s", async (_n, testFields) => {
    try {
      const { payload } = testFields;
      const { signature } = testFields;
      const { network } = testFields;
      const msg = new SIWWeb3({ payload, network });
      await msg.verify(payload, signature);
    } catch (error) {
      expect(Object.values(SIWWeb3).includes(error));
    }
  });
});

describe(`Round Trip Ethereum`, function () {
  const wallet = Wallet.createRandom();
  test.concurrent.each(Object.entries(parsingPositiveEthereum))("Generates a Successfully Verifying message: %s", async (_, el) => {
    const { payload, network } = el.fields;
    payload.address = wallet.address;
    const msg = new SIWWeb3({ payload, network });
    const signature = new Signature();
    signature.s = await wallet.signMessage(msg.toMessage());
    signature.t = "eip191";
    await expect(msg.verify(payload, signature).then(({ success }) => success)).resolves.toBeTruthy();
  });
});

describe(`Round Trip Solana`, function () {
  const rbytes = nacl.randomBytes(32);
  const keypair = nacl.sign.keyPair.fromSeed(rbytes);
  test.concurrent.each(Object.entries(parsingPositiveSolana))("Generates a Successfully Verifying message: %s", async (_, el) => {
    const { payload, network } = el.fields;
    payload.address = base58.encode(keypair.publicKey);
    const msg = new SIWWeb3({ payload, network });
    const encodedMessage = new TextEncoder().encode(msg.prepareMessage());
    const signatureEncoded = base58.encode(nacl.sign.detached(encodedMessage, keypair.secretKey));
    const signature = new Signature();
    signature.s = signatureEncoded;
    signature.t = "sip99";
    await expect(msg.verify(payload, signature).then(({ success }) => success)).resolves.toBeTruthy();
  });
});
