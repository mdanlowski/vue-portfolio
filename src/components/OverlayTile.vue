<template lang="pug">
div.md-overlay-tile(ref="tile")
  div.md-hoverable-overlay(@click="handleClick")
    div.overlay-text {{overlayText}}
  div.md-hoverable-content
    slot
</template>

<script>
export default {
  props: ['overlayText', 'sizeX', 'sizeY', 'clickAction'],
  data(){
    return {
    }
  },
  methods: {
    handleClick(){
      if(this.$props.clickAction.includes('Comming soon'))
        location.replace(this.$props.clickAction);
      else
        window.open(this.$props.clickAction);
    }
  },
  mounted(){
    this.$refs.tile.style.maxHeight = this.$props.sizeY + "px";
    this.$refs.tile.style.maxWidth = this.$props.sizeX + "px";
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

// .md-hoverable-content {
//   * {
//     max-width: 800px;
//     // width: 
//   }
// }

.md-overlay-tile {
  position: relative;
}

.md-hoverable-overlay {
  position: absolute;
  background-color: rgba($color: #000000, $alpha: 0.7);
  width: 100%;
  height: 100%;
  z-index: 1000;
  transition: background-color 0.4s;
  &:hover {
    cursor: pointer;
    background-color: transparent;
    .overlay-text { color: transparent }

  }

  .overlay-text {
    transition: color 0.4s;
    color: $standard-dark-main;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
}

.md-hoverable-content {
  position: relative;
  // top: 0;
  // left: 0;
  z-index: -1;
}

</style>