<template>
    <aside id="default-sidebar"
        class="z-40 w-64 h-full flex-none transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-blue-800 border-e border-blue-900">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2 text-white rounded-md transition-colors duration-150 hover:bg-blue-700 group">
                        <HomeIcon class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-150" />
                        <span class="ms-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2 text-white rounded-md transition-colors duration-150 hover:bg-blue-700 group">
                        <ChartBarIcon
                            class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-150" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2 text-white rounded-md transition-colors duration-150 hover:bg-blue-700 group">
                        <UsersIcon
                            class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-150" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2 text-white rounded-md transition-colors duration-150 hover:bg-blue-700 group">
                        <Bars3Icon
                            class="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-150" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { HomeIcon, ChartBarIcon, UsersIcon, Bars3Icon } from '@heroicons/vue/24/outline';
</script>
