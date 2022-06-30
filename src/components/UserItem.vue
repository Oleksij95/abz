<template>
  <div class="user">
    <div class="user_photo">
      <img :src="user.photo" :alt="user.name" loading="lazy" />
    </div>
    <div class="user_name">{{ user.name }}</div>
    <div class="user_position">{{ user.position }}</div>
    <div class="user_email" :title="user.email">{{ user.email }}</div>
    <div class="user_phone">{{ user.phone }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  background: #ffffff;
  border-radius: 10px;
  max-width: 370px;
  width: 370px;
  margin-bottom: 29px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  &_photo {
    img {
      border-radius: 50%;
      overflow: hidden;
    }
  }
  &_name {
    margin: 20px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &_email {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .user {
    width: 282px;
  }
}
@media (min-width: 769px) and (max-width: 991px) {
  .user {
    width: 48%;
  }
}
@media (max-width: 768px) {
  .user {
    width: 100%;
    max-width: 100%;
  }
}
</style>
