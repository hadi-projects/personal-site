<script lang="ts" setup>
import { reactive } from 'vue'
import tennet_logo from '../assets/tennet.png'
import freelance from '../assets/freelance.png'
import { useCounterStore } from '../stores/counter'
import CardComponent2 from '@/components/CardComponent2.vue'

interface TimelineEvent {
  title: string
  date: string
  company: string
  company_logo: object
  route: string
}

const timelineEvents: TimelineEvent[] = reactive([
  {
    title: 'Lead Developer',
    date: 'Juny 2024 - Now',
    company: 'Tennet Depository Indonesia',
    company_logo: tennet_logo,
    route: 'lead',
  },
  {
    title: 'Backend Developer',
    company: 'Tennet Depository Indonesia',
    date: 'January 2024 - Juny 2024',
    company_logo: tennet_logo,
    route: 'backend',
  },
  {
    title: 'IT Development',
    company: 'Tennet Depository Indonesia',
    date: 'Juny 2024 - Now',
    company_logo: tennet_logo,
    route: 'itdev',
  },
  {
    title: 'Fullstack Engineer',
    date: 'Octiber 2022 - Juny 2024',
    company: 'Tennet Depository Indonesia',
    company_logo: tennet_logo,
    route: 'fullstack',
  },
  {
    company: 'Freelance',
    title: 'Software Engineer',
    date: 'Octiber 2022 - Juny 2024',
    company_logo: freelance,
    route: 'software',
  },
])
const data = useCounterStore()
</script>

<template>
  <div>
    <div v-if="data.current_porto != ''">
      <RouterView />
    </div>
    <div v-else class="cards">
      <CardComponent2
        v-for="(event, index) in timelineEvents"
        :route="event.route"
        :key="index"
        :description="event.company"
        :title="event.title"
        :img="event.company_logo as object"
      />
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
.cir {
  width: 4px;
  height: 4px;
  background-color: black;
}
</style>
