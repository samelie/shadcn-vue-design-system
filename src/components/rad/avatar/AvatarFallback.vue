<script setup lang="ts">
import OriginalAvatarFallback from "../../ui/avatar/AvatarFallback.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAvatarFallback v-bind="$attrs" data-slot="avatar-fallback">
        <slot />
    </OriginalAvatarFallback>
</template>
