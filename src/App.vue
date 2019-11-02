<template lang='pug'>
  div#app
    nav#navigation
      router-link.nav-block(to="/") Home
      router-link.nav-block(to="/about") About Me
      router-link.nav-block(to="/projects") Projects
    main
      router-view

</template>

<style lang="scss">
@import url("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css");
@import "@/assets/variables";

/*----------------------scrollbar------------------------*/
/* width */
::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
/* Track */
::-webkit-scrollbar-track {
  /*background: #f1f1f1; */
  background: #333; 
  position: absolute;
  bottom: 0;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #555; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /*background: crimson; */
  background: darkred; 
}
/*------------------end-scrollbar------------------------*/

body {
  width: 100vw;
  margin: 0
}

#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $dark-blue;
}

#navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // text-align: center;
  height: 35px;

  .nav-block {
    text-transform: uppercase;
    font-size: 25px;
    padding-top: 5px;
    &:hover { background-color: $darkest-main; }
    width: 100%;
    height: 100%;
    background-color: $blue-gray;
    text-align: center;
    &.router-link-exact-active {
      background-color: $transparent-dark-main;
    }
  }
  a {
    font-weight: bold;
    color: darkred;
    text-decoration: none;
    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
