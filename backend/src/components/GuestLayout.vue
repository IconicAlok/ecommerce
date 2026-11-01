<template>
    <div class="min-h-screen bg-gray-50">
        <div class="flex flex-col justify-center py-8 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mt-6 text-center text-3xl font-semibold text-gray-900">
                    {{ title }}
                </h2>
            </div>

        </div>

        <slot> </slot>

    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    }
});  
</script>

<style lang="scss" scoped></style>