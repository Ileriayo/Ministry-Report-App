module.exports = {
  title: '',
  description:
    "",
  themeConfig: {
    logo: '',
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
        ga: '',
      },
    ],
  ],
};
