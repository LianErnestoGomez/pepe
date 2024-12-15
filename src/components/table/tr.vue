<template>
    <tr>
        <Td v-text="empl.id"></Td>
        <Td v-text="empl.nombre"></Td>
        <Td v-text="empl.email"></Td>
        <Td v-text="empl.rol"></Td>
    </tr>
</template>
<script setup>
defineProps(["empl"])
import Td from './td.vue';
</script>