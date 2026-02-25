<template lang="html">
    <Head title="chidaSafe - Modern Toolbox Management" />
    <div class="min-h-screen bg-white font-sans antialiased">
        <!-- Navigation -->
        <nav
            class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2">
                        <img
                            src="./../../../public/images/chida.png"
                            alt="chidaSafe"
                            class="h-10 w-10"
                        />
                        <span class="text-xl font-bold text-gray-900"
                            >chidaSafe</span
                        >
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a
                            href="/"
                            class="text-gray-600 hover:text-gray-900 transition"
                            >Home</a
                        >
                        <a
                            href="/blog"
                            class="text-gray-600 hover:text-gray-900 transition"
                            >Blog</a
                        >
                        <a
                            href="/pricing"
                            class="text-gray-600 hover:text-gray-900 transition"
                            >Pricing</a
                        >
                    </div>

                    <!-- Auth Buttons -->
                    <div class="flex items-center space-x-4">
                        <Link
                            v-if="canLogin"
                            href="/login"
                            class="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
                        >
                            Log in
                        </Link>
                        <Link
                            v-if="canRegister"
                            href="/register"
                            class="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section
            class="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
        >
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <!-- Left Content -->
                    <div class="text-left">
                        <h1
                            class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                        >
                            Manage Your Toolbox
                            <span class="text-amber-500">Effortlessly</span>
                        </h1>
                        <p
                            class="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
                        >
                            The ultimate toolbox inventory app for garage
                            owners, helping you track, organize, and protect
                            your tools with precision.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <Link
                                v-if="canRegister"
                                href="/register"
                                class="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition shadow-lg shadow-gray-200"
                            >
                                Start free trial
                                <i class="bi bi-arrow-right ml-2"></i>
                            </Link>
                            <Link
                                v-if="canLogin"
                                href="/login"
                                class="px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition"
                            >
                                Sign in
                            </Link>
                        </div>
                        <div
                            class="flex items-center gap-8 mt-12 text-sm text-gray-500"
                        >
                            <div class="flex items-center gap-2">
                                <i
                                    class="bi bi-check-circle-fill text-green-500"
                                ></i>
                                <span>No credit card</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i
                                    class="bi bi-check-circle-fill text-green-500"
                                ></i>
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Image/Illustration -->
                    <div class="relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 rounded-3xl transform rotate-3 opacity-20"
                        ></div>
                        <img
                            src="./../../../public/images/chida.png"
                            alt="Toolbox management interface"
                            class="relative rounded-3xl shadow-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Trusted By / Social Proof -->
        <section class="py-16 border-y border-gray-100 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p
                    class="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8"
                >
                    Trusted by leading automotive workshops
                </p>
                <div
                    class="flex flex-wrap justify-center items-center gap-12 opacity-60"
                >
                    <div class="h-8 w-24 bg-gray-200 rounded"></div>
                    <div class="h-8 w-24 bg-gray-200 rounded"></div>
                    <div class="h-8 w-24 bg-gray-200 rounded"></div>
                    <div class="h-8 w-24 bg-gray-200 rounded"></div>
                    <div class="h-8 w-24 bg-gray-200 rounded"></div>
                </div>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to manage your tools
                    </h2>
                    <p class="text-xl text-gray-600">
                        Powerful features that help you track, organize, and
                        never lose a tool again.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <Blocks
                                class="w-7 h-7 text-amber-600 group-hover:text-white transition"
                            />
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Inventory Tracking
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Log your tools, categorize them, and quickly see
                            what you have on hand with real-time updates.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <BarcodeIcon
                                class="w-7 h-7 text-amber-600 group-hover:text-white transition"
                            />
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Barcode Scanning
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Scan and retrieve tool information instantly using
                            built-in barcode support.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <BarChart3Icon
                                class="w-7 h-7 text-amber-600 group-hover:text-white transition"
                            />
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Usage Reports
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Generate detailed reports on tool usage,
                            maintenance, and loss prevention.
                        </p>
                    </div>

                    <!-- Feature 4 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <ToolCaseIcon
                                class="w-7 h-7 text-amber-600 group-hover:text-white transition"
                            />
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Tool Check-in/out
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Track who borrowed which tool and when, with
                            automatic reminders.
                        </p>
                    </div>

                    <!-- Feature 5 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <i
                                class="bi bi-shield-check text-3xl text-amber-600 group-hover:text-white transition"
                            ></i>
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Warranty Tracking
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Never miss a warranty claim with automated
                            expiration alerts.
                        </p>
                    </div>

                    <!-- Feature 6 -->
                    <div
                        class="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300"
                    >
                        <div
                            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition"
                        >
                            <i
                                class="bi bi-phone text-3xl text-amber-600 group-hover:text-white transition"
                            ></i>
                        </div>
                        <h3
                            class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition"
                        >
                            Mobile App
                        </h3>
                        <p
                            class="text-gray-600 leading-relaxed group-hover:text-gray-300 transition"
                        >
                            Access your inventory anywhere with our iOS and
                            Android apps.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div class="max-w-7xl mx-auto">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p class="text-xl text-gray-600">
                        Choose the plan that fits your workshop size.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <!-- Free Plan -->
                    <div
                        class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition"
                    >
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Free
                        </h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-gray-900"
                                >$0</span
                            >
                            <span class="text-gray-600">/month</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>Up to 10 tools</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>Basic reporting</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>Email support</span>
                            </li>
                        </ul>
                        <Link
                            href="/register"
                            class="block text-center px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition"
                        >
                            Get started
                        </Link>
                    </div>

                    <!-- Pro Plan (Featured) -->
                    <div
                        class="bg-gray-900 rounded-2xl p-8 shadow-xl scale-105 relative border-2 border-amber-400"
                    >
                        <div
                            class="absolute -top-3 left-1/2 transform -translate-x-1/2"
                        >
                            <span
                                class="bg-amber-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                            >
                                Most popular
                            </span>
                        </div>
                        <h3 class="text-lg font-semibold text-white mb-2">
                            Pro
                        </h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-white"
                                >$9</span
                            >
                            <span class="text-gray-400">/month</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-3 text-gray-300">
                                <i
                                    class="bi bi-check-circle-fill text-amber-400 text-sm"
                                ></i>
                                <span>Unlimited tools</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-300">
                                <i
                                    class="bi bi-check-circle-fill text-amber-400 text-sm"
                                ></i>
                                <span>Advanced reports</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-300">
                                <i
                                    class="bi bi-check-circle-fill text-amber-400 text-sm"
                                ></i>
                                <span>Priority support</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-300">
                                <i
                                    class="bi bi-check-circle-fill text-amber-400 text-sm"
                                ></i>
                                <span>Barcode scanning</span>
                            </li>
                        </ul>
                        <Link
                            href="/register"
                            class="block text-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium rounded-xl transition"
                        >
                            Start free trial
                        </Link>
                    </div>

                    <!-- Enterprise Plan -->
                    <div
                        class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition"
                    >
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">
                            Enterprise
                        </h3>
                        <div class="mb-6">
                            <span class="text-4xl font-bold text-gray-900"
                                >Custom</span
                            >
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>Custom solutions</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>Dedicated manager</span>
                            </li>
                            <li class="flex items-center gap-3 text-gray-600">
                                <i
                                    class="bi bi-check-circle-fill text-green-500 text-sm"
                                ></i>
                                <span>24/7 phone support</span>
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            class="block text-center px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-xl transition"
                        >
                            Contact sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section
            class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-amber-400"
        >
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold text-white mb-4">
                    Ready to organize your tools?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Join thousands of workshops already using chidaSafe.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <Link
                        v-if="canRegister"
                        href="/register"
                        class="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-xl transition shadow-lg shadow-amber-600/30"
                    >
                        Start your free trial
                        <i class="bi bi-arrow-right ml-2"></i>
                    </Link>
                    <Link
                        href="/contact"
                        class="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition"
                    >
                        Contact sales
                    </Link>
                </div>
                <p class="text-sm text-white/70 mt-6">
                    No credit card required • 14-day free trial • Cancel anytime
                </p>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="grid md:grid-cols-4 gap-8 mb-16">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <img
                                src="./../../../public/images/chida.png"
                                alt="chidaSafe"
                                class="h-8 w-8"
                            />
                            <span class="text-xl font-bold text-white"
                                >chidaSafe</span
                            >
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            The ultimate toolbox inventory app for garage owners
                            and workshops.
                        </p>
                    </div>

                    <!-- Links -->
                    <div>
                        <h4 class="text-white font-semibold mb-4">Product</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a
                                    href="/features"
                                    class="hover:text-white transition"
                                    >Features</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/pricing"
                                    class="hover:text-white transition"
                                    >Pricing</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    class="hover:text-white transition"
                                    >Blog</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-semibold mb-4">Company</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a
                                    href="/about"
                                    class="hover:text-white transition"
                                    >About</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/careers"
                                    class="hover:text-white transition"
                                    >Careers</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    class="hover:text-white transition"
                                    >Contact</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a
                                    href="/privacy"
                                    class="hover:text-white transition"
                                    >Privacy</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    class="hover:text-white transition"
                                    >Terms</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"
                >
                    <p>&copy; 2026 chidaSafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

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

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

.font-sans {
    font-family:
        "Inter",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        sans-serif;
}
</style>
