<script setup lang="ts">
const r = (s: string) => {
  window.open(s, '_blank')
}
</script>
<template>
  <div class="profile">
    <section class="left">
      <div class="name">
        <div class="pro">
          <img
            src="https://avatars.githubusercontent.com/u/117066936?v=4"
            width="120"
            height="120"
            alt=""
          />
        </div>
        <div class="role">
          <div class="n">
            <h1>Hadi Gunawan</h1>
          </div>
          <span>
            Designs, develops, and maintains software to create efficient, reliable, and scalable
            technology solutions.
          </span>
        </div>
      </div>
      <div class="pairs">
        <div class="pair" @click="r('mailto:jgunawan007@gmail.com')">
          <img src="../assets/google.svg" alt="" />
          <p>jgunawan007@gmail.com</p>
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
        </div>
        <div class="pair" @click="r('https://github.com/cinnamorollofficials')">
          <img src="../assets/github.svg" alt="" />
          <p>@cinnamorollofficials</p>
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
        </div>
        <div class="pair" @click="r('https://linkedin.com/in/hadiyahku')">
          <img src="../assets/linkedin.svg" alt="" />
          <p>@hadiyahku</p>
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
        </div>
      </div>
    </section>
    <section class="right">
      <p>Hi there!</p>
      <br />
      <p>
        Hadi Gunawan is a skilled software engineer with over 3 years of experience in designing,
        developing, and deploying web and mobile applications. He is proficient in multiple
        programming languages and modern software development frameworks, with extensive expertise
        in building scalable solutions and deploying them to cloud platforms. In addition to his
        technical expertise, Hadi excels in soft skills such as teamwork, effective communication,
        project and time management, and leading teams to achieve project goals efficiently.
      </p>
    </section>
  </div>
</template>

<style scoped>
span {
  color: #ebebeba3;
  font-size: 14px;
}
.profile {
  display: flex;
  width: 100%;
}

.left {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
.pairs {
  /* padding-left: 20px; */
}
.role {
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: space-around;
}
.name {
  display: flex;
  gap: 40px;
  border-bottom: #495454 solid 1px;
  padding: 20px 0;
}
.pair {
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin: 10px;
  padding: 0.3rem;
}
.pair img {
  width: 20px;
}
.right {
  width: 60%;
  padding: 2rem;
}
h1 {
  /* font-size: 48px; */
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  /* text-align: center; */
}
h6 {
  text-align: center;
}
.divider {
  border-bottom: 1px #000 solid;
}
svg {
  width: 12px;
}
/* ================================== */
/* ================================== */
/* ================================== */
@media only screen and (max-width: 1100px) {
  span {
    color: #ebebeba3;
    font-size: 14px;
  }
  .profile {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    border: #3d3a3a solid 1px;
    border-radius: 8px;
    padding: 1rem;
    border-radius: 12px;
    background-color: #1e293b;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); /* Soft neon glow */
    border: 1px solid rgba(20, 184, 166, 0.5);
  }
  .pairs {
    display: none;
    /* padding-left: 20px; */
  }
  .role {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  .name {
    display: flex;
    justify-content: center;
    border-bottom: none;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    gap: 1rem;
  }
  .name .pro {
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .pair {
    display: flex;
    gap: 10px;
    margin: 10px;
  }
  .pair img {
    width: 20px;
  }
  .right {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    padding: 0;
  }
  h1 {
    /* font-size: 48px; */
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
    /* text-align: center; */
  }
  h6 {
    text-align: center;
  }
  .divider {
    display: none;
    border-bottom: none;
  }
}
</style>
