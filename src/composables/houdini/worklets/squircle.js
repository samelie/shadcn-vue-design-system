/**
 * Squircle Paint Worklet
 * Creates iOS-style superellipse shapes (squircle = square + circle)
 * Math: |x/a|^n + |y/b|^n = 1 where n controls smoothing
 */

// eslint-disable-next-line no-undef
registerPaint(
    "squircle",
    class {
        static get inputProperties() {
            return [
                "--squircle-radius",
                "--squircle-smoothing",
                "--squircle-bg",
                "--squircle-border-width",
                "--squircle-border-color",
            ];
        }

        /**
         * Parse CSS value to number with fallback
         */
        parseValue(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString() === "") return fallback;
            const parsed = Number.parseFloat(val.toString());
            return Number.isNaN(parsed) ? fallback : parsed;
        }

        /**
         * Parse CSS color value
         */
        parseColor(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString().trim() === "") return fallback;
            return val.toString().trim();
        }

        /**
         * Calculate superellipse point
         * @param {number} t - angle parameter (0 to 2PI)
         * @param {number} a - semi-width
         * @param {number} b - semi-height
         * @param {number} n - smoothing exponent (2=ellipse, 4=iOS squircle, higher=more square)
         */
        superellipsePoint(t, a, b, n) {
            const cosT = Math.cos(t);
            const sinT = Math.sin(t);

            const x = Math.sign(cosT) * a * Math.abs(cosT) ** (2 / n);
            const y = Math.sign(sinT) * b * Math.abs(sinT) ** (2 / n);

            return { x, y };
        }

        /**
         * Draw superellipse path
         */
        drawSquirclePath(ctx, cx, cy, a, b, n, steps = 100) {
            ctx.beginPath();

            for (let i = 0; i <= steps; i++) {
                const t = (i / steps) * Math.PI * 2;
                const { x, y } = this.superellipsePoint(t, a, b, n);

                if (i === 0) {
                    ctx.moveTo(cx + x, cy + y);
                } else {
                    ctx.lineTo(cx + x, cy + y);
                }
            }

            ctx.closePath();
        }

        paint(ctx, size, props) {
            const { width, height } = size;

            // Parse properties
            const radius = this.parseValue(props, "--squircle-radius", 16);
            const smoothing = this.parseValue(props, "--squircle-smoothing", 0.6);
            const bgColor = this.parseColor(props, "--squircle-bg", "#ffffff");
            const borderWidth = this.parseValue(props, "--squircle-border-width", 0);
            const borderColor = this.parseColor(props, "--squircle-border-color", "#000000");

            // Convert smoothing (0-1) to exponent (2-8)
            // 0 smoothing = n=2 (ellipse), 1 smoothing = n=8 (very square)
            const n = 2 + smoothing * 6;

            // Calculate semi-axes based on radius (clamped to half dimensions)
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const effectiveRadius = Math.min(radius, halfWidth, halfHeight);

            // For proper squircle, semi-axes approach dimension - radius for small radius
            // and approach half-dimension for large radius
            const a = halfWidth - effectiveRadius + effectiveRadius * 0.8;
            const b = halfHeight - effectiveRadius + effectiveRadius * 0.8;

            const cx = halfWidth;
            const cy = halfHeight;

            // Draw fill
            this.drawSquirclePath(ctx, cx, cy, a, b, n);
            ctx.fillStyle = bgColor;
            ctx.fill();

            // Draw border if specified
            if (borderWidth > 0) {
                this.drawSquirclePath(ctx, cx, cy, a - borderWidth / 2, b - borderWidth / 2, n);
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = borderWidth;
                ctx.stroke();
            }
        }
    },
);
