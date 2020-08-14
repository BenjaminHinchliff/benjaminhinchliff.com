<template>
  <div class="project">
    <h5>{{ name }}</h5>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  props: {
    name: String,
    description: String
  }
});
</script>

<style lang="scss" scoped>
.project {
  padding: 0.5%;
  margin: 0.5%;
  background-color: #3f698b;
  border-radius: 5px;
  flex: 1 1 15em;
}
</style>
