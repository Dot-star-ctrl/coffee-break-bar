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

    <div class="relative container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                <div
                    class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img :src="product.imageSrc" :alt="product.imageAlt"
                         class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
            </a>
        </div>
    </div>

    <div class="container mx-auto bg-white py-8 border-t border-gray-400">
        <div class="container flex px-3 py-8 ">
            <div class="w-full mx-auto flex flex-wrap">
                <div class="flex w-full lg:w-1/2 ">
                    <div class="px-3 md:px-0">
                        <h3 class="font-bold text-gray-900">About</h3>
                        <p class="py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus
                            commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                        </p>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div class="px-3 md:px-0">
                        <h3 class="font-bold text-gray-900">Social</h3>
                        <ul class="list-reset items-center pt-3">
                            <li>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Add
                                    social links</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const products = [
    {
        id: 1,
        name: 'coffee',
        href: '#',
        price: '$48',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/the-blend-whole-bean-250-s-595x595.png',
        imageAlt: 'coffee',
    },
    {
        id: 2,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/gusto-whole-bean-250-s-595x595.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'coffee',
        href: '#',
        price: '$89',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/gusto-whole-bean-250-s-595x595.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/soulmate-whole-bean-250-s-1-595x595.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 4,
        name: 'coffee',
        href: '#',
        price: '$35',
        imageSrc: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]
</script>
