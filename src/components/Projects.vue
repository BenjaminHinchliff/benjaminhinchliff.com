<template>
  <div class="projects">
    <project
      v-for="{ id, name, description, createdAt, htmlUrl } in projects"
      :key="id"
      :name="name"
      :description="description"
      :timeCreated="new Date(createdAt)"
      :url="htmlUrl"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Project from "./Project.vue";
import ProjectInterface from "../interfaces/Project";

export default defineComponent({
  name: "App",
  components: {
    Project
  },
  props: {
    projects: Array as () => ProjectInterface[]
  }
});
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  flex: 1 1 70%;
}
</style>
