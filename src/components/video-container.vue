<template>
  <div id="container">
    <h2>The Movie Wonders Wonder Movies</h2>
    <div v-for="item in videos" :key="item.title">
      <h3>{{ item.title }}</h3>
      <video controls>
          <source :src="item.url" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import { MV_API } from '@/config';

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
      const response = await fetch(MV_API.videos);
      const result = await response.json()
      console.log(result);
      this.videos = result;
    },
  },
  created() {
    this.load();
  },
}
</script>

<style scoped>
video {
  width: 90%;
  height: auto;
  max-width: 560px;
}
#container {
  margin: 4em auto;
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}
</style>
