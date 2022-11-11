<template>
    <nav id="header" class="w-full z-30 top-0 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle"/>

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 text-xl">
                        <li>
                            <router-link
                                to="/"
                                class="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                                Menu
                            </router-link>
                        </li>

                        <li>
                            <span class="group relative inline-block">
                                <button
                                    class="inline-flex items-center rounded py-2 px-4">Barista options</button>
                                <ul class="bg-white z-10 absolute hidden pt-1 text-gray-700 group-hover:block">
                                  <li class="">
                                      <router-link
                                          to="/coffees/removed"
                                          class="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                                                        Removed Coffees
                                      </router-link>

                                  </li>
                                  <li class="">
                                  <router-link
                                      to="/coffees/create"
                                      class="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                                Create Coffee
                            </router-link></li>
                                </ul>
                              </span>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="order-1 md:order-2">
                <a href="#">
                    <img src="../../assets/images/logo.svg" alt="logo" class="h-12 w-30 lg:mr-24 md:mr-32">
                </a>
            </div>

            <div class="order-2 md:order-3 flex items-center" id="nav-content">
                <a class="inline-block no-underline hover:text-black" href="#">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3"/>
                        <path
                            d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"/>
                    </svg>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavigationComponent"
}
</script>
