<template>
    <nav class=" mb-4">
        <div class=" flex justify-between">
            <p class=" text-lg font-semibold">Dashboard</p>
            <ul class=" flex gap-x-3">
                <NavItem :to="'/'">Employs</NavItem>
                <NavItem :to="'/dart'">Dart</NavItem>
            </ul>
        </div>
    </nav>
</template>
<script setup>
import NavItem from "@/components/nav/item.vue"
</script>