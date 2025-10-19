<script setup lang="ts">
import { ref } from 'vue'
import { CalendarDate, type DateValue } from '@internationalized/date'
import { RangeCalendar, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNextButton, RangeCalendarPrevButton } from '@/components/ui/range-calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

interface DateRange {
  start: DateValue
  end: DateValue
}

// Example 1: Basic range calendar
const selectedRange = ref<DateRange>()

// Example 2: Range calendar with default value
const defaultRange = ref<DateRange>({
  start: new CalendarDate(2024, 1, 1),
  end: new CalendarDate(2024, 1, 15)
})

// Example 3: Range calendar in a popover
const popoverRange = ref<DateRange>()

// Format date for display
function formatDate(date: DateValue | undefined) {
  if (!date) return ''
  return `${date.month}/${date.day}/${date.year}`
}

function formatDateRange(range: DateRange | undefined) {
  if (!range) return 'Pick a date range'
  return `${formatDate(range.start)} - ${formatDate(range.end)}`
}
</script>

<template>
  <div class="space-y-12">
    <div>
      <h2 class="text-2xl font-semibold mb-6">Date Range Picker Examples</h2>
    </div>

    <!-- Example 1: Basic Range Calendar -->
    <section class="space-y-4">
      <div>
        <h3 class="text-xl font-semibold mb-2">Basic Range Calendar</h3>
        <p class="text-sm text-muted-foreground mb-4">
          A simple range calendar that allows users to select a date range
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <RangeCalendar v-model="selectedRange" class="rounded-md border">
          <RangeCalendarHeader>
            <RangeCalendarPrevButton />
            <RangeCalendarHeading />
            <RangeCalendarNextButton />
          </RangeCalendarHeader>
          <RangeCalendarGrid>
            <RangeCalendarGridRow>
              <RangeCalendarHeadCell v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">
                {{ day }}
              </RangeCalendarHeadCell>
            </RangeCalendarGridRow>
            <RangeCalendarGridRow v-for="(week, i) in 6" :key="i">
              <RangeCalendarCell v-for="(day, j) in 7" :key="j" :day="day">
                <RangeCalendarCellTrigger :day="day" />
              </RangeCalendarCell>
            </RangeCalendarGridRow>
          </RangeCalendarGrid>
        </RangeCalendar>

        <div class="text-sm">
          <strong>Selected Range:</strong>
          {{ selectedRange ? formatDateRange(selectedRange) : 'No range selected' }}
        </div>
      </div>
    </section>

    <!-- Example 2: Range Calendar with Default Value -->
    <section class="space-y-4">
      <div>
        <h3 class="text-xl font-semibold mb-2">Range Calendar with Default Value</h3>
        <p class="text-sm text-muted-foreground mb-4">
          A range calendar with a pre-selected date range
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <RangeCalendar v-model="defaultRange" class="rounded-md border">
          <RangeCalendarHeader>
            <RangeCalendarPrevButton />
            <RangeCalendarHeading />
            <RangeCalendarNextButton />
          </RangeCalendarHeader>
          <RangeCalendarGrid>
            <RangeCalendarGridRow>
              <RangeCalendarHeadCell v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">
                {{ day }}
              </RangeCalendarHeadCell>
            </RangeCalendarGridRow>
            <RangeCalendarGridRow v-for="(week, i) in 6" :key="i">
              <RangeCalendarCell v-for="(day, j) in 7" :key="j" :day="day">
                <RangeCalendarCellTrigger :day="day" />
              </RangeCalendarCell>
            </RangeCalendarGridRow>
          </RangeCalendarGrid>
        </RangeCalendar>

        <div class="text-sm">
          <strong>Selected Range:</strong> {{ formatDateRange(defaultRange) }}
        </div>
      </div>
    </section>

    <!-- Example 3: Range Calendar in a Popover -->
    <section class="space-y-4">
      <div>
        <h3 class="text-xl font-semibold mb-2">Range Calendar in a Popover</h3>
        <p class="text-sm text-muted-foreground mb-4">
          A date range picker in a popover for better UX
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-[300px] justify-start text-left font-normal">
              {{ formatDateRange(popoverRange) }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0" align="start">
            <RangeCalendar v-model="popoverRange">
              <RangeCalendarHeader>
                <RangeCalendarPrevButton />
                <RangeCalendarHeading />
                <RangeCalendarNextButton />
              </RangeCalendarHeader>
              <RangeCalendarGrid>
                <RangeCalendarGridRow>
                  <RangeCalendarHeadCell v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">
                    {{ day }}
                  </RangeCalendarHeadCell>
                </RangeCalendarGridRow>
                <RangeCalendarGridRow v-for="(week, i) in 6" :key="i">
                  <RangeCalendarCell v-for="(day, j) in 7" :key="j" :day="day">
                    <RangeCalendarCellTrigger :day="day" />
                  </RangeCalendarCell>
                </RangeCalendarGridRow>
              </RangeCalendarGrid>
            </RangeCalendar>
          </PopoverContent>
        </Popover>

        <div class="text-sm">
          <strong>Selected Range:</strong>
          {{ popoverRange ? formatDateRange(popoverRange) : 'No range selected' }}
        </div>
      </div>
    </section>
  </div>
</template>
