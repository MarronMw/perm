<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

//reactive states
const users = ref<User[]>([]);

const fetchUsers = async () => {
    try {
        const { data } = await axios.get("users/all");
        console.log(data);
        users.value = data;
    } catch (error: any) {
        console.warn(error.response.data.message);
    }
};

onMounted(() => {
    fetchUsers();
});
</script>
<template lang="html">
    <Head title="Users" />

    <AuthenticatedLayout>
        <template #header>
            <h1 class="text-xl font-semibold leading-tight text-gray-800">
                Users Management
            </h1>
        </template>
        <main class="main">
            <section id="table" class="tableSect">
                <table class="table">
                    <thead class="tHead">
                        <tr class="theadRow">
                            <th class="tH">user_id</th>
                            <th class="tH">user_name</th>
                            <th class="tH">user_email</th>
                            <th class="tH">updated_at</th>
                            <th class="tH">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="data" v-for="user in users">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                {{
                                    new Date(
                                        user.updated_at,
                                    ).toLocaleDateString()
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </AuthenticatedLayout>
</template>
<style lang="css" scoped>
* {
    box-sizing: border-box;
}
html {
    /* font-size; */
}

.table {
    background-color: rgb(221, 221, 221);
    display: flex;
    flex-direction: column;
}
.tableSect {
    border-radius: 35px;
}
.tHead {
    color: rgb(35, 35, 35);
    background-color: rgb(53, 208, 255);
}
.theadRow {
    padding: 15px 0;
    justify-content: space-around;
}
.theadRow,
tbody > tr {
    display: flex;
    font-size: 1.2rem;
    text-transform: capitalize;
}

tbody > tr {
    border: 2px solid;
}

.main {
    padding: 0 4.5em;
    background-color: white;
}
</style>
<script lang="ts">
export interface User {
    id: number;
    email: string;
    created_at: string;
    name: string;
    updated_at: string;
}
</script>
