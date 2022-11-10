<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mx-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                    Our menu</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our
                    heart beats for just good coffee! Discover our wide variety of legendary Coffee
                    Fellows classics. In addition, you can also enjoy tea or other drinks with us, whether
                    or not tailored to the season. And of course you can also indulge yourself if you want
                    to eat something delicious. From our well-known fantastic bagels to rich bowls and
                    mueslis. Or from savory sandwiches to sweet cakes and biscuits.</p>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                <img src="../assets/images/coffees.jpeg" alt="mockup">
            </div>
        </div>
    </section>

<CoffeeList/>

</template>

<script setup lang="ts">
import CoffeeList from "@/components/products/CoffeeList.vue";

</script>
