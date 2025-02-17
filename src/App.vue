<script setup lang="ts">
import tele from './assets/tele.webp'
import { useCounterStore } from './stores/counter'
import BackgroundPage from './components/BackgroundPage.vue'
import router from './router'
import { onMounted } from 'vue'

const navs = [
  {
    name: 'Profile',
    route: 'profile',
  },
  {
    name: 'Experience',
    route: 'experience',
  },
  {
    name: 'Portofolio',
    route: 'portofolio',
  },
  {
    name: 'Certification',
    route: 'certification',
  },
  {
    name: 'Tools',
    route: 'tools',
  },
  {
    name: 'About',
    route: 'about',
  },
]
onMounted(() => {
  data.set_current_route(router.currentRoute.value.name as string)
})
const downloads = [
  {
    name: 'Hire Me',
    icon: tele,
    url: 'https://t.me/pompompurinofficials',
  },
  {
    name: 'Resume',
    icon: '',
    url: 'https://docs.google.com/document/d/1-X8peebLDH0Y5xyUyCmzPx_JTFdFmgDj8vUQxKviPmA/edit?usp=sharing',
  },
  {
    name: 'Work',
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
          <a
            v-for="(d, i) in downloads"
            :key="i"
            @click="
              () => {
                if (d.name == 'Hire Me') {
                  data.set_show_dialog()
                  return
                }
                redirect(d.url)
              }
            "
          >
            {{ d.name }}
            <svg
              v-if="d.name != 'Hire Me'"
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
          @click="() => data.set_current_route(d.route)"
          v-for="(d, i) in navs"
          :key="i"
          :class="[data.current_route == d.route ? 'active' : '']"
          :to="d.route"
          >{{ d.name }}</router-link
        >
      </nav>
      <main>
        <RouterView />
        <footer>
          Hadi Gunawan 2025 |
          <span
            @click="redirect('https://github.com/hadi-projects/personal-site/fork')"
            class="fork"
            >Fork this repository</span
          >
        </footer>
      </main>
    </div>
  </background-page>
</template>

<style>
.fork {
  cursor: pointer;
}
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
  width: 100%;
  overflow: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
h1 {
  font-size: 18px;
  font-weight: bold;
}

header a {
  background: transparent;
  margin: 0 5px;
  padding: 8px 10px;
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

footer {
  margin: 2rem 0 0.5rem 0;
  border-top: #495454 solid 1px;
}
svg {
  width: 12px;
}
.dialog-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #000000a2;
  position: absolute;
  display: flex;
  z-index: 99;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 1, 0.2); */
}
.dialog {
  width: 350px;
  border-radius: 8px;
  background: #0f172a;
  padding: 1rem;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.12);
  border: #14b8a587 0.5px solid;
  color: white;
}
.dialog .head {
  display: flex;
  justify-content: space-between;
}

.dialog .head svg {
  width: 20px;
}

.dialog .as {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
  margin-top: 2rem;
}
.dialog .as p {
  background-color: #0d9488;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}
/* ========== */
/* ========== */
/* ========== */
/* ========== */
/* ========== */
@media only screen and (max-width: 1100px) {
  .logo svg {
    display: none;
  }
  nav {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    overflow-x: scroll;
    min-height: 35px;
  }
  a {
    margin: 0;
    padding: 1rem;
    color: white;
    text-decoration: none;
    width: 100%;
    text-align: center;
    transition:
      background 0.3s ease-in-out,
      transform 0.2s;
    border-bottom: transparent solid 1px;
  }

  a:hover {
    border-bottom: #0d9488 solid 1px;
  }
  .active {
    border-bottom: #0d9488 solid 1px;
  }
  header {
    width: 100%;
    color: white;
    padding: 10px 0;
    text-align: center;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 50px;
  }
  .card {
    background-color: #1e293b;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
  }
  main {
    padding: 20px;
    width: 100%;
    /* overflow: auto; */
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  header a {
    width: fit-content;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-items: center;
    justify-content: center;
    gap: 10px;
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
  }
  svg {
    width: 8px;
  }
}
</style>
