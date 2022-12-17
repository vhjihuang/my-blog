import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'my-blog',
  description: 'Welcome My Blog',
  base: '/my-blog/',
  markdown: {
    code: {
      lineNumbers: false
    }
  }
})