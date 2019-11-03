<template lang="pug">
  section#featured-projects
    div#md-revolver
      div.md-project(v-for="proj of projectData")
        div.face
          project(:projectDataObject="proj")
        div.depth

</template>

<script>
import Project from '@/components/Project';
import testDataset from '@/data/testDataset';

export default {
  name: 'projects-gallery',
  components: { Project },
  data(){
    return {
      projectData: this.$store.state.projects
    }
  },
  mounted(){
    setTimeout(() => {
      document.getElementById('md-revolver').scrollTo(300,0);
    }, 200);
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

#featured-projects {
  margin: 0 2em;
  margin-top: 8vh;
}
@media screen and (max-width: 768px) {
  #featured-projects {
    margin-left: 0;
    margin-right: 0;
  }
  #md-revolver {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: calc(100vw - 100px) !important;
  }
}

.md-project {
  perspective: 3000px;
}

#md-revolver {
  scroll-behavior: smooth;
  padding-bottom: 4em !important;    
  width: calc(100vw - 6em - 100px);
  overflow-x: scroll;
  margin: 1em auto;

  height: calc(100vh - 250px);

  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 50px 0 50px;

  .md-project {
    color: $darker-main;
    &:first-child {
      margin-left: 150px;
    }
    .face {
      background-color: black;
      height: 100%;
      width: 500px;
      transform: rotateY(30deg);
      transform-origin: 0 50%;
      background-size: auto 100%;
      box-shadow: -1vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
      transition: transform 0.5s;
      border-left: 1px solid transparent;
    }
    .depth {
      width: 17%;
      height: 100%;
      position: absolute;
      top: 0;
      transform-origin: 0 50%;
      transform: rotateY(-60deg) translateX(-100%);

      background-color: $darker-main;
      filter: brightness(90%);
      transition: transform 0.5s;
    }

    margin-right: -150px;
    transition: transform 0.5s;
    &:hover {
      transition: transform 0.5s;
      transform: translateX(-200px);
      .face {
        transition: transform border-color 0.5s;
        transform: rotateY(0);
        border-left-color: $dark-main;
      }
      .depth {
        transition: transform 0.5s;
        transform: rotateY(-85deg) scaleY(0.96);
      }
    }
  }
}
</style>