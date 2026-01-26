/**
 * Inline worklet source code for blob URL registration
 * This avoids path resolution issues with bundlers/dev servers
 */

export const squircleWorklet = `
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

        superellipsePoint(t, a, b, n) {
            const cosT = Math.cos(t);
            const sinT = Math.sin(t);
            const x = Math.sign(cosT) * a * Math.abs(cosT) ** (2 / n);
            const y = Math.sign(sinT) * b * Math.abs(sinT) ** (2 / n);
            return { x, y };
        }

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
            const radius = this.parseValue(props, "--squircle-radius", 16);
            const smoothing = this.parseValue(props, "--squircle-smoothing", 0.6);
            const bgColor = this.parseColor(props, "--squircle-bg", "#ffffff");
            const borderWidth = this.parseValue(props, "--squircle-border-width", 0);
            const borderColor = this.parseColor(props, "--squircle-border-color", "#000000");

            const n = 2 + smoothing * 6;
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const effectiveRadius = Math.min(radius, halfWidth, halfHeight);
            const a = halfWidth - effectiveRadius + effectiveRadius * 0.8;
            const b = halfHeight - effectiveRadius + effectiveRadius * 0.8;
            const cx = halfWidth;
            const cy = halfHeight;

            this.drawSquirclePath(ctx, cx, cy, a, b, n);
            ctx.fillStyle = bgColor;
            ctx.fill();

            if (borderWidth > 0) {
                this.drawSquirclePath(ctx, cx, cy, a - borderWidth / 2, b - borderWidth / 2, n);
                ctx.strokeStyle = borderColor;
                ctx.lineWidth = borderWidth;
                ctx.stroke();
            }
        }
    },
);
`;

export const animatedGradientWorklet = `
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

        degToRad(deg) {
            return (deg * Math.PI) / 180;
        }

        drawLinearGradient(ctx, size, colors, angle, time) {
            const { width, height } = size;
            const rad = this.degToRad(angle + time * 360);
            const diagonal = Math.sqrt(width * width + height * height);
            const cx = width / 2;
            const cy = height / 2;
            const dx = (Math.sin(rad) * diagonal) / 2;
            const dy = (Math.cos(rad) * diagonal) / 2;

            const gradient = ctx.createLinearGradient(cx - dx, cy + dy, cx + dx, cy - dy);
            colors.forEach((color, i) => {
                gradient.addColorStop(i / (colors.length - 1), color);
            });

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        drawRadialGradient(ctx, size, colors, time) {
            const { width, height } = size;
            const cx = width / 2;
            const cy = height / 2;
            const radius = Math.max(width, height) / 2;
            const offsetX = Math.sin(time * Math.PI * 2) * width * 0.1;
            const offsetY = Math.cos(time * Math.PI * 2) * height * 0.1;

            const gradient = ctx.createRadialGradient(cx + offsetX, cy + offsetY, 0, cx, cy, radius);
            colors.forEach((color, i) => {
                gradient.addColorStop(i / (colors.length - 1), color);
            });

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

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
                const colorIndex = (i / segments) * (colors.length - 1);
                const colorIdx1 = Math.floor(colorIndex);
                const colorIdx2 = Math.min(colorIdx1 + 1, colors.length - 1);
                const colorMix = colorIndex - colorIdx1;

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(t1) * radius, cy + Math.sin(t1) * radius);
                ctx.lineTo(cx + Math.cos(t2) * radius, cy + Math.sin(t2) * radius);
                ctx.closePath();
                ctx.fillStyle = colorMix < 0.5 ? colors[colorIdx1] : colors[colorIdx2];
                ctx.fill();
            }
        }

        paint(ctx, size, props) {
            const color1 = this.parseColor(props, "--gradient-color-1", "#3b82f6");
            const color2 = this.parseColor(props, "--gradient-color-2", "#8b5cf6");
            const color3 = this.parseColor(props, "--gradient-color-3", "");

            const colors = [color1, color2];
            if (color3) colors.push(color3);

            const angle = this.parseValue(props, "--gradient-angle", 45);
            const time = this.parseValue(props, "--gradient-time", 0);
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
`;

export const smoothBorderWorklet = `
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

        drawDots(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const dotRadius = width / 2;
            const step = spacing + width;
            ctx.fillStyle = color;

            for (let x = radius + step / 2; x < w - radius; x += step) {
                ctx.beginPath();
                ctx.arc(x, dotRadius, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
            for (let x = radius + step / 2; x < w - radius; x += step) {
                ctx.beginPath();
                ctx.arc(x, h - dotRadius, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
            for (let y = radius + step / 2; y < h - radius; y += step) {
                ctx.beginPath();
                ctx.arc(dotRadius, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
            for (let y = radius + step / 2; y < h - radius; y += step) {
                ctx.beginPath();
                ctx.arc(w - dotRadius, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        drawDashes(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const dashLength = spacing * 1.5;
            const step = dashLength + spacing;
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = "round";

            let x = radius;
            while (x < w - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(x, width / 2);
                ctx.lineTo(Math.min(x + dashLength, w - radius), width / 2);
                ctx.stroke();
                x += step;
            }
            x = radius;
            while (x < w - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(x, h - width / 2);
                ctx.lineTo(Math.min(x + dashLength, w - radius), h - width / 2);
                ctx.stroke();
                x += step;
            }
            let y = radius;
            while (y < h - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(width / 2, y);
                ctx.lineTo(width / 2, Math.min(y + dashLength, h - radius));
                ctx.stroke();
                y += step;
            }
            y = radius;
            while (y < h - radius - dashLength) {
                ctx.beginPath();
                ctx.moveTo(w - width / 2, y);
                ctx.lineTo(w - width / 2, Math.min(y + dashLength, h - radius));
                ctx.stroke();
                y += step;
            }

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

        drawWave(ctx, size, color, width, spacing, radius) {
            const { width: w, height: h } = size;
            const amplitude = width;
            const wavelength = spacing * 2;
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            ctx.beginPath();
            ctx.moveTo(radius, width);
            for (let x = radius; x <= w - radius; x += 2) {
                const y = width + Math.sin(((x - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(radius, h - width);
            for (let x = radius; x <= w - radius; x += 2) {
                const y = h - width - Math.sin(((x - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(width, radius);
            for (let y = radius; y <= h - radius; y += 2) {
                const x = width + Math.sin(((y - radius) / wavelength) * Math.PI * 2) * amplitude * 0.3;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

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
`;

export const confettiBackgroundWorklet = `
registerPaint(
    "confetti-background",
    class {
        static get inputProperties() {
            return [
                "--confetti-time",
                "--confetti-count",
                "--confetti-speed",
                "--confetti-size-min",
                "--confetti-size-max",
                "--confetti-hue-base",
                "--confetti-hue-range",
                "--confetti-saturation",
                "--confetti-lightness",
                "--confetti-light-angle",
                "--confetti-bg-color",
                "--confetti-seed",
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

        seededRandom(seed) {
            const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
            return x - Math.floor(x);
        }

        generatePiece(index, seed, width, height) {
            const baseSeed = seed + index * 127.1;
            return {
                x: this.seededRandom(baseSeed) * width,
                yOffset: this.seededRandom(baseSeed + 1) * height,
                size: this.seededRandom(baseSeed + 2),
                rotation: this.seededRandom(baseSeed + 3) * Math.PI * 2,
                rotationSpeed: (this.seededRandom(baseSeed + 4) - 0.5) * 2,
                hueOffset: this.seededRandom(baseSeed + 5),
                wobblePhase: this.seededRandom(baseSeed + 6) * Math.PI * 2,
                wobbleAmp: this.seededRandom(baseSeed + 7) * 20 + 5,
                fallSpeed: 0.5 + this.seededRandom(baseSeed + 8) * 0.5,
                opacity: 0.4 + this.seededRandom(baseSeed + 9) * 0.4,
            };
        }

        hslToRgb(h, s, l) {
            h = h / 360;
            s = s / 100;
            l = l / 100;
            let r, g, b;
            if (s === 0) {
                r = g = b = l;
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }

        getLightAdjustedHue(baseHue, x, y, width, height, lightAngle, hueRange) {
            const lightX = Math.cos(lightAngle);
            const lightY = Math.sin(lightAngle);
            const nx = (x / width - 0.5) * 2;
            const ny = (y / height - 0.5) * 2;
            const illumination = nx * lightX + ny * lightY;
            return baseHue + illumination * hueRange * 0.5;
        }

        drawTriangle(ctx, x, y, size, rotation) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            ctx.moveTo(0, -size * 0.6);
            ctx.lineTo(-size * 0.5, size * 0.4);
            ctx.lineTo(size * 0.5, size * 0.4);
            ctx.closePath();
            ctx.restore();
        }

        paint(ctx, size, props) {
            const { width, height } = size;
            const time = this.parseValue(props, "--confetti-time", 0);
            const count = this.parseValue(props, "--confetti-count", 25);
            const speed = this.parseValue(props, "--confetti-speed", 1);
            const sizeMin = this.parseValue(props, "--confetti-size-min", 8);
            const sizeMax = this.parseValue(props, "--confetti-size-max", 16);
            const hueBase = this.parseValue(props, "--confetti-hue-base", 280);
            const hueRange = this.parseValue(props, "--confetti-hue-range", 120);
            const saturation = this.parseValue(props, "--confetti-saturation", 70);
            const lightness = this.parseValue(props, "--confetti-lightness", 80);
            const lightAngle = this.parseValue(props, "--confetti-light-angle", -0.785);
            const bgColor = this.parseColor(props, "--confetti-bg-color", "transparent");
            const seed = this.parseValue(props, "--confetti-seed", 42);

            if (bgColor !== "transparent") {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
            }

            for (let i = 0; i < count; i++) {
                const piece = this.generatePiece(i, seed, width, height);
                const fallProgress = (time * speed * piece.fallSpeed) % 1;
                const y = ((piece.yOffset + fallProgress * height * 1.5) % (height + sizeMax * 2)) - sizeMax;
                const wobble = Math.sin(time * 3 + piece.wobblePhase) * piece.wobbleAmp;
                const x = piece.x + wobble;
                const pieceSize = sizeMin + piece.size * (sizeMax - sizeMin);
                const rotation = piece.rotation + time * piece.rotationSpeed * 2;
                const adjustedHue = this.getLightAdjustedHue(
                    hueBase + piece.hueOffset * hueRange,
                    x, y, width, height, lightAngle, hueRange * 0.3
                );
                const [r, g, b] = this.hslToRgb(adjustedHue % 360, saturation, lightness);

                this.drawTriangle(ctx, x, y, pieceSize, rotation);
                ctx.fillStyle = \`rgba(\${r}, \${g}, \${b}, \${piece.opacity})\`;
                ctx.fill();
            }
        }
    },
);
`;
