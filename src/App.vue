<template>
  <div id="app">
    <div id="intro">
      <div id="header">
        <h1 id="name">Benjamin Hinchliff</h1>
        <p id="blerb">
          A skilled self-taught programmer with professional development
          experience; coding community leader, assisting at local elementary and
          middle school classes and camps and running self-founded high school
          coding club; long active with presiding and participating in many
          neighborhood activities through BSA Scouts.
        </p>
      </div>
      <img src="./assets/self.png" class="flex-img" id="portrait" />
    </div>
    <div id="content">
      <h2>Projects</h2>
      <div id="projects">
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <h5>Assembling Orange Sphere</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  margin: 0;
}

html {
  font-family: "Montserrat", sans-serif;
  background-color: #356286;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: lowercase;
  font-family: "Major Mono Display", monospace;
}

h2 {
  text-align: center;
  font-size: 2.25em;
}

#intro {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #104570;
}

#header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  flex: 5 1 30em;
  background: radial-gradient(#356286 30%, #104570);
}

#name {
  text-align: center;
  text-transform: lowercase;
  font-size: 4em;
  font-weight: normal;
  margin: 2% 0;
}

#blerb {
  margin: 1% 5%;
  font-size: 1.25em;
  font-weight: 300;
  text-align: center;
}

#content {
  background: linear-gradient(#104570, #356286);
  overflow: auto;
}

#portrait {
  flex: 1 0 auto;
  width: 10em;
  height: 25em;
  object-fit: cover;
}

#projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  flex: 1 1 70%;
}

.project {
  padding: 0.5%;
  margin: 0.5%;
  background-color: #3f698b;
  border-radius: 5px;
  flex: 1 1 15em;
}
</style>
