<template>
  <div class="recipe">
    <template v-if="resultFirst">
      <item :item="recipe.result" />
      <span>=</span>
    </template>
    <item :item="recipe.ingredients[0]" />
    <span>+</span>
    <item :item="recipe.ingredients[1]" />
    <template v-if="!resultFirst">
      <span>=</span>
      <item :item="recipe.result" />
    </template>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: { Item },
  props: {
    recipe: {
      type: Object,
      default() {
        return {
          ingredients: [{}, {}],
          result: {}
        };
      }
    },
    resultFirst: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.recipe {
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
  }

  & > {
    display: inline;
  }
}
</style>