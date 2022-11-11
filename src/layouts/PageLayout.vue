<template>
    <div class="w-full container mx-auto flex mt-16 px-6 py-3 justify-center">
    <h2 class="text-3xl">{{ title }}</h2>
    </div>
    <slot></slot>
</template>

<script setup>
defineProps({
    title: String,
});
</script>
