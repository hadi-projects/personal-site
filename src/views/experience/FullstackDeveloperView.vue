<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('experience')" :src="back" />
      <h2>Fullstack Developer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As a Fullstack Developer with over three years of experience, I have developed various
        applications ranging from e-commerce platforms to enterprise-grade dashboards. My expertise
        spans both frontend and backend development, ensuring scalable and secure software
        solutions.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          Application Development: Designed and built web and mobile applications using modern
          frameworks such as Laravel, Vue.js, React, and Flutter.
        </li>
        <li>
          Backend Architecture: Developed RESTful APIs and database structures for efficient data
          processing and management.
        </li>
        <li>
          Frontend Implementation: Created responsive user interfaces with an emphasis on UX/UI best
          practices.
        </li>
        <li>
          System Integration: Integrated third-party APIs, payment gateways, and authentication
          systems.
        </li>
        <li>
          Performance Optimization: Improved application performance through efficient code and
          caching strategies.
        </li>
        <li>
          Testing & Debugging: Ensured code reliability with unit testing and debugging across
          multiple environments.
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
