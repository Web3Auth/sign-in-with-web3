import { SignInWithEthereumError, SIWEthereum } from "@web3auth/sign-in-with-ethereum";
import { SignInWithSolanaError, SIWS } from "@web3auth/sign-in-with-solana";
import { SignInWithStarkwareError, SIWStarkware } from "@web3auth/sign-in-with-starkware";

export class SignatureMeta {}

export class Signature {
  t: string; // signature scheme

  m?: SignatureMeta; // signature related metadata (optional)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  s: any; // signature
}

export class Header {
  /** specifies format of the payload. */
  t: string;
}

export class Payload {
  /** RFC 4501 dns authority that is requesting the signing. */
  domain: string;

  /** Ethereum address performing the signing */
  address: string;

  /** Human-readable ASCII assertion that the user will sign, and it must not contain newline characters. */
  statement?: string;

  /** RFC 3986 URI referring to the resource that is the subject of the signing
   *  (as in the __subject__ of a claim). */
  uri: string;

  /** Current version of the message. */
  version: string;

  /** Chain ID to which the session is bound, and the network where
   * Contract Accounts must be resolved. */
  chainId?: number;

  /** Randomized token used to prevent replay attacks, at least 8 alphanumeric
   * characters. */
  nonce: string;

  /** ISO 8601 datetime string of the current time. */
  issuedAt: string;

  /** ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message is no longer valid. */
  expirationTime?: string;

  /** ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message will become valid. */
  notBefore?: string;

  /** System-specific identifier that may be used to uniquely refer to the
   * sign-in request. */
  requestId?: string;

  /** List of information or references to information the user wishes to have
   * resolved as part of authentication by the relying party. They are
   * expressed as RFC 3986 URIs separated by `\n- `. */
  resources?: Array<string>;
}

/**
 * Returned on verifications.
 */
export interface SignInWithWeb3Response {
  /** Boolean representing if the message was verified with success. */
  success: boolean;

  /** If present `success` MUST be false and will provide extra information on the failure reason. */
  error?: SignInWithSolanaError | SignInWithStarkwareError | SignInWithEthereumError;

  /** Original message that was verified. */
  data: SIWS | SIWStarkware | SIWEthereum;
}
