# @web3auth/sign-in-with-web3

Authenticate users with their Web3 accounts instead of relying on custodial OAuth providers. Users sign a standard message with any Web3-compatible wallet, keeping full control of their identity and data.

Sign-In with Web3 uses a standard message format compliant with [CAIP-74](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-74.md), parameterized by scope, session details, and security mechanisms (e.g., a nonce).

## Supported Chains

- **Ethereum** — [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) with EIP-1271/6492 smart contract signature support
- **Solana** — [SIP-99](https://github.com/AdrenaFoundation/SIPs/blob/main/SIPS/sip-99.md) with ed25519 signature verification

Starknet is supported as an external strategy via `@web3auth/sign-in-with-starkware`.

## Installation

```bash
npm install @web3auth/sign-in-with-web3
```

## Usage

### Basic (auto-detects chain)

```typescript
import { SIWWeb3 } from "@web3auth/sign-in-with-web3";

// Parse a signed message string (chain is detected automatically)
const msg = new SIWWeb3(messageString);

// Or construct from fields
const msg = new SIWWeb3({
  network: "ethereum", // or "solana"
  payload: {
    domain: "example.com",
    address: "0x...",
    statement: "Sign in with Ethereum to the app.",
    uri: "https://example.com",
    version: "1",
    chainId: 1,
  },
});

// Generate the message to sign
const messageToSign = msg.prepareMessage();

// Verify a signature
const { success, error } = await msg.verify(msg.payload, signature);
```

### Using chain-specific classes directly

```typescript
import { SIWE, SIWS } from "@web3auth/sign-in-with-web3";

const ethMsg = new SIWE({ header, payload, signature });
const solMsg = new SIWS(messageString);
```

### Registering a custom strategy

```typescript
import { SIWWeb3 } from "@web3auth/sign-in-with-web3";

SIWWeb3.registerStrategy({
  network: "mychain",
  parse: (msg) => new MyChainSIW(msg),
  create: (params) => new MyChainSIW(params),
});
```

## Architecture

```
src/
  client.ts          — SIWWeb3 (main entry, strategy registry)
  strategies/
    base.ts          — SIWBase (abstract base class)
    ethereum.ts      — SIWE + EIP-1271/6492 verifier
    solana.ts        — SIWS + ed25519 verifier
  regex.ts           — Shared message parsing
  types.ts           — Shared types
  utils.ts           — Shared utilities
```

## Exports

| Export | Description |
|---|---|
| `SIWWeb3` | Main class with chain auto-detection and strategy registry |
| `SIWBase` | Abstract base class for building custom chain strategies |
| `SIWE` | Ethereum sign-in (EIP-4361) |
| `SIWS` | Solana sign-in (SIP-99) |
| `ethereumStrategy` | Ethereum strategy for registry |
| `solanaStrategy` | Solana strategy for registry |
| `eipVerifyMessage` | EIP-1271/6492 signature verification utility |

## Migration from `@web3auth/sign-in-with-ethereum` / `@web3auth/sign-in-with-solana`

These packages have been deprecated and consolidated into this package.

```diff
- import { SIWEthereum } from "@web3auth/sign-in-with-ethereum";
- import { SIWS } from "@web3auth/sign-in-with-solana";
+ import { SIWE, SIWS } from "@web3auth/sign-in-with-web3";
```

Note: `SIWEthereum` has been renamed to `SIWE`.

[Docs](https://siww.web3auth.io)
