<template lang="">
    <div>
        <nav>
            <ul class="breadcrumb breadcrumb-pipe">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'dashboard'}">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'blogs'}">Blogs</router-link>
                </li>
                <li class="breadcrumb-item active">Edit</li>
            </ul>


            <div class="nk-block nk-block-lg">

                <form enctype="multipart/form-data" @submit.prevent="UpdatePostSubmit" class="form-validate is-alter">
                                      <span v-if="form.error" class='text-danger font-weight-bold'  >
      <li v-for="error in form.error">
          {{error[0]}}
      </li>
       </span>
                    <div class="row">

                        <!-- left bar post details -->
                        <div class="col-7 mx-3 ">
                            <div class="details card-preview card p-3 mb-2">
                                <!-- post title -->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Blog Title <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
 <input type="text" class="form-control" name="title" v-model="form.title" >

                                </div>
                                </div>
                                <!-- post title -->

                                <!-- post tags -->
                                <div class="form-group ">
                                    <label class="form-label" for="full-name">Tags <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap d-flex">
                                        <div class='tag-input'>
                                            <div v-for='(tag, index) in form.tags' :key='tag' class='tag-input__tag'>
                                                <span @click='removeTag(index)'>x</span>
                                                {{ tag }}
                                            </div>

                                            <input type='text' placeholder="Enter a Tag" class='tag-input__text'
                                                @keydown.tab='addTag' @keydown.enter='addTag' @keydown.188='addTag' />
                                        </div>
                                    </div>
                                </div>
                                <!-- post tags -->

                                <!-- post discription -->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Blog Discription <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">

                                        <vue-editor v-model="form.disc"></vue-editor>

                                    </div>
                                </div>
                                <!-- post discription -->

                            </div>

                            <!-- for meta  -->
                            <div class="details card-preview card p-3">
                                <!-- meta title -->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Blog Meta Title <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <input type="text" class="form-control" name="meta_title"
                                            v-model="form.meta_title"
                                            :class="{ 'is-invalid': form.errors.has('meta_title') }">

                                    </div>
                                </div>
                                <!-- meta title end-->
                                <!-- meta desc-->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Blog Meta Discription <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">

                                        <vue-editor v-model="form.meta_desc"></vue-editor>

                                    </div>
                                </div>
                                <!-- meta desc end-->
                                <!-- meta Keyword -->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Blog Meta Keyword <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <input type="text" class="form-control" name="meta_keyword"
                                            v-model="form.meta_keyword"
                                            :class="{ 'is-invalid': form.errors.has('meta_keyword') }">

                                    </div>
                                </div>
                                <!-- meta Keyword end-->

                            </div>

                        </div>
                        <!-- left bar post details End-->

                        <!-- Right bar post -->
                        <div class="col-4  mt-0 ml-3  ">

                            <div class="main_img bg-white p-3 mb-2">
                                <label class="form-label" for="full-name">Blog Thumb Image <span
                                        class="text-danger">*</span></label>
                                <div id="post_select_image_container" class="post-select-image-container m-auto">
                                    <a v-if="form.photo == null" class="btn-select-image">
                                        <div class="btn-select-image-inner">
                                            <i class="fa fa-image"></i>
                                            <input @change='onFileSelect'
                                                :class="{ 'is-invalid': form.errors.has('photo') }" type="file"
                                                id="myFileInput" class='d-none' />
                                            <input type="button"
                                                onclick="document.getElementById('myFileInput').click()" class="btn"
                                                value="Select image" />

                                        </div>
                                    </a>

                                    <!-- after add image -->
                                    <div v-if='form.photo!=null' class="post-select-image-container">
                                        <img :src="form.photo">

                                        <em @click.prevent='removeImg'
                                            class="icon ni ni-cross btn-danger btn-sm btn-delete-selected-file-image"></em>
                                    </div>

                                </div>

                            </div>
                            <!-- category -->
                            <div class="bg-white p-3 mb-2">
                                <!-- blog Category  -->
                                <div class="form-group">
                                    <label class="form-label" for="full-name">Category <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <select @change='DependSubCat()' v-model='form.category_id' class="form-control"
                                            name="category_id"
                                            :class="{ 'is-invalid': form.errors.has('category_id') }">
                                            <option value="" selected="selected">Please select Category</option>
                                            <option v-for='cat in categories' :value="cat.id">{{cat.name}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <!-- blog Category  -->

                                <!-- blog Sub Category  -->
                                <div v-if='form.subcategory_id!=""' class="form-group">
                                    <label class="form-label" for="full-name">Sub Category <span
                                            class="text-danger">*</span></label>
                                    <div class="form-control-wrap">
                                        <select v-model='form.subcategory_id' class="form-control" name="subcategory_id"
                                            :class="{ 'is-invalid': form.errors.has('subcategory_id') }">
                                            <option selected value="">Please select Sub Category</option>
                                            <option v-for='subcat in subCategory' :value="subcat.id">
                                                {{subcat.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- blog Sub Category  -->

                            </div>
                            <!-- category -->
                            <!-- publish -->

                            <div class="bg-white p-3 mb-2">
   <div class="form-group ">
         <label class="form-label d-block mb-2" for="full-name">Publish </label>
                                    <button type="submit" class="btn d-block ml-auto btn-primary">Update Post</button>
                                </div>

                        </div>

                        </div>
                        <!-- Right bar post End-->

                    </div>
                </form>
            </div>

        </nav>

    </div>
</template>
<script>

    import {  VueEditor  } from "vue2-editor";

    export default {

        components: {
            VueEditor,
        },

        data() {
            return {

                token: '',
                post:[],
                categories: [],
                subCategory: [],
                search: '',

                form: new Form({
                    id:'',
                    title: '',
                    category_id: '',
                    subcategory_id: '',
                    photo: null,
                    tags: [],
                    disc: '',
                    meta_title: '',
                    meta_desc: '',
                    meta_keyword: '',
                     error:null,
                }),

            }
        },
        methods: {

        // get current data
            getPost() {
            let id = this.$route.params.id

                let url = '/api/auth/site_post_edit_for_see/' + id;
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
                        console.log(result.data.post)
                        this.form.id = result.data.post.id
                        this.form.title = result.data.post.title
                        this.form.category_id = result.data.post.category_id
                        this.form.subcategory_id = result.data.post.subcategory_id
                        this.form.photo = result.data.post.photo
                        this.form.tags = JSON.parse(result.data.post.tags)
                        this.form.disc = result.data.post.disc
                        this.form.meta_title = result.data.post.meta_title
                        this.form.meta_desc = result.data.post.meta_desc
                        this.form.meta_keyword = result.data.post.meta_keyword
this.DependSubCat();
                    }).catch((result) => {
                        if (result.message == 'Request failed with status code 401') {
                            this.$store.commit('SET_USER', null);
                            window.location.href = "/"
                        }
                    })
            },

            // for tags
            addTag(event) {
                event.preventDefault()
                var val = event.target.value.trim()
                if (val.length > 0) {
                    this.form.tags.push(val)
                    event.target.value = ''
                }
            },
            // remove tags
            removeTag(index) {
                this.form.tags.splice(index, 1)
            },
            // for tags end


            // for image select and preview
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
            // for image select and preview
            // remove image from preview
            removeImg() {
                this.form.photo = null
            },
            // remove image from preview

            // sub category dependancy
         DependSubCat() {
                let url = '/api/auth/site_depsubcategories_for_see/' + this.form.category_id;
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
                        console.log(result.data.subcategory);
                        this.subCategory = result.data.subcategory

                    })
            },

            // fatch categories data
            CategoryGet() {
                let url = '/api/auth/site_categories_for_see';
                let bearer = 'bearer' + this.token;
                axios.get(url, {
                        headers: {
                            'Authorization': bearer
                        }
                    })
                    .then((result) => {
                        this.categories = result.data.categories

                    }).catch((result) => {
                        if (result.message == 'Request failed with status code 401') {
                            this.$store.commit('SET_USER', null);
                            window.location.href = "/"
                        }
                    })
            },

UpdatePostSubmit(){
 this.$Progress.start()
                let url='/api/auth/site_post_for_edit';
let bearer='bearer'+ this.token;
                this.form.post( url,{headers: {'Authorization':bearer}})
                    .then((result) => {
                        this.$Progress.finish()
                        if (result.data.error) {
                            console.log(result.data)
                           this.form.error=result.data.error
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
                            });
                         this.$router.push({ name: 'blogs'})
                        }

                    })
},

// check login or not
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

        },
        created() {
            this.token = this.$store.getters.getUser.access_token
            this.Loggedin();
            this.getPost();
            this.CategoryGet();
        },
    }

</script>
<style>
    ul.nk-tb-actions.gx-1:hover .dropdown-menu.dropdown-menu-right {
        display: block !important;
    }

    #my-file {
        visibility: hidden;
    }

    .post-select-image-container {
        position: relative;
        width: 100%;
        height: 200px;
        max-width: 280px;
        overflow: hidden;
        margin-bottom: 15px;
        border-radius: 2px;
    }

    .post-select-image-container .btn-select-image {
        width: 100%;
        height: 200px;
    }

    .post-select-image-container img {
        display: block;
        height: 200px;
        width: auto;
        min-width: 100%;
        margin: 0 auto;
        max-width: none;
        object-fit: cover;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    .btn-select-image {
        position: relative;
        display: block;
        overflow: hidden;
        text-align: center;
        background: #f8f9fb;
        border: 2px dashed #e4e5e7;
        border-radius: 3px;
        cursor: pointer;
    }

    .btn-select-image .btn-select-image-inner {
        display: inline-block;
        text-align: center;
        width: 140px;
        height: 98px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .btn-select-image .select-img-text {
        font-size: 14px;
        color: #979ba1;
    }

    .btn-select-image .btn {
        border-color: #cfd3d9 !important;
        background-color: transparent !important;
        color: #979ba1 !important;
        font-size: 13px;
        max-width: 140px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .btn-select-image i {
        display: block;
        font-size: 48px;
        line-height: 48px;
        color: #dadbdd;
        margin-bottom: 15px;
    }

    .btn-delete-selected-file-image {
        position: absolute;
        top: 0;
        padding: 0;
        right: 0;
        border-radius: 2px;
        width: 22px;
        height: 22px;
        line-height: 20px;
        text-align: center;
        cursor: pointer !important;


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

    /* tags end  */

</style>
