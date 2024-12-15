<template>
    <div class=" flex flex-col">
        <div class=" flex justify-between items-baseline">
            <h1 class=" text-2xl  font-semibold">Employs Table</h1>
            <div class=" flex items-center gap-2">
                <select v-model="employStore.searchRole" name="role" id="role">
                    <option value="">All</option>
                    <option v-for="rol in employStore.getRoles" :value="rol" v-text="rol"></option>
                </select>
            </div>
        </div>
    </div>
    <div class=" mt-4">
        <Table />
    </div>
</template>
<script setup>
import Table from '@/components/table/table.vue';
import { useEmploy } from '@/composables/useEmploys';
import { useEmployStore } from '@/store/employersStore';
import { onMounted, ref } from 'vue';
let employLib = useEmploy()
let employStore = useEmployStore()




onMounted(async () => {

    employStore.setRoles(((await employLib.fetchRoles()).data).roles)
    let response = await employLib.fetchEmployers()
    // chequear si hay un error
    if (response.isSucces) {
        employStore.setEmployers(employLib.mapEmployers(response.data))
    }
    else {
        console.log(response.error);
    }
})


</script>