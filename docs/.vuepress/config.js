module.exports = {
  title: '',
  description:
    "",
  themeConfig: {
    logo: '',
    repo: '',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Go to App', link: 'https://myrccreport.firebaseapp.com' },
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
