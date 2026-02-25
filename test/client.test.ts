import { bs58 as base58 } from "@toruslabs/bs58";
import { randomBytes, sign } from "@toruslabs/tweetnacl-js";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { describe, expect, it } from "vitest";

import { ErrorTypes, ethereumStrategy, Signature, SIWWeb3, solanaStrategy } from "../src/index";
import parsingPositiveEthereum from "./parsing_positive_ethereum.json";
import parsingPositiveSolana from "./parsing_positive_solana.json";
import validationNegativeEthereum from "./validation_negative_ethereum.json";
import validationNegativeSolana from "./validation_negative_solana.json";
import validationPositiveEthereum from "./validation_positive_ethereum.json";
import validationPositiveSolana from "./validation_positive_solana.json";

SIWWeb3.registerStrategy(ethereumStrategy);
SIWWeb3.registerStrategy(solanaStrategy);

describe(`Message Generation from payload`, () => {
  Object.entries(parsingPositiveEthereum).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, () => {
      const { payload, chain, header } = value.fields;
      const msg = new SIWWeb3({ payload, chain, header });
      expect(msg.toMessage()).toBe(value.message);
    });
  });
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, () => {
      const { payload, chain, header } = value.fields;
      const msg = new SIWWeb3({ payload, chain, header });
      expect(msg.toMessage()).toBe(value.message);
    });
  });
});

describe(`Message Generation from message`, () => {
  Object.entries(parsingPositiveEthereum).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, () => {
      const msg = new SIWWeb3(value.message);
      expect(msg.toMessage()).toBe(value.message);
    });
  });
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates message successfully: ${test}`, () => {
      const msg = new SIWWeb3(value.message);
      expect(msg.toMessage()).toBe(value.message);
    });
  });
});

describe(`Message Validation`, () => {
  Object.entries(validationPositiveEthereum).forEach(([test, value]) => {
    it(`Validates message successfully - ethereum : ${test}`, async () => {
      const { payload, signature, chain, header } = value;
      const msg = new SIWWeb3({ payload, chain, header });
      const verify = await msg.verify(payload, signature);
      expect(verify.success).toBe(true);
    });
  });

  Object.entries(validationPositiveSolana).forEach(([test, value]) => {
    it(`Validates message successfully - solana: ${test}`, async () => {
      const { payload, signature, chain, header } = value;
      const msg = new SIWWeb3({ payload, chain, header });
      const verify = await msg.verify(payload, signature);
      expect(verify.success).toBe(true);
    });
  });

  Object.entries(validationNegativeEthereum).forEach(([test, value]) => {
    it(`Fails to verify message: ${test}`, async () => {
      const result = await (async () => {
        const { payload, signature, chain, header } = value;
        const msg = new SIWWeb3({ payload, chain, header });
        return msg.verify(payload, signature);
      })().catch((e: Error) => e);
      const errorType = result instanceof Error ? result.message : result.error.type;
      expect(Object.values(ErrorTypes) as string[]).toContain(errorType);
    });
  });

  Object.entries(validationNegativeSolana).forEach(([test, value]) => {
    it(`Fails to verify message: ${test}`, async () => {
      const result = await (async () => {
        const { payload, signature, chain, header } = value;
        const msg = new SIWWeb3({ payload, chain, header });
        return msg.verify(payload, signature);
      })().catch((e: Error) => e);
      const errorType = result instanceof Error ? result.message : result.error.type;
      expect(Object.values(ErrorTypes) as string[]).toContain(errorType);
    });
  });
});

describe(`Round Trip Ethereum`, () => {
  const account = privateKeyToAccount(generatePrivateKey());

  Object.entries(parsingPositiveEthereum).forEach(([test, el]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async () => {
      const { payload, chain, header } = el.fields;
      payload.address = account.address;
      const msg = new SIWWeb3({ payload, chain, header });
      const signature = new Signature();
      signature.s = await account.signMessage({ message: msg.toMessage() });
      signature.t = "eip191";
      const success = await msg.verify(payload, signature);
      expect(success.success).toBe(true);
    });
  });
});

describe(`Round Trip Solana`, () => {
  const rbytes = randomBytes(32);
  const keypair = sign.keyPair.fromSeed(rbytes);
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async () => {
      const { payload, chain, header } = value.fields;
      payload.address = base58.encode(keypair.publicKey);
      const msg = new SIWWeb3({ payload, chain, header });
      const encodedMessage = new TextEncoder().encode(msg.prepareMessage());
      const signatureEncoded = base58.encode(sign.detached(encodedMessage, keypair.secretKey));
      const signature = new Signature();
      signature.s = signatureEncoded;
      signature.t = "sip99";
      const { success } = await msg.verify(payload, signature, { kp: keypair });
      expect(success).toBe(true);
    });
  });
});
