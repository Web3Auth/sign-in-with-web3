import { bs58 as base58 } from "@toruslabs/bs58";
import { sign } from "@toruslabs/tweetnacl-js";

import { ParsedMessageFields, parseMessage } from "../regex";
import { Payload, Signature, VerifyParams } from "../types";
import { SIWBase } from "./base";

const SOLANA_ADDRESS_PATTERN = "[a-zA-Z0-9]{32,44}";

export class SIWS extends SIWBase {
  readonly chainName = "Solana";

  protected parseMessage(msg: string): ParsedMessageFields {
    return parseMessage("Solana", SOLANA_ADDRESS_PATTERN, msg);
  }

  protected async verifySignature(_message: string, payload: Payload, signature: Signature, _params?: VerifyParams): Promise<boolean> {
    const message = this.prepareMessage();
    const encodedMessage = new TextEncoder().encode(message);
    return sign.detached.verify(encodedMessage, base58.decode(signature.s), base58.decode(payload.address));
  }
}

export const solanaStrategy = {
  chain: "solana" as const,
  parse: (msg: string) => new SIWS(msg),
  create: (params: Partial<SIWBase>) => new SIWS(params),
};
