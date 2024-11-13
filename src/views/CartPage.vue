<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Shopping Cart</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Shopping Cart</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="ion-padding" v-if="cartStore.items.length === 0">
        <ion-text color="medium">
          <h2>Your cart is empty</h2>
          <p>Start shopping at our farmers market!</p>
        </ion-text>
      </div>

      <ion-list v-else>
        <ion-item v-for="item in cartStore.items" :key="item.id">
          <ion-thumbnail slot="start">
            <img :src="item.image" :alt="item.name" />
          </ion-thumbnail>
          <ion-label>
            <h2>{{ item.name }}</h2>
            <p>{{ item.farmer }}</p>
            <p>${{ item.price.toFixed(2) }}</p>
          </ion-label>
          <ion-button slot="end" color="danger" fill="clear" @click="cartStore.removeItem(item)">
            <ion-icon :icon="trashOutline"></ion-icon>
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-label>
            <h2>Total</h2>
          </ion-label>
          <ion-note slot="end" color="primary">
            <h2>${{ cartStore.total.toFixed(2) }}</h2>
          </ion-note>
        </ion-item>
      </ion-list>

      <div class="ion-padding" v-if="cartStore.items.length > 0">
        <ion-button expand="block" @click="confirmCheckout">
          Checkout (${{ cartStore.total.toFixed(2) }})
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonThumbnail,
  IonIcon,
  IonText,
  IonNote,
  alertController,
  toastController
} from '@ionic/vue';
import { trashOutline } from 'ionicons/icons';
import { useCartStore } from '@/stores/cart';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

const confirmCheckout = async () => {
  const alert = await alertController.create({
    header: 'Confirm Checkout',
    message: `Proceed with checkout for ${cartStore.items.length} items?<br>Total: $${cartStore.total.toFixed(2)}`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Confirm',
        role: 'confirm',
        handler: () => {
          processCheckout();
        }
      }
    ]
  });

  await alert.present();
};

const processCheckout = async () => {
  // Process the order (in a real app, this would call an API)
  cartStore.clearCart();
  
  const toast = await toastController.create({
    message: 'Order placed successfully!',
    duration: 2000,
    position: 'top',
    color: 'success'
  });
  
  await toast.present();
  router.push('/tabs/market');
};</script>