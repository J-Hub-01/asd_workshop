const fs = require('fs/promises');
const path = require('path');
const pathToFile = path.join(__dirname, '../db.json');
async function readFile() {
    const data = await fs.readFile(pathToFile, 'utf8');
    const products = JSON.parse(data);
    if (!Array.isArray(products)) {
        throw new Error('Product database must contain a JSON array');
    }
    return products;
}
async function writeFile(products) {
    await fs.writeFile(
        pathToFile,
        JSON.stringify(products, null, 2)
    );
}
module.exports = {
    readFile,
    writeFile
};