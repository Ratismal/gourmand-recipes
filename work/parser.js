const fs = require('fs');

const Parser = require('tsv').Parser;

const tsv = new Parser('\t', { header: true });

const input = fs.readFileSync(__dirname + '/input.tsv', { encoding: 'utf8' });

const res = tsv.parse(input.replace(/\r/g, ''));

const output = {
  items: {},
  recipes: {}
};

function parseItem(item) {
  if (item === '-') {
    return null;
  }

  const out = {
    icon: '/img/items/' + item.replace(/ /g, '_'),
    name: 'unknown'
  }

  if (/Food pip/i.test(item)) {
    out.icon = '/img/items/Food_pip.png';
    out.foodValue = item.match(/(\d+) Food pip.png/i)[1];
    out.name = out.foodValue + ' Food';
  } else if (/RWPearl/i.test(item)) {
    out.name = 'Pearl';
  } else if (item) {
    out.name = item.match(/(.+) icon\.png/i)[1];
    if (out.name === 'Adult Centipede') {
      out.name = 'Centipede';
    }
  }

  if (output.items[out.name] === undefined) {
    output.items[out.name] = out;
  }

  return out;
}




for (const set of res) {
  let itemKey = null;
  let recipes = {};

  for (const key of Object.keys(set)) {
    const result = parseItem(set[key]);
    if (key === 'Item') {
      itemKey = result.name;
    } else if (result !== null) {
      const inputItem = parseItem(key);

      recipes[inputItem.name] = result.name;
    }
  }

  output.recipes[itemKey] = recipes;
}

console.log(output);

fs.writeFileSync(__dirname + '/recipes.json', JSON.stringify(output, null, 2));
// console.log(res);