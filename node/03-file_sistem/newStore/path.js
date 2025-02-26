import path from 'path';
import url from 'url';
import {promises as fs_promises} from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

await fs_promises.mkdir(path.join(__dirname, 'newStore', '201', 'funcionarios'));