<template>
  <div>
    <div id="youtube-player"></div>
  </div>
</template>

<script>
import { YoutubePlayerWeb, YoutubePlayer } from 'capacitor-youtube-player';
import { Capacitor } from '@capacitor/core';

export default {

  props: {
    video_id: String
  },

  mounted() {
      if (Capacitor.platform === 'web') {
        this.init_yt_web();
      } else {
        // Native
        this.init_yt_native();
      }
  },

  methods: {
    async init_yt_web() {
      const options = {
        playerId: 'youtube-player',
        playerSize: {width: 640, height: 360},
        videoId: this.video_id,
        debug: true
      };
      const player = await YoutubePlayerWeb.initialize(options);

      player.player.addEventListener('onPlaybackQualityChange', (event) => {
        console.log('playback quality is', event);
      });

      player.player.addEventListener('onStateChange', (event) => {
        console.log('state is', event);
      });
    },

    async init_yt_native() {
      const options = {
        width: 640,
        height: 360,
        videoId: this.video_id
      };
      const player = await YoutubePlayer.initialize(options);
    },
  }

}
</script>

<style scoped>
</style>
