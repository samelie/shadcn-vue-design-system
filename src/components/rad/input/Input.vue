<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { InputVariants } from ".";
import { useVModel } from "@vueuse/core";
import { inputVariants } from ".";
import { cn } from "../../../lib";

interface Props {
    defaultValue?: string | number;
    modelValue?: string | number;
    variant?: InputVariants["variant"];
    class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const emits = defineEmits<(e: "update:modelValue", payload: string | number) => void>();

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <input
        v-model="modelValue"
        data-slot="input"
        :class="cn(inputVariants({ variant }), props.class)"
    >
</template>
