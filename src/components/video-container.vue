<template>
  <div id="container">
    <h2>The Movie Wonders Wonder Movies</h2>
    <IonCard v-for="item in videos" :key="item.title">
      <video controls>
          <source :src="item.url" type="video/mp4">
      </video>
      <IonCardHeader>
        <IonCardSubtitle v-if="item.subtitle">{{ item.subtitle }}</IonCardSubtitle>
        <IonCardTitle v-if="item.title">{{ item.title }}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent v-if="item.description">
        {{ item.description }}
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script>
import { MV_API } from '@/config';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default {
  name: 'VideoContainer',
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle },
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
  width: 100%;
  height: auto;
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
