
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
                USER: {},
                loggedInAdmin: false
            }
        },

        methods: {

            logout() {
                this.$store.commit('SET_USER', null);

                Toast.fire({
                    icon: 'success',
                    title: 'Logout successfully'
                })
                window.location.href = "/"

            },
            autologout(expTime) {
                setTimeout(()=> {
                    this.logout();
                }, expTime);
            },
                Loggedin() {

                if (this.$store.getters.getUser != null) {
                    if (User.loggedIn(this.$store.getters.getUser.access_token)) {
                     if (User.isTokenExpired(this.$store.getters.getUser.access_token) == true) {
                            this.$store.commit('SET_USER', null);
                            window.location.href = "/"
                        }
                        this.loggedIn = true;
                    } else {
                        window.location.href = "/"
                    }
                }
            },

        },
        created() {


            this.USER = this.$store.getters.getUser;
            // console.log(this.USER.expires_in)
            this.Loggedin();
            this.autologout(this.USER.expires_in*1000);
        },
    }

</script>
