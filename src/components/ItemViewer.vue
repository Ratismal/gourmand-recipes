<template>
  <div>
    <item 
      v-for="item in items" 
      :key="item.name" 
      :item="item" 
      :selected="selectedItem === item.name" 
      @click="selectItem(item)"/>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    },
    selectedItem: {
      type: String,
      default() {
        return null;
      }
    }
  },
  methods: {
    selectItem(item) {
      console.log('Selecting item', item);
      this.$emit('update:selectedItem', item.name)
    }
  }
}
</script>