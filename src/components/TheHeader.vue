<template>
  <header class="header">
    <div class="container">
      <div class="header_text-wrapper">
        <h1 class="header_title">Test assignment for front-end developer</h1>
        <p class="header_text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a href="#" class="header_btn accent_btn">Sign up</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background: url('../assets/header-bg-min.png');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 650px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  &_text-wrapper {
    margin: auto;
    max-width: 380px;
    text-align: center;
  }
  &_title {
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin: 0 0 21px 0;
  }
  &_text {
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 32px 0;
  }
}
@media (max-width: 450px) {
  .header {
    min-height: 500px;
  }
}
</style>
