<template lang='pug'>
  div#artworks.animated.fadeIn
    div.section-info
      header
        | Dear Visitor, thank you for your interest in this section.
        | One of my hobbies is drawing. I'm also beginning my adventure with digital drawing and graphics.
        | I've decided to share with you artworks presented here.

    div#md-artworks-grid
      div(v-for="artworkData in artworks").artwork-tile
        OverlayTile.overlay-tile(
          overlayText=""
          sizeX="600"
          sizeY="600"
          :clickAction="artworkData.fullUrl"
          :imgAsBackground="true"
          :imgSrc="require(`../assets/digital-arts/${artworkData.thumbUrl}`)"
        )  
          //- :filter="['grayscale', 1]"
          div.artwork-meta
            div
              h1 {{artworkData.title}}
              p {{artworkData.description}}

              p
                h4 Tools and techniques:
                | {{artworkData.technique}}

              p.date {{artworkData.date}}


</template>

<script>
import OverlayTile from '@/components/OverlayTile';

export default {
  name: 'projects',
  components: {
    OverlayTile
  },
  data(){
    return {
      artworks: this.$store.state.artworks

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.artwork-tile {
  // overflow-y: hidden;
  // .overlay-tile { max-width: 600px; }
  // img { max-width: 600px; }

  // p:first-of-type {
  //   border-bottom: 1px solid $dark-main;
  //   padding-bottom: 1em;
  // }

  // display: flex;
  // padding: 2em;
  // padding-bottom: 0;
  // flex-direction: row;
  // justify-content: space-between;


  &:nth-of-type(2n + 1) {
    // flex-direction: row-reverse;
    // .artwork-meta { padding-left: 2em; padding-right: 1em; }
    .overlay-tile {
      float: right;
    }

  }
  .artwork-meta {
    z-index: 100;
    max-width: 50%;
    // color: $dark-main;
    color: transparent;
    padding: 3em;
    padding-left: 2em;
    .date {
      float: right;
      font-size: 20px;
      font-weight: bold;
    }

  }
}

.section-info {
  color: $dark-main;
  padding: 1em;
  font-size: 18px;
  text-align: center;
}

#artworks {
  margin: $standard-page-margins;
  background-color: $dark-blue;
  padding-bottom: 2em;
}

#md-artworks-grid {
  margin: auto;
  max-height: calc(100vh - 172px - 3em);
  overflow-y: scroll;

  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-gap: 10px;
}

// @TODO : Add full responsiveness to this section

@media screen and (max-width: 1366px) {
  .overlay-tile { max-width: 400px; }
  img { max-width: 400px; }
}


@media screen and (max-width: 1000px) {
  .overlay-tile { max-width: 100%; }
  img { max-width: 100%; }
  #md-artworks-grid {
    grid-template-columns: 100%;
  }
  .artwork-tile {
    margin: auto;
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  #artworks {
    width: 100%;
    margin: 0;
  }
  header {
    font-size: 14px;
  }
}

</style>