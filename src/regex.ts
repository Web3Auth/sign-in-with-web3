const STATEMENT = "((?<statement>[^\\n]+)\\n)?";
const URI = "(([^:?#]+):)?(([^?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))";
const URI_LINE = `\\nURI: (?<uri>${URI}?)`;
const VERSION = "\\nVersion: (?<version>1)";
const CHAIN_ID = "\\nChain ID: (?<chainId>[0-9]+)";
const NONCE = "\\nNonce: (?<nonce>[a-zA-Z0-9]{8,})";
const DATETIME = `([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(.[0-9]+)?(([Zz])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))`;
const ISSUED_AT = `\\nIssued At: (?<issuedAt>${DATETIME})`;
const EXPIRATION_TIME = `(\\nExpiration Time: (?<expirationTime>${DATETIME}))?`;
const NOT_BEFORE = `(\\nNot Before: (?<notBefore>${DATETIME}))?`;
const REQUEST_ID = "(\\nRequest ID: (?<requestId>[-._~!$&'()*+,;=:@%a-zA-Z0-9]*))?";
const RESOURCES = `(\\nResources:(?<resources>(\\n- ${URI}?)+))?`;

const CHAIN_DETECT = "sign in with your (?<chain>([^*]+)) account:";

export function getChainFromMessage(msg: string) {
  const REGEX = new RegExp(CHAIN_DETECT, "g");
  const match = REGEX.exec(msg);
  if (!match) {
    throw new Error("Message did not match the regular expression.");
  }
  return match?.groups?.chain;
}

export interface ParsedMessageFields {
  scheme: string | null;
  domain: string;
  address: string;
  statement: string | null;
  uri: string;
  version: string;
  chainId: number;
  nonce: string;
  issuedAt: string;
  expirationTime: string | null;
  notBefore: string | null;
  requestId: string | null;
  resources: string[] | null;
}

export function parseMessage(chainName: string, addressPattern: string, msg: string): ParsedMessageFields {
  const SCHEME = "(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\\-.]*)://)?";
  const DOMAIN = `${SCHEME}(?<domain>([^?#]*)) wants you to sign in with your ${chainName} account:`;
  const ADDRESS = `\\n(?<address>${addressPattern})\\n\\n`;
  const MESSAGE = `^${DOMAIN}${ADDRESS}${STATEMENT}${URI_LINE}${VERSION}${CHAIN_ID}${NONCE}${ISSUED_AT}${EXPIRATION_TIME}${NOT_BEFORE}${REQUEST_ID}${RESOURCES}$`;

  const REGEX = new RegExp(MESSAGE, "g");
  const match = REGEX.exec(msg);
  if (!match) {
    throw new Error("Message did not match the regular expression.");
  }
  return {
    scheme: match?.groups?.scheme,
    domain: match?.groups?.domain,
    address: match?.groups?.address,
    statement: match?.groups?.statement,
    uri: match?.groups?.uri,
    version: match?.groups?.version,
    chainId: parseInt(match?.groups?.chainId),
    nonce: match?.groups?.nonce,
    issuedAt: match?.groups?.issuedAt,
    expirationTime: match?.groups?.expirationTime,
    notBefore: match?.groups?.notBefore,
    requestId: match?.groups?.requestId,
    resources: match?.groups?.resources?.split("\n- ").slice(1),
  };
}
