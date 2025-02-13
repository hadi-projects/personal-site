<script setup lang="ts">
import router from '@/router'

defineProps({
  img: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  route: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="card">
    <div class="wr">
      <div class="loader"></div>
      <img :src="img" />
    </div>
    <div class="title">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>{{ date }}</p>
      <a
        v-if="route != ''"
        @click="
          () => {
            router.push({ name: route })
          }
        "
        >More</a
      >
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
.card {
  border-radius: 12px;
  background-color: #1e293b;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); /* Soft neon glow */
  border: 1px solid rgba(20, 184, 166, 0.5);
  width: 240px;
}
.card:hover {
  box-shadow: 0 0 25px rgba(20, 184, 166, 0.6);
}
.title {
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  z-index: 1;

  width: 100%;
}
a {
  background: transparent;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  gap: 10px;
  background-color: #14b8a6;
  width: 100%;
  justify-content: center;
  color: white;
  margin: 1rem 0 0 0;
}
.wr {
  position: relative;
  max-width: 240px;
  height: 180px;
  background: #000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  justify-items: center;
}
.loader {
  z-index: 0;
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 8px;
  aspect-ratio: 1;
  top: 100px;
  border-radius: 50%;
  background: #828b8a;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
