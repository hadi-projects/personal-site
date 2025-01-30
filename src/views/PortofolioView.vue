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
import router from '@/router'
import { RouterView } from 'vue-router'
import api from '../assets/portofolio/api.png'

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
    img: api,
    url: 'vault',
    name: 'Personal Site',
    year: '2023',
  },
  {
    img: api,
    url: 'vault-management',
    name: 'Wallet Api Express',
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
        <div class="card" v-for="(d, i) in personal" :key="i">
          <div v-if="d.img == '..'" class="progress"><p>On Progress</p></div>
          <img
            @click="
              () => {
                data.set_current_porto(d.url)
                router.push({ name: d.url })
              }
            "
            v-else
            :src="d.img"
            width="240"
            alt=""
          />
          <div class="title">
            <h3>{{ d.name }}</h3>
            <p>{{ d.year }}</p>
          </div>
        </div>
      </div>
      <header>
        <h2>Tennet Depository</h2>
      </header>
      <div class="cards">
        <div class="card" v-for="(d, i) in tennet" :key="i">
          <div v-if="d.img == '..'" class="progress"><p>On Progress</p></div>
          <img
            @click="
              () => {
                data.set_current_porto(d.url)
                router.push({ name: d.url })
              }
            "
            v-else
            :src="d.img"
            width="240"
            alt=""
          />
          <div class="title">
            <h3>{{ d.name }}</h3>
            <p>{{ d.year }}</p>
          </div>
        </div>
      </div>
      <br />
      <header>
        <h2>Freelance</h2>
      </header>
      <div class="cards">
        <div class="card" v-for="(d, i) in freelance" :key="i">
          <div v-if="d.img == '..'" class="progress"><p>On Progress</p></div>
          <img
            @click="
              () => {
                data.set_current_porto(d.url)
                router.push({ name: d.url })
              }
            "
            v-else
            :src="d.img"
            width="240"
            alt=""
          />
          <div class="title">
            <h3>{{ d.name }}</h3>
            <p>{{ d.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  overflow: auto;
}
.card {
  /* border: solid 1px #3a3a3a; */
  width: 240px;
  border-radius: 8px;
  /* background-color: #6e6e6e; */
  background-color: #515151;
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
