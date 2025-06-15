// import { fs } from 'fs';
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "node:path";
import * as fs from "node:fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const env = JSON.parse(fs.readFileSync(path.join(__dirname, '../../env'), {encoding: 'utf8'}));
(global as any).__env = env;