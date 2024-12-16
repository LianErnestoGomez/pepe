<template>
    <div>
        <Table />
        <Pagination />
    </div>
</template>
<script setup>
import Pagination from '@/components/employers/pagination.vue';
import Table from '@/components/employers/table/table.vue';
import { useEmployersStore } from '@/store/employ.store';
import { onMounted } from 'vue';
let emplStore = useEmployersStore()

onMounted(async () => {
    await emplStore.fetchEmployers()
    await emplStore.fetchRoles()
})
</script>