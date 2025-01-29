<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import vm_1 from '../../assets/portofolio/vm-1.png'
import vm_2 from '../../assets/portofolio/vm-2.png'
import vm_3 from '../../assets/portofolio/vm-3.png'

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
      <h2>Vault Management</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="vm_1" />
        <img width="300" :src="vm_2" />
        <img width="300" :src="vm_3" />
      </div>
      <h4>Description</h4>
      <p>
        Vault Management is an internal enterprise dashboard designed for managing client vault
        operations efficiently. It provides tools for transaction oversight, compliance management,
        and operational controls.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>Client Management: Supports secure onboarding and verification processes.</li>
        <li>Approval Workflow: Implements multi-layer approval for transactions..</li>
        <li>Transaction Inquiry: Enables real-time tracking and monitoring of vault activities.</li>
        <li>Fee Management: Provides configurable fee structures for different client needs.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Golang</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Golang</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Golang</p>
      </div>
      <div class="pair">
        <p>Database:</p>
        <p>MySQL</p>
      </div>
      <div class="pair">
        <p>Server:</p>
        <p>Google Cloud Platform</p>
      </div>
      <br />
      <p>
        Vault Management demonstrates my ability to develop enterprise-grade financial systems with
        a focus on security, compliance, and operational efficiency.
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
