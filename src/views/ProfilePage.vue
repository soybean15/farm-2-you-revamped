<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <ion-avatar class="profile-avatar">
          <img src="https://picsum.photos/seed/user/200" alt="Profile" />
        </ion-avatar>

        <ion-list>
          <ion-item>
            <ion-label position="stacked">Name</ion-label>
            <ion-input v-model="profile.name" placeholder="Enter your name"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="profile.email" type="email" placeholder="Enter your email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Address</ion-label>
            <ion-textarea v-model="profile.address" placeholder="Enter your address"></ion-textarea>
          </ion-item>
        </ion-list>

        <ion-button expand="block" class="ion-margin-top" @click="saveProfile">
          Save Profile
        </ion-button>

        <ion-list>
          <ion-list-header>
            <ion-label>
              <h2>Previous Orders</h2>
            </ion-label>
          </ion-list-header>

          <ion-item v-for="order in orders" :key="order.id">
            <ion-label>
              <h3>Order #{{ order.id }}</h3>
              <p>{{ order.date }}</p>
              <p>${{ order.total.toFixed(2) }}</p>
            </ion-label>
            <ion-badge slot="end" :color="order.status === 'Delivered' ? 'success' : 'primary'">
              {{ order.status }}
            </ion-badge>
          </ion-item>
        </ion-list>
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
  IonInput,
  IonTextarea,
  IonButton,
  IonAvatar,
  IonListHeader,
  IonBadge
} from '@ionic/vue';
import { ref } from 'vue';

const profile = ref({
  name: '',
  email: '',
  address: ''
});

const orders = ref([
  {
    id: '1001',
    date: '2023-11-15',
    total: 45.97,
    status: 'Delivered'
  },
  {
    id: '1002',
    date: '2023-11-10',
    total: 32.50,
    status: 'Processing'
  }
]);

const saveProfile = () => {
  // TODO: Implement profile saving functionality
  console.log('Saving profile:', profile.value);
};
</script>

<style scoped>
.profile-avatar {
  width: 128px;
  height: 128px;
  margin: 20px auto;
}
</style>