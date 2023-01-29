<template>
  <main id="app">
    <header>
      <section>
        <h1>Gourmand Recipes
        </h1>
      </section>
    </header>

    <viewer/>

    <footer>
      <section>stupid cat &copy; 2023</section>
    </footer>
  </main>
</template>

<script>
import "@/assets/scss/main.scss";

import Viewer from '@/components/Viewer.vue';

export default {
  components: { Viewer },
  data() {
    return {
    }
  },
  mounted() {
  },
  watch: {
  },
  computed: {
  },
}
</script>