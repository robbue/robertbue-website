<template>
  <div class="loading-page">
    <!-- <p>Loading...</p> -->
  </div>
</template>

<script>
//  v-if="loading"
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: absolute;
	z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	background: var(--color-dark);
  /*background: rgba(255, 255, 255, 0.8);*/
  /*text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;*/
}
</style>
