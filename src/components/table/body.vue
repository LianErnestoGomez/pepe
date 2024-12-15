<template>
    <tbody>
        <Tr v-for="emp in employs" :key="emp.id" :empl="emp" />
    </tbody>
</template>
<script setup>

let props = defineProps({
    employs: Array
})

import Tr from "@/components/table/tr.vue"
</script>