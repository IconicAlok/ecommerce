<template>
    <nav class="bg-gray-50 w-full border-b border-default z-20">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- Logo -->
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <!-- <img src="" class="h-7" alt="Logo" /> -->
                <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Shop</span>
            </a>

            <!-- User Dropdown & Mobile Menu Button -->
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                <!-- User Profile Dropdown Button -->
                <button @click="isDropdownOpen = !isDropdownOpen" type="button"
                    class="flex text-sm border-1 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                    id="user-menu-button" aria-expanded="false">
                    <div
                        class="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-medium text-sm">
                        <img src="../assets/user_assets/avatar-default.svg" alt="user" class="w-6 h-6">
                    </div>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="isDropdownOpen"
                    class="absolute right-0 top-full mt-2 z-50 my-4 text-base list-none bg-neutral-primary divide-y divide-default border border-default rounded-base shadow"
                    id="user-dropdown">
                    <div class="px-4 py-3 min-w-[160px]">
                        <span class="block text-sm text-heading font-medium">Joseph McFall</span>
                        <span class="block text-sm text-body truncate">name@example.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-heading hover:bg-neutral-secondary-soft">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-heading hover:bg-neutral-secondary-soft">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-heading hover:bg-neutral-secondary-soft">Sign
                                out</a>
                        </li>
                    </ul>
                </div>

                <!-- Hamburger Mobile Menu Button -->
                <button @click="isMainMenuOpen = !isMainMenuOpen" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    aria-controls="navbar-user" aria-expanded="false">       
                    <Bars3Icon class="w-14 h-14"></Bars3Icon>
                </button>
            </div>

            <!-- Main Navigation Links -->
            <div :class="{ 'hidden': !isMainMenuOpen, 'block': isMainMenuOpen }"
                class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">About</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
const isDropdownOpen = ref(false)
const isMainMenuOpen = ref(false)

import { Bars3Icon } from '@heroicons/vue/24/outline';
</script>