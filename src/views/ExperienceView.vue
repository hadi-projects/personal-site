<script lang="ts" setup>
import { reactive } from 'vue'
import tennet_logo from '../assets/tennet.png'
import freelance from '../assets/freelance.png'

interface TimelineEvent {
  title: string
  date: string
  company: string
  description: string[]
  company_logo: unknown
}

const timelineEvents: TimelineEvent[] = reactive([
  {
    title: 'Lead Developer',
    date: 'Juny 2024 - Now',
    company: 'Tennet Depository Indonesia',
    description: ['Managing team', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
  },
  {
    title: 'Backend Developer',
    company: 'Tennet Depository Indonesia',
    date: 'January 2024 - Juny 2024',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
  },
  {
    title: 'IT Development',
    company: 'Tennet Depository Indonesia',
    date: 'Juny 2024 - Now',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
  },
  {
    title: 'Fullstack Engineer',
    date: 'Octiber 2022 - Juny 2024',
    company: 'Tennet Depository Indonesia',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
  },
  {
    company: 'Freelance',
    title: 'Software Engineer',
    date: 'Octiber 2022 - Juny 2024',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: freelance,
  },
])
</script>

<template>
  <div class="cards">
    <div v-for="(event, index) in timelineEvents" :key="index" class="card">
      <div class="content">
        <h3 class="title">{{ event.title }}</h3>
        <section>
          <div class="company">
            <div class="logo">
              <img width="60" height="10" :src="event.company_logo as string" alt="" />
              <p>{{ event.company }}</p>
            </div>
            <p>{{ event.date }}</p>
          </div>
        </section>
        <br />
        <p class="description">Description:</p>
        <p class="description" v-for="(d, i) in event.description" :key="i">
          <span class="cir"></span> {{ d }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 30px;
  display: flex;
  justify-items: center;
  gap: 1rem;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  width: 320px;
  padding: 0.4rem;
  border-radius: 8px;
  background-color: #515151;
}
.title {
  font-weight: bold;
}
.date {
  font-size: 10px;
}
section .company {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.description {
  font-size: 10px;
}
.cir {
  width: 4px;
  height: 4px;
  background-color: black;
}
</style>
