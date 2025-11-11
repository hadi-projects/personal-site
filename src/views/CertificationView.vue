<script setup lang="ts">
import CardComponent2 from '@/components/CardComponent2.vue'

const certificates = [
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-03df368b-8c30-4874-86ab-71cc40db252d.jpg?v=1762346392000',
    name: `SQL - MySQL for Data Analytics and Business Intelligence`,
    year: '2025',
    tags: ['database', 'mysql'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-ac738e7f-76e9-4c22-9d16-0bdd3caa42af.jpg?v=1740138738000',
    name: `Docker Mastery: with Kubernetes +Swarm from a Docker Captain`,
    year: '2025',
    tags: ['docker', 'container', 'kubernetes'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6796ed64-3757-42da-b202-7c04860a1dc2.jpg?v=1739721456000',
    name: `Ethereum and Solidity: The Complete Developer's Guide`,
    year: '2025',
    tags: ['solidity', 'smart contracts', 'web3', 'blockchain'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f4d80d51-698b-4082-8686-05d248706806.jpg?v=1738230696000',
    name: `The Project Management Course: Beginner to PROject Manager`,
    year: '2025',
    tags: ['project management', 'project'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4b92aea2-7504-4cab-add4-e0f2203a6b24.jpg?v=1738133183000',
    name: `Learn How To Code: Google's Go (golang) Programming Language`,
    year: '2025',
    tags: ['go', 'go test'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-d2152e41-6bfa-4a8a-9f77-a6c4a789cb59.jpg?v=1708879219000',
    name: 'Principles of Secure Coding',
    year: '2024',
    tags: ['secure coding'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e8970833-cae4-4c65-b3e0-95e2e08ef428.jpg?v=1707496435000',
    name: 'Clean Code',
    tags: ['clean code'],
    year: '2024',
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4512175e-f0eb-4ca5-8248-dced3c76cd21.jpg?v=1664123858000',
    name: 'JavaScript - The Complete Guide 2024 (Beginner + Advanced) ',
    year: '2024',
    tags: ['javascript', 'ES'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2acaf9b5-35e3-45d1-915d-0f664de050a1.jpg?v=1707540295000',
    name: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
    year: '2024',
    tags: ['nodejs', 'GraphQL', 'Deno'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4a1fc55c-8dcf-4b0c-b6ee-d5228a9e2474.jpg?v=1664127093000',
    name: 'CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)',
    year: '2024',
    tags: ['CSS', 'grid', 'flexbox'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b3ad2494-78e3-4b9b-9e8a-103680ecacb1.jpg?v=1664123078000',
    name: 'Flutter & Dart - The Complete Guide [2024 Edition]',
    year: '2022',
    tags: ['Dart', 'Flutter', 'Cross Platform'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9e567699-e403-4b59-a673-42aa62cf908f.jpg?v=1664126589000',
    name: 'Master Laravel, Vue 3 & Inertia Full Stack 2023',
    year: '2022',
    tags: ['Laravel', 'Fullstack', 'Vue'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2a6052a7-0c17-4b85-a7b2-248089ca305e.jpg?v=1602426392000',
    name: 'The Ultimate Guide to 2D Mobile Game Development with Unity',
    year: '2020',
    tags: ['2D Game', 'Unity', 'C#'],
  },
  {
    img: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2a6052a7-0c17-4b85-a7b2-248089ca305e.jpg?v=1602426392000',
    name: 'Complete C# Unity Game Developer 2D',
    tags: ['2D Game', 'Unity', 'C#'],
    year: '2020',
  },
]
const redirect = (v: string) => {
  window.open(v, '_blank')
}
</script>

<template>
  <div class="certifications">
    <header>
      <h2>Udemy Certifications</h2>
    </header>
    <div class="cards">
      <CardComponent2
        v-for="(d, i) in certificates"
        :title="d.name"
        :description="d.year"
        :key="i"
        :img="d.img"
        :route="d.img"
        :ext_route="true"
        :tags="d.tags"
        :onclick="
          () => {
            console.log(d.img)

            redirect(d.img)
          }
        "
      />
    </div>
  </div>
</template>

<style scoped>
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
  gap: 20px;
}
.progress {
  width: 240px;
  height: 178.5px;
  background-color: #f7f6f6;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  justify-items: center;
  color: rgb(92, 87, 87);
}
.progress p {
  margin-top: 5rem;
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
/* =================== */
/* =================== */
/* =================== */
@media only screen and (max-width: 1100px) {
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
    margin-bottom: 80px;
  }
  .progress {
    width: 240px;
    height: 178.5px;
    background-color: #f7f6f6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: center;
    justify-items: center;
    color: rgb(92, 87, 87);
  }
  .progress p {
    margin-top: 5rem;
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
}
</style>
