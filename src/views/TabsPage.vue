<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="market" href="/tabs/market">
          <ion-icon :icon="storefront" />
          <ion-label>Market</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="cart" href="/tabs/cart">
          <ion-icon :icon="cart" />
          <ion-label>Cart</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cart, person, storefront } from 'ionicons/icons';
</script>