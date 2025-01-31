<script setup lang="ts">
import back from '../../assets/back.svg'
import router from '@/router'
import { useCounterStore } from '../../stores/counter'
import personal1 from '../../assets/portofolio/personal-1.png'
import personal2 from '../../assets/portofolio/personal-2.png'
import personal3 from '../../assets/portofolio/personal-3.png'
import personal4 from '../../assets/portofolio/personal-4.png'
import fork from '../../assets/github-fork.png'
import postman from '../../assets/portofolio/postman.png'
const redirect = (d: string) => {
  window.open(d)
}

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
      <h2>Wallet Api</h2>
    </div>
    <div class="body">
      <div class="gallery">
        <img width="300" :src="personal1" />
        <img width="300" :src="personal2" />
        <img width="300" :src="personal3" />
        <img width="300" :src="personal4" />
      </div>
      <h4>Description</h4>
      <p>
        Wallet API is a service designed for managing wallet addresses on the blockchain. Currently,
        it supports EVM chains and offers features such as wallet address generation and transaction
        creation. The wallet adheres to the BIP39 standard for secure key generation.
      </p>
      <div class="btn">
        <section>
          <a @click="redirect('https://github.com/hadi-projects/personal-site/fork')">
            <img width="16" height="16" :src="fork" alt=".." />
            Fork this repository</a
          >
        </section>
        <section>
          <a
            @click="
              redirect(
                'https://galactic-meadow-739056.postman.co/workspace/Personal~fe313c85-aad3-497c-9a8e-a7898bd7abaa/collection/16633136-0220d7ed-cf99-4afc-9012-933231c21d24?action=share&creator=16633136',
              )
            "
          >
            <img width="16" height="16" :src="postman" alt=".." />
            Postman Collection</a
          >
        </section>
      </div>
      <h4>Key Features</h4>
      <ul>
        <li>
          Wallet Address Generation: Creates new wallet addresses for transactions on EVM chains.
        </li>
        <li>
          Transaction Creation: Allows users to initiate and manage transactions from their wallet.
        </li>
        <li>
          BIP39 Compliance: Ensures secure wallet generation using the BIP39 mnemonic standard.
        </li>
        <li>
          EVM Chain Support: Compatible with Ethereum Virtual Machine (EVM) chains, ensuring
          integration with widely-used blockchains like Ethereum and Binance Smart Chain.
        </li>
      </ul>
      <h4>Technology Used</h4>
      <div class="pair">
        <p>Programming Laguage:</p>
        <p>TypeScript</p>
      </div>
      <div class="pair">
        <p>Backend:</p>
        <p>Express.js</p>
      </div>
      <div class="pair">
        <p>Build Tool:</p>
        <p>Vite</p>
      </div>
      <div class="pair">
        <p>Blockchain:</p>
        <p>EVM Chain Support</p>
      </div>
      <div class="pair">
        <p>Security:</p>
        <p>BIP39 Mnemonics</p>
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
  flex-wrap: wrap;
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
  margin: 1rem 0;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  gap: 10px;
  background-color: #14b8a6;
}
.btn {
  display: flex;
  gap: 2rem;
}
</style>
