<template>
    <PageLayout :title="'Removed Coffees'">
        <CoffeeList :is-active="false"/>
    </PageLayout>
</template>

<script setup>
import CoffeeList from "@/components/products/CoffeeList.vue";
import PageLayout from "@/layouts/PageLayout.vue";
</script>
