<template>
  <section class="users-table">
      <div v-if="isLoading" class="users-table__loading">loading...</div>
      <div v-if="!isLoading" class="users-table__row" v-for="user in users" :key="user.id" @click="getUserInfo(user.login)">
          <div class="users-table__user-icon">
              <img :src="user.avatar" alt="icon">
          </div>
          <div class="users-table__user-login" v-text="user.login"></div>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            users: 'getUsers',
            isLoading: 'getIsUserLoading',
        }),
    },

    methods: {
        getUserInfo(userLogin) {
            this.$store.dispatch('fetchRepos', userLogin);
        },
    },
};
</script>

<style lang="scss">
.users-table {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    max-height: 480px;
    overflow: auto;

    &__row {
        display: flex;
        width: 100%;
        min-height: 60px;
        justify-content: space-between;
        align-items: center;

        padding: 0 30px;
        box-sizing: border-box;

        &:hover {
            background-color: aliceblue;
            cursor: pointer;
        }
    }

    &__user-icon img {
        max-width: 50px;
        height: auto;
    }
}
</style>


