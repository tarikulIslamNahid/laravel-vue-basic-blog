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
                            <button type="button" class="btn my-4 mr-4 btn-primary" data-toggle="modal"
                                data-target="#modalTabs"><em class="icon ni ni-plus-circle"></em><span>Create</span>
                            </button>

                        </div>
                    </div>
                    <div class="row">

                        <div class='col-3 nk-block-head-content offset-9  pr-4'>
                            <input type="text" class="form-control" v-model='search' id="searchItems"
                                placeholder="Search Blog category">
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
                                                            <li @click="deleteCat(post.id)">
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
        props: {
            labelPlaceholder: {
                type: String,
                default: 'No file choosen',
            },
        },
        data() {
            return {
                token: '',
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
                          Toast.fire({
                                icon: 'success',
                                title: result.data.success
                            });
                    })

            },

            // fatch categories data
            CategoryGet() {
                let url = '/api/auth/site_posts_for_see';
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
                        this.posts = result.data.posts

                    }).catch((result) => {
                        if (result.message == 'Request failed with status code 401') {
                            this.$store.commit('SET_USER', null);
                            window.location.href = "/"
                        }
                    })
            },

            Loggedin() {

                if (this.$store.getters.getUser != null) {
                    if (User.loggedIn(this.$store.getters.getUser.access_token)) {
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
            this.CategoryGet();
        },
    }

</script>
<style>
    ul.nk-tb-actions.gx-1:hover .dropdown-menu.dropdown-menu-right {
        display: block !important;
    }

    .c-field__error {
        font-size: 12px;
        color: #d71149;
    }

    .c-file-input {
        position: relative;
        display: block;
        height: 36px;
        border: 1px dashed #ddd;
        background-color: #fff;
    }

    /* line 24, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input:invalid,
    .c-field--error .c-file-input {
        background-color: #ffe6e9;
        border-color: #ff566a;
    }

    /* line 28, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input:invalid:focus,
    .c-field--error .c-file-input:focus {
        background-color: #ffe6e9;
        border-color: #ff566a;
    }

    /* line 34, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-left: 36px;
        padding-right: 36px;
        line-height: 36px;
        color: #999;
        font-size: 12px;
        overflow: hidden;
        word-wrap: break-word;
        z-index: 1;
    }

    /* line 50, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__field {
        position: absolute !important;
        height: 1px !important;
        width: 1px !important;
        padding: 0 !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        z-index: -1;
    }

    /* line 59, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__field:focus {
        outline: none;
    }

    /* line 64, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__indicator {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 36px;
        z-index: 2;
    }

    /* line 73, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__indicator__icon {
        color: #bbb;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
        transform: translate(0, -50%);
        left: 4px;
        font-size: 20px;
    }

    /* line 81, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .has-file .c-file-input__indicator__icon {
        color: #d71149;
    }

    /* line 86, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__remove {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 36px;
        z-index: 2;
    }

    .has-file>.c-file-input__remove {
        display: block;
    }

    /* line 100, app/assets/stylesheets/mweb/6-components/_components.file-input.scss */
    .c-file-input__remove__icon {
        position: absolute;
        top: 50%;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
        transform: translate(0, -50%);
        left: 4px;
        font-size: 20px;
        color: #ff566a;
    }

    /* tags  */
    .tag-input {
        width: 100%;
        border: 1px solid #eee;
        font-size: 0.9em;
        height: 50px;
        box-sizing: border-box;
    }

    .tag-input__tag {
        height: 30px;
        float: left;
        margin-right: 10px;
        background-color: #eee;
        margin-top: 10px;
        line-height: 30px;
        padding: 0 5px;
        border-radius: 5px;
    }

    .tag-input__tag>span {
        cursor: pointer;
        opacity: 0.75;
    }

    .tag-input__text {
        border: none;
        outline: none;
        font-size: 0.9em;
        line-height: 47px;
        border-bottom: 2px solid rgb(131 94 218);
        background: none;
        padding: 0px 10px;
    }

</style>
