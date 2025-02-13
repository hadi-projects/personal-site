<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'
import sivisat1 from '../../assets/portofolio/sivisat-1.jpg'
import sivisat2 from '../../assets/portofolio/sivisat-2.jpg'
import sivisat3 from '../../assets/portofolio/sivisat-3.jpg'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('portofolio')" :src="back" />
      <h2>Sivisat</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img height="300" :src="sivisat1" />
        <img height="300" :src="sivisat2" />
        <img height="300" :src="sivisat3" />
      </div>
      <h4>Description</h4>
      <p>
        Sivisat is a mobile application developed to streamline inventory management for local
        government offices. The application ensures efficient tracking and documentation of office
        assets.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          Comprehensive Reporting: Tracks incoming, outgoing, and borrowed inventory items with
          detailed logs.
        </li>
        <li>
          Automated PDF Generation: Automatically creates professional PDF documents for each
          inventory transaction, including check-ins, check-outs, and loans. Mobile
        </li>
        <li>
          Accessibility: Provides on-the-go access for inventory management via mobile devices.
        </li>
        <li>
          User Roles and Permissions: Ensures secure access control for different levels of users.
        </li>
        <li>Data Security: Implements robust measures to protect sensitive inventory data.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Dart, PHP</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Flutter, Signature, QR Scanner, Pdf</p>
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
        <p>Server(Backend):</p>
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
