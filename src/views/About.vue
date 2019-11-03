<template lang="pug">
  .about.animated.fadeIn
    //- svg#svg-relation-diagram
    //-   line(x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2")
    //-   | Sorry, your browser does not support inline SVG.
    div#md-about-grid
      .tile-left 
        h1 About me
        h2.full-name Marcin Danlowski
        div#bio
          p.title {{bio.TITLE}}
          p.position {{bio.CURR_AREA}}
          p.company {{bio.COMPANY}}
          p.descr {{bio.DESCR}}
        div.md-areas-of-work
          div.md-area.everyday-work(v-on:mouseover="selectWork" v-on:mouseleave="deselect") Everyday Work
          div.md-area.hooby-or-partial Hobby / Learning
          div.md-area.teaching Teaching / Mentoring
          div.md-area.teaching Tools / Systems
      .tile-right
        div.technologies-container
          div
            i.devicon-ruby-plain
          div
            i.devicon-rails-plain
          div
            i.devicon-javascript-plain
          div
            i.devicon-vuejs-plain

          div
            i.devicon-react-plain
          div
            i.devicon-nodejs-plain
          div
            i.devicon-python-plain
          div
            i.devicon-d3js-plain

          div
            i.devicon-java-plain
          div
            i.devicon-html5-plain-wordmark
          div
            i.devicon-css3-plain-wordmark

          div
            i.devicon-postgresql-plain

          div
            i.devicon-webpack-plain
          div
            i.devicon-visualstudio-plain
          div
            i.devicon-ubuntu-plain
          div
            i.devicon-apple-plain

</template>

<script>
import description from "@/data/bio"

export default {
  data(){
    return {
      bio: description,
    }
  },
  methods:{
    deselect(){
      document.querySelectorAll("i").forEach( elem => elem.classList.remove("colored") );
    },
    selectWork(){
      document.querySelector(".devicon-ruby-plain").classList.add("colored")
      document.querySelector(".devicon-javascript-plain").classList.add("colored")
      document.querySelector(".devicon-rails-plain").classList.add("colored")
      document.querySelector(".devicon-vuejs-plain").classList.add("colored")
    }
  }
}
</script>

<style lang="scss" scoped>

.md-areas-of-work {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.md-area {
  transition: background-color 1s;
  &:hover {
    cursor: pointer;
    background-color: lime;
    color: black;
  }
}

* {
  color: chartreuse;
}
#md-about-grid {
  * {
    border: 1px solid lime;
  }

  margin: 4em 8em;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  
  // height: auto;
}
@media screen and (max-width: 768px) {
  #md-about-grid {
    margin-top: 2em;
    margin-left: 10px;
    margin-right: 10px;
  }
}

.technologies-container {
  * {
    border: none !important;
  }

  margin: auto;
  width: calc(4 * 6rem);
  font-size: 6rem;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  
}

// #svg-relation-diagram {
//   z-index: 20000;
//   position: absolute;
//   top: 22px;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
// }
</style>