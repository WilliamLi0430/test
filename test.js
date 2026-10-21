import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
async function toShop() {
    const rl = readline.createInterface({input, output});
    try {
        const shop = await rl.question("question");
    } finally {
        rl.close();
    }
}