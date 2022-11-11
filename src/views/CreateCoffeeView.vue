<template>
    <div class="max-w-screen-md px-4 py-8 mx-auto lg:gap-8 xl:gap-0 py-32 lg:grid-cols-12">
        <div class="mt-5 md:col-span-2 md:mt-0">
            <div v-if="alert.show" role="alert">
                <div
                    :class="['border font-bold px-4 py-2', alert.type === 'success' ? 'bg-green-400 border-green-400 text-green-700' : 'bg-red-400 border-red-400 text-red-700']">
                    {{ alert.type === 'success' ? 'Success' : 'Error' }}
                </div>
                <div
                    :class="['border border-t-0 px-4 py-3',  alert.type === 'success' ? 'border-green-400 text-green-700' : 'border-red-400 text-red-700']">
                    <p> {{ alert.message }}</p>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="sm:overflow-hidden sm:rounded-md">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    v-model="coffee.name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Input name here"
                                    class="mt-1 w-full border-0 border-b-2 border-grey-dark border-gray-700 shadow-sm focus:border-gray-900 sm:text-sm focus:ring-0"
                                />
                                <p v-if="v$.name.$error" class="peer-invalid:visible text-red-700 font-light">Please
                                    input a name</p>
                            </div>
                            <div class="col-span-6 sm:col-span-3 relative">
                                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                                <div class="flex">
                                    <span
                                        class="flex items-center bg-grey-700 border-0 border-b-2 border-grey-dark border-gray-700 px-2 text-grey-darker mt-1">€</span>
                                    <input
                                        v-model="coffee.price"
                                        type="number"
                                        name="price"
                                        step="any"
                                        min="0.00"
                                        max="1000.00"
                                        id="price"
                                        placeholder="0.00"
                                        class="mt-1 w-full border-0 border-b-2 border-grey-dark border-gray-700 shadow-sm focus:border-gray-900 sm:text-sm focus:ring-0"
                                    />
                                </div>
                                <p v-if="v$.price.$error" class="peer-invalid:visible text-red-700 font-light">
                                    {{ v$.price.$errors[0].$message }}</p>
                            </div>
                        </div>

                        <div class="col-span-6">
                            <label for="picture" class="block text-sm font-medium text-gray-700">Picture
                                Url</label>
                            <input
                                v-model="coffee.picture"
                                type="text"
                                name="picture"
                                id="picture"
                                placeholder="Input picture url here"
                                class="mt-1 w-full border-0 border-b-2 border-grey-dark border-gray-700 shadow-sm focus:border-gray-900 sm:text-sm focus:ring-0"
                            />
                            <p v-if="v$.picture.$error" class="peer-invalid:visible text-red-700 font-light">
                                {{ v$.picture.$errors[0].$message }}</p>
                        </div>

                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                            <div class="mt-1">
                                <textarea
                                    v-model="coffee.description"
                                    id="description"
                                    name="description"
                                    rows="3"
                                    max="400"
                                    class="mt-1 w-full border-0 border-b-2 border-grey-dark border-gray-700 shadow-sm focus:border-gray-900 sm:text-sm focus:ring-0"
                                    placeholder="Input description here"
                                />
                                <p v-if="v$.description.$error" class="text-red-700 font-light">
                                    {{ v$.description.$errors[0].$message }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center text-gray-900 border-2 border-transparent border-gray-900 py-3 px-6 text-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c4e29]">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import router from "@/router";
import useVuelidate from '@vuelidate/core'
import {required, email, sameAs, minLength, helpers} from '@vuelidate/validators'
import type {Coffee} from '@/types/Coffee';
import type {Alert} from '@/types/Alert';
import {useCoffeeStore} from "@/stores/coffeeStore";

const coffeeStore = useCoffeeStore();

const coffee = reactive<Coffee>({
    id: '',
    name: '',
    description: '',
    picture: '',
    price: 0,
    isRemoved: false,
});

const alert = reactive<Alert>({
    show: false,
    message: '',
    type: 'success'
});

const rules = {
    name: {required},
    description: {
        required,
        minLength: minLength(5),
        maxLength: helpers.withMessage('Max length is 400', (value: string) => value.length <= 400)
    },
    picture: {
        required, url: helpers.withMessage('Must be a valid url', (value: string) => {
            try {
                new URL(value);
                return true;
            } catch (e) {
                return false;
            }
        })
    },
    price: {required, min: helpers.withMessage('Price must be greater than €0.00', (value: number) => value > 0)},
};

const v$ = useVuelidate(rules, coffee);

const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        coffeeStore.createCoffee(coffee);
        showAlert('success', 'Your coffee was created successfully.');

    } else {
        showAlert('error', 'Something went wrong, please check your input.');
    }
}

const showAlert = (type: 'success' | 'error', message: string) => {
    if (type && message) {
        alert.show = true;
        alert.type = type;
        alert.message = message;
        setTimeout(() => {
            if (alert.type === 'success') {
                router.push('/');
            }
            alert.show = false;
            alert.message = '';
        }, 2000);
    }
}
</script>

