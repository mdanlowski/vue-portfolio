<template lang='pug'>
  div#home.animated.fadeIn
    div.md-home-header Hujaja

</template>

<script>
import ProjectsGallery from '@/components/ProjectsGallery';

export default {
  name: 'home',
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