/**
 * Animated Gradient Paint Worklet
 * Creates animatable gradient backgrounds using CSS custom properties
 * Animate --gradient-time via CSS animation for smooth transitions
 */

// eslint-disable-next-line no-undef
registerPaint(
    "animated-gradient",
    class {
        static get inputProperties() {
            return [
                "--gradient-color-1",
                "--gradient-color-2",
                "--gradient-color-3",
                "--gradient-angle",
                "--gradient-time",
                "--gradient-type",
            ];
        }

        parseColor(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString().trim() === "") return fallback;
            return val.toString().trim();
        }

        parseValue(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString() === "") return fallback;
            const parsed = Number.parseFloat(val.toString());
            return Number.isNaN(parsed) ? fallback : parsed;
        }

        parseString(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString().trim() === "") return fallback;
            return val.toString().trim();
        }

        /**
         * Convert angle degrees to radians
         */
        degToRad(deg) {
            return (deg * Math.PI) / 180;
        }

        /**
         * Create linear gradient
         */
        drawLinearGradient(ctx, size, colors, angle, time) {
            const { width, height } = size;

            // Calculate gradient line based on angle
            // Angle 0 = bottom to top, 90 = left to right (CSS convention)
            const rad = this.degToRad(angle + time * 360);
            const diagonal = Math.sqrt(width * width + height * height);

            const cx = width / 2;
            const cy = height / 2;
            const dx = (Math.sin(rad) * diagonal) / 2;
            const dy = (Math.cos(rad) * diagonal) / 2;

            const gradient = ctx.createLinearGradient(cx - dx, cy + dy, cx + dx, cy - dy);

            // Distribute colors evenly
            colors.forEach((color, i) => {
                gradient.addColorStop(i / (colors.length - 1), color);
            });

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        /**
         * Create radial gradient
         */
        drawRadialGradient(ctx, size, colors, time) {
            const { width, height } = size;
            const cx = width / 2;
            const cy = height / 2;
            const radius = Math.max(width, height) / 2;

            // Animate center position
            const offsetX = Math.sin(time * Math.PI * 2) * width * 0.1;
            const offsetY = Math.cos(time * Math.PI * 2) * height * 0.1;

            const gradient = ctx.createRadialGradient(
                cx + offsetX,
                cy + offsetY,
                0,
                cx,
                cy,
                radius,
            );

            colors.forEach((color, i) => {
                gradient.addColorStop(i / (colors.length - 1), color);
            });

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        /**
         * Create conic gradient (approximated with multiple triangles)
         */
        drawConicGradient(ctx, size, colors, angle, time) {
            const { width, height } = size;
            const cx = width / 2;
            const cy = height / 2;
            const radius = Math.max(width, height);
            const segments = 60;

            const startAngle = this.degToRad(angle + time * 360);

            for (let i = 0; i < segments; i++) {
                const t1 = startAngle + (i / segments) * Math.PI * 2;
                const t2 = startAngle + ((i + 1) / segments) * Math.PI * 2;

                // Interpolate color
                const colorIndex = (i / segments) * (colors.length - 1);
                const colorIdx1 = Math.floor(colorIndex);
                const colorIdx2 = Math.min(colorIdx1 + 1, colors.length - 1);
                const colorMix = colorIndex - colorIdx1;

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(t1) * radius, cy + Math.sin(t1) * radius);
                ctx.lineTo(cx + Math.cos(t2) * radius, cy + Math.sin(t2) * radius);
                ctx.closePath();

                // Simple color interpolation (works for hex colors)
                ctx.fillStyle = colorMix < 0.5 ? colors[colorIdx1] : colors[colorIdx2];
                ctx.fill();
            }
        }

        paint(ctx, size, props) {
            // Parse colors
            const color1 = this.parseColor(props, "--gradient-color-1", "#3b82f6");
            const color2 = this.parseColor(props, "--gradient-color-2", "#8b5cf6");
            const color3 = this.parseColor(props, "--gradient-color-3", "");

            const colors = [color1, color2];
            if (color3) colors.push(color3);

            // Parse other properties
            const angle = this.parseValue(props, "--gradient-angle", 45);
            const time = this.parseValue(props, "--gradient-time", 0); // 0-1, animated via CSS
            const type = this.parseString(props, "--gradient-type", "linear");

            switch (type) {
                case "radial":
                    this.drawRadialGradient(ctx, size, colors, time);
                    break;
                case "conic":
                    this.drawConicGradient(ctx, size, colors, angle, time);
                    break;
                default:
                    this.drawLinearGradient(ctx, size, colors, angle, time);
            }
        }
    },
);
