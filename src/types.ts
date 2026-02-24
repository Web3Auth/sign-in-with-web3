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

  /** Wallet address performing the signing */
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

export enum ErrorTypes {
  /** `expirationTime` is present and in the past. */
  EXPIRED_MESSAGE = "Expired message.",

  /** `domain` is not a valid authority or is empty. */
  INVALID_DOMAIN = "Invalid domain.",

  /** `domain` don't match the domain provided for verification. */
  DOMAIN_MISMATCH = "Domain do not match provided domain for verification.",

  /** `nonce` don't match the nonce provided for verification. */
  NONCE_MISMATCH = "Nonce do not match provided nonce for verification.",

  /** `address` don't match the address provided for verification. */
  ADDRESS_MISMATCH = "Address do not match provided address for verification.",

  /** `uri` don't match the URI provided for verification. */
  URI_MISMATCH = "URI do not match provided URI for verification.",

  /** `chainId` don't match the chain ID provided for verification. */
  CHAIN_ID_MISMATCH = "Chain ID do not match provided chain ID for verification.",

  /** `address` is not a valid address. */
  INVALID_ADDRESS = "Invalid address.",

  /** `uri` does not conform to RFC 3986. */
  INVALID_URI = "URI does not conform to RFC 3986.",

  /** `nonce` is smaller then 8 characters or is not alphanumeric */
  INVALID_NONCE = "Nonce size smaller then 8 characters or is not alphanumeric.",

  /** `notBefore` is present and in the future. */
  NOT_YET_VALID_MESSAGE = "Message is not valid yet.",

  /** Signature doesn't match the address of the message. */
  INVALID_SIGNATURE = "Signature do not match address of the message.",

  /** `expirationTime`, `notBefore` or `issuedAt` not complient to ISO-8601. */
  INVALID_TIME_FORMAT = "Invalid time format.",

  /** `version` is not 1. */
  INVALID_MESSAGE_VERSION = "Invalid message version.",

  /** Thrown when some required field is missing. */
  UNABLE_TO_PARSE = "Unable to parse the message.",

  MALFORMED_SESSION = "Malformed Session",
}

export class SignInWithWeb3Error extends Error {
  /** Type of the error. */
  type: ErrorTypes;

  /** Expected value or condition to pass. */
  expected?: string;

  /** Received value that caused the failure. */
  received?: string;

  constructor(type: ErrorTypes, expected?: string, received?: string) {
    super(type);
    this.type = type;
    this.expected = expected;
    this.received = received;
  }
}

export interface VerifyParams {
  [key: string]: unknown;
  payload: Payload;
  signature: Signature;
}

export interface SignInWithWeb3Response {
  /** Boolean representing if the message was verified with success. */
  success: boolean;

  /** If present `success` MUST be false and will provide extra information on the failure reason. */
  error?: SignInWithWeb3Error;

  /** Original message that was verified. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
