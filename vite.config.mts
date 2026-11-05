import { typescriptLintPreset } from "@toruslabs/oxlint-config-typescript";
import { formatPreset } from "@toruslabs/torus-scripts/fmt";
import { libraryPreset } from "@toruslabs/torus-scripts/library";
import { defineConfig } from "vite-plus";

const preset = libraryPreset({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
});

const lint = typescriptLintPreset();

export default defineConfig({
  pack: {
    ...preset.pack,
    dts: true,
    format: {
      esm: { outDir: "dist/lib.esm" },
      cjs: { outDir: "dist/lib.cjs" },
    },
    outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
    hash: false,
    exports: false,
  },
  fmt: {
    ...formatPreset(),
    ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/coverage/**", "**/.git/**", "example/**"],
  },
  lint: {
    ...lint,
    ignorePatterns: [...(lint.ignorePatterns ?? []), "example/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
