<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../lib/utils/cn";
import Empty from "../ui/empty/Empty.vue";
import EmptyDescription from "../ui/empty/EmptyDescription.vue";
import EmptyHeader from "../ui/empty/EmptyHeader.vue";
import EmptyTitle from "../ui/empty/EmptyTitle.vue";

interface Props {
    readonly title: string;
    readonly description?: string;
    readonly class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
    <Empty data-slot="chart-placeholder" :class="cn('h-40', props.class)">
        <EmptyHeader>
            <EmptyTitle>{{ props.title }}</EmptyTitle>
            <EmptyDescription v-if="props.description">
                {{ props.description }}
            </EmptyDescription>
        </EmptyHeader>
    </Empty>
</template>
