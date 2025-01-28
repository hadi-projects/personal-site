<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import kasirku1 from '../../assets/portofolio/kasirku-1.jpg'
import kasirku2 from '../../assets/portofolio/kasirku-2.jpg'

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
      <h2>Kasirku</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="kasirku1" />
        <img width="300" :src="kasirku2" />
      </div>
      <h4>Description</h4>
      <p>
        Kasirku is a custom-built Point of Sale (POS) application developed for a small business
        (UMKM) based on their specific needs. The application simplifies daily operations and
        improves efficiency in managing sales and inventory.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          Sales Reports: Provides detailed daily and monthly sales reports for easy performance
          tracking.
        </li>
        <li>
          Barcode Scanning: Enables quick and accurate product entry and sales processing through
          barcode scanning.
        </li>
        <li>
          User-Friendly Interface: Designed for ease of use, minimizing training requirements for
          staff.
        </li>
        <li>Inventory Management: Keeps track of stock levels and product details.</li>
        <li>Secure Transactions: Ensures safe and reliable handling of financial data.</li>
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
        <p>localhost(used locally)</p>
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
