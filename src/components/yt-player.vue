<template>
  <div>
    <div id="youtube-player"></div>
  </div>
</template>

<script>
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
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
      const result = await YoutubePlayerWeb.initialize(options);

      result.player.addEventListener('onPlaybackQualityChange', (event) => {
        console.log('playback quality is', event);
      });

      result.player.addEventListener('onStateChange', (event) => {
        console.log('state is', event);
      });
    },

    async init_yt_native() {
      // okay.
    },
  }

}
</script>

<style scoped>
</style>
