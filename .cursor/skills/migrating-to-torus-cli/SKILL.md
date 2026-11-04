---
name: migrating-to-torus-cli
description: Use when moving an existing consumer project from old Torus scripts, ESLint presets, or build tools to current Torus CLI and Vite+ presets.
---

# Migrate a consumer to Torus CLI

Use `node_modules/@toruslabs/torus-scripts/README.md` in an installed consumer, or `packages/torus-scripts/README.md` in this repository, as the current source for presets, commands, and known lint gaps. A successful diagnostic does not prove that a project is ready to migrate.

## Inspect before changes

1. Find the consumer's workspace root. Check `git status`, Node and npm versions, lockfile, scripts, TypeScript profiles, build output, package entry points, lint rules, format rules, tests, and release steps.
2. Use the installed `torus-scripts-upgrade <absolute-consumer-path>` diagnostic, or build this repository's `@toruslabs/torus-scripts` package first if working from source. The diagnostic reads files only. Record its output and exit code.
3. Also inspect files that the diagnostic does not cover. In particular, check `package.json` scripts and entry paths, `eslint.config.*`, `tsconfig.json`, and README claims. If the diagnostic reports nothing, do not skip this step.
4. Identify behavior the new presets do not provide. Stop and ask before removing or changing a required output format, path, browser target, polyfill, CSS behavior, release step, or custom transform. A diagnostic exit code of 1 requires separate review.

## Migrate

1. Agree on the required outputs and checks before editing. Preserve existing work; do not overwrite unrelated changes.
2. Run `vp help` and `vp help migrate` for the installed Vite+ version. Run `vp migrate` at the consumer workspace root, not in each package. Review its diff before manual edits. If it cannot run, report why; do not claim it ran.
3. Replace old `torus-scripts` commands with the documented `vp` tasks and package presets. Use a consumer-owned `vite.config.ts` for `pack`, `lint`, and `fmt`. Select the TypeScript profile that fits the package. Keep framework plugins in the consumer. If Vite+ cannot read a YAML Prettier config, compare its settings with `formatPreset()` before removing Prettier.
4. Do not assume `libraryPreset` preserves CJS paths, old bundles, browser targets, polyfills, or CDN output. Compare built files with `main`, `module`, `types`, `exports`, `unpkg`, and `jsdelivr`. Test both `require` and ESM import. A new ESM build can fail if it imports named exports from a CommonJS dependency. Do not describe an external-import ESM build as a standalone CDN script.
5. Replace removed ESLint packages only after testing equivalent Oxlint rules. Check Vue template-only and Vue script lint gaps separately. If Tailwind lint is used, merge `jsPlugins`, `rules`, and `settings` rather than spreading fragments over one another. Check that presets and TypeScript profiles exist in the target registry; use local packages only for an explicitly local test.
6. Keep or replace release automation deliberately. The current guide uses Changesets at the workspace root; a standalone package can retain `npm publish` until its release process is set up.
7. Review `vp migrate` warnings. It can skip YAML Prettier configs, ESLint rules, or plugin references and change Vitest versions. Check the new TypeScript profile for browser globals and stricter type errors. Check the selected Node runtime against preset engine requirements.

## Monorepos moving off Lerna

1. Map Lerna's workspace, build order, version, and publish tasks before removing it. Run `vp migrate` once at the workspace root. Give each package its own `build` task. Use `vp run -r build` at the root, and verify dependency order and each package's output. Put `vp run` options before the task name, as in `vp run -r --fail-if-no-match build`. `vp run` forwards arguments after the task name to the task, and npm lifecycle scripts fail on unknown options with `EUNKNOWNCONFIG`.
2. Preserve public package paths before changing their manifests. For packages that expose `dist/lib.esm/index.js`, `dist/lib.cjs/index.js`, and `dist/lib.cjs/types/index.d.ts`, use a consumer-owned `vite.config.ts` with explicit output directories. Adapt this pattern to the installed Vite+ version:

```ts
import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "src/index.ts",
    format: {
      esm: { outDir: "dist/lib.esm" },
      cjs: { outDir: "dist/lib.cjs" },
    },
    dts: true,
    outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
    copy: [{ from: "dist/lib.cjs/index.d.ts", to: "dist/lib.cjs/types" }],
    sourcemap: true,
  },
});
```

3. Set up Changesets at the workspace root when replacing Lerna releases. Set `baseBranch` to the actual branch. Put only packages that must share a version in `fixed`. Use `access: "public"` for public scoped packages; decide whether private packages should version (`privatePackages.version`) and verify internal dependency updates. Check release scripts and published tarballs before removing old release tasks.
4. Select `@toruslabs/config/tsconfig.library.json` for libraries and `tsconfig.node.json` for Node packages only after confirming those files exist in the installed registry version. For a standalone server, set `rootDir: "./src"` in its package tsconfig if the shared profile resolves it against the wrong directory. Check output layout and type errors after changing profiles.
5. If a required preset has not been published, test with local packages only by explicit agreement. Keep local paths out of committed manifests and lockfiles. Separate local build results from clean registry installation; do not call the migration complete until the registry install and package checks pass.

## Verify and report

Run the consumer's install, build, lint/check, typecheck, and tests when available. Inspect package contents and import/require entry points if published files changed. If browser tests fail, separate missing browser executables from test failures and browser timeouts. Report each command and result, preserved behavior, manual follow-up, and any check you could not run. Never report a migration as complete if package outputs or lint coverage remain unverified.

Example: A project can get “No known unsupported behavior detected” while its `package.json` entry paths still point at old bundle folders. Inspect the scripts and published paths before changing it.
