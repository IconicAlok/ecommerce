<template>
    <GuestLayout title="Set New Password">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-4 flex flex-col items-center justify-center w-full mt-3">
                    <div class="w-full max-w-md space-y-4">
                        <input id="password" name="password" type="password" autocomplete="password" required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="New password">
                        <input id="password" name="password" type="password" autocomplete="password" required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Repeat password">
                    </div>

                    <div class="w-full max-w-md flex justify-start">
                        <RouterLink to="/login" class="font-medium text-blue-600 hover:text-blue-500">
                            Go back to login
                        </RouterLink>
                    </div>

                    <button type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import GuestLayout from '@/components/GuestLayout.vue';
</script>

<style lang="scss" scoped></style>