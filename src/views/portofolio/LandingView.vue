<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import landing1 from '../../assets/portofolio/landing-1.png'
import landing2 from '../../assets/portofolio/landing-2.png'
import landing3 from '../../assets/portofolio/landing-3.png'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img
        @click="
          () => {
            router.push('/portofolio')
            data.set_current_porto('')
          }
        "
        :src="back"
      />
      <h2>Tennet Landing Page</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="landing1" />
        <img width="300" :src="landing2" />
        <img width="300" :src="landing3" />
      </div>
      <h4>Description</h4>
      <p>
        This is the official landing page for my company, developed as a Single Page Application
        (SPA) using Vue.js. The website is designed to provide a seamless and interactive experience
        while effectively presenting the company’s services and offerings.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>SPA Architecture: Ensures smooth navigation without page reloads.</li>
        <li>Categorized Sections: Organized content with structured navigation in the header.</li>
        <li>Responsive Design: Optimized for both desktop and mobile viewing.</li>
        <li>Dynamic Content Loading: Improves performance and user experience.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Javascript, Vue js</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Vue js, Vue SPA, Vue PWA</p>
      </div>
      <div class="pair">
        <p>Styling:</p>
        <p>Tailwind Css</p>
      </div>
      <div class="pair">
        <p>Server:</p>
        <p>Google Cloud Platform</p>
      </div>
      <br />
      <p>
        This project highlights my expertise in developing modern, scalable, and user-friendly web
        applications.
      </p>
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
