<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import blog_kampus1 from '../../assets/portofolio/blog-kampus-1.jpg'
import blog_kampus2 from '../../assets/portofolio/blog-kampus-2.jpg'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img
        @click="
          () => {
            router.push('/portofolio')
            data.set_current_porto('')
          }
        "
        :src="back"
      />
      <h2>Blog Kampus</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="blog_kampus1" />
        <img width="300" :src="blog_kampus2" />
      </div>
      <h4>Description</h4>
      <p>
        This project is a simple blogging platform developed within a campus environment. The
        primary goal was to provide a dedicated space for students to express their thoughts, share
        knowledge, and enhance their writing skills.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          Student-Centric Design: Tailored to meet the needs of university students. Simple Blogging
        </li>
        <li>Tools: Enables users to create, edit, and publish posts with ease.</li>
        <li>Community Engagement: Allows readers to comment and interact with authors</li>
        <li>Search and Categories: Organizes content by topics for better discoverability.</li>
        <li>Responsive Design: Optimized for both desktop and mobile devices.</li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Javascript, PHP</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Vue Js, Vuex, Vue-Router, Axios, Vuestic Ui, Vue3 Editor</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Laravel</p>
      </div>
      <div class="pair">
        <p>Database:</p>
        <p>MySQL</p>
      </div>
      <div class="pair">
        <p>Server:</p>
        <p>VPS IdCloudHost</p>
      </div>
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
