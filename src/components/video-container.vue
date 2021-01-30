<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <YTPlayer :video_id="video_id" /> 
  </div>
</template>

<script>
import YTPlayer from '@/components/yt-player.vue'; 

export default {
  name: 'VideoContainer',
  components: { YTPlayer },
  props: {
    name: String,
    video_id: String
  }
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
