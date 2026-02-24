<script setup lang="ts">
import { ChevronUp } from "lucide-vue-next";
import { computed, onMounted, ref, watch } from "vue";
import Drawer from "../../components/ui/drawer/Drawer.vue";
import DrawerContent from "../../components/ui/drawer/DrawerContent.vue";
import DrawerDescription from "../../components/ui/drawer/DrawerDescription.vue";
import DrawerHeader from "../../components/ui/drawer/DrawerHeader.vue";
import DrawerTitle from "../../components/ui/drawer/DrawerTitle.vue";
import { cn } from "../../lib/utils";

/**
 * AppDrawer - Mobile-optimized drawer with snap points
 *
 * SNAP POINT CALCULATION (direction='bottom'):
 * =============================================
 * Snap points define the HEIGHT the drawer occupies from the bottom of the screen.
 *
 * Formula:
 *   drawerHeight = snapPoint × window.innerHeight
 *   offset = window.innerHeight - drawerHeight
 *
 * Example (1000px screen):
 *   - snapPoint: 0.25 → drawer is 250px tall (25% of screen)
 *   - snapPoint: 0.5  → drawer is 500px tall (50% of screen)
 *   - snapPoint: 1    → drawer is 1000px tall (full screen)
 *
 * IMPORTANT GOTCHAS:
 * - Values are PERCENTAGES of screen height, not distance from bottom
 * - Lower values (0.1) = shorter drawer = less visible
 * - Higher values (0.8) = taller drawer = more visible
 * - Ensure snap value provides enough height for your content
 *   (handle ~20px + padding ~20px + content = minimum ~60-90px)
 * - Minimum practical snap point: ~0.1 (10% of screen)
 *
 * PROP BINDING SYNTAX:
 * - Use kebab-case for props: :snap-points NOT :snapPoints
 * - Use v-model for activeSnapPoint: v-model:active-snap-point
 * - No @snap event exists - use v-model:active-snap-point reactivity instead
 *
 * SCROLL vs DRAG GESTURE SEPARATION:
 * ===================================
 * Vaul automatically detects scrollable content (overflow-y-auto) and separates:
 * - VERTICAL SCROLL: User scrolls content inside drawer
 * - VERTICAL DRAG: User drags drawer to change snap position
 *
 * How it works:
 * 1. Content scrolling is prioritized when scroll container has scrollable content
 * 2. After scrolling stops, there's a lockout period (scrollLockTimeout)
 * 3. After lockout, drawer becomes draggable again
 * 4. Drawer handle is always draggable regardless of scroll state
 *
 * Configuration options:
 * - scrollLockTimeout: Time (ms) drawer is locked after scroll (default: 500ms)
 * - handleOnly: If true, ONLY the handle can drag drawer (content always scrolls)
 *
 * Best practices:
 * - Keep scrollLockTimeout short (300-500ms) for responsive UX
 * - Use handleOnly=true for content-heavy drawers with lots of scrolling
 * - Ensure scrollable area has clear visual boundaries
 */

interface AppDrawerProps {
    title?: string;
    description?: string;

    // Snap points: array of decimals (0-1) representing % of screen height
    // Example: [0.25, 0.5, 1] = [25% height, 50% height, full screen]
    snapPoints?: number[];
    defaultSnapPoint?: number;

    // Behavior
    modal?: boolean;
    shouldScaleBackground?: boolean;
    direction?: "top" | "bottom" | "left" | "right";

    // Scroll/Drag separation
    // Time (ms) drawer is locked after scrolling content (prevents accidental drags)
    scrollLockTimeout?: number;
    // When true, only the handle can drag drawer (content area always scrolls)
    handleOnly?: boolean;

    // Tab styling
    tabHeight?: string;
    tabLabel?: string;
    showTabIcon?: boolean;

    // Width control (CSS value like '100%', '400px', '50vw')
    width?: string;

    // Horizontal positioning for bottom/top drawers
    side?: "left" | "center" | "right";
}

const props = withDefaults(defineProps<AppDrawerProps>(), {
    title: "Details",
    description: "",

    // Default snap points:
    // - 0.2 (20% of screen) = peek/tab view (~150-200px on typical mobile)
    // - 0.5 (50% of screen) = half-open
    // - 1.0 (100%) = full screen
    snapPoints: () => [0.2, 0.5, 1],
    defaultSnapPoint: 0.2,

    modal: false, // Non-modal allows map interaction underneath
    shouldScaleBackground: false, // Don't scale background for better performance
    direction: "bottom",

    // Scroll/Drag defaults:
    // 500ms lockout after scrolling = good balance between scroll stability and drag responsiveness
    scrollLockTimeout: 500,
    // handleOnly: false = both handle AND content can drag drawer
    // Set to true if drawer has lots of scrollable content and users accidentally trigger drags
    handleOnly: false,

    tabHeight: "50px",
    tabLabel: "View Details",
    showTabIcon: true,

    width: "100%",
});

const emit = defineEmits<{
    snapChange: [snapPoint: number];
    open: [];
    close: [];
}>();

// State: drawer is always open, just at different snap heights
const isOpen = ref(true);
const activeSnap = ref<number | undefined>(props.defaultSnapPoint);

// Compute available height for scrollable content based on current snap position
// This ensures content can scroll when drawer is partially visible
const contentMaxHeight = computed(() => {
    // activeSnap is the % of screen the drawer occupies
    // We need to subtract space for: handle (~20px) + header + padding + tab area
    const CHROME_HEIGHT = 120; // Approximate height of handle + header + padding
    const snap = activeSnap.value ?? props.defaultSnapPoint;
    const availableHeight = `calc(${snap * 100}vh - ${CHROME_HEIGHT}px)`;

    console.warn("[AppDrawer] Content max-height:", availableHeight, "for snap:", snap);
    return availableHeight;
});

// Compute drawer width style
const drawerStyle = computed(() => ({
    width: props.width,
}));

// Compute drawer positioning class using Tailwind justify-self
const drawerClass = computed(() => {
    const classes = ["drawer-with-tab", "h-full", "max-h-[97%]"];

    // Add justify-self for horizontal positioning (bottom/top drawers only)
    if (props.side && (props.direction === "bottom" || props.direction === "top")) {
        const justifyMap = {
            left: "justify-self-start",
            center: "justify-self-center",
            right: "justify-self-end",
        };
        classes.push(justifyMap[props.side]);
    }

    return cn(...classes);
});

// Safe computed for checking if expanded beyond second snap point
const isExpanded = computed(() => {
    const snap = activeSnap.value ?? props.defaultSnapPoint;
    const secondSnap = props.snapPoints[1] ?? props.defaultSnapPoint;
    return snap > secondSnap;
});

onMounted(() => {
    isOpen.value = true;
    const snap = activeSnap.value ?? props.defaultSnapPoint;
    console.warn("[AppDrawer] Mounted at snap:", snap, `(${snap * 100}% of screen height)`);
});

// Watch for snap point changes and notify parent
// Note: activeSnap is bound via v-model, so vaul-vue updates it automatically
watch(activeSnap, newSnap => {
    if (newSnap !== undefined) {
        console.warn("[AppDrawer] Snapped to:", newSnap, `(${newSnap * 100}% of screen height)`);
        emit("snapChange", newSnap);
    }
});

// Debug state
watch([isOpen, activeSnap], ([open, snap]) => {
    const snapVal = snap ?? props.defaultSnapPoint;
    console.warn("[AppDrawer] State:", {
        open,
        snap: snapVal,
        snapPercentage: `${snapVal * 100}%`,
        snapPoints: props.snapPoints.map(s => `${s * 100}%`),
        contentMaxHeight: contentMaxHeight.value,
    });
}, { immediate: true });

// Public API for parent components
defineExpose({
    /** Jump to specific snap point by index */
    snapTo: (index: number) => {
        const snapPoint = props.snapPoints[index];
        if (index >= 0 && index < props.snapPoints.length && snapPoint !== undefined) {
            activeSnap.value = snapPoint;
        }
    },
    /** Expand to largest snap point (usually full screen) */
    expand: () => {
        const snapPoint = props.snapPoints[props.snapPoints.length - 1];
        if (snapPoint !== undefined) activeSnap.value = snapPoint;
    },
    /** Collapse to smallest snap point (usually peek/tab view) */
    collapse: () => {
        const snapPoint = props.snapPoints[0];
        if (snapPoint !== undefined) activeSnap.value = snapPoint;
    },
    /** Get current snap point value */
    getCurrentSnap: () => activeSnap.value ?? props.defaultSnapPoint,
    /** Get current snap point as percentage string */
    getCurrentSnapPercentage: () => `${(activeSnap.value ?? props.defaultSnapPoint) * 100}%`,
});
</script>

<template>
    <Drawer
        v-model:open="isOpen" v-model:active-snap-point="activeSnap" :snap-points="snapPoints" :modal="modal"
        :should-scale-background="shouldScaleBackground" :direction="direction" :dismissible="false"
        :scroll-lock-timeout="scrollLockTimeout" :handle-only="handleOnly"
    >
        <DrawerContent :class="drawerClass" :style="drawerStyle" :aria-describedby="description ? undefined : 'undefined'">
            <!-- Drag handle bar (automatically positioned by vaul) -->

            <!-- Always include title for accessibility (visually hidden when collapsed) -->
            <DrawerHeader :class="activeSnap === snapPoints[0] ? 'sr-only' : 'text-left'">
                <DrawerTitle>
                    <slot name="title">
                        {{ title }}
                    </slot>
                </DrawerTitle>

                <DrawerDescription v-if="description || $slots.description">
                    <slot name="description">
                        {{ description }}
                    </slot>
                </DrawerDescription>
            </DrawerHeader>

            <!-- Tab content - visible at smallest snap point -->
            <div
                v-if="activeSnap === snapPoints[0]"
                class="flex items-center justify-center gap-2 px-4 bg-background border-t border-border"
                :style="{ height: tabHeight }"
            >
                <ChevronUp v-if="showTabIcon" class="h-5 w-5 text-muted-foreground animate-bounce" />
                <span class="text-sm font-medium text-foreground">
                    {{ tabLabel }}
                </span>
            </div>

            <!-- Full drawer content - visible at larger snap points -->
            <template v-if="activeSnap !== snapPoints[0]">
                <!-- Scrollable content area with dynamic height based on snap position -->
                <div class="flex-1 overflow-y-auto px-4 pb-4" :style="{ maxHeight: contentMaxHeight }">
                    <slot :snap="activeSnap ?? defaultSnapPoint" :is-expanded="isExpanded" />
                </div>

                <!-- Optional footer -->
                <div v-if="$slots.footer" class="border-t border-border p-4">
                    <slot name="footer" />
                </div>
            </template>
        </DrawerContent>
    </Drawer>
</template>

<style scoped>
/* Enhance touch interactions */
:deep(button),
:deep(a) {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}

/* Smooth scrolling with momentum on iOS */
:deep(.overflow-y-auto) {
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    /* Prevent pull-to-refresh while scrolling */
    touch-action: pan-y;
    /* Allow vertical scrolling, block horizontal/pinch */
}

/* Drawer gesture area - vaul handles touch-action internally */
:deep([data-vaul-drawer]) {
    /* Note: vaul automatically manages touch-action based on scroll state
   * - During content scroll: touch-action allows pan-y
   * - After scrollLockTimeout: touch-action enables drawer dragging
   * Don't override touch-action here or it breaks scroll detection
   */
    user-select: none;
    -webkit-user-select: none;
}

/* Always show drag handle for tab view */
.drawer-with-tab :deep(.bg-muted) {
    opacity: 1 !important;
    display: block !important;
}

/* Ensure drawer is always visible (never fully hidden) */
:deep([data-vaul-drawer-direction="bottom"]) {
    bottom: 0 !important;
}

/* DEBUG: Make drawer super visible */
.drawer-with-tab {
    border: 3px solid red !important;
    box-shadow: 0 -4px 20px rgba(255, 0, 0, 0.5) !important;
}
</style>
