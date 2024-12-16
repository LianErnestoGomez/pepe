<template>
    <div class="antialiased sans-serif bg-gray-200 w-lg min-h-screen">
        <div class="px-4 max-w-lg mx-auto py-10">
            <div class="shadow p-6 rounded-lg bg-white">
                <div class="md:flex md:justify-between md:items-center">
                    <div>
                        <h2 class="text-xl text-gray-800 font-bold leading-tight">Product Sales</h2>
                        <p class="mb-2 text-gray-600 text-sm">Monthly Average</p>
                    </div>
                    <div class="mb-4">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                            <div class="text-sm text-gray-700">Sales</div>
                        </div>
                    </div>
                </div>
                <div class="line my-8 relative">
                    <div v-if="tooltipOpen" ref="tooltip"
                        class="absolute z-10 shadow-lg rounded-lg bg-white p-2 text-sm"
                        :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }">
                        Sales: <span class="font-bold">{{ tooltipContent }}</span>
                    </div>
                    <div class="flex -mx-2 items-end mb-2">
                        <div v-for="(data, index) in chartData" :key="index" class="px-2 w-1/6">
                            <div :style="{ height: data + 'px' }"
                                class="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative cursor-pointer"
                                @mouseover="showTooltip(index, $event)" @mouseout="hideTooltip">
                                <div class="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">{{
                                    data }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-400 mx-auto"
                        :style="{ height: '1px', width: 100 - 100 / chartData.length + '%' }"></div>
                    <div class="flex -mx-2 items-center">
                        <div v-for="(label, index) in labels" :key="index" class="px-2 w-1/6">
                            <div class="bg-red-600 relative">
                                <div class="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto"
                                    style="width: 1px"></div>
                                <div class="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">{{
                                    label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useEmployersStore } from '@/store/employ.store';
import { onBeforeMount, ref, watch } from 'vue';
 let emplStore = useEmployersStore()

onBeforeMount(async () => {
    await emplStore.fetchStatistics();
})

const chartData = ref([]);
const labels = ref([]);
const tooltipContent = ref('');
const tooltipOpen = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);
const tooltip = ref(null);

watch(() => emplStore.employersAmountList, (newVal) => {
    chartData.value = newVal;
});

watch(() => emplStore.rolesList, (newVal) => {
    labels.value = newVal;
});

const showTooltip = (index, event) => {
    tooltipContent.value = chartData.value[index];
    const rect = event.target.getBoundingClientRect();
    tooltipX.value = rect.left + window.pageXOffset + rect.width / 2; // Center the tooltip horizontally
    tooltipY.value = rect.top + window.pageYOffset - tooltip.value.offsetHeight - 10; // Adjust vertical position
    tooltipOpen.value = true;
};

const hideTooltip = () => {
    tooltipContent.value = '';
    tooltipOpen.value = false;
};
</script>

<style scoped>
body {
    font-family: 'IBM Plex Mono', sans-serif;
}

.line {
    background: repeating-linear-gradient(to bottom, #eee, #eee 1px, #fff 1px, #fff 8%);
}

.tick {
    background: repeating-linear-gradient(to right, #eee, #eee 1px, #fff 1px, #fff 5%);
}
</style>
