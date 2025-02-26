import path from 'path';
import url from 'url';
import {promises as fs_promises} from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'Welcome.txt');

try {
    await fs_promises.appendFile(file, 'Welcome!!!\n');
    console.log("File successfully create");
}
catch (error){
    console.error(`Error to create directory ${dir} \nerror code: ${error.code}`);
}