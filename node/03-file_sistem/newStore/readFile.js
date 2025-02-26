import path from 'path';
import url from 'url';
import {promises as fs_promises} from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'totVendas.json');

try{
    const buffer = await fs_promises.readFile(file);
    console.log(JSON.parse(buffer).total);
} catch (error){
    console.log('Error reading file', error);
}