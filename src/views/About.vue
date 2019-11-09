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
          div.md-area.everyday-work(
            v-on:mouseover="selectAndHighlight('usingDailyClasses')"
            v-on:mouseleave="deselect"
          ) Everyday Work
          div.md-area.hooby-or-partial(
            v-on:mouseover="selectAndHighlight('learningClasses')"
            v-on:mouseleave="deselect"
          ) Hobby / Learning
          div.md-area.teaching(
            v-on:mouseover="selectAndHighlight('teachingClasses')"
            v-on:mouseleave="deselect"
          ) Teaching / Mentoring
          div.md-area.teaching(
            v-on:mouseover="selectAndHighlight('operationsClasses')"
            v-on:mouseleave="deselect"
          ) Tools / Systems I use
      .tile-right
        div.technologies-container
          div(v-for="item of allTechClasses")
            i(:class="item")
          

</template>

<script>
import description from "@/data/bio"

export default {
  data(){
    return {
      bio: description,
      aboutMeData: this.$store.state.about,
      hoveringOnAny: false
    }
  },
  methods:{
    deselect(){
      document.querySelectorAll("i").forEach( elem => {
          elem.classList.remove("colored");
          elem.style.opacity = 0.6;
        }
      );
      setTimeout(() => {
        if(this.hoveringOnAny) return;
        document.querySelector('.tile-right').style.color = "crimson";
      }, 1000);
      this.hoveringOnAny = false;
    },
    selectAndHighlight(techIconGroup){
      this.hoveringOnAny = true;
      document.querySelector('.tile-right').style.color = "black";
      let cssClassNames = this[techIconGroup].map( klass => {return "." + klass })
      for(let klass of cssClassNames){
        let elem = document.querySelector(klass);
        elem.classList.add("colored");
        elem.style.opacity = 1;
      }
    }
  },
  computed: {
    allTechClasses() { return this.aboutMeData.allTechnologies.split('\n'); },
    usingDailyClasses() { return this.aboutMeData.usingDaily.split('\n'); },
    learningClasses() { return this.aboutMeData.hobbyLearning.split('\n'); },
    teachingClasses() { return this.aboutMeData.teachingMentoring.split('\n'); },
    operationsClasses() { return this.aboutMeData.systemsAndTools.split('\n'); }
  }
}
</script>

<style lang="scss" scoped>
.tile-left {
  color: chartreuse;
}
.tile-right {
  color: black;
}

i {
  transition: opacity 0.5s !important;
  transition: color 0.8s !important;
  opacity: 0.6;
}

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