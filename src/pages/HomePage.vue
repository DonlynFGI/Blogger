<template>
  <div class="home container-fluid">
    <div class="row">
      <Post v-for="p in posts" :key="p.id" :posts="p" />
    </div>
  </div>
</template>

<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { onMounted } from "@vue/runtime-core";
import { postService } from "../services/PostService";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  name: "Home",

  setup(props) {
    onMounted(async () => {
      try {
        await postService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return { posts: computed(() => AppState.posts) };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

