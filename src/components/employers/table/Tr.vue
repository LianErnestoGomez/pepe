<template>
    <tr v-for="emp in employers" :key="emp.id" class="  border-b ">
        <Td class=" py-1 rounded-lg  tracking-wide" v-text="emp.name" />
        <Td class=" py-1 rounded-lg  tracking-wide" v-text="emp.email"/>
        <Td class=" py-1 rounded-lg  tracking-wide" v-text="emp.role"/>
    </tr>
</template>
<script setup>
import Td from './Td.vue';
defineProps({
    employers: {
        type: Array
    }
})
</script>