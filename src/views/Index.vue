<template>
    <div class=" max-w-5xl  mx-auto p-4 ">
        <Nav />
        <Suspense>
            <RouterView />
        </Suspense>
    </div>
</template>
<script setup>
import Nav from '@/components/nav/bar.vue';
</script>