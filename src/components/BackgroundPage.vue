<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
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
const data = useCounterStore()
const redirect = (d: string) => {
  window.open(d)
}
</script>

<template>
  <div class="dialog-wrapper" v-if="data.show_dialog == true">
    <div class="dialog">
      <div class="head">
        <h2>Hire Me</h2>
        <svg
          @click="data.set_show_dialog()"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18.0068L18 6.00684M6 6.00684L18 18.0068"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="as">
        <p @click="() => redirect('https://forms.gle/SSzFf4m8SqEtbMvu8')">
          Smart Contract Development
        </p>
        <p @click="() => redirect('https://forms.gle/p5dHCkc9LKaQwfFA7')">Software Development</p>
        <p @click="() => redirect('https://t.me/pompompurinofficials')">Talk by Telegram</p>
      </div>
    </div>
  </div>
  <div class="futuristic-wave-gradient-background">
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
.dialog-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #000000a2;
  position: absolute;
  display: flex;
  z-index: 99;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 1, 0.2); */
}
.dialog {
  width: 350px;
  border-radius: 8px;
  background: #0f172a;
  padding: 1rem;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.12);
  border: #14b8a587 0.5px solid;
  color: white;
}
.dialog .head {
  display: flex;
  justify-content: space-between;
}

.dialog .head svg {
  width: 20px;
}

.dialog .as {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  margin-top: 2rem;
}
.dialog .as p {
  background-color: #0d9488;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}
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
    display: none;
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
    z-index: 2;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 0;
  }

  .content-wrapper {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.08);
    transition:
      box-shadow 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    padding: 0;
    height: 100vh;
  }

  .content-wrapper:hover {
    box-shadow:
      0 6px 12px rgba(0, 0, 0, 0.15),
      0 12px 24px rgba(0, 0, 0, 0.12);
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
