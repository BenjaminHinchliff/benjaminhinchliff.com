<template>
  <a class="project" :href="url" rel="noopener noreferrer" target="_blank">
    <h5 class="name">{{ normalizeName(name) }}</h5>
    <h6 class="date">{{ timeCreated.toLocaleDateString() }}</h6>
    <p class="description">{{ description || "(no description)" }}</p>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  props: {
    name: String,
    description: String,
    timeCreated: Date,
    url: String
  },
  methods: {
    normalizeName(name: string): string {
      return name.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
    }
  }
});
</script>

<style lang="scss" scoped>
.project {
  text-decoration: none;
  padding: 0.5%;
  margin: 0.5%;
  background-color: #3f698b;
  border-radius: 5px;
  flex: 1 1 15em;
}

.date,
.name,
.description {
  margin: 0.5em 0;
}
</style>
