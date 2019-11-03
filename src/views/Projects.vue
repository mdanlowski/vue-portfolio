<template lang='pug'>
  div#projects.animated.fadeIn
    div
    div
      projects-gallery

</template>

<script>
import ProjectsGallery from '@/components/ProjectsGallery';

export default {
  name: 'projects',
  components: {
    ProjectsGallery
  },
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>