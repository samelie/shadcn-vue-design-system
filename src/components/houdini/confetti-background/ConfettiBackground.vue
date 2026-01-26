<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { isHoudiniSupported, registerWorklets } from "~/composables/useHoudini";

export interface ConfettiBackgroundProps {
    /** Number of confetti pieces (default: 25) */
    count?: number;
    /** Animation speed multiplier (default: 1) */
    speed?: number;
    /** Minimum piece size in px (default: 8) */
    sizeMin?: number;
    /** Maximum piece size in px (default: 16) */
    sizeMax?: number;
    /** Base hue for pastel palette 0-360 (default: 280 purple) */
    hueBase?: number;
    /** Range of hue variation (default: 120) */
    hueRange?: number;
    /** Color saturation % (default: 70) */
    saturation?: number;
    /** Color lightness % (default: 80) */
    lightness?: number;
    /** Light source angle in radians (default: -0.785 = -45deg) */
    lightAngle?: number;
    /** Background color (default: transparent) */
    bgColor?: string;
    /** Random seed for consistent patterns (default: 42) */
    seed?: number;
    /** Animation duration in seconds (default: 20) */
    duration?: number;
    /** Whether to animate (default: true) */
    animated?: boolean;
}

const props = withDefaults(defineProps<ConfettiBackgroundProps>(), {
    count: 25,
    speed: 1,
    sizeMin: 8,
    sizeMax: 16,
    hueBase: 280,
    hueRange: 120,
    saturation: 70,
    lightness: 80,
    lightAngle: -0.785,
    bgColor: "transparent",
    seed: 42,
    duration: 20,
    animated: true,
});

const houdiniSupported = ref(false);
const workletReady = ref(false);

onMounted(async () => {
    houdiniSupported.value = isHoudiniSupported();
    if (houdiniSupported.value) {
        workletReady.value = await registerWorklets();
    }
});

const cssVars = computed(() => ({
    "--confetti-count": props.count,
    "--confetti-speed": props.speed,
    "--confetti-size-min": props.sizeMin,
    "--confetti-size-max": props.sizeMax,
    "--confetti-hue-base": props.hueBase,
    "--confetti-hue-range": props.hueRange,
    "--confetti-saturation": props.saturation,
    "--confetti-lightness": props.lightness,
    "--confetti-light-angle": props.lightAngle,
    "--confetti-bg-color": props.bgColor,
    "--confetti-seed": props.seed,
    "--confetti-duration": `${props.duration}s`,
}));

</script>

<template>
    <div
        class="confetti-background"
        :class="{
            'confetti-background--houdini': workletReady,
            'confetti-background--animated': animated && workletReady,
            'confetti-background--fallback': !workletReady,
        }"
        :style="cssVars"
    >
        <slot />
    </div>
</template>

<style>
/* CSS @property for animatable --confetti-time */
@property --confetti-time {
    syntax: "<number>";
    initial-value: 0;
    inherits: false;
}

.confetti-background {
    position: relative;
    width: 100%;
    height: 100%;
}

/* Fallback: theme background */
.confetti-background--fallback {
    background: var(--background);
}

/* Houdini paint worklet */
.confetti-background--houdini {
    background: paint(confetti-background);
}

/* Animation keyframes */
@keyframes confetti-fall {
    from {
        --confetti-time: 0;
    }
    to {
        --confetti-time: 1;
    }
}

/* Animated state */
.confetti-background--animated {
    animation: confetti-fall var(--confetti-duration, 20s) linear infinite;
}
</style>
