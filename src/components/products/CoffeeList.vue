<template>
    <div class="relative container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <div v-if="coffeeStore.getCoffees.length > 0"
             class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <CoffeeListItem
                v-for="coffee in coffeeStore.getCoffees"
                :key="coffee.id"
                :coffee="coffee"
            />
        </div>
        <div v-else class="text-2xl flex justify-center mt-15">No products</div>
    </div>
</template>

<script setup lang="ts">
import CoffeeListItem from "@/components/products/CoffeeListItem.vue";
import { useCoffeeStore } from "@/stores/coffeeStore";

const coffeeStore = useCoffeeStore();
</script>

