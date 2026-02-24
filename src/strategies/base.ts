import { isUri } from "valid-url";

import { ParsedMessageFields } from "../regex";
import { ErrorTypes, Header, Payload, Signature, SignInWithWeb3Error, SignInWithWeb3Response, VerifyParams } from "../types";
import { randomBytes } from "../utils";

export abstract class SIWBase {
  header: Header;

  payload: Payload;

  signature: Signature;

  abstract readonly networkName: string;

  constructor(param: string | Partial<SIWBase>) {
    if (typeof param === "string") {
      const parsed = this.parseMessage(param);
      this.payload = {
        domain: parsed.domain,
        address: parsed.address,
        statement: parsed.statement,
        uri: parsed.uri,
        version: parsed.version,
        nonce: parsed.nonce,
        issuedAt: parsed.issuedAt,
        expirationTime: parsed.expirationTime,
        notBefore: parsed.notBefore,
        requestId: parsed.requestId,
        chainId: parsed.chainId,
        resources: parsed.resources,
      };
    } else {
      Object.assign(this, param);
      if (typeof this.payload.chainId === "string") {
        this.payload.chainId = parseInt(this.payload.chainId);
      }
      if (!this.payload.nonce) {
        this.payload.nonce = randomBytes(8).toString("hex");
      }
    }
  }

  toMessage(): string {
    this.validate();

    const header = `${this.payload.domain} wants you to sign in with your ${this.networkName} account:`;
    const uriField = `URI: ${this.payload.uri}`;
    let prefix = [header, this.payload.address].join("\n");
    const versionField = `Version: ${this.payload.version}`;
    const chainField = `Chain ID: ${this.payload.chainId || "1"}`;
    const nonceField = `Nonce: ${this.payload.nonce}`;
    const suffixArray = [uriField, versionField, chainField, nonceField];
    if (this.payload.issuedAt) {
      Date.parse(this.payload.issuedAt);
    }
    this.payload.issuedAt = this.payload.issuedAt ? this.payload.issuedAt : new Date().toISOString();
    suffixArray.push(`Issued At: ${this.payload.issuedAt}`);

    if (this.payload.expirationTime) {
      const expiryField = `Expiration Time: ${this.payload.expirationTime}`;
      suffixArray.push(expiryField);
    }

    if (this.payload.notBefore) {
      suffixArray.push(`Not Before: ${this.payload.notBefore}`);
    }

    if (this.payload.requestId) {
      suffixArray.push(`Request ID: ${this.payload.requestId}`);
    }

    if (this.payload.resources) {
      suffixArray.push([`Resources:`, ...this.payload.resources.map((x) => `- ${x}`)].join("\n"));
    }

    const suffix = suffixArray.join("\n");
    prefix = [prefix, this.payload.statement].join("\n\n");
    if (this.payload.statement) {
      prefix += "\n";
    }
    return [prefix, suffix].join("\n");
  }

  prepareMessage(): string {
    return this.toMessage();
  }

  validate() {
    if (!/^[^#?]+$/.test(this.payload.domain)) {
      throw new SignInWithWeb3Error(ErrorTypes.INVALID_DOMAIN, `${this.payload.domain} to be a valid domain.`);
    }

    if (!isUri(this.payload.uri)) {
      throw new SignInWithWeb3Error(ErrorTypes.INVALID_URI, `${this.payload.uri} to be a valid uri.`);
    }

    if (this.payload.version !== "1") {
      throw new SignInWithWeb3Error(ErrorTypes.INVALID_MESSAGE_VERSION, "1", this.payload.version);
    }

    const nonce = this.payload.nonce.match(/[a-zA-Z0-9]{8,}/);
    if (!nonce || this.payload.nonce.length < 8 || nonce[0] !== this.payload.nonce) {
      throw new SignInWithWeb3Error(ErrorTypes.INVALID_NONCE, `Length > 8 (${this.payload.nonce.length}). Alphanumeric.`, this.payload.nonce);
    }

    const ISO8601 =
      /([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))/;

    if (this.payload.issuedAt) {
      if (!ISO8601.test(this.payload.issuedAt)) {
        throw new Error(ErrorTypes.INVALID_TIME_FORMAT);
      }
    }

    if (this.payload.expirationTime) {
      if (!ISO8601.test(this.payload.expirationTime)) {
        throw new Error(ErrorTypes.INVALID_TIME_FORMAT);
      }
    }

    if (this.payload.notBefore) {
      if (!ISO8601.test(this.payload.notBefore)) {
        throw new Error(ErrorTypes.INVALID_TIME_FORMAT);
      }
    }
  }

  async verify(params: VerifyParams): Promise<SignInWithWeb3Response> {
    const { payload, signature } = params;

    if (payload.domain && payload.domain !== this.payload.domain) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.DOMAIN_MISMATCH, payload.domain, this.payload.domain),
      };
    }

    if (payload.nonce && payload.nonce !== this.payload.nonce) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.NONCE_MISMATCH, payload.nonce, this.payload.nonce),
      };
    }

    if (payload.address && payload.address !== this.payload.address) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.ADDRESS_MISMATCH, payload.address, this.payload.address),
      };
    }

    if (payload.uri && payload.uri !== this.payload.uri) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.URI_MISMATCH, payload.uri, this.payload.uri),
      };
    }

    if (payload.chainId && payload.chainId !== this.payload.chainId) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.CHAIN_ID_MISMATCH, String(payload.chainId), String(this.payload.chainId)),
      };
    }

    const checkTime = new Date();

    if (this.payload.expirationTime) {
      const expirationDate = new Date(this.payload.expirationTime);
      if (checkTime.getTime() >= expirationDate.getTime()) {
        return {
          success: false,
          data: this,
          error: new SignInWithWeb3Error(
            ErrorTypes.EXPIRED_MESSAGE,
            `${checkTime.toISOString()} < ${expirationDate.toISOString()}`,
            `${checkTime.toISOString()} >= ${expirationDate.toISOString()}`
          ),
        };
      }
    }

    if (this.payload.notBefore) {
      const notBefore = new Date(this.payload.notBefore);
      if (checkTime.getTime() < notBefore.getTime()) {
        return {
          success: false,
          data: this,
          error: new SignInWithWeb3Error(
            ErrorTypes.NOT_YET_VALID_MESSAGE,
            `${checkTime.toISOString()} >= ${notBefore.toISOString()}`,
            `${checkTime.toISOString()} < ${notBefore.toISOString()}`
          ),
        };
      }
    }

    const message = this.prepareMessage();

    const isValid = await this.verifySignature(message, this.payload, signature);
    if (!isValid) {
      return {
        success: false,
        data: this,
        error: new SignInWithWeb3Error(ErrorTypes.INVALID_SIGNATURE),
      };
    }

    return {
      success: true,
      data: this,
    };
  }

  protected abstract parseMessage(msg: string): ParsedMessageFields;

  protected abstract verifySignature(message: string, payload: Payload, signature: Signature): Promise<boolean>;
}
