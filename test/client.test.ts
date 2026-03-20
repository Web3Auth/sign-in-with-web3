import { ed25519 } from "@noble/curves/ed25519.js";
import { base58 } from "@scure/base";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { describe, expect, it } from "vitest";

import { ErrorTypes, ethereumStrategy, Signature, SIWWeb3, solanaStrategy } from "../src/index";
import { parseMessage } from "../src/regex";
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

describe(`Invalid message parsing`, () => {
  it(`Throws on message with no chain`, () => {
    expect(() => new SIWWeb3("totally invalid message")).toThrow("Message did not match the regular expression.");
  });

  it(`Throws on empty string`, () => {
    expect(() => new SIWWeb3("")).toThrow("Message did not match the regular expression.");
  });

  it(`Throws on message with empty chain name`, () => {
    expect(() => new SIWWeb3("sign in with your  account:")).toThrow("Message did not match the regular expression.");
  });

  it(`Throws on message with missing chain ID`, () => {
    const msgWithoutChainId = [
      "example.com wants you to sign in with your Ethereum account:",
      "0x1234567890abcdef1234567890abcdef12345678",
      "",
      "URI: https://example.com",
      "Version: 1",
      "Nonce: abcdefgh",
      "Issued At: 2024-01-01T00:00:00Z",
    ].join("\n");
    expect(() => new SIWWeb3(msgWithoutChainId)).toThrow("Message did not match the regular expression.");
  });

  it(`Throws on message with unregistered chain`, () => {
    expect(() => new SIWWeb3("example.com wants you to sign in with your Bitcoin account:\n0x1234")).toThrow(
      "No strategy registered for chain: Bitcoin."
    );
  });
});

describe(`Resource parsing`, () => {
  it(`Returns null for message without resources`, () => {
    const msg = [
      "service.org wants you to sign in with your Ethereum account:",
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "",
      "I accept the ServiceOrg Terms of Service: https://service.org/tos",
      "",
      "URI: https://service.org/login",
      "Version: 1",
      "Chain ID: 1",
      "Nonce: 32891757",
      "Issued At: 2021-09-30T16:25:24.000Z",
    ].join("\n");
    const parsed = parseMessage("Ethereum", "0x[a-zA-Z0-9]{40}", msg);
    // Type declares `resources: string[] | null` but returns undefined
    expect(parsed.resources).toBeNull();
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

describe(`Malformed Solana input`, () => {
  it(`Returns verification failure for malformed signature`, async () => {
    const firstSolana = Object.values(parsingPositiveSolana)[0];
    const { payload, chain, header } = firstSolana.fields;
    const msg = new SIWWeb3({ payload, chain, header });
    const signature = new Signature();
    signature.s = "!!!invalid-base58!!!";
    signature.t = "sip99";
    const result = await msg.verify(payload, signature);
    expect(result.success).toBe(false);
  });

  it(`Returns verification failure for malformed address`, async () => {
    const firstSolana = Object.values(parsingPositiveSolana)[0];
    const { payload, chain, header } = firstSolana.fields;
    payload.address = "!!!invalid-base58!!!";
    const msg = new SIWWeb3({ payload, chain, header });
    const signature = new Signature();
    signature.s = "11111111111111111111111111111111";
    signature.t = "sip99";
    const result = await msg.verify(payload, signature);
    expect(result.success).toBe(false);
  });
});

describe(`Round Trip Solana`, () => {
  const privateKey = crypto.getRandomValues(new Uint8Array(32));
  const publicKey = ed25519.getPublicKey(privateKey);
  Object.entries(parsingPositiveSolana).forEach(([test, value]) => {
    it(`Generates a Successfully Verifying message: ${test}`, async () => {
      const { payload, chain, header } = value.fields;
      payload.address = base58.encode(publicKey);
      const msg = new SIWWeb3({ payload, chain, header });
      const encodedMessage = new TextEncoder().encode(msg.prepareMessage());
      const signatureEncoded = base58.encode(ed25519.sign(encodedMessage, privateKey));
      const signature = new Signature();
      signature.s = signatureEncoded;
      signature.t = "sip99";
      const { success } = await msg.verify(payload, signature);
      expect(success).toBe(true);
    });
  });
});
