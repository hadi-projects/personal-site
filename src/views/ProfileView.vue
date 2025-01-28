<template>
  <div class="profile">
    <section class="left">
      <div class="name">
        <img src="../assets/hadi.png" width="120" height="120" alt="" />
        <div class="role">
          <h1>Hadi Gunawan <span>(Software Engineer)</span></h1>
          <span>
            Designs, develops, and maintains software to create efficient, reliable, and scalable
            technology solutions.
          </span>
        </div>
      </div>
      <div class="pairs">
        <div class="pair">
          <img src="../assets/google.svg" alt="" />
          <p>jgunawan007@gmail.com</p>
        </div>
        <div class="pair">
          <img src="../assets/github.svg" alt="" />
          <p>@hadigun007</p>
        </div>
        <div class="pair">
          <img src="../assets/linkedin.svg" alt="" />
          <p>@hadig007</p>
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
  border-bottom: #3d3a3a solid 1px;
  padding: 20px 0;
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
</style>
