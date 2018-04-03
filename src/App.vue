<template>
	<div id="app">
		<section class="main">
            <ControlPanel></ControlPanel>
            <UsersTable></UsersTable>
            <Modal v-if="isModalOpen"></Modal>
        </section>
	</div>
</template>

<script>
import ControlPanel from './components/control-panel';
import UsersTable from './components/users-table';
import Modal from './components/modal-window';

export default {
    computed: {
        isModalOpen() {
            return this.$store.getters.getIsModalOpen;
        },
    },
    components: {
        ControlPanel,
        UsersTable,
        Modal,
    },
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

#app {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    font-family: 'Ubuntu', sans-serif;
}

.main {
    max-width: 400px;
    height: 100%;
    max-height: 600px;

    flex-grow: 1;
}
</style>

