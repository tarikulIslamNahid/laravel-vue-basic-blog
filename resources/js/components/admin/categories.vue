<template lang="">
    <div>
        <nav>
            <ul class="breadcrumb breadcrumb-pipe">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'dashboard'}">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Categories</li>
            </ul>



            <div class="nk-block nk-block-lg">
                <div class="nk-block-head">

                </div>
                <div class="card card-preview">
                    <div class="nk-block-head-content d-flex justify-content-between">
                        <h4 class="nk-block-title my-4 ml-5">Category List</h4>
                        <div>
                            <button type="button" class="btn my-4 mr-4 btn-primary" data-toggle="modal"
                                data-target="#modalTabs"><em class="icon ni ni-plus-circle"></em><span>Create</span>
                            </button>

                        </div>
                    </div>
                    <div class="card-inner">
                        <table class="datatable-init nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                            <thead>
                                <tr class="nk-tb-item nk-tb-head">

                                    <th class="nk-tb-col"><span class="sub-text">SL</span></th>
                                    <th class="nk-tb-col tb-col-mb"><span class="sub-text">Photo</span></th>
                                    <th class="nk-tb-col tb-col-mb"><span class="sub-text">Name</span></th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Slug</span></th>
                                    <th class="nk-tb-col tb-col-lg"><span class="sub-text">Status</span></th>
                                    <th class="nk-tb-col nk-tb-col-tools text-right">
                                        <span class="sub-text">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="nk-tb-item" v-for='(category,index) in categories' :key='index'>

                                    <td class="nk-tb-col">
                                        <span>{{index+1}}</span>

                                    </td>
                                    <td class="nk-tb-col tb-col-mb">
                                        <img :src="'/'+category.photo" width="50px" height="50px" alt="">
                                    </td>
                                    <td class="nk-tb-col tb-col-mb">
                                        <span>{{category.name}}</span>

                                    </td>
                                    <td class="nk-tb-col tb-col-mb">
                                        <span>{{category.slug}}</span>

                                    </td>

                                    <td class="nk-tb-col tb-col-md">
                                        <span class="tb-status text-info">Inactive</span>
                                    </td>
                                    <td class="nk-tb-col nk-tb-col-tools">
                                        <ul class="nk-tb-actions gx-1">

                                            <li>
                                                <div class="drodown">
                                                    <a href="#" class="dropdown-toggle btn btn-icon btn-trigger"
                                                        data-toggle="dropdown"><em class="icon ni ni-more-h"></em></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <ul class="link-list-opt no-bdr">

                                                            <li><a href="#"><em class="icon ni ni-eye"></em><span>View
                                                                        Details</span></a></li>
                                                            <li><a href="#"><em
                                                                        class="icon ni ni-repeat"></em><span>Edit</span></a>
                                                            </li>
                                                            <li @click="deleteCat(category.id)"><router-link to="" ><em
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



        <!-- Modal Form -->
        <div class="modal fade " tabindex="-1" id="modalTabs">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Category</h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <em class="icon ni ni-cross"></em>
                        </a>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent='CategoryCreate' enctype="multipart/form-data"
                            class="form-validate is-alter">
                            <div class="form-group">
                                <label class="form-label" for="full-name">Category Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" class="form-control" name="name" v-model="form.name"
                                        :class="{ 'is-invalid': form.errors.has('name') }">

                                </div>
                            </div>
                            <div class="form-control-wrap">
                                <div class="custom-file">
                                    <label class="" for="customFile">Choose file</label>
                                    <div class="form-row">
                                        <div class="col">

                                            <input type="file" @change='onFileSelect' class="form-control"
                                                :class="{ 'is-invalid': form.errors.has('photo') }" id="customFile">
                                        </div>
                                        <div class="col">
                                            <img :src="form.photo" width="40px" v-if='form.photo != "" ' height="40px"
                                                alt="">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <a href="#" class="btn btn-success eg-toastr-success">Success</a>
                                <button type="submit" class="btn btn-right btn-primary">Create Category</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import "datatables.net-dt/css/jquery.dataTables.min.css"
    import "datatables.net-dt/js/dataTables.dataTables"
    export default {
        data() {
            return {
                categories: {},
                form: new Form({
                    name: '',
                    photo: '',
                })
            }
        },
        methods: {

            // fatch all category

            CategoryGet() {
let url='/api/auth/site_categories_for_see';
let bearer='bearer'+ this.$store.getters.getUser.access_token;
                // axios.get('/api/auth/site_categories_for_see?token='+StoreToken+'')
                axios.get(url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.categories = result.data.categories
                        $('.datatable-init').DataTable();

                    })
            },

            onFileSelect(event) {
                let file = event.target.files[0];

                if (file.size > 1048770) {
                    Toast.fire({
                        icon: 'success',
                        title: Image_size()
                    })

                } else {
                    let reader = new FileReader();
                    reader.onload = event => {
                        this.form.photo = event.target.result

                    };
                    reader.readAsDataURL(file);
                }
            },
            CategoryCreate() {
                this.$Progress.start()
                let url='/api/auth/site_categories_for_create';
let bearer='bearer'+ this.$store.getters.getUser.access_token;
                this.form.post( url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.$Progress.finish()
                        this.CategoryGet();
                        $('.datatable-init').DataTable();
                        $('#modalTabs').modal('hide')
                        $(".modal-backdrop.fade.show").remove()
                        this.form.name = null;
                        this.form.photo = null;
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
                            if (result.data.error.photo) {
                                Toast.fire({
                                    icon: 'error',
                                    title: result.data.error.photo
                                })
                            }
                            if (result.data.error.name) {
                                Toast.fire({
                                    icon: 'error',
                                    title: result.data.error.name
                                })
                            }

                        }


                    })
                    .catch((result) => {

                    })

            },
            deleteCat(id){
                  this.$Progress.start()
                let url='/api/auth/site_categories_for_delete/'+id;
let bearer='bearer'+ this.$store.getters.getUser.access_token;
axios.delete(url,{headers: {'Authorization':bearer}})
.then(res => {
    this.$Progress.finish()
       this.categories=this.categories.filter(res=>{
         return res.id != id
     })
    // this.CategoryGet();
         Toast.fire({
        icon: 'success',
        title: res.data.success,
    })
})
.catch(err => {
    console.error(err);
})
            }
        },
        mounted() {
            this.CategoryGet();
            $('.datatable-init').DataTable();

        },


    }


</script>
<style>
    ul.nk-tb-actions.gx-1:hover .dropdown-menu.dropdown-menu-right {
        display: block !important;
    }

</style>
