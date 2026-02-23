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
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {{}}
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-2">
                        <h2>Quick Metrics</h2>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
