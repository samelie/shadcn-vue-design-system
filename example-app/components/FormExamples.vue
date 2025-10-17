<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Checkbox } from '~/components/ui/checkbox'
import { Switch } from '~/components/ui/switch'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const notifications = ref(true)

function handleSubmit() {
  console.log({ email: email.value, password: password.value, rememberMe: rememberMe.value })
  alert('Form submitted! Check console for values.')
}
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">Login Form</h2>
      <form @submit.prevent="handleSubmit" class="max-w-md space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center space-x-2">
          <Checkbox id="remember" v-model:checked="rememberMe" />
          <Label for="remember" class="text-sm font-normal cursor-pointer">
            Remember me
          </Label>
        </div>

        <Button type="submit" class="w-full">
          Sign in
        </Button>
      </form>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Input Variants</h2>
      <div class="max-w-md space-y-4">
        <div class="space-y-2">
          <Label>Default Input</Label>
          <Input placeholder="Type something..." />
        </div>

        <div class="space-y-2">
          <Label>Disabled Input</Label>
          <Input placeholder="Disabled" disabled />
        </div>

        <div class="space-y-2">
          <Label>Input with Button</Label>
          <div class="flex gap-2">
            <Input placeholder="Enter text..." class="flex-1" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Switches & Checkboxes</h2>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <Switch id="notifications" v-model:checked="notifications" />
          <Label for="notifications" class="cursor-pointer">
            Enable notifications ({{ notifications ? 'On' : 'Off' }})
          </Label>
        </div>

        <div class="space-y-2">
          <p class="text-sm font-medium">Preferences</p>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label for="marketing" class="text-sm font-normal cursor-pointer">
                Marketing emails
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <Checkbox id="updates" />
              <Label for="updates" class="text-sm font-normal cursor-pointer">
                Product updates
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <Checkbox id="security" />
              <Label for="security" class="text-sm font-normal cursor-pointer">
                Security alerts
              </Label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
