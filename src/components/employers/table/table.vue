<template>

    <table class=" w-full">
        <thead>
            <tr>
                <th class="text-left font-medium">Nombre</th>
                <th class="text-left font-medium">Email</th>
                <th class="text-left font-medium">
                    <label for="rol"  class=" px-2">Rol</label>
                    <select class=" focus:outline-none hover:cursor-pointer p-2 shadow-sm hover:scale-105 transition-transform rounded-lg" v-model="emplStore.filterRole" name="rol" id="rol">
                        <option value="all" >All</option>
                        <option v-for="empl in emplStore.rolesList " :value="empl" v-text="empl"></option>
                    </select>
                </th>
            </tr>
        </thead>
        <tbody class=" ">
            <Tr :employers="emplStore.getEmployers" />
        </tbody>
    </table>
</template>
<script setup>
import { useEmployersStore } from '@/store/employ.store';
import Tr from './Tr.vue';
let emplStore = useEmployersStore()

</script>