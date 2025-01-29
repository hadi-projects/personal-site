<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import lapor1 from '../../assets/portofolio/lapor-1.jpg'
import lapor2 from '../../assets/portofolio/lapor-2.jpg'
import lapor3 from '../../assets/portofolio/lapor-3.jpg'

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
      <h2>Sivisat</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="lapor1" />
        <img width="300" :src="lapor2" />
        <img width="300" :src="lapor3" />
      </div>
      <h4>Description</h4>
      <p>
        This project is a collaboration with local government, aimed at creating a platform for
        citizens to report issues directly to the regional authorities. The application allows users
        to submit various types of reports, such as public infrastructure issues, environmental
        concerns, or other community-related matters.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          User-Friendly Interface: Designed for ease of use by a wide range of citizens. Real-Time
        </li>
        <li>
          Reporting: Allows users to submit detailed reports with photos and descriptions. Status
        </li>
        <li>Tracking: Citizens can track the progress of their reports until resolution.</li>
        <li>
          Administrative Dashboard: A powerful tool for government officials to manage, categorize,
          and respond to incoming reports efficiently.
        </li>
        <li>
          Secure and Scalable Architecture: Ensures data security and supports a growing user base.
        </li>
      </ul>
      <h4>Technology Used</h4>
      Programming Laguage: Javascript Backend: Express Js, Node Mailer, Morgan, Multer, Mongoose
      Frontend: Vue Js, Vuex, Vue-Router, Axios, Chart Js, PrimeVue Database: Mongo DB Server: VPS
      IdCloudHost
    </div>
  </div>
</template>

<style scoped>
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
