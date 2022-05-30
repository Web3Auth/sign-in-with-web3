const DOMAIN = "(?<domain>([^?#]*)) wants you to sign in with your (?<network>([^*]*)) account:";

const MESSAGE = `^${DOMAIN}$`;

function getNetwork(msg: string) {
  const REGEX = new RegExp(MESSAGE, "g");
    const match = REGEX.exec(msg);
    if (!match) {
      throw new Error("Message did not match the regular expression.");
    }
    return match?.groups?.network;
}
