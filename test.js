async function toShop() {
    const rl = readline.createInterface({input, output});
    try {
        const shop = await rl.question("question");
    } finally {
        rl.close();
    }
}