<template>
  <div class="col-md-4 card fixr">{{ posts }}</div>
</template>

<script>
// import { AppState } from "../AppState";
// import { postService } from "../services/PostService";

export default {
  props: { posts: { type: Object, required: true } },
  setup(props) {
    return {};
  },
};
</script>


<style scoped>
.fixr {
  max-width: 25vw;
  max-height: 500px;
}
</style>