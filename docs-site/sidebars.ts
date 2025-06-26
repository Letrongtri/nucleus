/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Hooks',
      collapsed: false,
      items: [
        'hooks/index',          // Overview page
        'hooks/useLocalStorage' // Specific hook
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'components/button'
      ],
    },
  ],
};

module.exports = sidebars;