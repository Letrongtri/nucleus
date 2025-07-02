import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nucleus/docs',
    component: ComponentCreator('/nucleus/docs', 'c89'),
    routes: [
      {
        path: '/nucleus/docs',
        component: ComponentCreator('/nucleus/docs', '8ea'),
        routes: [
          {
            path: '/nucleus/docs',
            component: ComponentCreator('/nucleus/docs', '3ff'),
            routes: [
              {
                path: '/nucleus/docs/Atoms/',
                component: ComponentCreator('/nucleus/docs/Atoms/', '7bb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/Atoms/Button',
                component: ComponentCreator('/nucleus/docs/Atoms/Button', '3df'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/Hooks/',
                component: ComponentCreator('/nucleus/docs/Hooks/', 'a75'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/Hooks/useLocalStorage',
                component: ComponentCreator('/nucleus/docs/Hooks/useLocalStorage', 'ff1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/intro',
                component: ComponentCreator('/nucleus/docs/intro', '363'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/nucleus/',
    component: ComponentCreator('/nucleus/', '6a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
