<template lang="pug">
div.md-overlay-tile(ref="tile")
  div.md-hoverable-overlay(@click="handleClick")
    div.overlay-text {{overlayText}}
    div.md-hoverable-content(ref="content")
      slot
</template>

<script>
export default {
  props: ['overlayText', 'sizeX', 'sizeY', 'clickAction', 'imgAsBackground', 'imgSrc', 'filter'],
  data(){
    return {
    }
  },
  methods: {
    handleClick(){
      return // @TODO disabled cause action was intrusive on mobile
      if(this.$props.clickAction.includes('Comming soon'))
        location.replace(this.$props.clickAction);
      else
        window.open(this.$props.clickAction);
    }
  },
  mounted(){
    this.$refs.tile.style.height = this.$props.sizeY + "px";
    this.$refs.tile.style.width = this.$props.sizeX + "px";
    if(Array.isArray(this.$props.filter)) {
      this.$refs.tile.style.filter = `${this.$props.filter[0]}(${this.$props.filter[1]})`;
    }
    if(this.$props.imgAsBackground) {
      this.$refs.tile.style.background = `url('${this.$props.imgSrc}')`;
    }
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
  background-position: center !important;
  background-size: cover !important;
}

.md-hoverable-overlay {
  position: absolute;
  background-color: rgba($color: #000000, $alpha: 0.2);
  width: 100%;
  height: 100%;
  z-index: 1000;
  transition: background-color 0.4s;
  &:hover {
    cursor: pointer;
    // background-color: transparent;
    background-color: rgba($color: #000000, $alpha: 0.9);
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


.md-overlay-tile {
  &:hover {
    * {
      color: $dark-main !important;
    }
  }
}

.md-hoverable-content {
  position: relative;
  // top: 0;
  // left: 0;
  z-index: 10;
}

@media screen and (max-width: 1000px) {
  .md-overlay-tile {
    float: none !important;
    margin: auto;
    width: 100%;
  }
}
</style>
