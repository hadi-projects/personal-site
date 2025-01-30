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
      <h2>Backend Developer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As an IT Development professional, I have been involved not only in the technical
        development process but also in strategic and operational aspects of software projects. My
        role extends beyond coding to include team management, cross-department collaboration, and
        client engagement.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          Software Development: Led and contributed to the development of various IT solutions,
          ensuring efficiency and scalability.
        </li>
        <li>
          Intern Recruitment & Mentorship: Managed the hiring process for internship developers and
          provided guidance to junior team members.
        </li>
        <li>
          Cross-Department Collaboration: Conducted meetings with different divisions to align
          development goals with business needs.
        </li>
        <li>
          Client Engagement & System Integration: Participated in client visits for system
          demonstrations, discussions, and integrations, both remotely and on-site.
        </li>
        <li>
          Product Planning & Strategy: Assisted in defining project roadmaps and feature
          prioritization based on stakeholder requirements.
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
