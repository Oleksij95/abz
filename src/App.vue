<template>
  <div id="app">
    <TopLine />
    <TheHeader />
    <Users />
    <Form v-if="!registrationConfirm" @successRegister="successRegister" />
    <RegisterSuccess v-else />
  </div>
</template>

<script>
import TopLine from './components/TopLine.vue';
import TheHeader from './components/TheHeader.vue';
import Users from './components/Users.vue';
import Form from './components/Form.vue';
import RegisterSuccess from './components/RegisterSuccess.vue';

export default {
  name: 'App',
  data() {
    return {
      registrationConfirm: false,
    };
  },

  methods: {
    successRegister() {
      this.registrationConfirm = true;
    },
  },
  components: {
    TopLine,
    TheHeader,
    Users,
    Form,
    RegisterSuccess,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Nunito', sans-serif;
}
</style>
