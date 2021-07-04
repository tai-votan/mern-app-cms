import routesPath from './routesPath';

export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BlankLayout',
      },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: routesPath.ADMIN,
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: routesPath.ADMIN,
            component: '../layouts/BasicLayout',
            authority: ['admin'],
            routes: [
              {
                path: routesPath.ADMIN,
                redirect: routesPath.DASHBOARD,
              },
              {
                path: routesPath.DASHBOARD,
                name: 'dashboard',
                icon: 'StockOutlined',
                component: './Welcome',
              },
              {
                path: routesPath.BLOGS,
                name: 'blogs',
                icon: 'ContainerOutlined',
                routes: [
                  {
                    path: routesPath.BLOGS,
                    component: './Blogs',
                    hideInMenu: true,
                  },
                  {
                    path: routesPath.CREATE_BLOGS,
                    name: 'blogsCreate',
                    component: './BlogsCreate',
                    hideInMenu: true,
                  },
                  {
                    path: `${routesPath.BLOGS}/:blogId`,
                    name: 'blogsDetails',
                    component: './BlogsDetails',
                    hideInMenu: true,
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                path: routesPath.ARTICLES,
                name: 'articles',
                icon: 'FormOutlined',
                routes: [
                  {
                    path: routesPath.ARTICLES,
                    component: './Articles',
                    hideInMenu: true,
                  },
                  {
                    path: routesPath.CREATE_ARTICLES,
                    name: 'articlesCreate',
                    component: './PagesCreate',
                    hideInMenu: true,
                  },
                  {
                    path: `${routesPath.ARTICLES}/:articleId`,
                    name: 'articlesDetails',
                    component: './ArticlesDetails',
                    hideInMenu: true,
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                path: routesPath.PAGES,
                name: 'pages',
                icon: 'SnippetsOutlined',
                routes: [
                  {
                    path: routesPath.PAGES,
                    component: './Pages',
                    hideInMenu: true,
                  },
                  {
                    path: routesPath.CREATE_PAGES,
                    name: 'pagesCreate',
                    component: './PagesCreate',
                    hideInMenu: true,
                  },
                  {
                    path: `${routesPath.PAGES}/:pageId`,
                    name: 'pagesDetails',
                    component: './PagesDetails',
                    hideInMenu: true,
                  },
                  {
                    component: './404',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      }
    ],
  },
  {
    component: './404',
  },
];
