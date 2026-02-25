<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import {
    BarChart3Icon,
    BarcodeIcon,
    Blocks,
    ToolCaseIcon,
} from "lucide-vue-next";

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template lang="html">
    <Head title="chidaSafe - Toolbox Management" />
    <div class="min-h-screen flex flex-col bg-brand-navy text-brand-light">
        <!-- Navbar -->
        <nav class="bg-brand-white text-brand-dark">
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
            >
                <div class="flex-shrink-0 font-brand font-tight text-xl">
                    <img
                        src="./../../../public/images/chida.png"
                        alt="chidaSafe Logo"
                        class="h-10 w-10 inline-block mr-2"
                    />
                    chidaSafe
                </div>
                <div class="hidden md:flex space-x-8">
                    <Link href="/" class="hover:text-brand-warning">Home</Link>
                    <Link href="/blog" class="hover:text-brand-warning"
                        >Blog</Link
                    >
                    <Link href="/pricing" class="hover:text-brand-warning"
                        >Pricing</Link
                    >
                </div>
                <div class="flex space-x-4">
                    <Link
                        v-if="canLogin"
                        href="/login"
                        class="px-4 py-2 outline outline-1 border hover:bg-brand-navy hover:text-brand-light rounded-full text-sm font-semibold"
                        >Login</Link
                    >
                    <Link
                        v-if="canRegister"
                        href="/register"
                        class="px-4 py-2 border border-white rounded-md text-sm hover:bg-white hover:text-brand-warning hover:font-medium"
                        >Register</Link
                    >
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section
            class="flex-grow flex items-center justify-center bg-brand-navy py-24 px-6"
        >
            <div class="max-w-3xl text-center">
                <img
                    src="./../../../public/images/chida.png"
                    alt="Garage tools"
                    class="mx-auto mb-6 rounded-lg shadow-lg w-20"
                />
                <h1 class="text-5xl md:text-7xl font-brand font-tight mb-6">
                    Manage Your Toolbox Effortlessly
                </h1>
                <p class="text-xl md:text-2xl leading-relaxed mb-8">
                    ChidaSafe is the ultimate toolbox inventory app for garage
                    owners, helping you track, organize, and protect your tools.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <Link
                        v-if="canRegister"
                        href="/register"
                        class="px-8 py-3 bg-brand-warning hover:bg-brand-dark text-white rounded-md font-semibold"
                        >Get Started</Link
                    >
                    <Link
                        v-if="canLogin"
                        href="/login"
                        class="px-8 py-3 border border-brand-warning text-brand-warning hover:bg-brand-warning hover:text-white rounded-md font-semibold"
                        >Sign In</Link
                    >
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 px-6 bg-brand-white text-brand-dark">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-3xl font-brand font-tight text-center mb-12">
                    Features
                </h2>
                <div class="grid gap-8 md:grid-cols-3">
                    <div
                        class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <Blocks class="h-12 w-12 text-brand-warning mb-4" />
                        <h3 class="text-xl font-semibold mb-2">
                            Inventory Tracking
                        </h3>
                        <p class="text-gray-700">
                            Log your tools, categorize them, and quickly see
                            what you have on hand.
                        </p>
                    </div>
                    <div
                        class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <BarcodeIcon
                            class="h-12 w-12 text-brand-warning mb-4"
                        />
                        <h3 class="text-xl font-semibold mb-2">
                            Barcode Scanning
                        </h3>
                        <p class="text-gray-700">
                            Scan and retrieve tool information instantly using
                            built-in barcode support.
                        </p>
                    </div>
                    <div
                        class="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
                    >
                        <BarChart3Icon
                            class="h-12 w-12 text-brand-warning mb-4"
                        />
                        <h3 class="text-xl font-semibold mb-2">
                            Usage Reports
                        </h3>
                        <p class="text-gray-700">
                            Generate reports on tool usage, maintenance, and
                            loss prevention.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="py-16 px-6 bg-brand-white text-brand-dark">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-3xl font-brand font-tight text-center mb-12">
                    Pricing
                </h2>
                <div class="grid gap-8 md:grid-cols-3">
                    <div class="p-6 border rounded-lg shadow">
                        <h3 class="text-2xl font-semibold mb-4">Free</h3>
                        <p class="text-lg mb-6">$0 / month</p>
                        <ul class="mb-6 space-y-2 text-gray-700">
                            <li>Up to 10 tools</li>
                            <li>Basic reporting</li>
                            <li>Email support</li>
                        </ul>
                        <Link
                            href="/register"
                            class="inline-block px-6 py-2 bg-brand-navy text-white rounded-md font-semibold"
                            >Get Started</Link
                        >
                    </div>
                    <div class="p-6 border rounded-lg shadow">
                        <h3 class="text-2xl font-semibold mb-4">Pro</h3>
                        <p class="text-lg mb-6">$9 / month</p>
                        <ul class="mb-6 space-y-2 text-gray-700">
                            <li>Unlimited tools</li>
                            <li>Advanced reports</li>
                            <li>Priority support</li>
                        </ul>
                        <Link
                            href="/register"
                            class="inline-block px-6 py-2 bg-brand-success text-white rounded-md font-semibold"
                            >Get Started</Link
                        >
                    </div>
                    <div class="p-6 border rounded-lg shadow">
                        <h3 class="text-2xl font-semibold mb-4">Enterprise</h3>
                        <p class="text-lg mb-6">Contact us</p>
                        <ul class="mb-6 space-y-2 text-gray-700">
                            <li>Custom solutions</li>
                            <li>Dedicated account manager</li>
                            <li>24/7 support</li>
                        </ul>
                        <Link
                            href="/contact"
                            class="inline-block px-6 py-2 border border-brand-navy text-brand-navy rounded-md font-semibold"
                            >Contact Sales</Link
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section class="py-12 bg-brand-navy text-white text-center">
            <h2 class="text-3xl font-semibold mb-4">
                Ready to organize your tools?
            </h2>
            <Link
                v-if="canRegister"
                href="/register"
                class="px-8 py-3 bg-brand-success hover:bg-brand-warning rounded-md font-semibold"
                >Start your free trial</Link
            >
        </section>

        <!-- Footer -->
        <footer class="py-6 text-center text-sm bg-brand-light">
            <p class="text-gray-600">
                &copy; 2026 chidaSafe. All rights reserved.
            </p>
        </footer>
    </div>
</template>
