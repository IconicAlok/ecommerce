<template>
    <div>
        <h2 class="mt-6 text-center text-3xl font-Semibold text-gray-900">Set New Password</h2>

        <form class="space-y-4 flex flex-col items-center justify-center w-full mt-3">
            <div class="w-full max-w-md">
                <input id="password" name="password" type="password" autocomplete="password" required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                    placeholder="New password">
                <input id="password" name="password" type="password" autocomplete="password" required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                    placeholder="Repeat password">
            </div>
            
            <div class="w-full max-w-md flex justify-start">
                <RouterLink to="/login" class="text-sm font-medium text-blue-600 hover:text-blue-500">
                   Go back to login
                </RouterLink>
            </div>

            <button type="submit"
                class="flex w-full max-w-md justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                Submit Request
            </button>
        </form>


    </div>
</template>

<script>
    export default {
        name:"Resetpassword"
    }
</script>

<style lang="scss" scoped>

</style>