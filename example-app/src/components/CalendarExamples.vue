<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import { ref } from "vue";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { RangeCalendar } from "~/components/ui/range-calendar";

const singleDate = ref<DateValue>();
const dateRange = ref<{ start: DateValue; end: DateValue }>();

function formatDate(date: DateValue | undefined) {
    if (!date) return "Pick a date";
    return date.toString();
}

function formatDateRange(range: { start: DateValue; end: DateValue } | undefined) {
    if (!range) return "Pick a date range";
    return `${range.start.toString()} - ${range.end.toString()}`;
}
</script>

<template>
    <div class="space-y-8">
        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Single Date Calendar
            </h2>
            <div class="flex gap-8">
                <div>
                    <Calendar v-model="singleDate" />
                </div>
                <div>
                    <p class="text-sm text-muted-foreground mb-2">
                        Selected Date:
                    </p>
                    <p class="font-mono">
                        {{ formatDate(singleDate) }}
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Date Range Calendar
            </h2>
            <div class="flex gap-8">
                <div>
                    <RangeCalendar v-model="dateRange" />
                </div>
                <div>
                    <p class="text-sm text-muted-foreground mb-2">
                        Selected Range:
                    </p>
                    <p class="font-mono">
                        {{ formatDateRange(dateRange) }}
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Calendar in Popover (Date Picker)
            </h2>
            <Popover>
                <PopoverTrigger as-child>
                    <Button variant="outline" class="w-[280px] justify-start text-left font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                        {{ formatDate(singleDate) }}
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                    <Calendar v-model="singleDate" />
                </PopoverContent>
            </Popover>
        </section>
    </div>
</template>
