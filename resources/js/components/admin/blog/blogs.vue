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
                                    <th class="nk-tb-col tb-col-mb"><span class="sub-text">Photo</span></th>
                                    <th class="nk-tb-col tb-col-mb"><span class="sub-text">Title</span></th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Category / Subcategory</span>
                                    </th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Created By</span></th>
                                    <th class="nk-tb-col tb-col-md"><span class="sub-text">Date</span></th>
                                    <th class="nk-tb-col tb-col-lg"><span class="sub-text">Status</span></th>
                                    <th class="nk-tb-col nk-tb-col-tools text-right">
                                        <span class="sub-text">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr class="nk-tb-item" v-for='(category,index) in filteredList' :key='index'>

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
                                                            <li @click="editCat(category.id)">
                                                                <router-link to=""><em
                                                                        class="icon ni ni-repeat"></em><span>Edit</span>
                                                                </router-link>
                                                            </li>
                                                            <li @click="deleteCat(category.id)">
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



        <!-- Modal Form Create-->
        <div class="modal fade " tabindex="-1" id="modalTabs">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Blog Post</h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <em class="icon ni ni-cross"></em>
                        </a>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent='CategoryCreate' enctype="multipart/form-data"
                            class="form-validate is-alter">
                            <div class="container-fluid">
                                <!-- blog title -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Blog Title <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">
                                                <input type="text" class="form-control" name="title"
                                                    v-model="form.title"
                                                    :class="{ 'is-invalid': form.errors.has('title') }">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog title -->
                                <!-- blog cat , subCat -->
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Category <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">
                                                <select @change='DependSubCat()' v-model='form.category_id'
                                                    class="form-control" name="category_id"
                                                    :class="{ 'is-invalid': form.errors.has('category_id') }">
                                                    <option value="" selected="selected">Please select Category</option>
                                                    <option v-for='cat in categories' :value="cat.id">{{cat.name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div v-if='subCategory!=""' class="form-group">
                                            <label class="form-label" for="full-name">Sub Category <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">
                                                <select v-model='form.subcategory_id' class="form-control"
                                                    name="subcategory_id"
                                                    :class="{ 'is-invalid': form.errors.has('subcategory_id') }">
                                                    <option selected value="">Please select Sub Category</option>
                                                    <option v-for='subcat in subCategory' :value="subcat.id">
                                                        {{subcat.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog cat , subCat -->
                                <label class="form-label mt-3" for="full-name">Blog Thumbnail <span
                                        class="text-danger">*</span></label>
                                <div class="row ">


                                    <div class="col-6">
                                        <div class="form-group">
                                            <div :class="{'has-file': showRemovedBtn}"
                                                class="c-file-input js-file-input">
                                                <div class="c-file-input__indicator">
                                                    <em
                                                        class="c-file-input__indicator__icon c-icon c-icon--attachicon ni ni-camera"></em>
                                                </div>
                                                <label class="c-file-input__label js-file-input__label" for="inputfile">
                                                    <span>{{ theFileName }}</span>
                                                    <input id="inputfile" type="file" @change="fileChangeHandler"
                                                        name="attachment"
                                                        class="c-file-input__field js-file-input__field">
                                                </label>
                                                <div @click.stop="clearFileHandler"
                                                    class="c-file-input__remove js-file-input__remove">
                                                    <em
                                                        class="c-file-input__remove__icon c-icon c-icon--remove-circle icon ni ni-minus-circle"></em>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <img :src="form.photo" width="40px" v-if='form.photo != "" ' height="40px"
                                                alt="">

                                        </div>
                                    </div>



                                </div>


                                <!-- tags -->
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Tags <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap d-flex">
                                                <div class='tag-input'>
                                                    <div v-for='(tag, index) in form.tags' :key='tag'
                                                        class='tag-input__tag'>
                                                        <span @click='removeTag(index)'>x</span>
                                                        {{ tag }}
                                                    </div>

                                                    <input type='text' placeholder="Enter a Tag" class='tag-input__text'
                                                        @keydown.tab='addTag' @keydown.enter='addTag'
                                                        @keydown.188='addTag' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- tags -->

                                <!-- blog Disc -->
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Blog Discription <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">

                                                <vue-editor v-model="form.disc"></vue-editor>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog Disc -->

                                <!-- blog Meta Title -->
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Blog Meta Title <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">
                                                <input type="text" class="form-control" name="meta_title"
                                                    v-model="form.meta_title"
                                                    :class="{ 'is-invalid': form.errors.has('meta_title') }">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog Meta Title -->


                                <!-- blog Meta Disc -->
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Blog Meta Discription <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">

                                                <vue-editor v-model="form.meta_desc"></vue-editor>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog Meta Disc -->

       <!-- blog Meta Keyword -->
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="form-label" for="full-name">Blog Meta Keyword <span
                                                    class="text-danger">*</span></label>
                                            <div class="form-control-wrap">
                                                <input type="text" class="form-control" name="meta_keyword"
                                                    v-model="form.meta_keyword"
                                                    :class="{ 'is-invalid': form.errors.has('meta_keyword') }">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- blog Meta Keyword -->


                                <div class="form-group mt-3">
                                    <button type="submit" class="btn btn-right btn-primary">Create New Post</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>


        <!-- category edit model  -->

        <!-- Modal Form -->
        <div class="modal fade modal-lg" tabindex="-1" id="editmodel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Category</h5>
                        <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <em class="icon ni ni-cross"></em>
                        </a>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent='CategoryUpdate' enctype="multipart/form-data"
                            class="form-validate is-alter">
                            <div class="form-group">
                                <label class="form-label" for="full-name">Category Name</label>
                                <div class="form-control-wrap">
                                    <input type="text" class="form-control" name="name" v-model="catUpform.name"
                                        :class="{ 'is-invalid': catUpform.errors.has('name') }">

                                </div>
                            </div>


                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-right btn-primary">Update Category</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

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
                value: '',
                files: [],
                showRemovedBtn: false,
                token: '',
                categories: [],
                subCategory: [],
                search: '',

                form: new Form({
                    title: '',
                    category_id: '',
                    subcategory_id: '',
                    photo: '',
                    tags: [],
                    disc: '',
                    added_by: '',
                    status: '',
                    meta_title: '',
                    meta_desc: '',
                    meta_img: '',
                    meta_keyword: '',
                }),
                catUpform: new Form({
                    id: '',
                    name: '',
                    photo: '',
                    by: '/',
                })
            }
        },
        methods: {

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

            // editCat(id) {
            //     $('#editmodel').modal('show');
            //     let url = '/api/auth/site_categories_for_edit/' + id;
            //     let bearer = 'bearer' + this.token;
            //     axios.get(url, {
            //             headers: {
            //                 'Authorization': bearer
            //             }
            //         })
            //         .then((result) => {
            //             console.log(result.data.category)
            //             this.catUpform.id = result.data.category.id
            //             this.catUpform.name = result.data.category.name
            //             this.catUpform.photo = result.data.category.photo

            //         })

            // },
            // CategoryUpdate() {
            //     this.$Progress.start()
            //     let url = '/api/auth/site_categories_for_update';
            //     let bearer = 'bearer' + this.token;
            //     this.catUpform.post(url, {
            //             headers: {
            //                 'Authorization': bearer
            //             }
            //         })
            //         .then((result) => {
            //             this.$Progress.finish()
            //             this.CategoryGet();
            //             $('#editmodel').modal('hide')
            //             $(".modal-backdrop.fade.show").remove()
            //             this.catUpform.name = null;
            //             this.catUpform.photo = null;
            //             if (result.data.error) {
            //                 this.$Progress.finish()
            //                 Toast.fire({
            //                     icon: 'error',
            //                     title: result.data.error
            //                 })
            //             }
            //             if (result.data.success) {
            //                 this.$Progress.finish()
            //                 Toast.fire({
            //                     icon: 'success',
            //                     title: result.data.success
            //                 })
            //             }
            //             if (result.data.error) {
            //                 this.$Progress.finish()
            //                 if (result.data.error.photo) {
            //                     Toast.fire({
            //                         icon: 'error',
            //                         title: result.data.error.photo
            //                     })
            //                 }
            //                 if (result.data.error.name) {
            //                     Toast.fire({
            //                         icon: 'error',
            //                         title: result.data.error.name
            //                     })
            //                 }
            //             }
            //         })
            // },
            // CategoryCreate() {
            //     this.$Progress.start()
            //     let url = '/api/auth/site_categories_for_create';
            //     let bearer = 'bearer' + this.token;
            //     this.form.post(url, {
            //             headers: {
            //                 'Authorization': bearer
            //             }
            //         })
            //         .then((result) => {
            //             this.$Progress.finish()
            //             this.CategoryGet();
            //             $('#modalTabs').modal('hide')
            //             $(".modal-backdrop.fade.show").remove()
            //             this.form.name = null;
            //             this.form.photo = null;
            //             if (result.data.error) {
            //                 this.$Progress.finish()
            //                 Toast.fire({
            //                     icon: 'error',
            //                     title: result.data.error
            //                 })
            //             }
            //             if (result.data.success) {
            //                 this.$Progress.finish()
            //                 Toast.fire({
            //                     icon: 'success',
            //                     title: result.data.success
            //                 })
            //             }
            //             if (result.data.error) {
            //                 this.$Progress.finish()
            //                 if (result.data.error.photo) {
            //                     Toast.fire({
            //                         icon: 'error',
            //                         title: result.data.error.photo
            //                     })
            //                 }
            //                 if (result.data.error.name) {
            //                     Toast.fire({
            //                         icon: 'error',
            //                         title: result.data.error.name
            //                     })
            //                 }
            //             }
            //         })
            // },
            // deleteCat(id) {
            //     this.$Progress.start()
            //     let url = '/api/auth/site_categories_for_delete/' + id;
            //     let bearer = 'bearer' + this.$store.getters.getUser.access_token;
            //     axios.delete(url, {
            //             headers: {
            //                 'Authorization': bearer
            //             }
            //         })
            //         .then(res => {
            //             this.$Progress.finish()
            //             this.categories = this.categories.filter(res => {
            //                 return res.id != id
            //             })
            //             Toast.fire({
            //                 icon: 'success',
            //                 title: res.data.success,
            //             })
            //         })
            // },

            Loggedin() {

                if (this.$store.getters.getUser != null) {
                    if (User.loggedIn(this.$store.getters.getUser.access_token)) {
                         this.loggedIn = true;
                    } else {
                        window.location.href = "/"
                    }
                }
            },

            // for file input
            fileChangeHandler(event) {
                // custom
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


                this.files = Array.from(event.target.files);
                this.showRemovedBtn = true;
            },
            clearFileHandler() {
                const el = this.$el.querySelector('.js-file-input__field');
                const wrapper = document.createElement('form');
                this.wrapInputAndReset(el, wrapper);


            },
            wrapInputAndReset(el, wrapper) {
                // wrap input with form tag
                el.parentNode.insertBefore(wrapper, el);
                wrapper.appendChild(el);

                // reset input with form.reset()
                wrapper.reset();
                this.form.photo = '';
                // place childNodes in document fragment
                const docFrag = document.createDocumentFragment();
                while (wrapper.firstChild) {
                    const child = wrapper.removeChild(wrapper.firstChild);
                    docFrag.appendChild(child);
                }

                // replace wrapper with document fragment
                wrapper.parentNode.replaceChild(docFrag, wrapper);

                this.files = [];
                this.showRemovedBtn = false;
            },
        },


        computed: {
            theFileName() {
                if ((this.files.length > 0) && 'name' in this.files[0]) {
                    return this.files[0].name;
                }
                return this.labelPlaceholder;
            },

            filteredList() {
                return this.categories.filter(cat => {
                    return cat.name.toLowerCase().match(this.search.toLowerCase())
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
