<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div>
                    <div
                        class="flex justify-center">
                        <img :src="coffee.picture" :alt="coffee.name"
                             class="w-72 h-72  object-cover object-center"/>
                    </div>

                    <div class="flex -mx-2 mb-4">
                        <template x-for="i in 4">
                            <div class="flex-1 px-2">
                                <button
                                    class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                                    <span x-text="i" class="text-2xl"></span>
                                </button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4 sm:justify-center">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{coffee.name}}</h2>
                <p class="text-gray-500 text-sm">By <a href="#" class="text-[#7c4e29] hover:underline">ABC Company</a>
                </p>
                <div class="flex items-center space-x-4 my-4">
                    <div>
                        <div class="flex py-2 px-3">
                            <span class="text-gray-900 mr-1 mt-1">€</span>
                            <span class="font-bold text-gray-900 text-3xl">{{coffee.price}}</span>
                        </div>
                    </div>

                </div>
                <p class="text-gray-500">{{coffee.description}}</p>
                <div class="flex py-4 space-x-4 pt-16">
                        <button
                            class="text-gray-900 border-2 border-transparent border-gray-900 py-2 px-5 text-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c4e29]"
                            type="submit"
                            @click="editCoffee"
                        >Edit
                        </button>
                        <button class="ml-3 text-gray-900 border-2 border-transparent border-gray-900 py-2 px-5 text-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c4e29]"
                                type="submit">Remove
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import router from "@/router";
import { useCoffeeStore } from "@/stores/coffeeStore";
import type {Coffee} from "@/types/Coffee";

const coffeeStore = useCoffeeStore();
const route = useRoute();
const coffee = ref<Coffee>({
    id: '',
    name: '',
    description: '',
    picture: '',
    price: 0,
    isRemoved: false,
});

onMounted(async () => {
    coffee.value = coffeeStore.getCoffeeById(route.params.id as string);
});

const editCoffee = () => {
    router.push('/coffees/edit/' + coffee.value.id);
}

const removeCoffee = () => {
    if(coffee.value.id) {
        coffeeStore.removeCoffee(coffee.value.id);
    }
}
</script>
