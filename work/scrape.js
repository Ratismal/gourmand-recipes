const fs = require('fs');
const fetch = require('node-fetch');

const items = require('./images.json');

async function main() {
  for (const item of items) {
    const res = await fetch(item);

    const fileName = item.match(/\/(?:.(?!\/))+$/)[0];

    fs.writeFileSync('public/img/items' + fileName, await res.buffer());
  }
}

main();