<script setup lang="ts">
import { ref } from 'vue'
import tele from './assets/tele.webp'
const selected_nav = ref('/profile')
import { useCounterStore } from './stores/counter'
import BackgroundPage from './components/BackgroundPage.vue'

const navs = [
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'Experience',
    route: '/experience',
  },
  {
    name: 'Portofolio',
    route: '/portofolio',
  },
  {
    name: 'Certification',
    route: '/certification',
  },
  {
    name: 'Tools',
    route: '/tools',
  },
  {
    name: 'About',
    route: '/about',
  },
]
const downloads = [
  {
    name: 'Telegram',
    // name: 'Talk to Me on Telegram',
    icon: tele,
    url: 'https://t.me/pompompurinofficials',
  },
  {
    name: 'Resume',
    // name: 'Check Out My Resume',
    icon: '',
    url: 'https://docs.google.com/document/d/1-X8peebLDH0Y5xyUyCmzPx_JTFdFmgDj8vUQxKviPmA/edit?usp=sharing',
  },
  {
    name: 'Work',
    // name: 'See My Work',
    icon: '',
    url: 'https://www.figma.com/deck/VduiWxGnJsr9uiIwLHphVX/Porto?node-id=1-25&t=VzYSw1M1PGXsjG20-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
]

const data = useCounterStore()
const redirect = (d: string) => {
  window.open(d)
}
</script>

<template>
  <background-page>
    <div class="card">
      <header>
        <div class="logo">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 5.26855H20.25M3.75 9.76855H20.25M3.75 14.2686H20.25M3.75 18.7686H20.25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h1 class="hidden">Personal Site</h1>
        </div>
        <section>
          <a v-for="(d, i) in downloads" :key="i" @click="redirect(d.url)">
            {{ d.name }}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 19.5186L19.5 4.51855M19.5 4.51855L8.25 4.51856M19.5 4.51855V15.7686"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </section>
      </header>
      <nav>
        <router-link
          @click="
            () => {
              selected_nav = d.route
              data.set_current_porto('')
            }
          "
          v-for="(d, i) in navs"
          :key="i"
          :class="[selected_nav == d.route ? 'active' : '']"
          :to="d.route"
          >{{ d.name }}</router-link
        >
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </background-page>
</template>

<style scoped>
.logo {
  display: flex;
  gap: 1rem;
}
.logo svg {
  display: none;
}
nav {
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #0f172a;
}
a {
  color: white;
  text-decoration: none;
  width: 100%;
  /* background: #14b8a6; */
  text-align: center;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s;
  border-bottom: transparent solid 1px;
}

a:hover {
  border-bottom: #0d9488 solid 1px;
  /* transform: translateY(-2px); */
}
.active {
  border-bottom: #0d9488 solid 1px;
}
header {
  background-color: #0f172a;
  width: 100%;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  gap: 10px;
}
.card {
  background-color: #1e293b;
  /* min-height: 100vh; */
  height: 600px;
  width: 1100px;
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  flex-direction: column;
  /* box-sizing: border-box; */
  /* border-radius: 8px; */
}
main {
  padding: 40px;
  width: 100%;
  overflow: auto;
}
h1 {
  font-size: 18px;
  font-weight: bold;
}

header a {
  background: transparent;
  margin: 0 5px;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  gap: 10px;
  background-color: #14b8a6;
}
header section {
  width: max-content;
  display: flex;
  justify-items: center;
  /* flex-direction: column; */
}

@media only screen and (max-width: 1100px) {
  .logo svg {
    display: none;
  }
  nav {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #0f172a;
    overflow-x: scroll;
    min-height: 35px;
  }
  a {
    color: white;
    text-decoration: none;
    width: 100%;
    padding: 0.2rem 1rem;
    /* background: #14b8a6; */
    text-align: center;
    transition:
      background 0.3s ease-in-out,
      transform 0.2s;
    border-bottom: transparent solid 1px;
    /* display: none; */
  }

  a:hover {
    border-bottom: #0d9488 solid 1px;
    /* transform: translateY(-2px); */
  }
  .active {
    border-bottom: #0d9488 solid 1px;
  }
  header {
    background-color: #0f172a;
    width: 100%;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    gap: 10px;
    /* font-size: small; */
    /* overflow-x: scroll; */
  }
  .card {
    background-color: #1e293b;
    /* min-height: 100vh; */
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    flex-direction: column;
    box-sizing: border-box;
    /* border-radius: 8px; */
  }
  main {
    padding: 20px;
    width: 100%;
    overflow: auto;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  header a {
    /* margin: 0 5px; */
    width: fit-content;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-items: center;
    justify-content: center;
    gap: 10px;
    /* background-color: #14b8a6; */
  }
  header section {
    width: max-content;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  header section a {
    display: flex;
    justify-items: center;
    background-color: transparent;
    /* background-color: #14b8a6; */
  }
  svg {
    width: 8px;
  }
}
</style>
