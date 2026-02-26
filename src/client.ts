import { getChainFromMessage } from "./regex";
import { SIWBase } from "./strategies/base";
import { Header, Payload, Signature, SignInWithWeb3Response, VerifyOptions, VerifyParams } from "./types";

export interface Strategy {
  chain: string;
  parse: (msg: string) => SIWBase;
  create: (params: Partial<SIWBase>) => SIWBase;
}

export class SIWWeb3 {
  private static strategies = new Map<string, Strategy>();

  header: Header;

  signature: Signature;

  chain: string;

  payload: Payload;

  private instance: SIWBase;

  constructor(param: Partial<SIWWeb3> | string) {
    if (typeof param === "string") {
      const chain = getChainFromMessage(param);
      const strategy = SIWWeb3.getStrategy(chain);
      this.instance = strategy.parse(param);
      this.chain = chain.toLowerCase();
      this.payload = this.instance.payload;
      this.header = this.instance.header;
      this.signature = this.instance.signature;
      return;
    }

    if (!param.chain) {
      throw new Error("chain is required when constructing from an object.");
    }
    const chain = param.chain;
    const strategy = SIWWeb3.getStrategy(chain);
    this.instance = strategy.create({ header: param.header, payload: param.payload, signature: param.signature });
    this.chain = chain.toLowerCase();
    this.payload = this.instance.payload;
    this.header = this.instance.header || param.header;
    this.signature = this.instance.signature || param.signature;
  }

  static registerStrategy(strategy: Strategy): void {
    SIWWeb3.strategies.set(strategy.chain.toLowerCase(), strategy);
  }

  static getStrategy(chain: string): Strategy {
    const strategy = SIWWeb3.strategies.get(chain.toLowerCase());
    if (!strategy) {
      throw new Error(`No strategy registered for chain: ${chain}. Register one with SIWWeb3.registerStrategy().`);
    }
    return strategy;
  }

  toMessage(): string {
    return this.instance.toMessage();
  }

  prepareMessage(): string {
    return this.instance.prepareMessage();
  }

  async verify(payload: Payload, signature: Signature, options?: VerifyOptions): Promise<SignInWithWeb3Response<SIWBase>> {
    const verifyParams: VerifyParams = { payload, signature, ...options };
    return this.instance.verify(verifyParams);
  }
}
