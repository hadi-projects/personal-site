<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrame: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const particles: Particle[] = []
const particleCount = 100
const connectionDistance = 150
const colors = ['#2563EB', '#10B981', '#0EA5E9', '#FFFFFF']

function createParticles(width: number, height: number) {
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    })
  }
}

function drawParticles(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.clearRect(0, 0, width, height)

  particles.forEach((particle, i) => {
    particle.x += particle.vx
    particle.y += particle.vy

    if (particle.x < 0 || particle.x > width) particle.vx *= -1
    if (particle.y < 0 || particle.y > height) particle.vy *= -1

    ctx.beginPath()
    ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = colors[i % colors.length]
    ctx.fill()

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[j].x - particle.x
      const dy = particles[j].y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < connectionDistance) {
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`
        ctx.stroke()
      }
    }
  })
}

function animate() {
  if (!canvasRef.value) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  drawParticles(ctx, canvasRef.value.width, canvasRef.value.height)
  animationFrame = requestAnimationFrame(animate)
}

function handleResize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  particles.length = 0
  createParticles(canvasRef.value.width, canvasRef.value.height)
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
  <div class="flowing-network-background">
    <canvas ref="canvasRef"></canvas>
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flowing-network-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(-45deg, #1e3a8a, #2563eb, #10b981, #0ea5e9);
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  padding: 20px;
}

.content-wrapper:hover {
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-5px);
}
</style>
