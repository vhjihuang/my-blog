const navbar = require('./vuepressConfig/navbar')
const sidebar = require('./vuepressConfig/sidebar')

import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Welcome My Blog',
  description: 'Welcome My Blog',
  base: '/my-blog/',
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  theme: defaultTheme({
    navbar,
    sidebar
  })
})