<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <img src="../assets/mvlogo-o.png"/>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
export default  {
  name: 'Home',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      name: this.name,
    }
  },
}
</script>
