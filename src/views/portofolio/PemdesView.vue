<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import pemdes1 from '../../assets/portofolio/pemdes-1.jpg'

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
      <h2>Form Pendes - Village Election Management Application</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="pemdes1" />
      </div>
      <h4>Description</h4>
      <p>
        Form Pendes is a simple yet effective application designed to streamline the village head
        election process. It replaces manual data recording with a digital form system, ensuring
        more accurate and efficient election management.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Voter Registration: Allows input of voter names to ensure proper documentation.</li>
        <li>
          Candidate Selection: Enables voters to choose their preferred village head candidate.
        </li>
        <li>
          Data Recording & Management: Digitizes election records for improved accuracy and
          accessibility.
        </li>
        <li>User-Friendly Interface: Designed for ease of use by election officials and voters.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Javascript, PHP</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Vue Js, Vuex, Vue-Router, Axios</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Laravel</p>
      </div>
      <div class="pair">
        <p>Database:</p>
        <p>MySQL</p>
      </div>
      <div class="pair">
        <p>Server:</p>
        <p>VPS IdCloudHost</p>
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
