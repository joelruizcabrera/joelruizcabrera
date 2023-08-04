<template>
  <div id="carousel" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ 'active': index === 0 }" v-for="(item, index) in items" :key="index">
        <img :src="item" class="d-block w-100" alt="IMAGE">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev"  style="background: linear-gradient(90deg, rgba(0,0,0,0.4), transparent);opacity: 1">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" style="background: linear-gradient(270deg, rgba(0,0,0,0.4), transparent);opacity: 1">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
#carousel {
  border-radius: 1.4rem;
  overflow: hidden;
}
.carousel-inner {
  max-height: 70vh;
}
</style>

<script>
export default {
  name: "Carousel",
  props: [
      'items'
  ]
}
</script>