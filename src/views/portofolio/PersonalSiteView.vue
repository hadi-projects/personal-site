<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'
import personal1 from '../../assets/portofolio/personal-1.png'
import personal2 from '../../assets/portofolio/personal-2.png'
import personal3 from '../../assets/portofolio/personal-3.png'
import personal4 from '../../assets/portofolio/personal-4.png'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('portofolio')" :src="back" />
      <h2>Personal Site</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="personal1" />
        <img width="300" :src="personal2" />
        <img width="300" :src="personal3" />
        <img width="300" :src="personal4" />
      </div>
      <h4>Description</h4>
      <p>
        This personal website is an open-source project designed to showcase my professional skills,
        experience, and portfolio. It serves as a demonstration of my technical expertise and web
        development capabilities.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Profile: Provides a brief introduction about me.</li>
        <li>Experience: Lists my professional work experience and achievements.</li>
        <li>Tools: Highlights the technologies and tools I use.</li>
        <li>Certifications: Displays my professional certifications.</li>
        <li>About Page: Describes the purpose and background of this website.</li>
        <li>
          Attractive UI: Designed with a modern and interactive interface for an enhanced user
          experience.
        </li>
        <li>Open Source: The source code is available for learning and contributions.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>TypeScript, Vue</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Vue 3, Vanilla CSS</p>
      </div>
      <div class="pair">
        <p>Build Tool:</p>
        <p>Vite</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pair {
  display: flex;
  gap: 0.5rem;
}
.gallery {
  display: flex;
  gap: 1rem;
  /* background-color: grey; */
  margin: 2rem 0;
  flex-wrap: wrap;
}
.nav {
  display: flex;
  gap: 1rem;
  border-bottom: solid #fff 1px;
  padding-bottom: 0.5rem;
}
.nav img {
  /* margin-right: 0 1rem; */
  cursor: pointer;
}
h4 {
  font-weight: bold;
  margin: 1rem 0;
}
</style>
