<template>
  <div class="top-line">
    <div class="container">
      <div class="flex flex_justify">
        <Logo />
        <TopLineButtons />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import TopLineButtons from '../components/TopLineButtons.vue';
export default {
  components: {
    Logo,
    TopLineButtons,
  },
};
</script>

<style scoped>
.top-line {
  padding: 13px 0;
  background: #fff;
}
</style>
