<template lang="pug">
  .about.animated.fadeIn
    div#md-about-grid
      .tile-left 
        h1 About me
        h2.full-name Marcin Danlowski
        div#bio
          p.title {{bio.TITLE}}
          p.position {{bio.CURR_AREA}}
          p.company {{bio.COMPANY}}
          p.descr {{bio.DESCR}}
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
  }
}
</script>

<style lang="scss" scoped>
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
  width: calc(4 * 6rem + 1em);
  font-size: 6rem;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  
}

</style>