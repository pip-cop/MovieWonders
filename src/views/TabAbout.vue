<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{about}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>About this app</IonCardSubtitle>
          <IonCardTitle>MovieWonders</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Movie Wonders ist eine App von Clara, Tara, Tina, Elisa und Joana.
        </IonCardContent>
      </IonCard>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default  {
  name: 'About',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle },
  data() {
    return {
      name: this.name,
    }
  },
}
</script>
