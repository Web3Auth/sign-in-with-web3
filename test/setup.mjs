import register from "@babel/register";
import path from "path";
import { register as tsRegister } from "ts-node";

tsRegister({ project: path.resolve("tsconfig.json") });

register({
  extensions: [".ts", ".js"],
});