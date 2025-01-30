<script setup lang="ts">
defineProps({
  selected_nav: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div
    class="card"
    :class="[data.type == selected_nav ? '' : 'hidden']"
    v-if="data.type == selected_nav"
  >
    <img :src="data.img" width="240" alt="" />
    <div class="title">
      <h3>{{ data.name }}</h3>
      <p>{{ data.type }}</p>
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
</style>
