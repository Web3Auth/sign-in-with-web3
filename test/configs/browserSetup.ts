import { Buffer } from "buffer";
import global from "global";
import process from "process";
window.Buffer = Buffer;
window.process = process;
window.global = global;
