<template lang='pug'>
  div.home
    div.md-home-header
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
.md-home-header {
  h1 {
    text-align: center;
  }
}
</style>