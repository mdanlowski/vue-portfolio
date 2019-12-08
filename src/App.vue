<template lang='pug'>
  div#app
    nav#navigation
      //- router-link.nav-block(to="/") Home
      router-link.nav-block(to="/") About Me
      router-link.nav-block(to="/projects") Featured Projects
      router-link.nav-block.minor(to="/artworks") Artworks
    main
      router-view

    footer
      div CONTACT ME
      .contact-me
        #linkedin
          a(href="https://www.linkedin.com/in/mdanlowski/")
            svg(focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512")
              path#path(fill="red" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z")

        #github
          a(href="https://github.com/mdanlowski")
            i.devicon-github-plain
            
        #electronic-address
          a(href="mailto:marcindanlowski@gmail.com") &#9993;
        
        #cv-download
          a(href="/cv-oct-19.pdf") cv

</template>

<script>
export default {
  methods: {
    revealEaddress(){
      let obj = document.getElementById('electronic-address').firstElementChild;
      obj.innerText = "marcindanlowski@gmail.com";
    },
  }
}
</script>

<style lang="scss">
@import url("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css");
@import "@/assets/variables";
@import "@/assets/animate";

.minor {
  width: 20% !important;
}

::selection { background: $sf-blue; }
::-moz-selection { background: #ffb7b7; }

@media screen and (max-height: 866px) {
  footer {
    padding-top: 10px;
    background-color: $dark-blue-with-alpha;
  }
}

/* anchor normalize */
a {
  // font-weight: bold;
  color: $dark-main;
  text-decoration: none;
  &:hover {
    color: $main;
  }
}

footer {
  position: fixed;
  width: 100vw;
  bottom: 0;
  div:first-child {
    font-size: 10px;
    padding-bottom: 5px;
  }
  color: $dark-main;
  font-weight: bold;
  text-align: center;
  .contact-me {
    padding-top: 5px;
    border-top: 1px solid $dark-main;
    max-height: 50px;
    margin: auto;
    max-width: 120px;
    display: flex;
    justify-content: space-around;
    a {
      color: $linkedin-blue !important;
      &:hover { color: red !important; }
    }
    #cv-download { 
      font-size: 24px;
      line-height: 0.8em !important;
    }
    #electronic-address {
      font-size: 24px;
      line-height: 1em !important;
    }
    #linkedin {
      a > svg {
        width: 20px;
        #path { fill: $linkedin-blue }
        &:hover { #path { fill: red; } }
      }
    }
    #github > a > i {
      opacity: 1 !important;
      font-size: 20px;
    }

  }
}

body {
  margin: 0;
  background-image: url('/pattern.png');
  background-repeat: repeat;
  background-size: 10%;
  background-blend-mode: $main-bg-blend;
  background-color: $dark-blue;
}

#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-image: url('/pattern.png');
  // background-repeat: repeat;
  // background-size: 10%;
  // background-blend-mode: $main-bg-blend;
  // background-color: $dark-blue;
}

#navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // text-align: center;
  height: 22px;

  .nav-block {
    text-transform: uppercase;
    font-size: 16px;
    padding-top: 5px;
    &:hover { background-color: $darkest-main; }
    width: 100%;
    height: 100%;
    background-color: $blue-gray;
    text-align: center;
    &.router-link-exact-active {
      border-bottom: 4px solid $transparent-dark-main;
    }
  }
  a {
    font-weight: bold;
    color: $standard-dark-main;
    text-decoration: none;
    &.router-link-exact-active {
      color: $highlight-main;
    }
  }
}

@media screen and (max-width: 500px) {
  #navigation {
    .nav-block {
      font-size: 12px;
    }
  }
}

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
</style>
