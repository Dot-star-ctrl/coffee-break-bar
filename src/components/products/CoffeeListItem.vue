<template>
    <router-link
        :to="{ name: 'CoffeeView', params: { id: coffee.id } }"
        class="text-decoration-none"
    >
    <div>
        <div
            class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="coffee.picture" :alt="coffee.name"
                 class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ coffee.name }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">{{ coffee.price }}</p>
    </div>
        </router-link>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {Coffee} from "@/types/Coffee";

defineProps({
    coffee: {
        type: Object as PropType<Coffee>,
        required: true,
    },
})
</script>
