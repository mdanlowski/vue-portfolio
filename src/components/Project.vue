<template lang="pug">
div.md-project-box
  div.project-content
    div.proj-header
      h3 {{projectDataObject.name}}
      div {{projectDataObject.tech}}

    div {{projectDataObject.date}}
    div
      ul
        li(v-for="bullet of computedBullets") {{bullet}}

    div.proj-links
      a(:href="projectDataObject.repoUrl") Repository
      a(:href="projectDataObject.demoUrl") Live Demo

    div.proj-image
      .overlay
      img(v-bind:src="require(`../assets/${(projectDataObject.imgPath)}`)")
      
  div.footer
    div.tech-icons
      i(v-for="cssClass of computedIconClasses" :class="cssClass")

</template>

<script>

export default {
  name: 'project',
  props: [ 'projectDataObject' ],
  data(){
    return {
      thisX: null,
      thisY: null,
    }
  },
  mounted(){
    // this.$refs.projImage.style.backgroundImage = 
  },
  methods: {
    
  },
  computed: {
    computedBullets(){
      return this.projectDataObject.bullets.split(';')
    },
    computedIconClasses(){
      return this.projectDataObject.techIcons.split(';')
    },
    computedImgPath(imgName){
      return require('../assets/' + imgName)
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

ul {
  list-style-type: square;
}

.proj-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    line-height: 3.8;
  }
}

.proj-links {
  padding-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 15pt;
  text-transform: uppercase;
  a {
    position: absolute;
    &:first-child { left: 100px; }
    &:last-child { right: 100px; }

    z-index: 20000;
    text-decoration: none;
    color: $darker-main;
    &:visited { color: $darker-main; }
    &:hover { color: $highlight-main; }
  }
}

.md-project-box {
  opacity: 0.5;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $default-tile-padding $default-tile-padding;
  transition: opacity 1s;
  &:hover {
    opacity: 1;
    & > .project-content > .proj-image > img {
    transition-delay: 1s;
    opacity: 0.7;
    }
  }
  .tech-icons {
    font-size: 100px;
  }
  .tech-icons {
    position: absolute;
    bottom: 20px;
    z-index: 10000;
  }
  .proj-image {
    .overlay {
      background: linear-gradient(0deg, black, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent);
      width: 100%;
      height: 300px;
      position: absolute;
      bottom: 0;
      z-index: 5000;
    }
    margin-top: 40px;
    margin-left: -$default-tile-padding;
    margin-right: -$default-tile-padding;
  }
  .proj-image img {
    position: absolute;
    right: 2em;
    bottom: 2em;
    transition: opacity 0.5s;
    transition-delay: 0s;
    opacity: 0;
    width: auto;
    height: 240px;
  }
}

</style>