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
    site: 'https://tennet.id',
  },
  {
    title: 'Backend Developer',
    company: 'Tennet Depository Indonesia',
    date: 'January 2024 - Juny 2024',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
    site: 'https://tennet.id',
  },
  {
    title: 'IT Development',
    company: 'Tennet Depository Indonesia',
    date: 'Juny 2024 - Now',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
    site: 'https://tennet.id',
  },
  {
    title: 'Fullstack Engineer',
    date: 'Octiber 2022 - Juny 2024',
    company: 'Tennet Depository Indonesia',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: tennet_logo,
    site: 'https://tennet.id',
  },
  {
    company: 'Freelance',
    title: 'Software Engineer',
    date: 'Octiber 2022 - Juny 2024',
    description: ['bla bla bla', 'bla bla bla', 'bla bla bla'],
    company_logo: freelance,
    site: 'https://tennet.id',
  },
])
</script>

<template>
  <div class="cards">
    <div v-for="(event, index) in timelineEvents" :key="index" class="card">
      <div class="content">
        <img width="300" :src="event.company_logo as string" alt="" />
        <div class="title">
          <h3 class="title2">{{ event.title }}</h3>
          <section>
            <div class="company">
              <div class="logo">
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
  border-radius: 8px;
  background-color: #515151;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
}
.title {
  font-weight: bold;
  padding: 0.4rem;
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
