<script setup lang="ts">
import lapor from '../assets/portofolio/lapor.png'
import sivisat from '../assets/portofolio/sivisat.png'
import blog_kampus from '../assets/portofolio/blog kampus.png'
import kasirku from '../assets/portofolio/kasirku.png'
import pemdes from '../assets/portofolio/pemdes.png'
import vault from '../assets/portofolio/vault.png'
import vault_management from '../assets/portofolio/vault management.png'
import landing from '../assets/portofolio/landing.png'
import palalu from '../assets/portofolio/palalu.png'
import { useCounterStore } from '../stores/counter'
import { RouterView } from 'vue-router'
import api from '../assets/portofolio/api.png'
import personals from '../assets/portofolio/personal-1.png'
import CardComponent2 from '@/components/CardComponent2.vue'

const freelance = [
  {
    img: palalu,
    name: 'Palalu',
    url: 'palalu',
    year: '2022',
  },
  {
    img: lapor,
    name: 'Lapor',
    url: 'lapor',
    year: '2021',
  },
  {
    img: sivisat,
    name: 'Sivisat',
    url: 'sivisat',
    year: '2021',
  },
  {
    img: blog_kampus,
    name: 'Blog Kampus',
    url: 'blog-kampus',
    year: '2020',
  },
  {
    img: kasirku,
    name: 'Kasirku',
    url: 'kasirku',
    year: '2021',
  },
  {
    img: pemdes,
    name: 'Form Pemdes',
    url: 'pemdes',
    year: '2021',
  },
]
const tennet = [
  {
    img: vault,
    url: 'vault',
    name: 'Tennet Vault',
    year: '2023',
  },
  {
    img: vault_management,
    url: 'vault-management',
    name: 'Vault Management',
    year: '2022-2023',
  },
  {
    img: landing,
    url: 'landing',
    name: 'Tennet Landing Page',
    year: '2023',
  },
]
const personal = [
  {
    img: personals,
    url: 'personal',
    name: 'Personal Site',
    year: '2023',
  },
  {
    img: api,
    url: 'wallet',
    name: 'Wallet Api',
    year: '2022-2023',
  },
]
const data = useCounterStore()
</script>

<template>
  <div class="portofolio">
    <div v-if="data.current_porto != ''">
      <RouterView />
    </div>
    <div v-else>
      <header>
        <h2>Personal Project</h2>
      </header>
      <div class="cards">
        <CardComponent2
          v-for="(d, i) in personal"
          :key="i"
          :img="d.img"
          :title="d.name"
          :description="d.year"
        />
      </div>
      <header>
        <h2>Tennet Depository</h2>
      </header>
      <div class="cards">
        <CardComponent2
          v-for="(d, i) in tennet"
          :key="i"
          :img="d.img"
          :title="d.name"
          :description="d.year"
        />
      </div>
      <br />
      <header>
        <h2>Freelance</h2>
      </header>
      <div class="cards">
        <CardComponent2
          v-for="(d, i) in freelance"
          :key="i"
          :img="d.img"
          :title="d.name"
          :description="d.year"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
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
img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
}
.title {
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title h3 {
  font-size: 14px;
}
.title p {
  font-size: 12px;
}
header {
  margin: 2rem 1rem 0 0;
}
</style>
