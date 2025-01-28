<script setup lang="ts"></script>

<template>
  <div class="bg">
    <slot></slot>
  </div>
</template>

<style scoped>
.bg {
  background-color: #ffffff;
  /* min-height: 100vh; */
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
</style>
