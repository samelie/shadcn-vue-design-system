import type { ViteDevServer } from "vite";
import type { Component } from "vue";
import type { MetricTone } from "../src/components/custom/MetricTile.vue";
import type { StatusTone } from "../src/components/custom/StatusBadge.vue";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { createServer } from "vite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { h } from "vue";
import { renderToString } from "vue/server-renderer";

let server: ViteDevServer;
let StatusBadge: Component;
let MetricTile: Component;
let ChartPlaceholder: Component;

beforeAll(async () => {
    // cold sfc loading exceeds the default hook budget in this workspace.
    server = await createServer({
        configFile: false,
        root: fileURLToPath(new URL("..", import.meta.url)),
        plugins: [vue()],
        resolve: {
            alias: {
                "~/lib/utils": fileURLToPath(new URL("../src/lib/utils/cn.ts", import.meta.url)),
            },
        },
        server: { middlewareMode: true, hmr: false, watch: null },
        appType: "custom",
    });
    const load = async (name: string) => {
        const module = await server.ssrLoadModule<{ default: Component }>(`/src/components/custom/${name}.vue`);
        return module.default;
    };
    [StatusBadge, MetricTile, ChartPlaceholder] = await Promise.all([
        load("StatusBadge"), load("MetricTile"), load("ChartPlaceholder"),
    ]);
}, 60000);

afterAll(async () => {
    await server?.close();
});

const render = (component: Component, props: Record<string, unknown>, label?: string) =>
    renderToString(h(component, props, label === undefined ? undefined : () => label));

const rootClass = (html: string) => html.match(/^<[^>]+class="([^"]*)"/)?.[1]?.split(/\s+/) ?? [];

describe("statusBadge", () => {
    const tones: Record<StatusTone, readonly string[]> = {
        success: ["bg-success", "text-success-foreground"],
        warning: ["bg-warning", "text-warning-foreground"],
        destructive: ["bg-destructive", "text-white"],
        muted: ["bg-muted", "text-muted-foreground"],
    };

    it.each(Object.entries(tones))("renders %s tokens on its root and default slot", async (tone, classes) => {
        const html = await render(StatusBadge, { tone }, "Example status");
        expect(html).toContain("data-slot=\"status-badge\"");
        expect(html).toContain("Example status");
        expect(rootClass(html)).toEqual(expect.arrayContaining(["border-transparent", ...classes]));
    });

    it("merges caller classes and forwards attributes to the badge primitive", async () => {
        const html = await render(StatusBadge, { tone: "success", class: "bg-primary px-4", title: "Status detail" }, "Label");
        expect(rootClass(html)).toContain("bg-primary");
        expect(rootClass(html)).not.toContain("bg-success");
        expect(rootClass(html)).toContain("px-4");
        expect(rootClass(html)).not.toContain("px-2");
        expect(html).toContain("title=\"Status detail\"");
    });

    it("escapes slot text", async () => {
        const html = await render(StatusBadge, { tone: "muted" }, "<img src=x onerror=alert(1)>");
        expect(html).toContain("&lt;img");
        expect(html).not.toContain("<img");
    });
});

describe("metricTile", () => {
    it("renders label, string value and unit with tabular numerals", async () => {
        const html = await render(MetricTile, { label: "Duration", value: "0", unit: "ms" });
        expect(html).toContain("data-slot=\"metric-tile\"");
        expect(html).toContain("Duration");
        expect(html).toContain("0");
        expect(html).toContain("ms");
        expect(html).toContain("tabular-nums");
        expect(rootClass(html)).not.toEqual(expect.arrayContaining(["text-warning", "text-destructive", "text-muted-foreground"]));
    });

    const tones: Record<MetricTone, string | null> = {
        default: null,
        warning: "text-warning",
        destructive: "text-destructive",
        muted: "text-muted-foreground",
    };

    it.each(Object.entries(tones))("places the %s tone on the metric root", async (tone, token) => {
        const html = await render(MetricTile, { label: "Reading", value: "12", tone });
        const actual = rootClass(html).filter(name => ["text-warning", "text-destructive", "text-muted-foreground"].includes(name));
        expect(actual).toEqual(token === null ? [] : [token]);
    });

    it.each(Object.keys(tones))("mutes a null value despite the %s tone", async tone => {
        const html = await render(MetricTile, { label: "Reading", value: null, tone });
        expect(rootClass(html)).toContain("text-muted-foreground");
        expect(rootClass(html)).not.toContain("text-warning");
        expect(rootClass(html)).not.toContain("text-destructive");
        expect(html).toContain("—");
    });

    it("accepts caller empty text and merges root classes and attributes", async () => {
        const html = await render(MetricTile, {
            label: "Reading", value: null, emptyText: "Unavailable", class: "gap-4", title: "Metric detail",
        });
        expect(html).toContain("Unavailable");
        expect(html).not.toContain("—");
        expect(rootClass(html)).toContain("gap-4");
        expect(rootClass(html)).not.toContain("gap-1");
        expect(html).toContain("title=\"Metric detail\"");
    });

    it("keeps an empty string distinct from a null value", async () => {
        const html = await render(MetricTile, { label: "Reading", value: "", tone: "warning" });
        expect(rootClass(html)).toContain("text-warning");
        expect(html).not.toContain("—");
    });

    it("escapes label, value, unit and empty text", async () => {
        const html = await render(MetricTile, { label: "<b>label</b>", value: "<i>value</i>", unit: "<u>unit</u>" });
        const empty = await render(MetricTile, { label: "Empty", value: null, emptyText: "<img src=x>" });
        expect(html).toContain("&lt;b&gt;label&lt;/b&gt;");
        expect(html).toContain("&lt;i&gt;value&lt;/i&gt;");
        expect(html).toContain("&lt;u&gt;unit&lt;/u&gt;");
        expect(empty).toContain("&lt;img src=x&gt;");
        expect(html).not.toMatch(/<[biu]>/);
        expect(empty).not.toContain("<img");
    });
});

describe("chartPlaceholder", () => {
    it("composes empty primitives with the default height", async () => {
        const html = await render(ChartPlaceholder, { title: "Example history", description: "No samples" });
        expect(html).toContain("data-slot=\"chart-placeholder\"");
        expect(rootClass(html)).toContain("h-40");
        expect(html).toContain("data-slot=\"empty-header\"");
        expect(html).toContain("data-slot=\"empty-title\"");
        expect(html).toContain("data-slot=\"empty-description\"");
        expect(html).toContain("Example history");
        expect(html).toContain("No samples");
        expect(html).not.toMatch(/<(?:svg|canvas)\b/);
    });

    it("omits an absent description and allows overriding height", async () => {
        const html = await render(ChartPlaceholder, { title: "Example history", class: "h-64", id: "history" });
        expect(html).not.toContain("data-slot=\"empty-description\"");
        expect(rootClass(html)).toContain("h-64");
        expect(rootClass(html)).not.toContain("h-40");
        expect(html).toContain("id=\"history\"");
    });

    it("escapes title and description", async () => {
        const html = await render(ChartPlaceholder, { title: "<b>title</b>", description: "<img src=x>" });
        expect(html).toContain("&lt;b&gt;title&lt;/b&gt;");
        expect(html).toContain("&lt;img src=x&gt;");
        expect(html).not.toContain("<b>");
        expect(html).not.toContain("<img");
    });
});
