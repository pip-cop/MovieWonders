<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bli bla blo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">hallo tara und tina</ion-title>
        </ion-toolbar>
      </ion-header>
      <p>hier steht ein text.</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
