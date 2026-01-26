/**
 * Confetti Background Paint Worklet
 * Renders falling pastel triangles with light-source hue shifting
 */

// eslint-disable-next-line no-undef
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

        /**
         * Seeded random for consistent confetti positions
         */
        seededRandom(seed) {
            const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
            return x - Math.floor(x);
        }

        /**
         * Generate confetti piece data from seed
         */
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

        /**
         * HSL to RGB conversion
         */
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

        /**
         * Calculate hue shift based on light angle and position
         */
        getLightAdjustedHue(baseHue, x, y, width, height, lightAngle, hueRange) {
            // Light source direction
            const lightX = Math.cos(lightAngle);
            const lightY = Math.sin(lightAngle);

            // Normalized position from center
            const nx = (x / width - 0.5) * 2;
            const ny = (y / height - 0.5) * 2;

            // Dot product gives illumination
            const illumination = nx * lightX + ny * lightY;

            // Shift hue based on illumination (-1 to 1 range)
            return baseHue + illumination * hueRange * 0.5;
        }

        /**
         * Draw a triangle
         */
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

            // Parse properties
            const time = this.parseValue(props, "--confetti-time", 0);
            const count = this.parseValue(props, "--confetti-count", 25);
            const speed = this.parseValue(props, "--confetti-speed", 1);
            const sizeMin = this.parseValue(props, "--confetti-size-min", 8);
            const sizeMax = this.parseValue(props, "--confetti-size-max", 16);
            const hueBase = this.parseValue(props, "--confetti-hue-base", 280); // Pastel purple start
            const hueRange = this.parseValue(props, "--confetti-hue-range", 120); // Range of hues
            const saturation = this.parseValue(props, "--confetti-saturation", 70);
            const lightness = this.parseValue(props, "--confetti-lightness", 80);
            const lightAngle = this.parseValue(props, "--confetti-light-angle", -0.785); // -45deg
            const bgColor = this.parseColor(props, "--confetti-bg-color", "transparent");
            const seed = this.parseValue(props, "--confetti-seed", 42);

            // Draw background
            if (bgColor !== "transparent") {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
            }

            // Draw confetti pieces
            for (let i = 0; i < count; i++) {
                const piece = this.generatePiece(i, seed, width, height);

                // Calculate animated position
                const fallProgress = (time * speed * piece.fallSpeed) % 1;
                const y = ((piece.yOffset + fallProgress * height * 1.5) % (height + sizeMax * 2)) - sizeMax;

                // Horizontal wobble
                const wobble = Math.sin(time * 3 + piece.wobblePhase) * piece.wobbleAmp;
                const x = piece.x + wobble;

                // Piece size
                const pieceSize = sizeMin + piece.size * (sizeMax - sizeMin);

                // Rotation animation
                const rotation = piece.rotation + time * piece.rotationSpeed * 2;

                // Calculate light-adjusted hue
                const adjustedHue = this.getLightAdjustedHue(
                    hueBase + piece.hueOffset * hueRange,
                    x,
                    y,
                    width,
                    height,
                    lightAngle,
                    hueRange * 0.3,
                );

                // Convert to RGB
                const [r, g, b] = this.hslToRgb(adjustedHue % 360, saturation, lightness);

                // Draw triangle
                this.drawTriangle(ctx, x, y, pieceSize, rotation);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${piece.opacity})`;
                ctx.fill();
            }
        }
    },
);
