<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrame: number | null = null

interface Bubble {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
}

const bubbles: Bubble[] = []
const bubbleCount = 50
const colors = [
  '#FFB3BA', // Light Pink
  '#BAFFC9', // Light Mint
  '#BAE1FF', // Light Blue
  '#FFFFBA', // Light Yellow
  '#FFD9BA', // Light Peach
]

function createBubbles(width: number, height: number) {
  for (let i = 0; i < bubbleCount; i++) {
    bubbles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    })
  }
}

function drawBubbles(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.clearRect(0, 0, width, height)

  bubbles.forEach((bubble) => {
    bubble.x += bubble.vx
    bubble.y += bubble.vy

    if (bubble.x < 0 || bubble.x > width) bubble.vx *= -1
    if (bubble.y < 0 || bubble.y > height) bubble.vy *= -1

    ctx.beginPath()
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
    ctx.fillStyle = bubble.color
    ctx.globalAlpha = 0.7
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeStyle = '#FFFFFF'
    ctx.lineWidth = 2
    ctx.stroke()

    // Add a highlight to make the bubble look more 3D
    ctx.beginPath()
    ctx.arc(
      bubble.x - bubble.radius * 0.3,
      bubble.y - bubble.radius * 0.3,
      bubble.radius * 0.2,
      0,
      Math.PI * 2,
    )
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    ctx.fill()
  })
}

function animate() {
  if (!canvasRef.value) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  drawBubbles(ctx, canvasRef.value.width, canvasRef.value.height)
  animationFrame = requestAnimationFrame(animate)
}

function handleResize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  bubbles.length = 0
  createBubbles(canvasRef.value.width, canvasRef.value.height)
}

onMounted(() => {
  if (!canvasRef.value) return
  handleResize()
  animate()
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
  <div class="cheerful-bubbles-background">
    <canvas ref="canvasRef"></canvas>
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cheerful-bubbles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #e0f7fa, #fff8e1, #f3e5f5);
  background-size: 400% 400%;
  animation: gradientBackground 15s ease infinite;
}

@keyframes gradientBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.05),
    0 8px 16px rgba(0, 0, 0, 0.05);
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  padding: 30px;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.content-wrapper:hover {
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-5px);
}
</style>
