<template>
  <div class="modal">
      <div class="modal__loding" v-if="isLoading">Loading...</div>
      <div class="modal__row" v-if="!isLoading" v-for="repo in repos" :key="repo.id">
          <div class="modal__cell" v-text="repo.name"></div>
          <div class="modal__cell" v-text="repo.description"></div>
          <div class="modal__cell" v-text="repo.issues"></div>
      </div>
      <div class="modal__close-button" @click="closeWindow"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            isLoading: 'getIsReposLoading',
            repos: 'getRepos',
        }),
    },
    methods: {
        closeWindow() {
            this.$store.commit('setisModelOpen');
        },
    },
};
</script>
<style lang="scss">
.modal {
    position: absolute;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 700px;

    height: 100%;
    max-height: 700px;

    overflow: auto;

    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;

    background-color: #fff;

    &__row {
        width: 100%;
        min-height: 53px;

        display: flex;
        justify-content: space-between;

        padding: 10px;

        box-sizing: border-box;

        &:nth-child(2n) {
            background-color: aliceblue;
        }
    }

    &__cell {
        display: flex;
        align-items: flex-start;
        width: 33.33%;

        overflow: hidden;

        padding: 0 5px;
        box-sizing: border-box;
    }

    &__close-button {
        position: fixed;

        right: 0;
        top: 0;

        width: 30px;
        height: 30px;

        background-color: aquamarine;
    }
}
</style>

