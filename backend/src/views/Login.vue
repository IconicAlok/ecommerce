<template>
    <GuestLayout title="Sign in to your account">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <!-- 1. Intercept form submit and use Vue method -->
                <form class="space-y-6" @submit.prevent="login">

                    <!-- 2. Display error message if it exists -->
                    <div v-if="errorMsg" class="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {{ errorMsg }}
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                        <div class="mt-1">
                            <!-- 3. Bound with v-model -->
                            <input id="email" v-model="user.email" name="email" type="email" autocomplete="email"
                                required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address">
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                        <div class="mt-1">
                            <!-- 4. Bound with v-model -->
                            <input id="password" v-model="user.password" name="password" type="password"
                                autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password">
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <!-- 5. Bound with v-model -->
                            <input id="remember_me" v-model="user.remember" name="remember_me" type="checkbox"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div class="text-sm">
                            <RouterLink to="/request-password" class="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password? </RouterLink>
                        </div>
                    </div>

                    <div>
                        <!-- 6. Disabled button while loading -->
                        <button type="submit" :disabled="loading"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                            <span v-if="loading">Signing in...</span>
                            <span v-else>Sign in</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useStore } from 'vuex'; // Change to 'pinia' if you use Pinia instead
import GuestLayout from '../components/GuestLayout.vue';

// Initialize composables
const router = useRouter();
const store = useStore();

// Setup reactive state
const loading = ref(false);
const errorMsg = ref("");

const user = reactive({
    email: '',
    password: '',
    remember: false
});

function login() {
    loading.value = true;
    errorMsg.value = "";

    store.dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({ name: 'app.dashboard' });
        })
        .catch((error) => {
            loading.value = false;
            errorMsg.value = error.response?.data?.message || "An error occurred during sign in.";
        });
}

</script>

<style scoped></style>
