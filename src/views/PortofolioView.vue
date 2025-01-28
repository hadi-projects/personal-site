<script setup lang="ts">
import lapor from '../assets/portofolio/lapor.png'
import sivisat from '../assets/portofolio/sivisat.png'
import blog_kampus from '../assets/portofolio/blog kampus.png'
import kasirku from '../assets/portofolio/kasirku.png'
import pemdes from '../assets/portofolio/pemdes.png'
const tennet = [
  {
    img: lapor,
    name: 'Lapor',
    year: '2021',
  },
  {
    img: sivisat,
    name: 'Sivisat',
    year: '2021',
  },
  {
    img: blog_kampus,
    name: 'Blog Kampus',
    year: '2020',
  },
  {
    img: kasirku,
    name: 'Kasirku',
    year: '2021',
  },
  {
    img: pemdes,
    name: 'Pemdes',
    year: '2021',
  },
]
const freelance = [
  {
    img: lapor,
    name: 'Lapor',
    year: '2021',
  },
  {
    img: sivisat,
    name: 'Sivisat',
    year: '2021',
  },
]
const redirect = (d: string) => {
  window.open(d)
}
</script>

<template>
  <div class="portofolio">
    <header>
      <h2>Tennet Depository</h2>
    </header>
    <div class="cards">
      <div class="card" v-for="(d, i) in tennet" :key="i">
        <div v-if="d.img == '..'" class="progress"><p>On Progress</p></div>
        <img @click="redirect(d.img)" v-else :src="d.img" width="240" alt="" />
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
        <img @click="redirect(d.img)" v-else :src="d.img" width="240" alt="" />
        <div class="title">
          <h3>{{ d.name }}</h3>
          <p>{{ d.year }}</p>
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
</style>
