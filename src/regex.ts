const DOMAIN = "sign in with your (?<network>([^*]*)) account:";

const MESSAGE = `${DOMAIN}`;

export function getNetworkFromMessage(msg: string) {
  const REGEX = new RegExp(MESSAGE, "g");
  const match = REGEX.exec(msg);
  if (!match) {
    throw new Error("Message did not match the regular expression.");
  }
  return match?.groups?.network;
}
