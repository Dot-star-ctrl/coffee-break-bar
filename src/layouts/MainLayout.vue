<template>
    <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <NavigationComponent/>
        <router-view></router-view>
        <FooterComponent/>
    </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavigationComponent from '../components/global/NavigationComponent.vue'
import FooterComponent from "@/components/global/FooterComponent.vue";
</script>
