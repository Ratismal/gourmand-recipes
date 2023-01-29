<template>
  <div :class="{ item: true, selected }" @click.prevent="$emit('click', $event)">
    <img :src="item.icon"/>
    <div class="label" v-if="showLabel">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          name: 'Unknown',
          icon: ''
        };
      }
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: inline-flex;
  align-items: center;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: auto;
  margin: 8px;

  img {
    height: 32px;
    image-rendering: pixelated;
  }

  .label {
    margin-left: 10px;
    font-size: 20px;
  }

  &:hover, &.selected {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
}
</style>