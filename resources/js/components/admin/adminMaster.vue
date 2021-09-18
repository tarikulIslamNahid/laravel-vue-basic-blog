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
                USER:{},
                loggedInAdmin: false
            }
        },

        methods: {

                  Loggedin(){
                      if(this.USER!=null){
          if( User.loggedIn(this.USER.access_token)){
    this.loggedInAdmin=true;
}else{
    this.loggedInAdmin=false;
     window.location.href = "/";

}
                      }else{
     window.location.href = "/";
                      }
         }

        },
   created() {


    this.USER= this.$store.getters.getUser;
    this.Loggedin();
  },
    }
</script>
