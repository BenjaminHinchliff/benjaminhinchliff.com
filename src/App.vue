<template>
  <div id="app">
    <div id="intro">
      <h1 id="name">Benjamin Hinchliff</h1>
      <p id="blerb">
        A skilled self-taught programmer with professional development
        experience; coding community leader, assisting at local elementary and
        middle school classes and camps and running self-founded high school
        coding club; long active with presiding and participating in many
        neighborhood activities through BSA Scouts.
      </p>
    </div>
    <div id="content">
      <img src="./assets/self.png" id="portrait" />
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
}

h1,
p {
  color: white;
}

h1 {
  font-family: "Major Mono Display", monospace;
}

#intro {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  overflow: auto;
  background: radial-gradient(#356286 50%, #104570);
  // background-image: url("assets/code.png");
  // background-blend-mode: multiply;
}

#name {
  text-transform: lowercase;
  font-size: 5em;
  font-weight: normal;
  margin: 0;
}

#blerb {
  margin: 3% 10%;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
}

#portrait {
  width: 30%;
}
</style>
