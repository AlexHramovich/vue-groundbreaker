<template>
  <div class="control-panel">
      <input type="text" class="control-panel__input" @change="changeInputValue($event.target.value)" :value="inputValue" @keyup.13="getUsers">
      <div class="control-panel__submit" @click="getUsers">search</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
        };
    },
    methods: {
        changeInputValue: function(text) {
            this.inputValue = text;
        },
        getUsers: function() {
            this.$store.dispatch('fetchUsers', this.inputValue);
        },
        resetState: function(e) {
            if (e.keyCode === 27) {
                this.inputValue = '';
                this.$store.dispatch('resetState');
            }
        },
    },

    created: function() {
        document.body.addEventListener('keydown', this.resetState);
    },

    beforeDestroy: function() {
        document.body.removeEventListener('keydown', this.resetState);
    },
};
</script>

<style lang="scss">
.control-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;

    padding: 15px 20px;

    &__input {
        height: 30px;
        width: 70%;
        border-radius: 3px;
        border: 1px solid #bbbcbc;
        padding-left: 20px;
        box-sizing: border-box;
    }

    &__submit {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px 0;

        width: 20%;
        height: 20px;

        border-bottom: 2px solid #74ad66;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
