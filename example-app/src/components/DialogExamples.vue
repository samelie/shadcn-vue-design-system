<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const username = ref('')

function handleSave() {
  alert(`Username saved: ${username.value}`)
}
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-2xl font-semibold mb-4">Dialog</h2>
      <Dialog>
        <DialogTrigger as-child>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Name
              </Label>
              <Input
                id="name"
                v-model="username"
                placeholder="Enter your name"
                class="col-span-3"
              />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                class="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button @click="handleSave">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Popover</h2>
      <div class="flex gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
              <div class="grid gap-2">
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="width">Width</Label>
                  <Input
                    id="width"
                    value="100%"
                    class="col-span-2 h-8"
                  />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="height">Height</Label>
                  <Input
                    id="height"
                    value="25px"
                    class="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger as-child>
            <Button>Help</Button>
          </PopoverTrigger>
          <PopoverContent class="w-80">
            <div class="space-y-2">
              <h4 class="font-medium">Need help?</h4>
              <p class="text-sm text-muted-foreground">
                Click on any component to see its documentation and usage examples.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Confirmation Dialog</h2>
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  </div>
</template>
