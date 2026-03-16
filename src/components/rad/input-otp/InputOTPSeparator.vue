<script setup lang="ts">
import OriginalInputOTPSeparator from "../../ui/input-otp/InputOTPSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputOTPSeparator v-bind="$attrs" data-slot="input-o-t-p-separator">
        <slot />
    </OriginalInputOTPSeparator>
</template>
