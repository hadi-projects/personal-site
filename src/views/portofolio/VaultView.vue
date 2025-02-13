<script setup lang="ts">
import back from '../../assets/back.svg'
import { useCounterStore } from '../../stores/counter'
import vault1 from '../../assets/portofolio/vault-1.png'
import vault2 from '../../assets/portofolio/vault-2.png'
import vault3 from '../../assets/portofolio/vault-3.png'
import vault4 from '../../assets/portofolio/vault-4.png'

const data = useCounterStore()
</script>

<template>
  <div>
    <div class="nav">
      <img @click="() => data.set_current_route('portofolio')" :src="back" />
      <h2>Tennet Vault - Crypto Asset Management System</h2>
    </div>
    <div class="body">
      <h4>Web View</h4>
      <div class="gallery">
        <img width="300" :src="vault1" />
        <img width="300" :src="vault2" />
        <img width="300" :src="vault3" />
      </div>
      <h4>Mobile View</h4>
      <div class="gallery">
        <img height="300" :src="vault4" />
      </div>
      <h4>Description</h4>
      <p>
        Tennet Vault is a secure, cross-platform crypto asset management application developed for
        enterprise clients. Built using Flutter, it provides seamless access across web and mobile,
        enabling users to manage their digital assets efficiently.
      </p>
      <h4>Key Features</h4>
      <ul>
        <li>New Address Creation: Allows users to generate new wallet addresses securely.</li>
        <li>
          Internal & External Whitelisting: Supports whitelisting of internal company addresses and
          external wallet addresses for controlled transactions.
        </li>
        <li>
          Multi-Layer Approval System: Implements approval workflows for transactions, both from
          user-side and internal company-side, enhancing security.
        </li>
        <li>
          Transaction Management: Enables users to initiate and track crypto transactions with
          strict access control.
        </li>
        <li>
          Enterprise-Grade Security: Designed with strong security measures to protect digital
          assets.
        </li>
      </ul>
      <br />
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>Dart, Golang</p>
      </div>
      <div class="pair">
        <p>Frontend:</p>
        <p>Flutter</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Golang, Gin, Gorm</p>
      </div>
      <div class="pair">
        <p>Database:</p>
        <p>MySQL</p>
      </div>
      <div class="pair">
        <p>Server(API):</p>
        <p>Google Cloud Platform</p>
      </div>
      <br />
      <p>
        Tennet Vault showcases my expertise in developing secure, scalable, and cross-platform
        blockchain applications tailored for enterprise clients.
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
