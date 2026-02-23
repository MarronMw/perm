<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template lang="html">
    <Head title="Welcome" />
    <div class="bg-gray-100 h-screen font-sans">
        <h1 class="text-2xl text-wrap font-bold font-serif text-blue-400">
            Welcome to Permission management
        </h1>
        <div class="" v-if="canLogin">
            <Link href="/login">Login</Link>
        </div>
        <div class="" v-if="canRegister">
            <Link href="/register">Register</Link>
        </div>
    </div>
</template>
