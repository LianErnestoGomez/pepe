<template>
    <li class="  font-medium hover:scale-105 transition-transform ">
        <RouterLink :to="$props.to">
            <slot />
        </RouterLink>
    </li>
</template>
<script setup>
defineProps({
    to: {
        type: String,
        default: '/'
    }
})
</script>