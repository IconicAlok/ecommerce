<template>
    <div class="flex h-screen w-screen flex-col bg-gray-50 overflow-hidden">
      
        <div class="h-16 flex-none z-10 border-b bg-white">
            <Navbar></Navbar>
        </div>
        
      
        <div class="flex flex-1 overflow-hidden">
          
            <Sidebar></Sidebar>
          
            <main class="flex-1 p-6 overflow-y-auto">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
</script>