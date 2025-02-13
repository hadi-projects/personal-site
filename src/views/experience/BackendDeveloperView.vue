<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('experience')" :src="back" />
      <h2>Backend Developer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As a Backend Developer, I have designed and implemented scalable, secure, and
        high-performance backend systems for various applications. My expertise lies in building
        APIs, database management, and system optimization to ensure seamless functionality.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          API Development: Built and maintained RESTful and GraphQL APIs to support web and mobile
          applications.
        </li>
        <li>
          Database Management: Designed and optimized relational (MySQL, PostgreSQL) and NoSQL
          (MongoDB) databases.
        </li>
        <li>
          Authentication & Security: Implemented robust authentication mechanisms (JWT, OAuth) and
          security best practices.
        </li>
        <li>
          System Optimization: Improved backend performance through caching, indexing, and efficient
          query structuring.
        </li>
        <li>
          Third-Party Integrations: Integrated external services, such as payment gateways, cloud
          storage, and messaging systems.
        </li>
        <li>
          Scalability & Performance: Designed microservices and serverless architectures to handle
          high traffic loads.
        </li>
        <li>
          Testing & Debugging: Wrote unit and integration tests to maintain code reliability and
          stability.
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
