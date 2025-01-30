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
      <h2>Software Engineer</h2>
    </div>
    <div class="body">
      <h4>Description</h4>
      <p>
        As a freelance Software Engineer, I have developed several web and mobile applications in
        collaboration with local government institutions. I was responsible for the entire software
        development lifecycle, from initial planning to deployment.
      </p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>
          End-to-End Development: Led the full development process, including backend, frontend, and
          database design.
        </li>
        <li>
          Project Planning & Requirement Gathering: Worked closely with stakeholders to define
          project scopes, objectives, and technical requirements.
        </li>
        <li>
          UI/UX Design: Designed user-friendly interfaces to enhance user experience and
          accessibility.
        </li>
        <li>
          Application Deployment: Managed the deployment of web and mobile applications to ensure
          seamless operation.
        </li>
        <li>
          Government Collaboration: Developed software solutions tailored to the needs of local
          government agencies.
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
