
let dashboard = require('../components/admin/dashboard.vue').default;
let categories = require('../components/admin/categories.vue').default;

export const routes = [


    {
        path: '/admin',
         component: () => import('../components/BackendMaster'),
         beforeEnter: (to, from, next) => {
            if (User.hasToken()) {
                if (User.name().split(',')[1] == 1) {
                   next();

                } else {

                    window.location.href = "/";

                }

            } else {
                    window.location.href = "/";

            }
          },
         children: [
            {
                path: '/admin/dashboard',
                component:dashboard,
                name: 'dashboard',
            },
            {
                path: '/admin/categories',
                component:categories,
                name: 'categories',
            },
        ]

    },



]
