<template>
  <div id="container">
    <h2>The Movie Wonders Wonder Movies</h2>
    <div v-for="item in videos" :key="item.id">
      <h3>{{ item.snippet.title }}</h3>
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import { YT_API } from '@/config';

export default {
  name: 'VideoContainer',
  props: {
    name: String,
    video_id: String
  },
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    async load() {
      const response = await fetch(YT_API.playlist_items);
      const result = await response.json()
      console.log(result.items);
      this.videos = result.items;
    },
  },
  created() {
    this.load();
  },
}
</script>

<style scoped>
#container {
  margin: 4em auto;
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}
</style>
