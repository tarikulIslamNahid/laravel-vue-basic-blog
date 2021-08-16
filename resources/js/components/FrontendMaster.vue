<template>
    <div>
<div class="page-wrapper">
        <TopNav></TopNav>
   <loading :active.sync="isLoading"
        :is-full-page="fullPage"></loading>
        <router-view></router-view>
<bottom></bottom>

</div>
<FooterBottom></FooterBottom>

    </div>

</template>

<script>

    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import TopNav from "./website/pages/partials/topnav"
    import bottom from "./website/pages/partials/footer"
    import FooterBottom from "./website/pages/partials/footerbottom"
    export default {
        name: "FrontEndMaster",
        components: {TopNav,Loading,bottom,FooterBottom},
         data() {
            return {
                isLoading: false,
                fullPage: true,
            }
        },


        computed:{


        },

         methods:{

             doLoading() {
                this.isLoading = true;
                setTimeout(() => {
                  this.isLoading = false
                },2000)
            },
         },
        created(){
            this.doLoading()

        }
    }
</script>

<style scoped>

</style>
