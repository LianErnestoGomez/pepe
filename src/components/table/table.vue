<template>
    <div class=" relative" > 
        <div class="overflow-x-auto">
            <table class="w-full min-w-full overflow-hidden">
                <Thead />
                <Tbody :employs="store.paginatedEmployers" />
            </table>
        </div>
        <div class="mt-16 sticky  flex justify-center">
            <nav class="flex items-center gap-2">
                <button @click="store.previousPage" :disabled="store.currentPage === 1"
                    class="px-3 py-1 border rounded disabled:opacity-50">
                    Previous
                </button>
                <span>{{ store.currentPage }} / {{ store.totalPages }}</span>
                <button @click="store.nextPage" :disabled="store.currentPage === store.totalPages"
                    class="px-3 py-1 border rounded disabled:opacity-50">
                    Next
                </button>
            </nav>
        </div>
    </div>
</template>

<script setup>
import Thead from './tHead.vue';
import Tbody from "./body.vue"
import { useEmployStore } from "../../store/employersStore"
import { ref, computed } from 'vue'


const store = useEmployStore()
const itemsPerPage = 10
const currentPage = ref(1)

const props = defineProps({
    search: {
        type: String,
        default: ''
    }
})

</script>
