
let homePage = require('../components/website/pages/home.vue').default;

export const routes = [


    {
        path: '/',
         component: () => import('../components/FrontendMaster'),
         children: [



            {
                path: '/',
                name : 'home',
                component:homePage
            },
        ]

    },



]
