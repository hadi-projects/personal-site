<script setup lang="ts">
import { ref } from 'vue'
import download from './assets/download.svg'
import plus from './assets/plus.svg'
const selected_nav = ref('profile')

const navs = [
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'Experience',
    route: '/experience',
  },
  {
    name: 'Portofolio',
    route: '/portofolio',
  },
  {
    name: 'Certification',
    route: '/certification',
  },
  {
    name: 'Tools',
    route: '/tools',
  },
  {
    name: 'About',
    route: '/about',
  },
]
const downloads = [
  {
    name: 'Request Project',
    url: plus,
  },
  {
    name: 'Download CV',
    url: download,
  },
  {
    name: 'Download Portofolio',
    url: download,
  },
]
</script>

<template>
  <div class="card">
    <header>
      <h1>Personal Site</h1>
      <section>
        <a v-for="(d, i) in downloads" :key="i" @click="window.open(d.url)">
          <img width="16" :src="d.url" alt="" />
          {{ d.name }}</a
        >
      </section>
    </header>
    <nav>
      <router-link
        @click="selected_nav = d.name"
        v-for="(d, i) in navs"
        :key="i"
        :class="[selected_nav == d.name ? 'active' : '']"
        :to="d.route"
        >{{ d.name }}</router-link
      >
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
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
header {
  background-color: #515151;
  width: 100%;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  gap: 10px;
}
.card {
  background-color: #5b5b5b;
  /* min-height: 100vh; */
  height: 600px;
  width: 1200px;
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
}
main {
  padding: 40px;
  width: 100%;
  overflow: auto;
}
h1 {
  font-size: 18px;
  font-weight: bold;
}

header a {
  background: transparent;
  margin: 0 5px;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 4px;
}
header section {
  width: max-content;
  display: flex;
  justify-items: center;
}
</style>
