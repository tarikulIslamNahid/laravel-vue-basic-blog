(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_FrontendMaster_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var _website_pages_partials_topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website/pages/partials/topnav */ "./resources/js/components/website/pages/partials/topnav.vue");
/* harmony import */ var _website_pages_partials_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website/pages/partials/footer */ "./resources/js/components/website/pages/partials/footer.vue");
/* harmony import */ var _website_pages_partials_footerbottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website/pages/partials/footerbottom */ "./resources/js/components/website/pages/partials/footerbottom.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FrontEndMaster",
  components: {
    TopNav: _website_pages_partials_topnav__WEBPACK_IMPORTED_MODULE_2__.default,
    Loading: (vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default()),
    bottom: _website_pages_partials_footer__WEBPACK_IMPORTED_MODULE_3__.default,
    FooterBottom: _website_pages_partials_footerbottom__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  computed: {},
  methods: {
    doLoading: function doLoading() {
      var _this = this;

      this.isLoading = true;
      setTimeout(function () {
        _this.isLoading = false;
      }, 2000);
    }
  },
  created: function created() {
    this.doLoading();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loggedIn: false,
      USER: {},
      verify: 1,
      form: new Form({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      this.$Progress.start();
      this.form.post('/api/auth/login').then(function (result) {
        _this.$store.commit('SET_USER', result.data);

        _this.loggedIn = true;

        _this.$Progress.finish();

        if (result.data.error) {
          _this.$Progress.finish();

          Toast.fire({
            icon: 'error',
            title: result.data.error
          });
        }

        if (result.data.user.user_type == 1) {
          Toast.fire({
            icon: 'success',
            title: result.data.success
          }); // console.log(result.data)

          window.location.href = "/admin/dashboard";
        }

        if (result.data.user.user_type == 4) {
          if (result.data.user.email_verify == 1) {
            if (_this.$route.path == '/') {
              Toast.fire({
                icon: 'success',
                title: result.data.success
              });
              window.location.href = "/dashboard";
            } else {
              window.location.reload();
            }
          } else {
            _this.verify = false;
          }
        }
      })["catch"](function (result) {});
    },
    Loggedin: function Loggedin() {
      if (this.USER != null) {
        if (User.loggedIn(this.USER.access_token)) {
          this.loggedInAdmin = true;
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          this.loggedInAdmin = false;
        }
      }
    }
  },
  created: function created() {
    this.USER = this.$store.getters.getUser;
    this.Loggedin();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./vue-loading.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/FrontendMaster.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/FrontendMaster.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true& */ "./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true&");
/* harmony import */ var _FrontendMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontendMaster.vue?vue&type=script&lang=js& */ "./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FrontendMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "93e1df82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FrontendMaster.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/pages/partials/footer.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footer.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=5bde05be&lang=true& */ "./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/pages/partials/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/pages/partials/footerbottom.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footerbottom.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerbottom.vue?vue&type=template&id=458f1de9&lang=true& */ "./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true&");
/* harmony import */ var _footerbottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerbottom.vue?vue&type=script&lang=js& */ "./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _footerbottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/pages/partials/footerbottom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/pages/partials/topnav.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/topnav.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topnav.vue?vue&type=template&id=487a0b5e& */ "./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e&");
/* harmony import */ var _topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topnav.vue?vue&type=script&lang=js& */ "./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/pages/partials/topnav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FrontendMaster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendMaster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerbottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footerbottom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footerbottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topnav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topnav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontendMaster_vue_vue_type_template_id_93e1df82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true&");


/***/ }),

/***/ "./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_5bde05be_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=5bde05be&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true&");


/***/ }),

/***/ "./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footerbottom_vue_vue_type_template_id_458f1de9_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footerbottom.vue?vue&type=template&id=458f1de9&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true&");


/***/ }),

/***/ "./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topnav_vue_vue_type_template_id_487a0b5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./topnav.vue?vue&type=template&id=487a0b5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FrontendMaster.vue?vue&type=template&id=93e1df82&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "page-wrapper" },
        [
          _c("TopNav"),
          _vm._v(" "),
          _c("loading", {
            attrs: { active: _vm.isLoading, "is-full-page": _vm.fullPage },
            on: {
              "update:active": function($event) {
                _vm.isLoading = $event
              }
            }
          }),
          _vm._v(" "),
          _c("router-view"),
          _vm._v(" "),
          _c("bottom")
        ],
        1
      ),
      _vm._v(" "),
      _c("FooterBottom")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footer.vue?vue&type=template&id=5bde05be&lang=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "space-70" }),
      _vm._v(" "),
      _c("div", { staticClass: "footer footer_area1 primay_bg" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "cta" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 align-self-center" }, [
                _c("div", { staticClass: "footer_logo logo" }, [
                  _c("a", { attrs: { href: "index-2.html" } }, [
                    _c("img", {
                      attrs: {
                        src: "assets/frontend/website/img/logo/footer_logo.png",
                        alt: "logo"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "social2" }, [
                  _c("ul", { staticClass: "inline" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", { staticClass: "fab fa-instagram" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", { staticClass: "fab fa-facebook-f" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", { staticClass: "fab fa-youtube" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", { staticClass: "fab fa-instagram" })
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-6 col-lg-4 offset-lg-2 align-self-center"
                },
                [
                  _c("div", { staticClass: "signup_form" }, [
                    _c(
                      "form",
                      {
                        attrs: {
                          action:
                            "https://quomodosoft.com/html/newsprk/index.html",
                          method: "post"
                        }
                      },
                      [
                        _c("input", {
                          staticClass: "signup",
                          attrs: {
                            type: "email",
                            placeholder: "Your email address"
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "cbtn",
                          attrs: { type: "button", value: "sign up" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v("We hate spam as much as you do")])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "border_white" }),
          _vm._v(" "),
          _c("div", { staticClass: "space-40" }),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-8" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6 col-lg" }, [
                  _c(
                    "div",
                    { staticClass: "single_footer_nav border_white_right" },
                    [
                      _c("h3", { staticClass: "widget-title2" }, [
                        _vm._v("News categories")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("ul", [
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Politics")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Business")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("TECHNOLOGY")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Science")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Health")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Sports")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Entertainment")
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("ul", [
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Education")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Obituaries")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Corrections")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Education")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Today’s Paper")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Corrections")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Foods")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 col-lg" }, [
                  _c("div", { staticClass: "single_footer_nav" }, [
                    _c("h3", { staticClass: "widget-title2" }, [
                      _vm._v("Living")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-6" }, [
                        _c("ul", [
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Crossword")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [_vm._v("Food")])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Automobiles")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Education")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Health")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Magazine")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Weddings")
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-6" }, [
                        _c("ul", [
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Classifieds")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Photographies")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("NYT Store")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Journalisms")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Public Editor")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("Tools & Services")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("My Account")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "space-40" }),
              _vm._v(" "),
              _c("div", { staticClass: "border_white" }),
              _vm._v(" "),
              _c("div", { staticClass: "space-40" }),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6 col-lg-5" }, [
                  _c(
                    "div",
                    { staticClass: "single_footer_nav border_white_right" },
                    [
                      _c("h3", { staticClass: "widget-title2" }, [
                        _vm._v("Opinion")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("ul", [
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Today’s Opinion")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Op-Ed Contributing")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Contributing Writers")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Business News")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Collections")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Today’s Paper")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Saturday Review")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Product Review")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 col-lg-7" }, [
                  _c("div", { staticClass: "twitter_feeds" }, [
                    _c("h3", { staticClass: "widget-title2" }, [
                      _vm._v("Twitter feed")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "single_twitter_feed border_white_bottom"
                      },
                      [
                        _c("div", { staticClass: "twitter_feed_icon" }, [
                          _c("i", { staticClass: "fab fa-twitter" })
                        ]),
                        _vm._v(" "),
                        _c("h6", [
                          _vm._v(
                            "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a\n                                      new license for your next project… "
                          ),
                          _c("span", [
                            _vm._v(
                              "@newspark #TECHNOLOGY\n                                          https://dribbble.com/subash_chandra"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("March 26, 2020")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "single_twitter_feed" }, [
                      _c("div", { staticClass: "twitter_feed_icon" }, [
                        _c("i", { staticClass: "fab fa-twitter" })
                      ]),
                      _vm._v(" "),
                      _c("h6", [
                        _vm._v(
                          "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a\n                                      new license for your next project… "
                        ),
                        _c("span", [
                          _vm._v(
                            "@newspark #TECHNOLOGY\n                                          https://dribbble.com/subash_chandra"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("March 26, 2020")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "single_twitter_feed" }, [
                      _c("div", { staticClass: "twitter_feed_icon" }, [
                        _c("i", { staticClass: "fab fa-twitter" })
                      ]),
                      _vm._v(" "),
                      _c("h6", [
                        _vm._v(
                          "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a\n                                      new license for your next project… "
                        ),
                        _c("span", [
                          _vm._v(
                            "@newspark #TECHNOLOGY\n                                          https://dribbble.com/subash_chandra"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("March 26, 2020")])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "extra_newss border_white_left pl-4" }, [
                _c("h3", { staticClass: "widget-title2" }, [
                  _vm._v("More news")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "single_extra_news border_white_bottom" },
                  [
                    _c("p", [
                      _vm._v("TECHNOLOGY "),
                      _c("span", [_vm._v(" / March 26, 2020")])
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Nancy zhang a chinese busy woman and dhaka")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "news_counter" }, [_vm._v("1")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "single_extra_news border_white_bottom" },
                  [
                    _c("p", [
                      _vm._v("TECHNOLOGY "),
                      _c("span", [_vm._v(" / March 26, 2020")])
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Nancy zhang a chinese busy woman and dhaka")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "news_counter" }, [_vm._v("2")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "single_extra_news border_white_bottom" },
                  [
                    _c("p", [
                      _vm._v("TECHNOLOGY "),
                      _c("span", [_vm._v(" / March 26, 2020")])
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Nancy zhang a chinese busy woman and dhaka")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "news_counter" }, [_vm._v("3")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "single_extra_news border_white_bottom" },
                  [
                    _c("p", [
                      _vm._v("TECHNOLOGY "),
                      _c("span", [_vm._v(" / March 26, 2020")])
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Nancy zhang a chinese busy woman and dhaka")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "news_counter" }, [_vm._v("4")])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "single_extra_news" }, [
                  _c("p", [
                    _vm._v("TECHNOLOGY "),
                    _c("span", [_vm._v(" / March 26, 2020")])
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Nancy zhang a chinese busy woman and dhaka")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "news_counter" }, [_vm._v("5")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "space-40" }),
                _vm._v(" "),
                _c("div", { staticClass: "border_white_bottom" }),
                _vm._v(" "),
                _c("div", { staticClass: "space-40" }),
                _vm._v(" "),
                _c("div", { staticClass: "footer_contact" }, [
                  _c("h3", { staticClass: "widget-title2" }, [
                    _vm._v("Newspark news services")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "single_fcontact" }, [
                    _c("div", { staticClass: "fcicon" }, [
                      _c("img", {
                        attrs: {
                          src: "assets/frontend/website/img/icon/mobile.png",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("On your mobile")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "single_fcontact" }, [
                    _c("div", { staticClass: "fcicon" }, [
                      _c("img", {
                        attrs: {
                          src: "assets/frontend/website/img/icon/speacker.png",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("On smart speakers")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "single_fcontact" }, [
                    _c("div", { staticClass: "fcicon" }, [
                      _c("img", {
                        attrs: {
                          src: "assets/frontend/website/img/icon/evelope.png",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Contact Newspark news")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "copyright" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 align-self-center" }, [
                _c("p", [_vm._v("© Copyright 2020, All Rights Reserved")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 align-self-center" }, [
                _c("div", { staticClass: "copyright_menus text-right" }, [
                  _c("div", { staticClass: "language" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "copyright_menu inline" }, [
                    _c("ul", [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("About")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Advertise")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Privacy & Policy")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Contact Us")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/footerbottom.vue?vue&type=template&id=458f1de9&lang=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/website/pages/partials/topnav.vue?vue&type=template&id=487a0b5e& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "border_black" }),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "main-menu", attrs: { id: "header" } }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "main-nav clearfix is-ts-sticky" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-between" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 col-lg-4 align-self-center" }, [
              _c("div", { staticClass: "menu_right" }, [
                _c("div", { staticClass: "users_area" }, [
                  _c("ul", { staticClass: "inline" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("li", [
                      _vm.loggedIn != true
                        ? _c(
                            "a",
                            {
                              staticClass: " ",
                              attrs: {
                                href: "javascript:void();",
                                "data-toggle": "modal",
                                "data-target": "#sign_in"
                              }
                            },
                            [
                              _c("i", { staticClass: "w-icon-account" }),
                              _vm._v("Sign In")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.loggedIn == true
                        ? _c("i", { staticClass: "fal fa-user-circle" })
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7)
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "sign_in",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content cs_modal" }, [
              _vm._m(8),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.login()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Username or email address *")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.username,
                            expression: "form.username"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("username")
                        },
                        attrs: { type: "text", name: "username" },
                        domProps: { value: _vm.form.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "username", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-0" }, [
                      _c("label", [_vm._v("Password *")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("password")
                        },
                        attrs: {
                          type: "text",
                          name: "password",
                          id: "password"
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Sign In")]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "searching" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-8 text-center m-auto" }, [
            _c("div", { staticClass: "v1search_form" }, [
              _c("form", { attrs: { action: "#" } }, [
                _c("input", {
                  attrs: { type: "search", placeholder: "Search Here..." }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "cbtn1", attrs: { type: "submit" } },
                  [_vm._v("Search")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "close_btn" }, [
        _c("i", { staticClass: "fal fa-times" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "topbar white_bg", attrs: { id: "top" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 col-lg-8 align-self-center" }, [
            _c("div", { staticClass: "trancarousel_area" }, [
              _c("p", { staticClass: "trand" }, [_vm._v("Tranding")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "trancarousel owl-carousel nav_style1" },
                [
                  _c("div", { staticClass: "trancarousel_item" }, [
                    _c("p", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(
                          "Top 10 Best Movies of 2018 So Far: Great Movies"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "trancarousel_item" }, [
                    _c("p", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(
                          "Top 10 Best Movies of 2018 So Far: Great Movies"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "trancarousel_item" }, [
                    _c("p", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(
                          "Top 10 Best Movies of 2018 So Far: Great Movies"
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4 align-self-center" }, [
            _c("div", { staticClass: "top_date_social text-right" }, [
              _c("div", { staticClass: "paper_date" }, [
                _c("p", [_vm._v("Thursday, March 26, 2020")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "social1" }, [
                _c("ul", { staticClass: "inline" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fab fa-twitter" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fab fa-facebook-f" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fab fa-youtube" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "fab fa-instagram" })
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo_area white_bg" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 align-self-center" }, [
            _c("div", { staticClass: "logo" }, [
              _c("a", { attrs: { href: "index-2.html" } }, [
                _c("img", {
                  attrs: {
                    src: "assets/frontend/website/img/logo/logo.png",
                    alt: "image"
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-8 align-self-center" }, [
            _c("div", { staticClass: "banner1" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  attrs: {
                    src: "assets/frontend/website/img/bg/banner1.png",
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "up_btn up_btn1", attrs: { href: "#top" } }, [
      _c("i", { staticClass: "far fa-chevron-double-up" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 col-lg-8" }, [
      _c("div", { staticClass: "newsprk_nav stellarnav" }, [
        _c("ul", { attrs: { id: "newsprk_menu" } }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Home "),
              _c("i", { staticClass: "fal fa-angle-down" })
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("a", { attrs: { href: "index-2.html" } }, [
                  _vm._v("Home 1 "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "index2.html" } }, [
                      _vm._v("Version 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "index3.html" } }, [
                      _vm._v("Version 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "index4.html" } }, [
                      _vm._v("Version 3")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "index5.html" } }, [
                      _vm._v("Version 4")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "dark/index.html" } }, [
                  _vm._v("Home 2 "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "dark/index2.html" } }, [
                      _vm._v("Version 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "dark/index3.html" } }, [
                      _vm._v("Version 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "dark/index4.html" } }, [
                      _vm._v("Version 3")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "dark/index5.html" } }, [
                      _vm._v("Version 4")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "theme-3/index.html" } }, [
                  _vm._v("Home 3 "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "theme-3/index2.html" } }, [
                      _vm._v("Version 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-3/index3.html" } }, [
                      _vm._v("Version 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-3/index4.html" } }, [
                      _vm._v("Version 3")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-3/index5.html" } }, [
                      _vm._v("Version 4")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "theme-4/index.html" } }, [
                  _vm._v("Home 4 "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "theme-4/index2.html" } }, [
                      _vm._v("Version 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-4/index3.html" } }, [
                      _vm._v("Version 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-4/index4.html" } }, [
                      _vm._v("Version 3")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "theme-4/index5.html" } }, [
                      _vm._v("Version 4")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Pages "),
              _c("i", { staticClass: "fal fa-angle-down" })
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("a", { attrs: { href: "about.html" } }, [_vm._v("About")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "archive.html" } }, [
                  _vm._v("Archive")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "contact.html" } }, [
                  _vm._v("Contact Us")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "404.html" } }, [_vm._v("404")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Posts "),
              _c("i", { staticClass: "fal fa-angle-down" })
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("General Posts "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "post1.html" } }, [
                      _vm._v("Post 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "post2.html" } }, [
                      _vm._v("Post 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "post3.html" } }, [
                      _vm._v("Post 3")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("Video Posts "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "video_post1.html" } }, [
                      _vm._v("Video Style 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "video_post2.html" } }, [
                      _vm._v("Video Style 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "video_post3.html" } }, [
                      _vm._v("Video Style 3")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("Audio Posts "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "audio_post1.html" } }, [
                      _vm._v("Audio Style 1")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "audio_post2.html" } }, [
                      _vm._v("Audio Style 2")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "audio_post3.html" } }, [
                      _vm._v("Audio Style 3")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("Sidebars "),
                  _c("i", { staticClass: "fal fa-angle-right" })
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("a", { attrs: { href: "post1.html" } }, [
                      _vm._v("Right Sidebar")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "left_post2.html" } }, [
                      _vm._v("Left Sidebar")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "post2.html" } }, [
                      _vm._v("No Sidebar "),
                      _c("i", { staticClass: "fal fa-angle-right" })
                    ]),
                    _vm._v(" "),
                    _c("ul", [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Simple menu")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Categories "),
              _c("i", { staticClass: "fal fa-angle-down" })
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", { staticClass: "active" }, [
                _c("a", { attrs: { href: "business.html" } }, [
                  _vm._v("Business")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "entertainment.html" } }, [
                  _vm._v("Entertainment")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "feature.html" } }, [
                  _vm._v("Features")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "sports.html" } }, [_vm._v("Sports")])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("a", { attrs: { href: "trending.html" } }, [
                  _vm._v("Trending")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("a", { attrs: { href: "#world" } }, [_vm._v("World")])]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#sports" } }, [_vm._v("Sports")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "contact.html" } }, [_vm._v("Contact")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "search_btn" }, [
      _c("i", { staticClass: "far fa-search" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lang d-none d-xl-block" }, [
      _c("ul", [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v("English "),
            _c("i", { staticClass: "far fa-angle-down" })
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Spanish")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("China")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Hindi")])]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Corian")])])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "temp d-none d-lg-block" }, [
      _c("div", { staticClass: "temp_wap" }, [
        _c("div", { staticClass: "temp_icon" }, [
          _c("img", {
            attrs: { src: "assets/frontend/website/img/icon/temp.png", alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "temp_count" }, [_vm._v("13")]),
        _vm._v(" "),
        _c("p", [_vm._v("San Francisco")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [
          _c("span", {
            staticClass: "ti-close",
            attrs: { "aria-hidden": "true" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,n,a),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),l=Object.assign({},i,r);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};i(0);u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,i);t.$loading=n,t.prototype.$loading=n};e.default=u}]).default}));

/***/ })

}]);