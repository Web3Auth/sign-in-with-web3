import { getNetworkFromMessage } from "./regex";
import { SIWBase } from "./strategies/base";
import { ethereumStrategy } from "./strategies/ethereum";
import { solanaStrategy } from "./strategies/solana";
import { Header, Payload, Signature, SignInWithWeb3Response, VerifyParams } from "./types";
import { bytesToHex, randomBytes } from "./utils";

interface Strategy {
  network: string;
  parse: (msg: string) => SIWBase;
  create: (params: Partial<SIWBase>) => SIWBase;
}

export class SIWWeb3 {
  private static strategies = new Map<string, Strategy>();

  header: Header;

  signature: Signature;

  network?: string;

  payload: Payload;

  private instance: SIWBase;

  constructor(param: Partial<SIWWeb3> | string) {
    if (typeof param === "string") {
      const network = getNetworkFromMessage(param);
      const strategy = SIWWeb3.getStrategy(network);
      this.instance = strategy.parse(param);
      this.network = network.toLowerCase();
      this.payload = this.instance.payload;
      this.header = this.instance.header;
      this.signature = this.instance.signature;
      return;
    }

    const network = param.network || "ethereum";
    const strategy = SIWWeb3.getStrategy(network);
    this.instance = strategy.create({ header: param.header, payload: param.payload, signature: param.signature });
    Object.assign(this, param);
    this.network = network.toLowerCase();
    this.payload = this.instance.payload;
    this.header = this.instance.header || param.header;
    this.signature = this.instance.signature || param.signature;

    if (typeof this.payload.chainId === "string") {
      this.payload.chainId = parseInt(this.payload.chainId);
    }
    if (!this.payload.nonce) {
      this.payload.nonce = bytesToHex(randomBytes(8));
    }
    if (!this.payload.issuedAt) {
      this.payload.issuedAt = new Date().toISOString();
    }
  }

  static registerStrategy(strategy: Strategy): void {
    SIWWeb3.strategies.set(strategy.network.toLowerCase(), strategy);
  }

  static getStrategy(network: string): Strategy {
    const strategy = SIWWeb3.strategies.get(network.toLowerCase());
    if (!strategy) {
      throw new Error(`No strategy registered for network: ${network}. Register one with SIWWeb3.registerStrategy().`);
    }
    return strategy;
  }

  toMessage(): string {
    return this.instance.toMessage();
  }

  prepareMessage(): string {
    return this.instance.prepareMessage();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async verify(payload: Payload, signature: Signature, ...extra: any[]): Promise<SignInWithWeb3Response> {
    const verifyParams: VerifyParams = { payload, signature };
    if (extra.length > 0) {
      verifyParams.kp = extra[0];
    }
    return this.instance.verify(verifyParams);
  }
}

SIWWeb3.registerStrategy(ethereumStrategy);
SIWWeb3.registerStrategy(solanaStrategy);
