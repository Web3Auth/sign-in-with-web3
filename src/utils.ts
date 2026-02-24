// eslint-disable-next-line @typescript-eslint/no-explicit-any
const browserCrypto = globalThis.crypto || (globalThis as any).msCrypto || {};

export function randomBytes(size: number): Buffer {
  const arr = new Uint8Array(size);
  browserCrypto.getRandomValues(arr);
  return Buffer.from(arr);
}

export const createInfuraUrl = (url: string, projectId: string): string => {
  const parts = url.split("/");
  parts[parts.length - 1] = projectId;
  return parts.join("/");
};

export { bytesToHex } from "@noble/curves/utils.js";
