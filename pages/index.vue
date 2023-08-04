<template>
  <div class="page__index">
    <Carousel keep-alive :items="sliderImages"></Carousel>
  </div>
</template>

<script>
//import 'vue3-carousel/dist/carousel.css'
import Carousel from "~/components/Carousel.vue";
export default {
  name: "Index",
  components: {
    Carousel
  },
  data() {
    return {
      sliderImages: [
          'https://cdn.myportfolio.com/12fd4d7d-f2ff-41bf-8a5c-335b39429700/bd1b01c0-9755-474a-be0d-303def6d124f_rw_3840.jpg?h=58b25446cac3d33b68b593debd6f5f85',
          'https://cdn.myportfolio.com/12fd4d7d-f2ff-41bf-8a5c-335b39429700/ea4973e2-4566-48d5-b47f-6b3878b6431b_rw_1920.jpg?h=fbe7f0b7a7cf70542a22abe0cd7734e6',
          'https://cdn.myportfolio.com/12fd4d7d-f2ff-41bf-8a5c-335b39429700/aa415ba9-6d9d-4c5d-b32c-4abb88f490ef_rw_1920.jpg?h=a438a1ce864ecb1c52870b94cdca4984'
      ]
    }
  }
}
</script>