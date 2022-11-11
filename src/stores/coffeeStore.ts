import {defineStore} from 'pinia'
import type {Coffee} from "@/types/Coffee";

export const useCoffeeStore = defineStore('coffeeStore', {
    state: () => ({
        coffees: [
            {
                id: '1',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/the-blend-whole-bean-250-s-595x595.png',
                price: 48,
            },
            {
                id: '2',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/the-blend-whole-bean-250-s-595x595.png',
                price: 48,
            },
            {
                id: '3',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/the-blend-whole-bean-250-s-595x595.png',
                price: 48,
            },
            {
                id: '4',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
                price: 48,
            },
            {
                id: '5',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
                price: 48,
            },
            {
                id: '6',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
                price: 48,
            },
            {
                id: '7',
                name: 'black coffee',
                description: 'just black coffee',
                picture: 'https://107.wpcdnnode.com/bocca.nl/wp-content/uploads/brander1-eb-1kg.png',
                price: 48,
            },
        ] as Coffee[],

    }),
    actions: {
        createCoffee(coffee: Coffee) {
            if (coffee) {
                coffee.id = String(Date.now())
                this.coffees.push(coffee)
            }
        },
        editCoffee(coffee: Coffee) {
            if (coffee) {
                const index = this.coffees.findIndex(c => c.id === coffee.id)
                this.coffees[index] = coffee
            }
        },
    },
    getters: {
        getCoffees(state) {
            return state.coffees
        },
        getCoffeeById: (state) => (id: string) => {
            return state.coffees.find(coffee => coffee.id === id)
        }
    },
})
