<template lang="">
    <div>
        <nav>
            <ul class="breadcrumb breadcrumb-pipe">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'dashboard'}">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Roles</li>
            </ul>



            <div class="nk-block nk-block-lg">
                <div class="nk-block-head">

                </div>
                <div class="card card-preview">
                    <div class="nk-block-head-content d-flex justify-content-between">
                        <h4 class="nk-block-title my-4 ml-5">Role List</h4>
                        <div>
                            <button type="button" class="btn my-4 mr-4 btn-primary" data-toggle="modal"
                                data-target="#modalTabs"><em class="icon ni ni-plus-circle"></em><span>Create</span>
                            </button>

                        </div>
                    </div>
                    <div class="row">

                          <div class='col-3 nk-block-head-content offset-9  pr-4'>
  <input type="text" class="form-control"  v-model='search' id="searchItems"
                                                    placeholder="Search role">
                          </div>

                    </div>

                    <div class="card-inner">
                        <table class="nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                            <thead>
                                <tr class="nk-tb-item nk-tb-head">

                                    <th class="nk-tb-col"><span class="sub-text">SL</span></th>
                                    <th class="nk-tb-col tb-col-mb"><span class="sub-text">Name</span></th>
                                    <th class="nk-tb-col nk-tb-col-tools text-right">
                                        <span class="sub-text">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="nk-tb-item" v-for='(role,index) in filteredList' :key='index'>

                                    <td class="nk-tb-col">
                                        <span>{{index+1}}</span>

                                    </td>

                                    <td class="nk-tb-col tb-col-mb">
                                        <span>{{role.name}}</span>

                                    </td>

                                    <td class="nk-tb-col nk-tb-col-tools">
                                        <ul class="nk-tb-actions gx-1">

                                            <li>
                                                <div class="drodown">
                                                    <a href="#" class="dropdown-toggle btn btn-icon btn-trigger"
                                                        data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <ul class="link-list-opt no-bdr">

                                                            <li  @click="updateRole(role.id)"><router-link to=""><em
                                                                        class="icon ni ni-repeat"></em><span>Edit</span></router-link>
                                                            </li>

                                                            <li @click="RoleDelete(role.id)"><router-link to="" ><em
                                                                        class="icon ni ni-trash"></em><span>Delete</span></router-link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                </tr><!-- .nk-tb-item  -->

                            </tbody>
                        </table>
                    </div>
                </div><!-- .card-preview -->
            </div> <!-- nk-block -->
        </nav>



        <!-- Modal Form Create-->
        <div class="modal fade " tabindex="-1" id="modalTabs">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create role</h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <em class="icon ni ni-cross"></em>
                        </a>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent='RoleCreate' enctype="multipart/form-data"
                            class="form-validate is-alter">
                            <div class="form-group">
                                <label class="form-label" for="full-name">role Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" class="form-control" name="name" v-model="form.name"
                                        :class="{ 'is-invalid': form.errors.has('name') }">

                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <a href="#" class="btn btn-success eg-toastr-success">Success</a>
                                <button type="submit" class="btn btn-right btn-primary">Create role</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


<!-- role edit model  -->

        <!-- Modal Form -->
        <div class="modal fade " tabindex="-1" id="editmodel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Role</h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <em class="icon ni ni-cross"></em>
                        </a>
                    </div>
                    <div class="modal-body">
                        <!-- <form  class="form-validate is-alter"> -->
                        <form @submit.prevent='StoreRole' class="form-validate is-alter">
                            <div class="form-group">
                                <label class="form-label" for="full-name">Role Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" class="form-control" name="name" v-model="RoleUpform.name"
                                        :class="{ 'is-invalid': RoleUpform.errors.has('name') }">
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-right btn-primary">Update Role</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                token:'',
                roles: [],
search:'',

                form: new Form({
                    name: '',
                }),
                 RoleUpform: new Form({
                    id: '',
                    name: '',
                })
            }
        },
        methods: {

            RoleGet() {
let url='/api/auth/site_role_for_see';
let bearer='bearer'+ this.token;
                axios.get(url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.roles = result.data.roles

                    }) .catch((result) => {
                         if(result.message=='Request failed with status code 401'){
                        this.$store.commit('SET_USER', null);
                window.location.href = "/"
                         }
                    })
            },

            updateRole(id){
                        $('#editmodel').modal('show');
    let url='/api/auth/site_role_for_edit/'+id;
let bearer='bearer'+ this.token;
                axios.get(url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.RoleUpform.id = result.data.role.id
                        this.RoleUpform.name = result.data.role.name

                    })

            },
            StoreRole(){
      this.$Progress.start()
                let url='/api/auth/site_role_for_update';
let bearer='bearer'+ this.token;
   this.RoleUpform.post( url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.$Progress.finish()
                        this.RoleGet();
                        $('#editmodel').modal('hide')
                        $(".modal-backdrop.fade.show").remove()
                        this.RoleUpform.name = null;
                        if (result.data.error) {
                            this.$Progress.finish()
                            Toast.fire({
                                icon: 'error',
                                title: result.data.error
                            })
                        }
                        if (result.data.success) {
                            this.$Progress.finish()
                            Toast.fire({
                                icon: 'success',
                                title: result.data.success
                            })
                        }
                        if (result.data.error) {
                            this.$Progress.finish()

                            if (result.data.error.name) {
                                Toast.fire({
                                    icon: 'error',
                                    title: result.data.error.name
                                })
                            }
                        }
                    })
            },

            RoleCreate() {
                this.$Progress.start()
                let url='/api/auth/site_role_for_create';
let bearer='bearer'+ this.token;
                this.form.post( url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.$Progress.finish()
                        this.RoleGet();
                        $('#modalTabs').modal('hide')
                        $(".modal-backdrop.fade.show").remove()
                        this.form.name = null;
                        if (result.data.error) {
                            this.$Progress.finish()
                            Toast.fire({
                                icon: 'error',
                                title: result.data.error
                            })
                        }
                        if (result.data.success) {
                            this.$Progress.finish()
                            Toast.fire({
                                icon: 'success',
                                title: result.data.success
                            })
                        }
                        if (result.data.error) {
                            this.$Progress.finish()

                            if (result.data.error.name) {
                                Toast.fire({
                                    icon: 'error',
                                    title: result.data.error.name
                                })
                            }
                        }
                    })
            },
            RoleDelete(id){
                  this.$Progress.start()
                let url='/api/auth/site_role_for_delete/'+id;
let bearer='bearer'+ this.$store.getters.getUser.access_token;
axios.delete(url,{headers: {'Authorization':bearer}})
.then(res => {
    this.$Progress.finish()
       this.roles=this.roles.filter(res=>{
         return res.id != id
     })
         Toast.fire({
        icon: 'success',
        title: res.data.success,
    })
})
            },
                    Loggedin() {
                if (this.$store.getters.getUser != null) {
                    if (User.loggedIn(this.$store.getters.getUser.access_token)) {
                        this.loggedInAdmin = true;
                        this.loggedIn = true;
                    } else {
                  window.location.href = "/"
                    }
                }
            }
        },


          computed: {
    filteredList() {
      return this.roles.filter(role => {
        return role.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
             created() {
                 this.token=this.$store.getters.getUser.access_token
            this.Loggedin();
            this.RoleGet();
        },
    }


</script>
<style>
    ul.nk-tb-actions.gx-1:hover .dropdown-menu.dropdown-menu-right {
        display: block !important;
    }

</style>
