<script setup lang="ts">
import type { TooltipContentProps } from "reka-ui";
import type { Component, HTMLAttributes } from "vue";
import type { ButtonVariants } from "../ui/button";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../ui/tooltip";

interface Props {
    icon: Component;
    label: string;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    side?: TooltipContentProps["side"];
    sideOffset?: number;
    buttonClass?: HTMLAttributes["class"];
}

withDefaults(defineProps<Props>(), {
    variant: "ghost",
    size: "icon",
    side: "top",
    sideOffset: 4,
});

const emit = defineEmits<{
    click: [event: MouseEvent];
}>();
</script>

<template>
    <Tooltip>
        <TooltipTrigger as-child>
            <Button
                :variant="variant"
                :size="size"
                :aria-label="label"
                :class="buttonClass"
                @click="emit('click', $event)"
            >
                <component :is="icon" />
            </Button>
        </TooltipTrigger>
        <TooltipContent :side="side" :side-offset="sideOffset">
            <p>{{ label }}</p>
        </TooltipContent>
    </Tooltip>
</template>
