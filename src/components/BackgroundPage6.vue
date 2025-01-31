<template>
  <div class="fluid-colorful-waves">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #2563eb" />
          <stop offset="50%" style="stop-color: #10b981" />
          <stop offset="100%" style="stop-color: #f1f5f9" />
        </linearGradient>
      </defs>
      <g filter="url(#goo)">
        <circle
          v-for="(ball, index) in balls"
          :key="index"
          :cx="ball.cx"
          :cy="ball.cy"
          :r="ball.r"
          fill="url(#gradient)"
        >
          <animate
            attributeName="cx"
            :from="ball.cx"
            :to="`${120 - index * 10}%`"
            :dur="`${8 + Math.random() * 5}s`"
            repeatCount="indefinite"
            fill="freeze"
            direction="alternate"
          />

          <animate
            attributeName="cy"
            :from="ball.cy"
            :to="`${Math.random() * 100}%`"
            :dur="`${6 + Math.random() * 4}s`"
            repeatCount="indefinite"
            fill="freeze"
            direction="alternate"
          />
        </circle>
      </g>
    </svg>
    <div class="content-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const balls = ref(
  Array.from({ length: 10 }, (_, i) => ({
    cx: `${10 * (i + 1)}%`,
    cy: `${Math.random() * 100}%`,
    r: Math.random() * 40 + 30,
  })),
)
</script>

<style scoped>
.fluid-colorful-waves {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(45deg, #ffffff, #f1f5f9);
}

svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  border-radius: 20px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
