<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  particleCount: { type: Number, default: 50 },
  particleColor: { type: String, default: 'rgba(255, 255, 255, 0.8)' },
})

const particles = ref<
  { id: number; x: number; y: number; size: number; speed: number; opacity: number }[]
>([])
let animationFrame: number | null = null

const createParticle = () => ({
  id: Math.random(),
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 5 + 1,
  speed: Math.random() * 0.5 + 0.1,
  opacity: Math.random() * 0.6 + 0.2,
})

const initParticles = () => {
  particles.value = Array.from({ length: props.particleCount }, createParticle)
}

const updateParticles = () => {
  particles.value = particles.value.map((p) => ({
    ...p,
    y: (p.y + p.speed) % 100,
  }))
  animationFrame = requestAnimationFrame(updateParticles)
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

const getParticleStyle = (particle: Particle) => ({
  left: `${particle.x}%`,
  top: `${particle.y}%`,
  width: `${particle.size}px`,
  height: `${particle.size}px`,
  opacity: particle.opacity,
  background: props.particleColor,
})

onMounted(() => {
  initParticles()
  updateParticles()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <div class="fluid-wave-gradient-background">
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(37, 99, 235, 0.7)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(16, 185, 129, 0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(14, 165, 233, 0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255, 0.1)" />
      </g>
    </svg>
    <div class="particles-container">
      <transition-group name="particle" tag="div">
        <div
          v-for="particle in particles"
          :key="particle.id"
          class="particle"
          :style="getParticleStyle(particle)"
        ></div>
      </transition-group>
    </div>
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fluid-wave-gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(45deg, #1e3a8a, #2563eb, #10b981, #0ea5e9);
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

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin-bottom: -7px;
  min-height: 100vh;
  max-height: 150vh;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
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

.particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.particle-enter-active,
.particle-leave-active {
  transition: opacity 0.5s ease;
}

.particle-enter-from,
.particle-leave-to {
  opacity: 0;
}
</style>
