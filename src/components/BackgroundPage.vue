<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  particleCount: { type: Number, default: 50 },
  particleColor: { type: String, default: 'rgba(255, 255, 255, 0.8)' },
  gradientStart: { type: String, default: '#4158D0' },
  gradientEnd: { type: String, default: '#C850C0' },
})

const particles = ref<
  { id: number; x: number; y: number; size: number; speed: number; opacity: number }[]
>([])
let animationFrame: number | null = null

const backgroundStyle = computed(() => ({
  background: `linear-gradient(43deg, ${props.gradientStart} 0%, ${props.gradientEnd} 100%)`,
}))

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

// const particles = ref<Particle[]>([]);

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
  <!-- <div class="bg">
    <slot></slot>
  </div> -->
  <div class="animated-background" :style="backgroundStyle">
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

<!-- <style scoped>
.bg {
  background-color: #ffffff;
  /* min-height: 100vh; */
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
</style> -->

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.content-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  /* Add any additional styling for the content wrapper here */
  /* width: 300px; */
  /* padding: 20px; */
  background: white;
  border-radius: 12px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  transition:
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.content-wrapper:hover {
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.12);
  /* transform: translateY(-5px); */
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
