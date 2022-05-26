import { SignInWithEthereumError } from "@web3auth/sign-in-with-ethereum";
import { SignInWithSolanaError, SIWS } from "@web3auth/sign-in-with-solana";
import { SignInWithStarkwareError, SIWStarkware } from "@web3auth/sign-in-with-starkware";

export interface VerifyParams {
  payload: any;
  signature: any;
  kp: any;
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
  data: SIWS | SIWStarkware;
}
