<template>
  <div>
    <h2>Ingredients</h2>

    <section>
      <item-viewer :items="items" :selectedItem.sync="selectedItem"/>
    </section>

    <hr>

    <section>
      <recipe class="recipe" v-for="(recipe, i) of recipes" :key="i" :recipe="recipe" :resultFirst="false"/>
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
        const item = items[key];

        if (Object.keys(recipes[key]).length > 0) {
          out.push(item);
        }
      }

      out.sort((a, b) => a.name.localeCompare(b.name));

      return out;
    },
    recipes() {
      const out = [];
      for (const key of Object.keys(recipes)) {
        if (key === this.selectedItem) {
          for (const key2 of Object.keys(recipes[key])) {
            const recipe = {
              ingredients: [
                items[key],
                items[key2],
              ],
              result: items[recipes[key][key2]]
            }

            out.push(recipe);
          }
        }
      }

      out.sort((a, b) => a.ingredients[1].name.localeCompare(b.ingredients[1].name));

      return out;
    }
  },
  data() {
    return {
      selectedItem: null
    }
  }
}
</script>
