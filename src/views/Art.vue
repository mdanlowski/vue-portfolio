<template lang='pug'>
  div#artworks.animated.fadeIn
    div.section-info
      header
      | Dear Visitor, thank you for your interest in this section.
      | One of my hobbies is drawing. I'm also beginning my adventure with digital drawing and graphics.
      | I've decided to share with you artworks presented here.

    div#md-artworks
      div(v-for="artworkData in artworks").artwork-tile
        div.artwork-meta
          div
            h1 {{artworkData.title}}
            p {{artworkData.description}}

            p
              h4 Tools and techniques:
              | {{artworkData.technique}}

            p.date {{artworkData.date}}

        OverlayTile.overlay-tile(overlayText="Click here to open full size image" sizeX="600" sizeY="600" :clickAction="artworkData.fullUrl")
          img(:src="require(`../assets/digital-arts/${(artworkData.thumbUrl)}`)")

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

// @TODO : Add full responsiveness to this section

@media screen and (max-width: 1366px) {
  .overlay-tile { max-width: 400px !important; }
  img { max-width: 400px !important; }
}

.artwork-tile {
  overflow-y: hidden;
  .overlay-tile { max-width: 600px; }
  img { max-width: 600px; }

  p:first-of-type {
    border-bottom: 1px solid $dark-main;
    padding-bottom: 1em;
  }

  display: flex;
  padding: 2em;
  padding-bottom: 0;
  flex-direction: row;
  justify-content: space-between;

  .artwork-meta {
    max-width: 50%;
    color: $dark-main;
    padding: 1em;
    padding-right: 2em;
    padding-left: 1em;
    .date {
      float: right;
      font-size: 20px;
      font-weight: bold;
    }
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    .artwork-meta { padding-left: 2em; padding-rightp: 1em; }
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

#md-artworks {
  max-height: calc(100vh - 172px - 2em);
  overflow-y: scroll;
}
</style>