<template>
  <div>
    <section>
      <div class="button-group">
        <button class="button" @click.prevent="setState('ingredients')">Ingredients</button>
        <button class="button" @click.prevent="setState('results')">Results</button>
        <button class="button" @click.prevent="setState('directory')">Directory</button>
      </div>
    </section>
    <section>
      <ingredients v-if="state === 'ingredients'" />
      <results v-if="state === 'results'" />
      <directory v-if="state === 'directory'" />
    </section>
  </div>
</template>

<script>

import Ingredients from './Ingredients.vue';
import Results from './Results.vue';
import Directory from './Directory.vue';

export default {
  components: { Ingredients, Results, Directory },
  data() {
    return {
      state: "ingredients"
    }
  },
  methods: {
    setState(state) {
      localStorage.state = state;
      this.state = state;
    },
  }
}
</script>
