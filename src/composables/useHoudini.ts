import type { Ref } from "vue";
import { onMounted, readonly, ref } from "vue";

// Vite's ?url suffix returns resolved URLs for paint worklets
import animatedGradientUrl from "./houdini/worklets/animated-gradient.js?url";
import confettiBackgroundUrl from "./houdini/worklets/confetti-background.js?url";
import smoothBorderUrl from "./houdini/worklets/smooth-border.js?url";
import squircleUrl from "./houdini/worklets/squircle.js?url";

export interface HoudiniState {
    supported: Readonly<Ref<boolean>>;
    initialized: Readonly<Ref<boolean>>;
    error: Readonly<Ref<Error | null>>;
}

// Module-level state for singleton pattern
let moduleSupported = false;
let moduleInitialized = false;
let moduleError: Error | null = null;
let initPromise: Promise<boolean> | null = null;

/**
 * Check if CSS Paint Worklet API is supported
 */
interface PaintWorklet {
    addModule: (url: string) => Promise<void>;
}

type CSSHoudini = typeof CSS & {
    paintWorklet: PaintWorklet;
};

function isCSSHoudini(css: typeof CSS): css is CSSHoudini {
    return "paintWorklet" in css;
}

export function isHoudiniSupported(): boolean {
    if (typeof window === "undefined") return false;
    return "CSS" in window && isCSSHoudini(window.CSS);
}

/**
 * Register all Houdini paint worklets
 * Uses Vite's ?url imports for proper asset handling
 * Returns promise resolving to success status
 */
export async function registerWorklets(): Promise<boolean> {
    if (!isHoudiniSupported()) return false;
    if (moduleInitialized) return true;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        try {
            const css = window.CSS;
            if (!isCSSHoudini(css)) {
                throw new Error("paintWorklet not available");
            }

            // Register worklets using Vite-resolved URLs
            await Promise.all([
                css.paintWorklet.addModule(squircleUrl),
                css.paintWorklet.addModule(animatedGradientUrl),
                css.paintWorklet.addModule(smoothBorderUrl),
                css.paintWorklet.addModule(confettiBackgroundUrl),
            ]);

            moduleInitialized = true;
            moduleSupported = true;
            return true;
        } catch (e) {
            moduleError = e instanceof Error ? e : new Error(String(e));
            console.warn("[Houdini] Worklet registration failed:", moduleError);
            return false;
        }
    })();

    return initPromise;
}

/**
 * Vue composable for CSS Houdini Paint API
 * Provides reactive feature detection + auto-initialization
 */
export function useHoudini(autoInit = true): HoudiniState {
    const supported = ref(moduleSupported);
    const initialized = ref(moduleInitialized);
    const error = ref<Error | null>(moduleError);

    onMounted(async () => {
        // Check support
        supported.value = isHoudiniSupported();
        moduleSupported = supported.value;

        if (!supported.value) return;

        // Auto-initialize if requested
        if (autoInit && !moduleInitialized) {
            const success = await registerWorklets();
            initialized.value = success;
            error.value = moduleError;
        } else {
            initialized.value = moduleInitialized;
            error.value = moduleError;
        }
    });

    return {
        supported: readonly(supported),
        initialized: readonly(initialized),
        error: readonly(error),
    };
}

/**
 * Utility to add houdini-supported class to document
 */
export function applyHoudiniClass(supported: boolean): void {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("houdini-supported", supported);
}
