<template>
    <div class=" flex p-2  mb-3 justify-between">
        <h1 class=" text-xl" v-text="headerName"></h1>

        <ul class=" flex gap-x-2">
            <li class=" px-2 py-1 rounded-lg hover:scale-105 transition-transform"
                :class="{ 'bg-blue-500': isCurrentPage('employers'), 'font-semibold': isCurrentPage('employers') }">
                <RouterLink :to="{ name: 'employers' }">Employers</RouterLink>
            </li>
            <li class=" px-2 py-1 rounded-lg hover:scale-105 transition-transform"
                :class="{ 'bg-blue-500': isCurrentPage('chart'), 'font-semibold': isCurrentPage('chart') }">
                <RouterLink :to="{ name: 'chart' }">Chart</RouterLink>
            </li>
        </ul>
        <!-- <h1 class=" text-2xl mb-4 ">Employers Table</h1> -->
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute()

let headerName = computed(() => {
    return route.name == 'employers' ? "Employers Table" : "Chart Employers/Roles"
})

let isCurrentPage = (e) => {
    return route.name == e
}

</script>