<template>
  <div id="container">
    <div v-for="item in videos" :key="item.id">
      <strong>{{ item.snippet.title }}</strong>
      <YTPlayer :video_id="item.snippet.resourceId.videoId" />
    </div>
  </div>
</template>

<script>
import YTPlayer from '@/components/yt-player.vue';
import { YT_API } from '@/config';

export default {
  name: 'VideoContainer',
  components: { YTPlayer },
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
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}
</style>
