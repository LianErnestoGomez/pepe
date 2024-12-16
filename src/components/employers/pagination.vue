<template>

    <div class=" flex gap-x-2 w-full  justify-center mt-6">
        <button @click.prevent="emplStore.previusPage" class=" px-1  rounded-lg cursor-pointer">
            < </button>
                <div v-for="i in emplStore.getList" @click="handlePagClick" :key="i" v-text="i"
                    :class="{ 'bg-blue-500': i == emplStore.currentPage }" class="px-2  rounded-lg cursor-pointer">
                </div>
                <button @click.prevent="emplStore.nextPage" class=" px-1 cursor-pointer rounded-lg ">
                    >
                </button>

    </div>

</template>
<script setup>
import { useEmployersStore } from '@/store/employ.store';

let emplStore = useEmployersStore()

let handlePagClick = (e) => {
    let num = parseInt(e.target.innerText)
    emplStore.currentPage = num
}
</script>