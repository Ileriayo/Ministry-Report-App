module.exports = {
  title: '',
  description:
    "",
  themeConfig: {
    logo: '/logo.png',
    repo: '',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Go to App', link: '' },
    ],
    sidebar: [
      '/',
      '/changelog/',
    ],
    smoothScroll: true,
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-161860275-1',
      },
    ],
  ],
};
