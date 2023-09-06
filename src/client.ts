import { SIWEthereum } from "@web3auth/sign-in-with-ethereum";
import { SIWS } from "@web3auth/sign-in-with-solana";
import { SIWStarkware } from "@web3auth/sign-in-with-starkware";
import nodeCrypto from "crypto";

import { getNetworkFromMessage } from "./regex";
import { Header, Payload, Signature } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const browserCrypto = global.crypto || (global as any).msCrypto || {};

function randomBytes(size: number): Buffer {
  const arr = new Uint8Array(size);
  if (typeof browserCrypto.getRandomValues === "undefined") {
    return Buffer.from(nodeCrypto.randomBytes(size));
  }
  browserCrypto.getRandomValues(arr);

  return Buffer.from(arr);
}

export class SIWWeb3 {
  header: Header;

  signature: Signature;

  network?: string;

  payload: SIWS["payload"] | SIWStarkware["payload"] | SIWEthereum["payload"];

  /**
   * Creates a parsed Sign-In with Ethereum Message object from a
   * string or an object. If a string is used an parser is called to
   * validate the parameter, otherwise the fields are attributed.
   * @param param - Sign message as a string or an object.
   */
  constructor(param: Partial<SIWWeb3> | string) {
    if (typeof param === "string") {
      const network = getNetworkFromMessage(param);
      switch (network.toLowerCase()) {
        case "solana": {
          const sp = new SIWS(param);
          this.payload = sp.payload;
          this.network = "solana";
          break;
        }
        case "starkware": {
          const sp = new SIWStarkware(param);
          this.payload = sp.payload;
          this.network = "starkware";
          break;
        }
        default: {
          const sp = new SIWEthereum(param);
          this.payload = sp.payload;
          this.network = "ethereum";
          break;
        }
      }
      return;
    }

    switch (param.network) {
      case "solana": {
        const networkPayload: Partial<SIWS> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.payload = new SIWS(networkPayload).payload;
        break;
      }
      case "starkware": {
        const networkPayload: Partial<SIWStarkware> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.payload = new SIWStarkware(networkPayload).payload;
        break;
      }
      default: {
        const networkPayload: Partial<SIWEthereum> = { header: param.header, payload: param.payload, signature: param.signature };
        Object.assign(this, param);
        this.payload = new SIWEthereum(networkPayload).payload;
        break;
      }
    }
    if (typeof this.payload.chainId === "string") {
      this.payload.chainId = parseInt(this.payload.chainId);
    }
    if (!this.payload.nonce) {
      this.payload.nonce = randomBytes(8).toString("hex");
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
   * @returns message
   */
  toMessage(): string {
    switch (this.network) {
      case "solana": {
        const message = new SIWS({ payload: this.payload as SIWS["payload"] }).toMessage();
        return message;
      }
      case "starkware": {
        const message = new SIWStarkware({ payload: this.payload as SIWStarkware["payload"] }).toMessage();
        return message;
      }
      default: {
        const message = new SIWEthereum({ payload: this.payload as SIWEthereum["payload"] }).toMessage();
        return message;
      }
    }
  }

  /**
   * This method parses all the fields in the object and creates a sign
   * message according with the type defined.
   * @returns - Returns a message ready to be signed according with the
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
   * @param params - Parameters to verify the integrity of the message, signature is required.
   * @returns This object if valid.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async verify(payload: Payload, signature: Signature, kp?: any): Promise<any> {
    switch (this.network) {
      case "solana": {
        const siw = new SIWS({ payload: this.payload as SIWS["payload"] });
        const vp = {
          payload,
          signature,
        };
        return (siw as SIWS).verify(vp);
      }
      case "starkware": {
        if (!kp) {
          throw new Error("No keypair provided");
        }
        const siw = new SIWStarkware({ payload: this.payload as SIWStarkware["payload"] });
        const vp = {
          payload,
          signature,
          kp,
        };
        return (siw as SIWStarkware).verify(vp);
      }
      default: {
        const siw = new SIWEthereum({ payload: this.payload as SIWEthereum["payload"] });
        const vp = {
          payload,
          signature,
        };
        return (siw as SIWEthereum).verify(vp);
      }
    }
  }
}
