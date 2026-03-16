<script setup lang="ts">
import OriginalInputOTPGroup from "../../ui/input-otp/InputOTPGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputOTPGroup v-bind="$attrs" data-slot="input-o-t-p-group">
        <slot />
    </OriginalInputOTPGroup>
</template>
