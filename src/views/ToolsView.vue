<script setup lang="ts">
import { ref } from 'vue'
const all = [
  {
    name: 'All',
  },
  {
    name: 'Programming Language',
  },
  {
    name: 'Framework',
  },
  {
    name: 'Library',
  },
  {
    name: 'Database',
  },
  {
    name: 'Cloud',
  },
]
const selected_nav = ref('All')
</script>

<template>
  <div class="profile">
    <h1>Common used tools</h1>
    <div class="group">
      <nav>
        <a
          @click="
            () => {
              selected_nav = d.name
            }
          "
          v-for="(d, i) in all"
          :key="i"
          :class="[selected_nav == d.name ? 'active' : '']"
          :to="''"
          >{{ d.name }}</a
        >
      </nav>
    </div>
    <div class="content">
      <div v-if="selected_nav == 'All'">All content</div>
      <div v-else-if="selected_nav == 'Programming Language'">Programming Language content</div>
      <div v-else-if="selected_nav == 'Framework'">Framework content</div>
      <div v-else-if="selected_nav == 'Library'">content</div>
      <div v-else-if="selected_nav == 'Database'">Database content</div>
      <div v-else-if="selected_nav == 'Cloud'">Cloud content</div>
    </div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  justify-content: space-around;
}
nav {
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
a {
  color: white;
  text-decoration: none;
  width: 100%;
  background: #7c7c7c;
  text-align: center;
}
a:hover {
  background: #6e6e6e;
}
.active {
  background: #6e6e6e;
}
.content {
  padding: 2rem 0;
}
</style>
