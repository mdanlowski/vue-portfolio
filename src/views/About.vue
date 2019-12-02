<template lang="pug">
  #about.animated.fadeIn
    div#md-about-grid
      .tile-left
        .data
          h2.full-name Marcin Danlowski
          div#bio
            p.job-title.position
              span {{parsedBio.TITLE}}
              span {{parsedBio.CURR_AREA}}
            p.company
              a(href="https://roomzilla.net") {{parsedBio.COMPANY}} &#129157;
            p.description {{parsedBio.DESCR}}
          div.md-areas-of-work
            div.md-area.everyday-work(
              v-on:mouseover="selectAndHighlight('usingDailyClasses')"
              v-on:mouseleave="deselect"
            ) Technologies I build with daily
            div.md-area.teaching(
              v-on:mouseover="selectAndHighlight('teachingClasses')"
              v-on:mouseleave="deselect"
            ) My contributions in Education
            div.md-area.hooby-or-partial(
              v-on:mouseover="selectAndHighlight('learningClasses')"
              v-on:mouseleave="deselect"
            ) Currently extending competences / hobbies
            div.md-area.teaching(
              v-on:mouseover="selectAndHighlight('operationsClasses')"
              v-on:mouseleave="deselect"
            ) Tools and other systems I know and use
      .tile-right
        div.technologies-container
          div(v-for="klass of allTechClasses")
            i(:class="klass" :title="klass.split('-')[1].toUpperCase()")

</template>

<script>
const noneHighlightedColor = 'darkred';
const dimOutColor = 'rgb(40, 0, 0)';

export default {
  data(){
    return {
      bio: this.$store.state.about.bio,
      aboutMeData: this.$store.state.about,
      hoveringOnAny: false
    }
  },
  methods: {
    deselect(){
      document.querySelectorAll('i').forEach( elem => {
          elem.classList.remove('colored');
          elem.style.opacity = 0.6;
        }
      );
      setTimeout(() => {
        if(this.hoveringOnAny) return;
        document.querySelector('.tile-right').style.color = noneHighlightedColor;
      }, 1000);
      this.hoveringOnAny = false;
    },
    selectAndHighlight(techIconGroup){
      this.hoveringOnAny = true;
      document.querySelector('.tile-right').style.color = dimOutColor;
      let cssClassNames = this[techIconGroup].map( klass => {return "." + klass })
      for(let klass of cssClassNames){
        let elem = document.querySelector(klass);
        elem.classList.add('colored');
        elem.style.opacity = 1;
      }
    }
  },
  computed: {
    parsedBio() { return JSON.parse(this.bio); },
    allTechClasses() { return this.aboutMeData.allTechnologies.split('\n'); },
    usingDailyClasses() { return this.aboutMeData.usingDaily.split('\n'); },
    learningClasses() { return this.aboutMeData.hobbyLearning.split('\n'); },
    teachingClasses() { return this.aboutMeData.teachingMentoring.split('\n'); },
    operationsClasses() { return this.aboutMeData.systemsAndTools.split('\n'); }
  },
  mounted(){
    setTimeout(() => {
      if(this.hoveringOnAny) return;
      document.querySelector('.tile-right').style.color = noneHighlightedColor;
    }, 1500);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.devicon-apple-plain.colored {
  color: whitesmoke !important;
}
.devicon-github-plain.colored {
  color: gray !important;
}

#about {
  margin: $standard-page-margins;
  background-color: $dark-blue;
}

i {
  transition: opacity 0.5s !important;
  transition: color 0.8s !important;
  opacity: 0.6;
  &:hover { cursor: pointer; }
}

.job-title.position {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.md-areas-of-work {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.md-area {
  transition: background-color 1s;
  &:hover {
    cursor: pointer;
    background-color: $darker-main;
    color: black;
  }
}

#md-about-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  
  // height: auto;
}

.tile-left {
  color: $description-main;

  display: flex;
  justify-content: flex-end;
  padding-left: 2em;
  padding-right: 2em;
  margin-top: 6em;
  text-align: right;
}

.data {
  max-width: 620px;
}

.tile-right {
  color: $darkest-main;
}

@media screen and (max-width: 580px) {
  #md-about-grid {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80vh 400px;
    .tile-left {
      margin-bottom: 0;
    }
    .tile-right {
      margin-top: 0;
      .technologies-container {
        padding: 0.5em;
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .data {
    margin-top: -2em !important;
  }
  .technologies-container {
    padding-left: 0 !important;
    padding-right: 0 !important;
    font-size: 5em !important;
  }
  #md-about-grid {
    margin-top: 0;
  }
}

@media screen and (max-width: 1024px) {
  #about {
    margin: 0;
    margin-top: 40px;
    width: 100%;
  }
  .technologies-container {
    padding-left: 0 !important;
    padding-right: 0 !important;
    font-size: 4em !important;
  }
  #md-about-grid {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 500px;
  }
}

.technologies-container {
  margin: auto;
  font-size: 6em;
  width: 5em;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  
}

.description {
  border-top: 1px solid $sf-blue;
  text-align: justify;
  padding: 10px 0;
}

.company {
  svg {
    margin-right: 10px;
  }
}

</style>