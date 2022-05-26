
import { Payload as SolanaPayload, SIWS } from "@web3auth/sign-in-with-solana";
import { Payload as StarkwarePayload, SIWStarkware } from "@web3auth/sign-in-with-starkware";
import { Header, Payload, Signature, SignInWithWeb3Response, VerifyParams } from "./types";

export class SIWW {
  
  header: Header;

  payload: Payload;

  signature: Signature;

  network: string;

  networkStruct: SIWS | SIWStarkware;

  /**
   * Creates a parsed Sign-In with Ethereum Message object from a
   * string or an object. If a string is used an parser is called to
   * validate the parameter, otherwise the fields are attributed.
   * @param param {string | SIWW} Sign message as a string or an object.
   */
  constructor(param: string | Partial<SIWW>) {
    switch (this.network) {
      case "solana": {
        var networkPayload = new SolanaPayload();
        Object.assign(networkPayload, this.payload);
        this.networkStruct = new SIWS({payload: networkPayload});
      }
      case "starkware": {
        var networkPayload = new StarkwarePayload();
        Object.assign(networkPayload, this.payload);
        this.networkStruct = new SIWStarkware({payload: networkPayload});
      } 
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
  async verify(params: VerifyParams): Promise<SignInWithWeb3Response> {
    return new Promise<SignInWithWeb3Response>((resolve) => {
      return this.networkStruct.verify(params);
    });
  }
}
