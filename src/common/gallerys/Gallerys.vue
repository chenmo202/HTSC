<style lang="scss" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .warpper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    .gallerys-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #ffffff;
      bottom: 20px;
    }
  }
}
</style>

<template>
  <div class="container" @click="hanleGalleryClick">
    <div class="warpper">
      <swiper :options="swiperOptios">
        <swiper-slide v-for="(item, key) in imgs" :key="key">
          <img class="gallerys-img" :src="item" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptios: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    hanleGalleryClick() {
      this.$emit("close");
    },
  },
};
</script>

