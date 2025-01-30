<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img
        @click="
          () => {
            router.push('/experience')
            data.set_current_porto('')
          }
        "
        :src="back"
      />
      <h2>Lead Developer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As a Lead Developer, I have been responsible for overseeing software development projects
        while remaining actively involved in coding. My role combines technical leadership,
        architectural planning, and hands-on development to ensure the delivery of high-quality,
        scalable solutions.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          Technical Leadership: Led development teams in building efficient and maintainable
          software solutions.
        </li>
        <li>
          Active Coding: Actively contributed to coding tasks, implementing key features, and
          optimizing system performance.
        </li>
        <li>
          Architecture & Design: Designed scalable and modular software architectures tailored to
          business needs.
        </li>
        <li>
          Code Review & Best Practices: Ensured high coding standards, security compliance, and
          performance optimizations.
        </li>
        <li>
          Project Management: Managed development timelines, resource allocation, and sprint
          planning.
        </li>
        <li>
          Mentorship & Team Development: Provided technical mentorship and support for junior and
          mid-level developers.
        </li>
        <li>
          Stakeholder Collaboration: Worked closely with product managers, designers, and clients to
          align technical solutions with business goals.
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
