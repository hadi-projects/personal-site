<script setup lang="ts">
import router from '@/router'

defineProps({
  img: {
    type: String,
    default: '',
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
    <img :src="img" width="240" alt="" />
    <div class="title">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p>{{ date }}</p>
      <a
        v-if="route != ''"
        @click="
          () => {
            router.push(route)
          }
        "
        >More</a
      >
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  background-color: #1e293b;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); /* Soft neon glow */
  border: 1px solid rgba(20, 184, 166, 0.5);
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
}
a {
  background: transparent;
  /* margin: 0 5px; */
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
</style>
