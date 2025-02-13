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
  <div class="futuristic-wave-gradient-background">
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>

<style scoped>
.futuristic-wave-gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  background: linear-gradient(45deg, #1e3a8a, #2563eb, #10b981, #0ea5e9);
  background-size: 400% 400%;
  animation: gradientBackground 15s ease infinite;
}

.futuristic-wave-gradient-background::before,
.futuristic-wave-gradient-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.5;
}

.futuristic-wave-gradient-background::before {
  filter: blur(20px);
  animation: waveAnimation 8s ease-in-out infinite alternate;
}

.futuristic-wave-gradient-background::after {
  filter: blur(40px);
  animation: waveAnimation 12s ease-in-out infinite alternate-reverse;
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

@keyframes waveAnimation {
  0% {
    transform: translateX(-25%) translateY(-25%) rotate(0deg);
  }
  100% {
    transform: translateX(25%) translateY(25%) rotate(360deg);
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow-x: scroll;
}

.content-container {
  overflow-x: scroll;
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

/* =================== */
/* =================== */
/* =================== */
@media only screen and (max-width: 1100px) {
  .futuristic-wave-gradient-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: none;
    background-size: 400% 400%;
    animation: none;
  }

  .futuristic-wave-gradient-background::before,
  .futuristic-wave-gradient-background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    opacity: 0.5;
  }

  .futuristic-wave-gradient-background::before {
    filter: blur(20px);
    animation: none;
  }

  .futuristic-wave-gradient-background::after {
    filter: blur(40px);
    animation: none;
  }

  .content-container {
    overflow-x: scroll;
    /* position: relative; */
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .content-wrapper {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    /* border-radius: 12px; */
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.08);
    transition:
      box-shadow 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    padding: 0;
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
}
</style>
