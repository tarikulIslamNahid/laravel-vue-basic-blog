<template lang="">
    <div>
        <nav>
            <ul class="breadcrumb breadcrumb-pipe">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'dashboard'}">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Blogs</li>
            </ul>



            <div class="nk-block nk-block-lg">

                <div class="card card-preview">
                    <div class="nk-block-head-content d-flex justify-content-between">
                        <h4 class="nk-block-title my-4 ml-5">Blog List</h4>
                        <div>
                            <router-link :to="{ name: 'blogcreate'}" class="btn my-4 mr-4 btn-primary" ><em class="icon ni ni-plus-circle"></em><span>Create</span>
                            </router-link>

                        </div>
                    </div>
                    <div class="row">

                        <div class='col-3 nk-block-head-content offset-9  pr-4'>
                            <input type="text" class="form-control" v-model='search' id="searchItems"
                                placeholder="Search Blog By Name">
                        </div>

                    </div>

                    <div class="card-inner">
                        <table class="nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                            <thead>
                                <tr class="nk-tb-item nk-tb-head">

                                    <th class="nk-tb-col"><span class="sub-text">SL</span></th>
                                    <th width='200px' class="nk-tb-col tb-col-mb"><span class="sub-text">Post</span>
                                    </th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Category / Subcategory</span>
                                    </th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Author</span></th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Date</span></th>
                                    <th class="nk-tb-col tb-col-lg"><span class="sub-text">Status</span></th>
                                    <th class="nk-tb-col tb-col-lg"><span class="sub-text">Approved</span></th>
                                    <th class="nk-tb-col nk-tb-col-tools text-right">
                                        <span class="sub-text">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="nk-tb-item" v-for='(post,index) in filteredList' :key='index'>

                                    <td class="nk-tb-col">
                                        <span>{{index+1}}</span>

                                    </td>
                                    <td class="nk-tb-col tb-col-mb">
                                        <div class="d-flex">
                                            <img :src="post.photo" width="50px" class="mr-2" height="50px" alt="">
                                            <p>{{post.title}}</p>
                                        </div>


                                    </td>

                                    <td class="nk-tb-col tb-col-mb">
                                        <span class='badge badge-dim badge-success mr-2'>{{post.category.name}}</span>
                                        <span class='badge badge-dim badge-info'>{{post.subcategory.name}}</span>

                                    </td>

                                    <td class="nk-tb-col tb-col-md">
                                        <span>{{post.added_by}}</span>

                                    </td>

                                    <td class="nk-tb-col tb-col-md">
                                        <li> <span class='font-weight-bold'>Published : </span>
                                            {{moment(post.created_at).fromNow()}}</li>
                                        <li> <span class='font-weight-bold'>Updated : </span>
                                            {{moment(post.updated_at).fromNow()}}</li>

                                    </td>
                                        <td class="nk-tb-col tb-col-md">
                                        <div class="custom-control custom-switch">
                                            <input type="checkbox" name='status' :checked="post.status==1" @change='statusChange(post)'  class="custom-control-input"
                                                :id="post.slug">
                                            <label class="custom-control-label" :for="post.slug"></label>
                                        </div>
                                    </td>
                                    <td class="nk-tb-col tb-col-md">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" name='status' :checked="post.approved==1" @change='ApprovedChange(post)'  class="custom-control-input"
                                            :id="'approved'+post.slug">
                                        <label class="custom-control-label" :for="'approved'+post.slug"></label>
                                    </div>
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
                                                            <li @click="editCat(post.id)">
                                                                <router-link to=""><em
                                                                        class="icon ni ni-repeat"></em><span>Edit</span>
                                                                </router-link>
                                                            </li>
                                                            <li @click="deletePost(post.id)">
                                                                <router-link to=""><em
                                                                        class="icon ni ni-trash"></em><span>Delete</span>
                                                                </router-link>
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


    </div>
</template>
<script>
    import {
        VueEditor
    } from "vue2-editor";

    export default {
        components: {
            VueEditor
        },
        data() {
            return {
                token: '',
                user:[],
                search: '',
                posts: [],

            }
        },
        methods: {
            // change post status
            statusChange(post){

                      let url = '/api/auth/site_posts_status_for_see/' + post.id;
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
            this.PostsGet();

                          Toast.fire({
                                icon: 'success',
                                title: result.data.success
                            });
                    })

            },
            // change post Approved status

            ApprovedChange(post){

                      let url = '/api/auth/site_posts_approved_for_see/' + post.id;
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
            this.PostsGet();
                          Toast.fire({
                                icon: 'success',
                                title: result.data.success
                            });
                    })

            },

            // fatch categories data
            PostsGet() {
                let url = '/api/auth/site_posts_for_see';
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
                        this.posts = result.data.posts
                        this.user = result.data.user

                    }).catch((result) => {
                        if (result.message == 'Request failed with status code 401') {
                            this.$store.commit('SET_USER', null);
                            window.location.href = "/"
                        }
                    })
            },

deletePost(id){
this.$Progress.start()
let url='/api/auth/site_post_for_delete/'+id;
let bearer='bearer'+ this.$store.getters.getUser.access_token;
axios.delete(url,{headers: {'Authorization':bearer}})
.then(res => {
    this.$Progress.finish()
       this.posts=this.posts.filter(res=>{
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
                    if (User.loggedIn(this.token)) {
                     if (User.isTokenExpired(this.token) == true) {
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


        computed: {

            filteredList() {
                return this.posts.filter(post => {
                    return post.title.toLowerCase().match(this.search.toLowerCase())
                })
            }
        },
        created() {
            this.token = this.$store.getters.getUser.access_token
            this.Loggedin();
            this.PostsGet();
        },
    }

</script>
<style>
    ul.nk-tb-actions.gx-1:hover .dropdown-menu.dropdown-menu-right {
        display: block !important;
    }

</style>
