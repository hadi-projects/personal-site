<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrame: number | null = null

// Simplified Perlin Noise implementation
const permutation = Array.from({ length: 256 }, (_, i) => i).sort(() => Math.random() - 0.5)
const p = [...permutation, ...permutation]

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function lerp(t: number, a: number, b: number): number {
  return a + t * (b - a)
}

function grad(hash: number, x: number, y: number, z: number): number {
  const h = hash & 15
  const u = h < 8 ? x : y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}

function noise(x: number, y: number, z: number): number {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const Z = Math.floor(z) & 255

  x -= Math.floor(x)
  y -= Math.floor(y)
  z -= Math.floor(z)

  const u = fade(x)
  const v = fade(y)
  const w = fade(z)

  const A = p[X] + Y,
    AA = p[A] + Z,
    AB = p[A + 1] + Z
  const B = p[X + 1] + Y,
    BA = p[B] + Z,
    BB = p[B + 1] + Z

  return lerp(
    w,
    lerp(
      v,
      lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
      lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z)),
    ),
    lerp(
      v,
      lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
      lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1)),
    ),
  )
}

function drawGradient(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  const imageData = ctx.createImageData(width, height)
  const data = imageData.data

  const baseColors = [
    [100, 149, 237], // Cornflower Blue
    [135, 206, 235], // Sky Blue
    [0, 191, 255], // Deep Sky Blue
    [70, 130, 180], // Steel Blue
  ]

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const index = (y * width + x) * 4

      // Use Perlin noise to create flowing effect
      const nx = x / width
      const ny = y / height
      const n = (noise(nx * 2, ny * 2, time * 0.1) + 1) * 0.5

      // Interpolate between base colors
      const colorIndex = Math.floor(n * (baseColors.length - 1))
      const nextColorIndex = (colorIndex + 1) % baseColors.length
      const colorT = n * (baseColors.length - 1) - colorIndex

      const r = Math.floor(lerp(colorT, baseColors[colorIndex][0], baseColors[nextColorIndex][0]))
      const g = Math.floor(lerp(colorT, baseColors[colorIndex][1], baseColors[nextColorIndex][1]))
      const b = Math.floor(lerp(colorT, baseColors[colorIndex][2], baseColors[nextColorIndex][2]))

      data[index] = r
      data[index + 1] = g
      data[index + 2] = b
      data[index + 3] = 255
    }
  }

  ctx.putImageData(imageData, 0, 0)
}

function animate(time: number) {
  if (!canvasRef.value) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  drawGradient(ctx, canvasRef.value.width, canvasRef.value.height, time / 1000)
  animationFrame = requestAnimationFrame(animate)
}

function handleResize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

onMounted(() => {
  if (!canvasRef.value) return
  handleResize()
  animate(0)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="smooth-waving-gradient">
    <canvas ref="canvasRef"></canvas>
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smooth-waving-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-container {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.content-wrapper:hover {
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}
</style>
