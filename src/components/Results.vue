<template>
  <div>
    <h2>Results</h2>

    <section>
      <item-viewer :items="items" :selectedItem.sync="selectedItem"/>
    </section>

    <hr>

    <section>
      <recipe class="recipe" v-for="(recipe, i) of recipes" :key="i" :recipe="recipe" :resultFirst="true"/>
    </section>
  </div>
</template>

<script>
import { items, recipes } from '@/assets/data/recipes.json';

import ItemViewer from './ItemViewer.vue';
import Recipe from './Recipe.vue';

export default {
  components: { ItemViewer, Recipe },
  computed: {
    items() {
      const out = [];
      for (const key of Object.keys(recipes)) {
        if (Object.keys(recipes[key]).length > 0) {
          for (const value of Object.values(recipes[key])) {
            const result = items[value];

            if (!out.includes(result)) {
              out.push(result);
            }
          }
        }
      }

      out.sort((a, b) => a.name.localeCompare(b.name));

      return out;
    },
    allRecipes() {
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

      out.sort((a, b) => a.ingredients[0].name.localeCompare(b.ingredients[0].name));

      return out;
    },
    recipes() {
      console.log(this.allRecipes);
      return this.allRecipes.filter(r => r.result.name === this.selectedItem);
    }
  },
  data() {
    return {
      selectedItem: null
    }
  }
}
</script>
