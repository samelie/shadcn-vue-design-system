<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
    <div class="space-y-8">
        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Button Variants
            </h2>
            <div class="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">
                    Secondary
                </Button>
                <Button variant="destructive">
                    Destructive
                </Button>
                <Button variant="outline">
                    Outline
                </Button>
                <Button variant="ghost">
                    Ghost
                </Button>
                <Button variant="link">
                    Link
                </Button>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Button Sizes
            </h2>
            <div class="flex flex-wrap items-center gap-4">
                <Button size="sm">
                    Small
                </Button>
                <Button size="default">
                    Default
                </Button>
                <Button size="lg">
                    Large
                </Button>
                <Button size="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </Button>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Button States
            </h2>
            <div class="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>
                    Disabled
                </Button>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4">
                Button with Icons
            </h2>
            <div class="flex flex-wrap gap-4">
                <Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    Add Item
                </Button>
                <Button variant="outline">
                    Download
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                </Button>
            </div>
        </section>
    </div>
</template>
