<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>hallo elisa und joana</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">hallo elisa und joana</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <VideoContainer name="hallo elisa und joana" video_id="Eg4LUvUjUWI" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import VideoContainer from '@/components/video-container.vue';

export default  {
  name: 'Tab2',
  components: { VideoContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
