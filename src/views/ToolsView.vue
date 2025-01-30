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

const all = [
  {
    name: 'All',
    type: 'all',
  },
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

const selected_nav = ref('all')

const alls = [
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
  <div class="profile">
    <h1>Common used tools</h1>
    <div class="group">
      <nav>
        <a
          @click="
            () => {
              selected_nav = d.type
            }
          "
          v-for="(d, i) in all"
          :key="i"
          :class="[selected_nav == d.type ? 'active' : '']"
          :to="''"
          >{{ d.name }}</a
        >
      </nav>
    </div>
    <div class="content">
      <div class="cards" v-for="(e, j) in alls" :key="j">
        <div
          class="card"
          :class="[e.type == selected_nav ? '' : 'hidden']"
          v-if="e.type == selected_nav"
        >
          <img :src="e.img" width="240" alt="" />
          <div class="title">
            <h3>{{ e.name }}</h3>
            <p>{{ e.type }}</p>
          </div>
        </div>
        <div class="card" v-else-if="'all' == selected_nav">
          <img :src="e.img" width="240" alt="" />
          <div class="title">
            <h3>{{ e.name }}</h3>
            <p>{{ e.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  justify-content: space-around;
}
nav {
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
a {
  color: white;
  text-decoration: none;
  width: 100%;
  background: #7c7c7c;
  text-align: center;
  cursor: pointer;
}
a:hover {
  background: #6e6e6e;
}
.active {
  background: #6e6e6e;
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
  gap: 2rem;
  flex-wrap: wrap;
  overflow: auto;
}
.card {
  /* border: solid 1px #3a3a3a; */
  width: 240px;
  border-radius: 8px;
  /* background-color: #6e6e6e; */
  background-color: #515151;
}
.title {
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
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
</style>
