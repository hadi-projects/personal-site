<script setup lang="ts">
defineProps({
  img: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  onclick: {
    type: Function,
    default: () => {},
  },
  show_button: {
    type: Boolean,
    default: true,
  },
  tags: {
    type: Array,
    default: Array.from([]),
  },
})

const shortenText = (text: string, maxLength: number = 15) => {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength - 3) + '...'
}
</script>

<template>
  <div class="card">
    <div class="wr">
      <div class="loader"></div>
      <img :src="img" :alt="title" />
    </div>
    <div class="title">
      <div class="tooltip">
        <h3>{{ shortenText(title) }}</h3>
        <span v-if="title.length > 15" class="tooltiptext">{{ title }}</span>
      </div>
      <p class="date">{{ description }}</p>
      <p>{{ date }}</p>
      <div class="tag">
        <p v-for="(d, i) in tags" :key="i">{{ d }}</p>
      </div>
      <div class="btn" v-if="show_button == true">
        <a @click="onclick()">Detail</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin: 0.2rem 0;
}
.date {
  font-size: 10px;
}
.tag p {
  font-size: 8px;
  color: white;
  border: #0d9488 solid 1px;
  padding: 0.1rem 0.5rem;
  border-radius: 10px;
}
.share {
  width: max-content;
}
.btn {
  display: flex;
  gap: 0.5rem;
}
h3 {
  font-weight: bold;
}
.card {
  border-radius: 12px;
  background-color: #1e293b;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); /* Soft neon glow */
  border: 1px solid rgba(20, 184, 166, 0.5);
  width: 240px;
}
.card:hover {
  /* box-shadow: 0 0 25px rgba(20, 184, 166, 0.6); */
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
  z-index: 1;

  width: 100%;
}
a {
  background: transparent;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  gap: 10px;
  background-color: #14b8a6;
  width: 100%;
  justify-content: center;
  color: white;
  margin: 1rem 0 0 0;
}
.wr {
  position: relative;
  max-width: 240px;
  height: 180px;
  background: #000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  justify-items: center;
}
.loader {
  z-index: 0;
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 8px;
  aspect-ratio: 1;
  top: 100px;
  border-radius: 50%;
  background: #828b8a;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}

/* -- */

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* ============ */
/* ============ */
/* ============ */
/* ============ */
@media only screen and (max-width: 1100px) {
  .share {
    width: max-content;
  }
  .btn {
    display: flex;
    gap: 0.5rem;
  }
  h3 {
    font-weight: bold;
  }
  .card {
    border-radius: 12px;
    background-color: #1e293b;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(20, 184, 166, 0.2); /* Soft neon glow */
    border: 1px solid rgba(20, 184, 166, 0.5);
    width: 160px;
  }
  .title {
    font-size: 12px;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 160px;
    height: 120px;
    z-index: 1;
    object-fit: cover;
  }
  a {
    background: transparent;
    padding: 5px 10px;
    width: fit-content;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-items: center;
    gap: 10px;
    background-color: #14b8a6;
    width: 100%;
    justify-content: center;
    color: white;
    margin: 1rem 0 0 0;
  }
  .wr {
    position: relative;
    max-width: 240px;
    height: 120px;
    background: #000;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .loader {
    z-index: 0;
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 8px;
    aspect-ratio: 1;
    top: 50px;
    border-radius: 50%;
    background: #828b8a;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }

  /* -- */

  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
}
</style>
