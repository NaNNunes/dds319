import {promises as fs_Promises} from 'fs';

const main = async () => {
    const itens = await fs_Promises.readdir('newStore', {withFileTypes: true});
    
    for(let item of itens){
        const type = item.isDirectory() ? "directory" : "file";
        console.log(`${item.name}: ${type}`)
    }

}

main();