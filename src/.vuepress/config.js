module.exports = {
  // plugins: {
  //   '@vuepress/pwa': {
  //     serviceWorker: true,
  //     updatePopup: {
  //       message: 'New content is available.',
  //       buttonText: 'Refresh'
  //     }
  //   }
  // },

  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    }],
    ['@vuepress/back-to-top'],
    // ['@vuepress/google-analytics', {
    //   ga: ''
    // }]
  ],

  title: 'Geekhub lessons',
  description: 'Geekhub lessons detailed information',
  // layout: 'SpecialLayout',
  base: '/geekhub-lessons/',
  // head: [
  //   ['link', { rel: 'icon', href: `/logo.png` }
  // ],

  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'iliyaZelenko/geekhub-lessons',

    lastUpdated: true,
    sidebarDepth: 3,
    sidebar: [
      // '/lessons/',
      {
        title: 'Lessons',
        collapsable: false,
        children: [
          '/lessons/lesson-1',
          '/lessons/lesson-2',
          '/lessons/lesson-3'
        ]
      }
      // ['/lessons/lesson-1', '1) Setup Environment, Debugging, Automatization'],
      // ['/lessons/lesson-2', '2) Frameworks Overview, Standardization'],
      // ['/lessons/lesson-3', '3) Routing, Controller']
    ],
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
}
