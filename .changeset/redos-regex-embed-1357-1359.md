---
"@web3auth/sign-in-with-web3": patch
---

Stop catastrophic backtracking in SIWW message parsing and ISO-8601 validation. URI character classes no longer match newlines, and timestamp checks require a full match with a year of at most six digits.
