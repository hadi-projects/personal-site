<script setup lang="ts">
import { ref } from 'vue'
import html from '../assets/tools/html.png'
import css from '../assets/tools/css.png'
import javascript from '../assets/tools/js.png'
import typescript from '../assets/tools/ts.png'
import go from '../assets/tools/go.png'
import php from '../assets/tools/php.png'
import python from '../assets/tools/python.png'
import dart from '../assets/tools/dart.png'
import vue from '../assets/tools/vue.png'
import react from '../assets/tools/react.png'
import laravel from '../assets/tools/laravel.png'
import express from '../assets/tools/express.png'
import gin from '../assets/tools/gin.png'
import flutter from '../assets/tools/flutter.png'
import tailwind from '../assets/tools/tailwind.png'
import bootstrap from '../assets/tools/bootstrap.png'
import primevue from '../assets/tools/primevue.png'
import material from '../assets/tools/material.png'
import axios from '../assets/tools/axios.png'
import figma from '../assets/tools/figma.png'
import gcp from '../assets/tools/gcp.png'
import hive from '../assets/tools/hive.png'
import mysql from '../assets/tools/mysql.png'
import idcloudhost from '../assets/tools/idcloudhost.png'
import mongo from '../assets/tools/mongo.png'
import CardComponent2 from '@/components/CardComponent2.vue'

const all = [
  // {
  //   name: 'All',
  //   type: 'all',
  // },
  {
    name: 'Programming Language',
    type: 'programming language',
  },
  {
    name: 'Framework',
    type: 'framework',
  },
  {
    name: 'Library',
    type: 'library',
  },
  {
    name: 'Database',
    type: 'database',
  },
  {
    name: 'Cloud',
    type: 'cloud',
  },
]

const selected_nav = ref('programming language')

interface Tool {
  name: string
  img: string
  type: string
}
const alls: Tool[] = [
  {
    name: 'HTML',
    img: html,
    type: 'programming language',
  },
  {
    name: 'CSS',
    img: css,
    type: 'programming language',
  },
  {
    name: 'Javascript',
    img: javascript,
    type: 'programming language',
  },
  {
    name: 'Typescript',
    img: typescript,
    type: 'programming language',
  },
  {
    name: 'Go',
    img: go,
    type: 'programming language',
  },
  {
    name: 'PHP',
    img: php,
    type: 'programming language',
  },
  {
    name: 'Pyhton',
    img: python,
    type: 'programming language',
  },
  {
    name: 'Dart',
    img: dart,
    type: 'programming language',
  },
  //
  {
    name: 'Vue Js',
    img: vue,
    type: 'framework',
  },
  {
    name: 'React Js',
    img: react,
    type: 'framework',
  },
  {
    name: 'Laravel',
    img: laravel,
    type: 'framework',
  },
  {
    name: 'Express Js',
    img: express,
    type: 'library',
  },
  {
    name: 'Gin',
    img: gin,
    type: 'library',
  },
  {
    name: 'Flutter',
    img: flutter,
    type: 'framework',
  },
  {
    name: 'Tailwind',
    img: tailwind,
    type: 'library',
  },
  {
    name: 'Bootstrap',
    img: bootstrap,
    type: 'library',
  },
  //
  {
    name: 'Axios',
    img: axios,
    type: 'library',
  },
  {
    name: 'Figma',
    img: figma,
    type: 'all',
  },
  {
    name: 'Material Design',
    img: material,
    type: 'all',
  },
  {
    name: 'Primevue',
    img: primevue,
    type: 'library',
  },
  //
  {
    name: 'Mongo DB',
    img: mongo,
    type: 'database',
  },
  {
    name: 'MySQL',
    img: mysql,
    type: 'database',
  },
  {
    name: 'IdCloudHost',
    img: idcloudhost,
    type: 'cloud',
  },
  {
    name: 'Google Cloud Platform',
    img: gcp,
    type: 'cloud',
  },
  {
    name: 'Hive (Flutter Database)',
    img: hive,
    type: 'dataase',
  },
]
</script>

<template>
  <div class="tools">
    <h1>Common used tools</h1>
    <div class="group">
      <a
        @click="
          () => {
            selected_nav = d.type
          }
        "
        v-for="(d, i) in all"
        :key="i"
        :class="[selected_nav == d.type ? 'active' : 'tab']"
        :to="''"
        >{{ d.name }}</a
      >
    </div>
    <div class="content">
      <div :class="[selected_nav == e.type ? 'cards' : 'none']" v-for="(e, j) in alls" :key="j">
        <CardComponent2
          v-if="selected_nav == e.type"
          :img="e.img"
          :title="e.name"
          :description="e.type"
          :show_button="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tools {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.none {
  display: none;
}
.group {
  display: flex;
  justify-content: space-around;
  overflow-x: scroll;
  width: 100%;
  height: 40px;
}
/* nav {
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
} */

a {
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  width: max-content;
  white-space: nowrap;
  color: white;
  text-decoration: none;
  cursor: pointer;
  /* background: #14b8a6; */
  text-align: center;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s;
  border-bottom: transparent solid 1px;
}

h1 {
  margin: 1rem 0;
}
a:hover {
  border-bottom: #0d9488 solid 1px;
  /* transform: translateY(-2px); */
}
.active {
  border-bottom: #0d9488 solid 1px;
}
.content {
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  overflow: auto;
}
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.title h3 {
  font-size: 14px;
}
.title p {
  font-size: 12px;
}
.hidden {
  display: none;
}

/* =================== */
/* =================== */
/* =================== */
@media only screen and (max-width: 1100px) {
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 80px;
  }
  .title {
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  header {
    padding: 1rem 0;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
