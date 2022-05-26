import { randomStringForEntropy } from "@stablelib/random";
import { SIWE } from "@web3auth/sign-in-with-ethereum";
import { SIWS } from "@web3auth/sign-in-with-solana";
import { SIWStarkware } from "@web3auth/sign-in-with-starkware";

import { VerifyParams } from "./types";

export class SIWW {
  header: any;

  payload: any;

  signature: any;

  network: string;

  networkStruct: SIWS | SIWStarkware | SIWE;

  /**
   * Creates a parsed Sign-In with Ethereum Message object from a
   * string or an object. If a string is used an parser is called to
   * validate the parameter, otherwise the fields are attributed.
   * @param param {SIWW} Sign message as a string or an object.
   */
  constructor(param: Partial<SIWW>) {
    switch (param.network) {
      case "solana": {
        const networkPayload: Partial<SIWS> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.networkStruct = new SIWS(networkPayload);
        break;
      }
      case "starkware": {
        const networkPayload: Partial<SIWStarkware> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.networkStruct = new SIWStarkware(networkPayload);
        break;
      }
      case "ethereum": {
        const networkPayload: Partial<SIWE> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.networkStruct = new SIWE(networkPayload);
        break;
      }
    }
    if (typeof this.payload.chainId === "string") {
      this.payload.chainId = parseInt(this.payload.chainId);
    }
    if (!this.payload.nonce) {
      this.payload.nonce = randomStringForEntropy(96);
    }
    if (!this.payload.issuedAt) {
      this.payload.issuedAt = new Date().toISOString();
    }
  }

  /**
   * This function can be used to retrieve a formated message for
   * signature, although you can call it directly it's advised to use
   * [prepareMessage()] instead which will resolve to the correct method based
   * on the [type] attribute of this object, in case of other formats being
   * implemented.
   * @returns {string} message
   */
  toMessage(): string {
    return this.networkStruct.toMessage();
  }

  /**
   * This method parses all the fields in the object and creates a sign
   * message according with the type defined.
   * @returns {string} Returns a message ready to be signed according with the
   * type defined in the object.
   */
  prepareMessage(): string {
    let message: string;
    switch (this.payload.version) {
      case "1": {
        message = this.toMessage();
        break;
      }

      default: {
        message = this.toMessage();
        break;
      }
    }
    return message;
  }

  /**
   * Validates the integrity of the object by matching it's signature.
   * @param params Parameters to verify the integrity of the message, signature is required.
   * @returns {Promise<SignInWithWeb3Response>} This object if valid.
   */
  async verify(params: VerifyParams): Promise<any> {
    return this.networkStruct.verify(params).then();
  }
}
