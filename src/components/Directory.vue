<template>
  <div>
    <h2>Directory</h2>

    <!-- <div class="search">
      <input type="text">
    </div> -->

    <section>
      <recipe class="recipe" v-for="(recipe, i) of recipes" :key="i" :recipe="recipe" :resultFirst="true"/>
    </section>
  </div>
</template>

<script>
import { items, recipes } from '@/assets/data/recipes.json';

import Recipe from './Recipe.vue';

export default {
  components: { Recipe },
  computed: {
    recipes() {
      const out = [];
      for (const inputKey of Object.keys(recipes)) {
        for (const inputKey2 of (Object.keys(recipes[inputKey]))) {
          const resultKey = recipes[inputKey][inputKey2];
          const result = items[resultKey];

          const inputs = [inputKey, inputKey2];
          inputs.sort();

          const recipe = {
            ingredients: [items[inputs[0]], items[inputs[1]]],
            result
          }

          if (!out.some(r => r.ingredients[0] === recipe.ingredients[0] && r.ingredients[1] === recipe.ingredients[1])) {
            out.push(recipe);
          }
        }
      }

      out.sort((a, b) => {
        const first = a.result.name.localeCompare(b.result.name);
        let second = 0;

        if (a.result.name.endsWith('Food') && !b.result.name.endsWith('Food')) {
          second = 100;
        }

        if (b.result.name.endsWith('Food') && !a.result.name.endsWith('Food')) {
          second = -100;
        }

        return first + second;
      });

      return out;
    }
  }
}
</script>

