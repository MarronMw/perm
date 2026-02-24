<script setup lang="ts">
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";

const page = usePage();
const user = page.props.auth.user;
console.log(page.props);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="context"><p>Hello bwana</p></div>
    </AuthenticatedLayout>
</template>
