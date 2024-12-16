<template>
    <div class="  mx-auto bg-gray-50/50 ">
        <header class=" shadow-md bg-white p-6 flex flex-col items-center">
            <span class=" mt-4 text-2xl font-semibold ">Dashboard</span>
        </header>
        <main class=" max-w-screen-lg mx-auto p-6">
            <div>
                <div class=" p-4 shadow-sm bg-white rounded-lg flex flex-col   ">
                    <Nav />
                    <Suspense>
                        <RouterView />
                    </Suspense>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import Nav from '@/components/nav/bar.vue';


</script>