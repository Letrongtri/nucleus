import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nucleus/__docusaurus/debug',
    component: ComponentCreator('/nucleus/__docusaurus/debug', '675'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/config',
    component: ComponentCreator('/nucleus/__docusaurus/debug/config', '220'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/content',
    component: ComponentCreator('/nucleus/__docusaurus/debug/content', 'e4e'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/globalData',
    component: ComponentCreator('/nucleus/__docusaurus/debug/globalData', '3d5'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/metadata',
    component: ComponentCreator('/nucleus/__docusaurus/debug/metadata', 'a1c'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/registry',
    component: ComponentCreator('/nucleus/__docusaurus/debug/registry', '6d8'),
    exact: true
  },
  {
    path: '/nucleus/__docusaurus/debug/routes',
    component: ComponentCreator('/nucleus/__docusaurus/debug/routes', '695'),
    exact: true
  },
  {
    path: '/nucleus/docs',
    component: ComponentCreator('/nucleus/docs', 'e8c'),
    routes: [
      {
        path: '/nucleus/docs',
        component: ComponentCreator('/nucleus/docs', 'dfa'),
        routes: [
          {
            path: '/nucleus/docs',
            component: ComponentCreator('/nucleus/docs', '3b8'),
            routes: [
              {
                path: '/nucleus/docs/Components/Atoms/',
                component: ComponentCreator('/nucleus/docs/Components/Atoms/', 'cc7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/Components/Atoms/Button',
                component: ComponentCreator('/nucleus/docs/Components/Atoms/Button', '8c5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/nucleus/docs/Components/Atoms/Textfield',
                component: ComponentCreator('/nucleus/docs/Components/Atoms/Textfield', 'dc9'),
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
