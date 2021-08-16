<template>
    <div id="adminMaster">

        <router-view> </router-view>
        <vue-progress-bar> </vue-progress-bar>

    </div>
</template>

<script>
    export default {
        name: "adminMaster",

        data() {
            return {
                loggedInAdmin: false
            }
        },
        methods: {

        },
        created() {
            // this.AdminLoggedin();
        },
    }

</script>

<style scoped>

</style>
