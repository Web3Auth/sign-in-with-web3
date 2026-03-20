import { ed25519 } from "@noble/curves/ed25519.js";
import { base58 } from "@scure/base";

import { ParsedMessageFields, parseMessage } from "../regex";
import { Payload, Signature, VerifyParams } from "../types";
import { SIWBase } from "./base";

const SOLANA_ADDRESS_PATTERN = "[a-zA-Z0-9]{32,44}";

export class SIWS extends SIWBase {
  readonly chainName = "Solana";

  protected parseMessage(msg: string): ParsedMessageFields {
    return parseMessage("Solana", SOLANA_ADDRESS_PATTERN, msg);
  }

  protected async verifySignature(message: string, payload: Payload, signature: Signature, _params?: VerifyParams): Promise<boolean> {
    try {
      const encodedMessage = new TextEncoder().encode(message);
      return ed25519.verify(base58.decode(signature.s), encodedMessage, base58.decode(payload.address));
    } catch {
      return false;
    }
  }
}

export const solanaStrategy = {
  chain: "solana" as const,
  parse: (msg: string) => new SIWS(msg),
  create: (params: Partial<SIWBase>) => new SIWS(params),
};
