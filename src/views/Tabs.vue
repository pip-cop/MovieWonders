<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="planet" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="videos" href="/tabs/videos">
          <ion-icon :icon="aperture" />
          <ion-label>Videos</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="about" href="/tabs/about">
          <ion-icon :icon="ellipse" />
          <ion-label>About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, planet, aperture } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square,
      planet,
      aperture,
    }
  }
}
</script>
