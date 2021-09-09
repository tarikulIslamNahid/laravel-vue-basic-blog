<template>
    <div >
        <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>

        <div :class="
                menu == true
                    ? 'nk-sidebar nk-sidebar-fixed is-light nk-sidebar-active'
                    : 'nk-sidebar nk-sidebar-fixed is-light'
            " data-content="sidebarMenu">
            <div class="nk-sidebar-element nk-sidebar-head">
                <div class="nk-sidebar-brand">
                    <a href="html/index.html" class="logo-link nk-sidebar-logo">
                        <img class="logo-light logo-img" src="/assets/backend/images/logo.png"
                            srcset="/assets/backend/images/logo2x.png 2x" alt="logo" />
                        <img class="logo-dark logo-img" src="/assets/backend/images/logo-dark.png"
                            srcset="/assets/backend/images/logo-dark2x.png 2x" alt="logo-dark" />
                        <img class="logo-small logo-img logo-img-small" src="/assets/backend/images/logo-small.png"
                            srcset="/assets/backend/images/logo-small2x.png 2x" alt="logo-small" />
                    </a>
                </div>
                <div class="nk-menu-trigger mr-n2 " @click="menu = false">
                    <router-link to="" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em
                            class="icon ni ni-arrow-left"></em></router-link>
                    <span to="" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                        data-target="sidebarMenu"><em class="icon ni ni-menu"></em></span>
                </div>
            </div>
            <!-- .nk-sidebar-element -->
            <div class="nk-sidebar-element">
                <div class="nk-sidebar-content">
                    <div class="nk-sidebar-menu" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: -16px 0px -40px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper"
                                        style="height: 100%; overflow: hidden scroll;">
                                        <div class="simplebar-content" style="padding: 16px 0px 40px;">
                                            <ul class="nk-menu">

                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item active current-page">
                                                    <router-link :to="{ name: 'dashboard'}" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-tile-thumb-fill"></em></span>
                                                        <span class="nk-menu-text">Dashboard</span>
                                                    </router-link>
                                                </li>

                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item">
                                                    <a href="html/index-analytics.html" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-growth-fill"></em></span>
                                                        <span class="nk-menu-text">Analytics</span>
                                                    </a>
                                                </li>

                                                <!-- .nk-menu-heading -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-tile-thumb-fill"></em></span>
                                                        <span class="nk-menu-text">Blogs</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <router-link :to="{ name: 'categories'}"
                                                                class="nk-menu-link" data-original-title="" title="">
                                                                <span class="nk-menu-text">Categories</span>
                                                            </router-link>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/project-list.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Posts</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                            <!-- .nk-menu-heading -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-tile-thumb-fill"></em></span>
                                                        <span class="nk-menu-text">Staffs Panel</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <router-link :to="{ name: 'roles'}"
                                                                class="nk-menu-link" data-original-title="" title="">
                                                                <span class="nk-menu-text">Manage Roles</span>
                                                            </router-link>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/project-list.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Posts</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-users-fill"></em></span>
                                                        <span class="nk-menu-text">User Manage</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-list-default.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">User List -
                                                                    Default</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-list-regular.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">User List -
                                                                    Regular</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-list-compact.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">User List -
                                                                    Compact</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-details-regular.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">User
                                                                    Details -
                                                                    Regular</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-profile-regular.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">User
                                                                    Profile -
                                                                    Regular</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/user-card.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">User
                                                                    Contact -
                                                                    Card</span>
                                                                <span class="nk-menu-badge badge-warning">New</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-cc-alt2-fill"></em></span>
                                                        <span class="nk-menu-text">Orders</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/orders-default.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Order List
                                                                    -
                                                                    Default</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/orders-regular.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Order List
                                                                    -
                                                                    Regular</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/orders-sales.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Order List
                                                                    -
                                                                    Sales</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-grid-alt-fill"></em></span>
                                                        <span class="nk-menu-text">Applications</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-messages.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Messages</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-inbox.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Inbox /
                                                                    Mail</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-file-manager.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">File
                                                                    Manager</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-chats.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Chats /
                                                                    Messenger</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-calendar.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Calendar</span><span
                                                                    class="nk-menu-badge badge-warning">New</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/apps-kanban.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Kanban
                                                                    Board</span><span
                                                                    class="nk-menu-badge badge-warning">New</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-heading">
                                                    <h6 class="overline-title text-primary-alt">
                                                        Misc Pages
                                                    </h6>
                                                </li>
                                                <!-- .nk-menu-heading -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-light-fill"></em></span>
                                                        <span class="nk-menu-text">Auth Pages</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/auths/auth-login.html"
                                                                class="nk-menu-link" target="_blank"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Login /
                                                                    Signin</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/auths/auth-register.html"
                                                                class="nk-menu-link" target="_blank"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Register /
                                                                    Signup</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/auths/auth-reset.html"
                                                                class="nk-menu-link" target="_blank"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Forgot
                                                                    Password</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/auths/auth-success.html"
                                                                class="nk-menu-link" target="_blank"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Success /
                                                                    Confirm</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="#" class="nk-menu-link nk-menu-toggle"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Classic
                                                                    Version -
                                                                    v2</span></a>
                                                            <ul class="nk-menu-sub">
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-login-v2.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Login
                                                                            /
                                                                            Signin</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-register-v2.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Register
                                                                            /
                                                                            Signup</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-reset-v2.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Forgot
                                                                            Password</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-success-v2.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Success
                                                                            /
                                                                            Confirm</span></a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="#" class="nk-menu-link nk-menu-toggle"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">No Slider
                                                                    Version -
                                                                    v3</span></a>
                                                            <ul class="nk-menu-sub">
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-login-v3.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Login
                                                                            /
                                                                            Signin</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-register-v3.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Register
                                                                            /
                                                                            Signup</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-reset-v3.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Forgot
                                                                            Password</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/pages/auths/auth-success-v3.html"
                                                                        class="nk-menu-link" target="_blank"
                                                                        data-original-title="" title=""><span
                                                                            class="nk-menu-text">Success
                                                                            /
                                                                            Confirm</span></a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-files-fill"></em></span>
                                                        <span class="nk-menu-text">Error Pages</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/errors/404-classic.html" target="_blank"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">404
                                                                    Classic</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/errors/504-classic.html" target="_blank"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">504
                                                                    Classic</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/errors/404-s1.html" target="_blank"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">404
                                                                    Modern</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/errors/504-s1.html" target="_blank"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">504
                                                                    Modern</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-files-fill"></em></span>
                                                        <span class="nk-menu-text">Other Pages</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/_blank.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Blank /
                                                                    Startup</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/faqs.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Faqs /
                                                                    Help</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/terms-policy.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Terms /
                                                                    Policy</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/regular-v1.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Regular
                                                                    Page -
                                                                    v1</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/pages/regular-v2.html" class="nk-menu-link"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Regular
                                                                    Page -
                                                                    v2</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->

                                                <li class="nk-menu-heading">
                                                    <h6 class="overline-title text-primary-alt">
                                                        Components
                                                    </h6>
                                                </li>
                                                <!-- .nk-menu-heading -->

                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-dot-box-fill"></em></span>
                                                        <span class="nk-menu-text">Crafted Icons</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/misc/svg-icons.html"
                                                                class="nk-menu-link" data-original-title="" title="">
                                                                <span class="nk-menu-text">SVG Icon -
                                                                    Exclusive</span>
                                                            </a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/misc/nioicon.html"
                                                                class="nk-menu-link" data-original-title="" title="">
                                                                <span class="nk-menu-text">Nioicon -
                                                                    HandCrafted</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li :class="
                                                        submenu == true
                                                            ? 'active nk-menu-item has-sub'
                                                            : 'nk-menu-item has-sub'
                                                    " @click="submenu('tables')">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-table-view-fill"></em></span>
                                                        <span class="nk-menu-text">Tables</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/tables/table-basic.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Basic
                                                                    Tables</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/tables/table-special.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Special
                                                                    Tables</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/tables/table-datatable.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span
                                                                    class="nk-menu-text">DataTables</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li :class="
                                                        submenu == true
                                                            ? 'active nk-menu-item has-sub'
                                                            : 'nk-menu-item has-sub '
                                                    " @click="submenu = !submenu">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-view-group-fill"></em></span>
                                                        <span class="nk-menu-text">Forms</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/forms/form-elements.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Form
                                                                    Elements</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/forms/form-layouts.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Form
                                                                    Layouts</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/forms/form-validation.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Form
                                                                    Validation</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/forms/form-wizard.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Wizard
                                                                    Basic</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="#" class="nk-menu-link nk-menu-toggle"
                                                                data-original-title="" title=""><span
                                                                    class="nk-menu-text">Rich
                                                                    Editor</span></a>
                                                            <ul class="nk-menu-sub">
                                                                <li class="nk-menu-item">
                                                                    <a href="html/components/forms/form-summernote.html"
                                                                        class="nk-menu-link" data-original-title=""
                                                                        title=""><span
                                                                            class="nk-menu-text">Summernote</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/components/forms/form-quill.html"
                                                                        class="nk-menu-link" data-original-title=""
                                                                        title=""><span
                                                                            class="nk-menu-text">Quill</span></a>
                                                                </li>
                                                                <li class="nk-menu-item">
                                                                    <a href="html/components/forms/form-tinymce.html"
                                                                        class="nk-menu-link" data-original-title=""
                                                                        title=""><span
                                                                            class="nk-menu-text">Tinymce</span></a>
                                                                </li>
                                                            </ul>
                                                            <!-- .nk-menu-sub -->
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item has-sub">
                                                    <a href="#" class="nk-menu-link nk-menu-toggle"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-pie-fill"></em></span>
                                                        <span class="nk-menu-text">Charts</span>
                                                    </a>
                                                    <ul class="nk-menu-sub">
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/charts/chartjs.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Chart
                                                                    JS</span></a>
                                                        </li>
                                                        <li class="nk-menu-item">
                                                            <a href="html/components/charts/knob.html"
                                                                class="nk-menu-link" data-original-title=""
                                                                title=""><span class="nk-menu-text">Knob
                                                                    JS</span></a>
                                                        </li>
                                                    </ul>
                                                    <!-- .nk-menu-sub -->
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item">
                                                    <a href="html/components/misc/toastr.html" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-alert-circle-fill"></em></span>
                                                        <span class="nk-menu-text">Toastr</span>
                                                    </a>
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item">
                                                    <a href="html/components/misc/sweet-alert.html" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-caution-fill"></em></span>
                                                        <span class="nk-menu-text">Sweet Alert</span>
                                                    </a>
                                                </li>
                                                <!-- .nk-menu-item -->
                                                <li class="nk-menu-item">
                                                    <a href="html/email-templates.html" class="nk-menu-link"
                                                        data-original-title="" title="">
                                                        <span class="nk-menu-icon"><em
                                                                class="icon ni ni-tag-alt-fill"></em></span>
                                                        <span class="nk-menu-text">Email
                                                            Template</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <!-- .nk-menu -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simplebar-placeholder" style="width: auto; height: 1313px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                            <div class="simplebar-scrollbar simplebar-visible" style="width: 0px; display: none;"></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                            <div class="simplebar-scrollbar simplebar-visible"
                                style="height: 139px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                        </div>
                    </div>
                    <!-- .nk-sidebar-menu -->
                </div>
                <!-- .nk-sidebar-content -->
            </div>
            <!-- .nk-sidebar-element -->
        </div>

        <!-- main wrap  -->
        <div class="nk-wrap">
            <!-- to header -->
            <div class="nk-header nk-header-fixed is-light">
                <div class="container-fluid">
                    <div class="nk-header-wrap">
                        <div class="nk-menu-trigger d-xl-none ml-n1" @click="menuTrue()">
                            <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em
                                    class="icon ni ni-menu"></em></a>
                        </div>
                        <div class="nk-header-brand d-xl-none">
                            <a href="html/index.html" class="logo-link">
                                <img class="logo-light logo-img" src="/assets/backend/images/logo.png" srcset="
                                        /assets/backend/images/logo2x.png 2x
                                    " alt="logo" />
                                <img class="logo-dark logo-img" src="/assets/backend/images/logo-dark.png" srcset="
                                        /assets/backend/images/logo-dark2x.png 2x
                                    " alt="logo-dark" />
                            </a>
                        </div>
                        <!-- .nk-header-brand -->
                        <div class="nk-header-search ml-3 ml-xl-0">
                            <em class="icon ni ni-search"></em>
                            <input type="text" class="form-control border-transparent form-focus-none"
                                placeholder="Search anything" />
                        </div>
                        <!-- .nk-header-news -->
                        <div class="nk-header-tools">
                            <ul class="nk-quick-nav">
                                <li class="dropdown chats-dropdown hide-mb-xs">
                                    <a href="#" class="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                        <div class="icon-status icon-status-na">
                                            <em class="icon ni ni-comments"></em>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                        <div class="dropdown-head">
                                            <span class="sub-title nk-dropdown-title">Recent Chats</span>
                                            <a href="#">Setting</a>
                                        </div>
                                        <div class="dropdown-body">
                                            <ul class="chat-list">
                                                <li class="chat-item">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar">
                                                            <span>IH</span>
                                                            <span class="status dot dot-lg dot-gray"></span>
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    Iliash
                                                                    Hossain
                                                                </div>
                                                                <span class="time">Now</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    You: Please
                                                                    confrim if
                                                                    you got my
                                                                    last
                                                                    messages.
                                                                </div>
                                                                <div class="status delivered">
                                                                    <em class="icon ni ni-check-circle-fill"></em>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                                <li class="chat-item is-unread">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar bg-pink">
                                                            <span>AB</span>
                                                            <span class="status dot dot-lg dot-success"></span>
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    Abu Bin
                                                                    Ishtiyak
                                                                </div>
                                                                <span class="time">4:49
                                                                    AM</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    Hi, I am
                                                                    Ishtiyak,
                                                                    can you help
                                                                    me with this
                                                                    problem ?
                                                                </div>
                                                                <div class="status unread">
                                                                    <em class="icon ni ni-bullet-fill"></em>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                                <li class="chat-item">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar">
                                                            <img src="/assets/backend/images/avatar/b-sm.jpg" alt="" />
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    George
                                                                    Philips
                                                                </div>
                                                                <span class="time">6 Apr</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    Have you
                                                                    seens the
                                                                    claim from
                                                                    Rose?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                                <li class="chat-item">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar user-avatar-multiple">
                                                            <div class="user-avatar">
                                                                <img src="/assets/backend/images/avatar/c-sm.jpg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="user-avatar">
                                                                <span>AB</span>
                                                            </div>
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    Softnio
                                                                    Group
                                                                </div>
                                                                <span class="time">27
                                                                    Mar</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    You: I just
                                                                    bought a new
                                                                    computer but
                                                                    i am having
                                                                    some problem
                                                                </div>
                                                                <div class="status sent">
                                                                    <em class="icon ni ni-check-circle"></em>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                                <li class="chat-item">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar">
                                                            <img src="/assets/backend/images/avatar/a-sm.jpg" alt="" />
                                                            <span class="status dot dot-lg dot-success"></span>
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    Larry Hughes
                                                                </div>
                                                                <span class="time">3 Apr</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    Hi Frank!
                                                                    How is you
                                                                    doing?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                                <li class="chat-item">
                                                    <a class="chat-link" href="html/apps-chats.html">
                                                        <div class="chat-media user-avatar bg-purple">
                                                            <span>TW</span>
                                                        </div>
                                                        <div class="chat-info">
                                                            <div class="chat-from">
                                                                <div class="name">
                                                                    Tammy Wilson
                                                                </div>
                                                                <span class="time">27
                                                                    Mar</span>
                                                            </div>
                                                            <div class="chat-context">
                                                                <div class="text">
                                                                    You: I just
                                                                    bought a new
                                                                    computer but
                                                                    i am having
                                                                    some problem
                                                                </div>
                                                                <div class="status sent">
                                                                    <em class="icon ni ni-check-circle"></em>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <!-- .chat-item -->
                                            </ul>
                                            <!-- .chat-list -->
                                        </div>
                                        <!-- .nk-dropdown-body -->
                                        <div class="dropdown-foot center">
                                            <a href="html/apps-chats.html">View All</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown notification-dropdown">
                                    <a href="#" class="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                        <div class="icon-status icon-status-info">
                                            <em class="icon ni ni-bell"></em>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                        <div class="dropdown-head">
                                            <span class="sub-title nk-dropdown-title">Notifications</span>
                                            <a href="#">Mark All as Read</a>
                                        </div>
                                        <div class="dropdown-body">
                                            <div class="nk-notification">
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            You have requested
                                                            to
                                                            <span>Widthdrawl</span>
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            Your
                                                            <span>Deposit
                                                                Order</span>
                                                            is placed
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            You have requested
                                                            to
                                                            <span>Widthdrawl</span>
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            Your
                                                            <span>Deposit
                                                                Order</span>
                                                            is placed
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            You have requested
                                                            to
                                                            <span>Widthdrawl</span>
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="nk-notification-item dropdown-inner">
                                                    <div class="nk-notification-icon">
                                                        <em
                                                            class="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                    </div>
                                                    <div class="nk-notification-content">
                                                        <div class="nk-notification-text">
                                                            Your
                                                            <span>Deposit
                                                                Order</span>
                                                            is placed
                                                        </div>
                                                        <div class="nk-notification-time">
                                                            2 hrs ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- .nk-notification -->
                                        </div>
                                        <!-- .nk-dropdown-body -->
                                        <div class="dropdown-foot center">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown user-dropdown">
                                    <router-link to="#" class="dropdown-toggle mr-n1" data-toggle="dropdown">
                                        <div class="user-toggle">
                                            <div class="user-avatar sm">
                                                <em class="icon ni ni-user-alt"></em>
                                            </div>
                                            <div class="user-info d-none d-xl-block">
                                                <div class="user-status user-status-unverified">
                                                    Unverified
                                                </div>
                                                <div class="user-name dropdown-indicator">
                                                    Abu Bin Ishityak
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <!-- <div :class="rightMenu == true ? 'show dropdown-menu dropdown-menu-md dropdown-menu-right' : 'dropdown-menu dropdown-menu-md dropdown-menu-right'"> -->
                                        <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                            <div class="user-card">
                                                <div class="user-avatar">
                                                    <span>AB</span>
                                                </div>
                                                <div class="user-info">
                                                    <span class="lead-text">Abu Bin Ishtiyak</span>
                                                    <span class="sub-text">info@softnio.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown-inner">
                                            <ul class="link-list">
                                                <li>
                                                    <a href="html/user-profile-regular.html"><em
                                                            class="icon ni ni-user-alt"></em><span>View
                                                            Profile</span></a>
                                                </li>
                                                <li>
                                                    <a href="html/user-profile-setting.html"><em
                                                            class="icon ni ni-setting-alt"></em><span>Account
                                                            Setting</span></a>
                                                </li>
                                                <li>
                                                    <a href="html/user-profile-activity.html"><em
                                                            class="icon ni ni-activity-alt"></em><span>Login
                                                            Activity</span></a>
                                                </li>
                                                <li>
                                                    <a class="dark-switch" href="#"><em
                                                            class="icon ni ni-moon"></em><span>Dark Mode</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-inner">
                                            <ul class="link-list">
                                                <li>
                                                    <a @click="logout"><em class="icon ni ni-signout"></em><span>Sign
                                                            out</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- .nk-header-wrap -->
                </div>
                <!-- .container-fliud -->
            </div>
            <!-- to header end -->

            <!-- router view for main content  -->
            <div class="nk-content">
                <router-view></router-view>
            </div>
            <!-- router view for main content  end-->
        </div>
        <!-- <script src="/assets/backend/js/scripts.js"></script> -->

        <!-- main wrap  end-->
    </div>
</template>

<script>
    import Loading from "vue-loading-overlay";
    import "vue-loading-overlay/dist/vue-loading.css";
    export default {
        name: "BackendMaster",

        components: {
            Loading
        },
        data() {
            return {
                USER: {},
                menu: false,
                submenu: false,
                isLoading: false,
                fullPage: true,
            };
        },
        created() {
            this.doLoading();
            this.USER = this.$store.getters.getUser;

            this.Loggedin();
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
            menuTrue() {
                this.menu = true;
            },
            doLoading() {
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                }, 2000);
            },
            Loggedin() {
                if (this.USER != null) {
                    if (User.loggedIn(this.USER.access_token)) {
                        this.loggedInAdmin = true;


                    } else {
                        this.loggedInAdmin = false;
                    window.location.href = "/";

                    }
                } else {
                    window.location.href = "/";

                }
            }
        },

    };

</script>

<style>
    li.nk-menu-item.has-sub:hover .nk-menu-sub {
        display: block !important;
    }

    .dropdown.user-dropdown:hover .dropdown-menu.dropdown-menu-md.dropdown-menu-right {
        display: block !important;
        margin-top: 0px !important;

    }

    .dropdown-menu.dropdown-menu-md.dropdown-menu-right:hover {
        display: block !important;
        margin-top: 0px !important;
    }

</style>
