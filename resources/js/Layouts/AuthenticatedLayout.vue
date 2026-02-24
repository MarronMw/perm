<script setup lang="ts">
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import { Link } from "@inertiajs/vue3";
// Import Lucide Icons
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Menu,
} from "lucide-vue-next";

const showingSidebar = ref(true);
</script>

<template>
    <div class="flex min-h-screen bg-slate-50 font-sans antialiased">
        <aside
            :class="showingSidebar ? 'w-64' : 'w-20'"
            class="hidden bg-brand-white text-white transition-all duration-300 ease-in-out lg:flex flex-col overflow-hidden border-r border-white/5"
        >
            <div
                class="flex h-16 shrink-0 items-center justify-center px-4 bg-brand-dark/20"
            >
                <Link
                    :href="route('dashboard')"
                    class="flex items-center gap-3"
                >
                    <ApplicationLogo class="h-8 w-8 shrink-0" />
                    <span
                        v-if="showingSidebar"
                        class="font-brand font-black text-xl tracking-tighter text-white whitespace-nowrap"
                    >
                        CHIDASAFE
                    </span>
                </Link>
            </div>

            <nav class="flex-1 space-y-2 px-3 py-6">
                <NavLink
                    :href="route('dashboard')"
                    :active="route().current('dashboard')"
                    class="group flex items-center rounded-lg px-3 py-2.5 transition-all"
                    :class="[
                        route().current('dashboard')
                            ? 'bg-white/10 text-white'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white',
                        !showingSidebar ? 'justify-center' : '',
                    ]"
                >
                    <LayoutDashboard class="h-5 w-5 shrink-0" />
                    <span
                        v-if="showingSidebar"
                        class="ms-3 text-sm font-semibold whitespace-nowrap"
                        >Dashboard</span
                    >
                </NavLink>

                <NavLink
                    :href="route('users')"
                    :active="route().current('users')"
                    class="group flex items-center rounded-lg px-3 py-2.5 transition-all"
                    :class="[
                        route().current('users')
                            ? 'bg-white/10 text-white'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white',
                        !showingSidebar ? 'justify-center' : '',
                    ]"
                >
                    <Users class="h-5 w-5 shrink-0" />
                    <span
                        v-if="showingSidebar"
                        class="ms-3 text-sm font-semibold whitespace-nowrap"
                        >Users</span
                    >
                </NavLink>
            </nav>

            <div class="p-4 border-t border-white/10">
                <div
                    :class="!showingSidebar ? 'justify-center' : ''"
                    class="flex items-center"
                >
                    <Settings
                        class="h-5 w-5 text-slate-500 hover:text-white cursor-pointer transition"
                    />
                    <span
                        v-if="showingSidebar"
                        class="ms-3 text-xs text-slate-500 font-bold uppercase tracking-widest"
                        >Settings</span
                    >
                </div>
            </div>
        </aside>

        <div class="flex flex-1 flex-col">
            <nav
                class="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between shadow-sm"
            >
                <button
                    @click="showingSidebar = !showingSidebar"
                    class="rounded-md p-2 text-slate-500 hover:bg-slate-100 transition"
                >
                    <Menu class="h-6 w-6" />
                </button>

                <div class="flex items-center gap-4">
                    <Dropdown align="right" width="48">
                        <template #trigger>
                            <button
                                class="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-navy transition"
                            >
                                <div
                                    class="h-8 w-8 rounded-full bg-brand-silver/20 flex items-center justify-center text-brand-navy font-bold"
                                >
                                    {{ $page.props.auth.user.name.charAt(0) }}
                                </div>
                                <span class="hidden sm:inline">{{
                                    $page.props.auth.user.name
                                }}</span>
                            </button>
                        </template>

                        <template #content>
                            <DropdownLink :href="route('profile.edit')"
                                >Profile</DropdownLink
                            >
                            <DropdownLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                            >
                                <div class="flex items-center gap-2">
                                    <LogOut class="h-4 w-4" />
                                    Log Out
                                </div>
                            </DropdownLink>
                        </template>
                    </Dropdown>
                </div>
            </nav>

            <main class="flex-1 overflow-y-auto p-8">
                <slot />
            </main>
        </div>
    </div>
</template>
