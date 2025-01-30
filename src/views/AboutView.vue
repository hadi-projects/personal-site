<script setup lang="ts">
import fork from '../assets/github-fork.png'
const redirect = (d: string) => {
  window.open(d)
}
</script>

<template>
  <div class="profile">
    <h2>About This Site</h2>
    <p>
      This site is my personal platform to showcase my resume, portfolio, and professional
      experiences. Here, you can explore the projects I've worked on, the skills I've developed, and
      find ways to connect with me.
    </p>
    <br />
    <h2>Open Source</h2>
    <p>
      This site is open source, and its code is available on GitHub. Feel free to explore,
      contribute, or use it as a reference for your own projects.
    </p>
    <footer>
      <section>
        <a @click="redirect('https://github.com/hadi-projects/personal-site/fork')">
          <img width="16" height="16" :src="fork" alt=".." />
          Fork this repository</a
        >
      </section>
      <br />
      <p class="upd">Latest update February 2025 .</p>
    </footer>
  </div>
</template>

<style scoped>
.link {
  cursor: pointer;
  color: rgb(0, 114, 229);
}
footer {
  margin: 2rem 0;
}
section a {
  color: white;
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
p {
  font-size: 10px;
}
</style>
