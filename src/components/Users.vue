<template>
  <div class="users">
    <div class="container">
      <h2 class="users_title h2_title">Working with GET request</h2>
      <div class="users_list flex flex_justify">
        <UserItem v-for="user in users" :key="user.id" :user="user" />
      </div>
      <button
        class="users_more accent_btn"
        @click="showMoreUsers"
        v-if="showMore"
      >
        Show more
      </button>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem';
export default {
  data() {
    return {
      users: [],
      currentPage: 1,
      totalPages: 0,
      showMore: true,
      perPage: 6,
    };
  },
  beforeMount() {
    this.getUsers();
  },
  mounted() {
    this.$root.$on('reloadUsers', () => {
      this.getUsers();
    });
  },
  methods: {
    getUsers() {
      fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.currentPage}&count=${this.perPage}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success === true) {
            this.users = data.users;
            this.totalPages = data.total_pages;
          }
        });
    },

    showMoreUsers() {
      this.currentPage++;
      fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.currentPage}&count=${this.perPage}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success === true) {
            this.users.push(...data.users);
            this.totalPages = data.total_pages;
          }
          if (this.currentPage === this.totalPages) {
            this.showMore = false;
          }
        });
    },
  },
  components: {
    UserItem,
  },
};
</script>

<style lang="scss" scoped>
.users {
  margin-top: 140px;
  &_list {
    flex-wrap: wrap;
  }
  &_more {
    margin: 20px auto 0 auto;
    display: block;
  }
}
</style>
