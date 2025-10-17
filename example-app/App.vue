<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ButtonExamples from './components/ButtonExamples.vue'
import CalendarExamples from './components/CalendarExamples.vue'
import DateRangePickerExamples from './components/DateRangePickerExamples.vue'
import FormExamples from './components/FormExamples.vue'
import DialogExamples from './components/DialogExamples.vue'

const activeTab = ref('buttons')
const isDark = ref(false)

const tabs = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'daterange', label: 'Date Range' },
  { id: 'forms', label: 'Forms' },
  { id: 'dialogs', label: 'Dialogs' },
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  // Set initial theme
  document.documentElement.classList.add('light')
})
</script>

<template>
  <div :class="['min-h-screen bg-background transition-colors', isDark ? 'dark' : 'light']">
    <div class="container mx-auto p-8">
      <header class="mb-12 flex justify-between items-start">
        <div>
          <h1 class="text-4xl font-bold mb-2 text-foreground">Design System Components</h1>
          <p class="text-muted-foreground">shadcn-vue component examples</p>
        </div>
        <button
          @click="toggleTheme"
          class="px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="!isDark"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
      </header>

      <!-- Tabs -->
      <div class="border-b mb-8">
        <nav class="flex gap-4">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-2 font-medium transition-colors',
              activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>

      <!-- Content -->
      <div class="space-y-8">
        <ButtonExamples v-if="activeTab === 'buttons'" />
        <CalendarExamples v-if="activeTab === 'calendar'" />
        <DateRangePickerExamples v-if="activeTab === 'daterange'" />
        <FormExamples v-if="activeTab === 'forms'" />
        <DialogExamples v-if="activeTab === 'dialogs'" />
      </div>
    </div>
  </div>
</template>
