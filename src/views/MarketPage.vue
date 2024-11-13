<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Farmers Market</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Farmers Market</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" v-for="product in products" :key="product.id">
            <ion-card>
              <img :src="product.image" :alt="product.name" />
              <ion-card-header>
                <ion-card-subtitle>{{ product.farmer }}</ion-card-subtitle>
                <ion-card-title>{{ product.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ product.description }}</p>
                <ion-text color="primary">
                  <h2>${{ product.price.toFixed(2) }}</h2>
                </ion-text>
                <ion-button expand="block" @click="confirmAddToCart(product)">
                  Add to Cart
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonText,
  alertController,
  toastController
} from '@ionic/vue';
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import type { Product } from '@/stores/cart';

const cartStore = useCartStore();

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Fresh Organic Tomatoes',
    farmer: 'Green Valley Farm',
    price: 4.99,
    description: 'Locally grown organic tomatoes, picked fresh daily.',
    image: 'https://picsum.photos/seed/tomatoes/300/200'
  },
  {
    id: 2,
    name: 'Farm Fresh Eggs',
    farmer: 'Happy Hens Farm',
    price: 6.99,
    description: 'Free-range organic eggs from pasture-raised chickens.',
    image: 'https://picsum.photos/seed/eggs/300/200'
  },
  {
    id: 3,
    name: 'Organic Honey',
    farmer: 'Busy Bee Apiary',
    price: 12.99,
    description: 'Raw, unfiltered honey from local wildflowers.',
    image: 'https://picsum.photos/seed/honey/300/200'
  }
]);

const confirmAddToCart = async (product: Product) => {
  const alert = await alertController.create({
    header: 'Add to Cart',
    message: `Add ${product.name} to your cart?`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Add',
        role: 'confirm',
        handler: () => {
          cartStore.addItem(product);
          showSuccessToast(product);
        }
      }
    ]
  });

  await alert.present();
};

const showSuccessToast = async (product: Product) => {
  const toast = await toastController.create({
    message: `${product.name} has been added to your cart`,
    duration: 2000,
    position: 'top',
    color: 'success',
    buttons: [
      {
        text: 'Close',
        role: 'cancel'
      }
    ]
  });

  await toast.present();
};
</script>