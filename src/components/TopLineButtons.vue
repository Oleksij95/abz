<template>
  <div class="top-line_buttons">
    <a href="#" class="top-line_buttons_item accent_btn">Users</a>
    <a href="#" class="top-line_buttons_item accent_btn">Sign up</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-line_buttons_item {
  padding: 4px 29px;
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
}
@media (max-width: 450px) {
  .top-line_buttons_item {
    padding: 4px 23px;
  }
  .top-line_buttons_item:first-child {
    margin-left: 0;
  }
}
</style>
