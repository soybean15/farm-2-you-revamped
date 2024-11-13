import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Product {
  id: number;
  name: string;
  farmer: string;
  price: number;
  description: string;
  image: string;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([]);

  const total = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price, 0);
  });

  function addItem(product: Product) {
    items.value.push(product);
  }

  function removeItem(product: Product) {
    const index = items.value.findIndex(item => item.id === product.id);
    if (index > -1) {
      items.value.splice(index, 1);
    }
  }

  function clearCart() {
    items.value = [];
  }

  return {
    items,
    total,
    addItem,
    removeItem,
    clearCart
  };
});