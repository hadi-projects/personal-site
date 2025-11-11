<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('experience')" :src="back" />
      <h2>IDRX - Software Engineer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As a Software Engineer at IDRX, I contributed to the development of secure and scalable crypto and stable-coin-related products. 
        My role involved maintaining and enhancing both frontend and backend systems, optimizing performance, and ensuring high-quality code delivery. 
        I worked closely with product and engineering teams to implement features, improve system architecture, and support product growth in the digital asset ecosystem.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          Fullstack Development: Implemented backend services and modern frontends using best practices for performance, security, and maintainability.
        </li>
        <li>
          Blockchain & Crypto Integration: Supported Web3-related workflows including asset management, wallet logic, and crypto transaction handling.
        </li>
        <li>
          API Design & Implementation: Built and optimized internal/external RESTful APIs to support platform features and automation processes.
        </li>
        <li>
          Database Design & Optimization: Designed database structures, performed query optimization, and maintained reliable data flows.
        </li>
        <li>
          Cross-Functional Collaboration: Worked with product managers, QA, and designers to translate requirements into technical solutions.
        </li>
      </ul>
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
