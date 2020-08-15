<template>
  <div id="app">
    <div id="intro">
      <div id="header">
        <h1>Benjamin Hinchliff</h1>
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
      <h2 id="projects-header" class="text-center">Projects</h2>
      <p id="projects-subheader" class="text-center muted">
        (more recent years)
      </p>
      <template v-if="errored">
        <p class="error text-center">
          Something went wrong while trying to load the projects.
        </p>
      </template>
      <template v-else>
        <div class="loader" v-if="loading"></div>
        <projects v-else :projects="projects" />
      </template>
    </div>
    <p id="copyright" class="muted text-center">
      Copyright (&copy;) 2020 Benjamin Hinchliff
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Projects from "./components/Projects.vue";
import ProjectsService from "./services/ProjectsService";
import ProjectInterface from "./interfaces/Project";

export default defineComponent({
  name: "App",
  components: {
    Projects
  },
  data: () => {
    return {
      projects: [] as ProjectInterface[],
      loading: true,
      errored: false
    };
  },
  mounted() {
    new ProjectsService()
      .get()
      .then(projects => (this.projects = projects))
      .catch(error => {
        console.error(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
});
</script>

<style lang="scss" scoped>
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

#projects-header {
  font-size: 2.25em;
  margin: 0.2em 0;
}

#projects-subheader {
  margin-top: 0.1em;
}

#portrait {
  flex: 1 0 auto;
  width: 10em;
  height: 25em;
  object-fit: cover;
}

@media only screen and (min-width: 425px) {
  h1 {
    font-size: 4em;
  }
}
</style>

<style lang="scss">
@import "./global.scss";
</style>
