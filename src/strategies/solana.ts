import { ed25519 } from "@noble/curves/ed25519.js";
import { base58 } from "@scure/base";

import { ParsedMessageFields, parseMessage } from "../regex";
import { Payload, Signature, VerifyParams } from "../types";
import { SIWBase } from "./base";

const SOLANA_ADDRESS_PATTERN = "[a-zA-Z0-9]{32,44}";
const SOLANA_CHAIN_ID_PATTERN = "[0-9]+|mainnet|testnet|devnet|localnet|solana:mainnet|solana:testnet|solana:devnet|solana:localnet";
const parseSolanaChainId = (chainId: string): number | string => (/^[0-9]+$/.test(chainId) ? Number(chainId) : chainId);

export class SIWS extends SIWBase {
  readonly chainName = "Solana";

  protected parseMessage(msg: string): ParsedMessageFields {
    return parseMessage("Solana", SOLANA_ADDRESS_PATTERN, msg, SOLANA_CHAIN_ID_PATTERN, parseSolanaChainId);
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
