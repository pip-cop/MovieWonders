<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>hallo clara</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">hallo clara

          </ion-title>
        </ion-toolbar>
      </ion-header>
    
      <VideoContainer name="hallo clara" video_id="qaZ0oAh4evU" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import VideoContainer from '@/components/video-container.vue';

export default  {
  name: 'Tab1',
  components: { VideoContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
