<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import palalu1 from '../../assets/portofolio/palalu-1.png'
import palalu2 from '../../assets/portofolio/palalu-2.png'
import palalu3 from '../../assets/portofolio/palalu-3.png'
import palalu4 from '../../assets/portofolio/palalu-4.png'

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
      <h2>Palalu - Culturally Adapted E-Commerce Platform</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="palalu1" />
        <img width="300" :src="palalu2" />
        <img width="300" :src="palalu3" />
        <img width="300" :src="palalu4" />
      </div>
      <h4>Description</h4>
      <p>
        Palalu is an e-commerce platform developed in collaboration with a local government
        institution. The goal was to create a marketplace with modern e-commerce features while
        incorporating a personalized approach that aligns with the local culture and traditions.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>
          Localized User Experience: Designed to reflect the cultural identity and shopping habits
          of the local community.
        </li>
        <li>
          Essential E-Commerce Features: Includes product listings, shopping cart, checkout, and
          order tracking.
        </li>
        <li>
          Personalized Seller-Buyer Interaction: Encourages direct engagement between sellers and
          buyers, fostering trust within the community.
        </li>
        <li>
          Simplified UI/UX: Focuses on ease of use for users unfamiliar with complex digital
          platforms.
        </li>
        <li>
          Secure Transactions: Implements fundamental security measures for safe and reliable
          transactions.
        </li>
      </ul>
      <h4>Project Status:</h4>
      <div class="pair">
        <p>
          The project reached approximately 40-50% completion but was discontinued due to certain
          challenges.
        </p>
      </div>
      <br />
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Dart, PHP</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Vue Js, Vuex, Vue-Router, Axios, Quill, PrimeVue</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Express Js, Mongoose</p>
      </div>
      <div class="pair">
        <p>Database:</p>
        <p>Mongo DB</p>
      </div>
      <div class="pair">
        <p>Server(Backend):</p>
        <p>VPS IdCloudHost</p>
      </div>
      <br />
      <p>
        Although the project was not fully completed, Palalu showcases my ability to develop
        customized digital solutions tailored to unique cultural and business needs.
      </p>
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
  flex-wrap: wrap;
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
