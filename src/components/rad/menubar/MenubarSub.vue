<script setup lang="ts">
import OriginalMenubarSub from "../../ui/menubar/MenubarSub.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarSub v-bind="$attrs" data-slot="menubar-sub">
        <slot />
    </OriginalMenubarSub>
</template>
