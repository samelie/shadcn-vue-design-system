<script setup lang="ts">
import OriginalAvatar from "../../ui/avatar/Avatar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAvatar v-bind="$attrs" data-slot="avatar">
        <slot />
    </OriginalAvatar>
</template>
