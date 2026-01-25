/**
 * Smooth Border Paint Worklet
 * Creates custom border patterns: dots, dashes, waves
 */

// eslint-disable-next-line no-undef
registerPaint(
    "smooth-border",
    class {
        static get inputProperties() {
            return [
                "--border-pattern",
                "--border-color",
                "--border-width",
                "--border-spacing",
                "--border-radius",
            ];
        }

        parseValue(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString() === "") return fallback;
            const parsed = Number.parseFloat(val.toString());
            return Number.isNaN(parsed) ? fallback : parsed;
        }

        parseColor(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString().trim() === "") return fallback;
            return val.toString().trim();
        }

        parseString(props, prop, fallback) {
            const val = props.get(prop);
            if (!val || val.toString().trim() === "") return fallback;
            return val.toString().trim();
        }

        /**
         * Draw dotted border
         */
        drawDots(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const dotRadius = width / 2;
            const step = spacing + width;

            ctx.fillStyle = color;

            // Top edge
            for (let x = radius + step / 2; x < w - radius; x += step) {
                ctx.beginPath();
                ctx.arc(x, dotRadius, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Bottom edge
            for (let x = radius + step / 2; x < w - radius; x += step) {
                ctx.beginPath();
                ctx.arc(x, h - dotRadius, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Left edge
            for (let y = radius + step / 2; y < h - radius; y += step) {
                ctx.beginPath();
                ctx.arc(dotRadius, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Right edge
            for (let y = radius + step / 2; y < h - radius; y += step) {
                ctx.beginPath();
                ctx.arc(w - dotRadius, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Corners (quarter arcs with dots)
            this.drawCornerDots(ctx, radius, radius, radius, dotRadius, step, Math.PI, Math.PI * 1.5);
            this.drawCornerDots(ctx, w - radius, radius, radius, dotRadius, step, Math.PI * 1.5, Math.PI * 2);
            this.drawCornerDots(ctx, w - radius, h - radius, radius, dotRadius, step, 0, Math.PI * 0.5);
            this.drawCornerDots(ctx, radius, h - radius, radius, dotRadius, step, Math.PI * 0.5, Math.PI);
        }

        drawCornerDots(ctx, cx, cy, cornerRadius, dotRadius, step, startAngle, endAngle) {
            if (cornerRadius < step) return;

            const arcLength = (endAngle - startAngle) * cornerRadius;
            const numDots = Math.floor(arcLength / step);

            for (let i = 0; i <= numDots; i++) {
                const angle = startAngle + (i / numDots) * (endAngle - startAngle);
                const x = cx + Math.cos(angle) * cornerRadius;
                const y = cy + Math.sin(angle) * cornerRadius;

                ctx.beginPath();
                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        /**
         * Draw dashed border
         */
        drawDashes(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const dashLength = spacing * 1.5;
            const step = dashLength + spacing;

            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = "round";

            // Top edge
            let x = radius;
            while (x < w - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(x, width / 2);
                ctx.lineTo(Math.min(x + dashLength, w - radius), width / 2);
                ctx.stroke();
                x += step;
            }

            // Bottom edge
            x = radius;
            while (x < w - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(x, h - width / 2);
                ctx.lineTo(Math.min(x + dashLength, w - radius), h - width / 2);
                ctx.stroke();
                x += step;
            }

            // Left edge
            let y = radius;
            while (y < h - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(width / 2, y);
                ctx.lineTo(width / 2, Math.min(y + dashLength, h - radius));
                ctx.stroke();
                y += step;
            }

            // Right edge
            y = radius;
            while (y < h - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(w - width / 2, y);
                ctx.lineTo(w - width / 2, Math.min(y + dashLength, h - radius));
                ctx.stroke();
                y += step;
            }

            // Draw rounded corners
            if (radius > 0) {
                ctx.beginPath();
                ctx.arc(radius, radius, radius - width / 2, Math.PI, Math.PI * 1.5);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(w - radius, radius, radius - width / 2, Math.PI * 1.5, Math.PI * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(w - radius, h - radius, radius - width / 2, 0, Math.PI * 0.5);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(radius, h - radius, radius - width / 2, Math.PI * 0.5, Math.PI);
                ctx.stroke();
            }
        }

        /**
         * Draw wave border
         */
        drawWave(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const amplitude = width;
            const wavelength = spacing * 2;

            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Top edge
            ctx.beginPath();
            ctx.moveTo(radius, width);
            for (let x = radius; x <= w - radius; x += 2) {
                const y = width + Math.sin(((x - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Bottom edge
            ctx.beginPath();
            ctx.moveTo(radius, h - width);
            for (let x = radius; x <= w - radius; x += 2) {
                const y = h - width - Math.sin(((x - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Left edge
            ctx.beginPath();
            ctx.moveTo(width, radius);
            for (let y = radius; y <= h - radius; y += 2) {
                const x = width + Math.sin(((y - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Right edge
            ctx.beginPath();
            ctx.moveTo(w - width, radius);
            for (let y = radius; y <= h - radius; y += 2) {
                const x = w - width - Math.sin(((y - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        paint(ctx, size, props) {
            const pattern = this.parseString(props, "--border-pattern", "dots");
            const color = this.parseColor(props, "--border-color", "#000000");
            const width = this.parseValue(props, "--border-width", 2);
            const spacing = this.parseValue(props, "--border-spacing", 8);
            const radius = this.parseValue(props, "--border-radius", 0);

            switch (pattern) {
                case "dashes":
                    this.drawDashes(ctx, size, color, width, spacing, radius);
                    break;
                case "wave":
                    this.drawWave(ctx, size, color, width, spacing, radius);
                    break;
                default:
                    this.drawDots(ctx, size, color, width, spacing, radius);
            }
        }
    },
);
