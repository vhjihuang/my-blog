### 如何用vuepress搭建博客
  1. 提示: 我用的是`mac`电脑,此文章编辑时间是2022年12月17日,目前`vuepress`及依赖和软件还在更新,搭建步骤仅供参考.
  2. 搭建博客时软件的版本

      1. `node`版本: `v18.12.0`.
      2. `pnpm`版本: `7.18.1`.
      3. `vuepress`版本: `2.0.0-beta.59`.
      4. `git`版本:`2.38.2`.

### 搭建步骤 
  [vuepress文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)
  
  1. 远程仓库部分
      1. 创建仓库
          1. 仓库名称和你的项目文件名称最好是一致
      2. 生成`Personal access tokens (classic)`
          1. 鼠标点击头像出现菜单,选择 `Settings` -> 选择左边菜单下的 `Developer settings`.
          2. 左边菜单选择 `Personal access tokens` -> 选择 `Tokens(classic)` -> 点击`Generate new token` -> 选择 `Generate new token (classic)`.
          3. 在页面输入`token`名称 -> 选择 `Expiration` 时间 (过期后需要更新,选`no Expiration`永远不过期,存在安全隐患) -> 勾选`repo`和`workflow` -> 拉到底部点击 `Generate token` -> 生成 `Personal access tokens` -> 复制保存`token`.
      3. 在项目中设置`token`
          1. 进入代码空间,选择 `Settings` -> 选择左边菜单的 `Secrets` -> 选择`Actions` ->  点击`New repository secret` -> 输入 `token` 名称,把生成的`token`粘贴到`secret`输入框内.
  2. 本地仓库部分
      1. 创建文件并且进入文件内
          ```sh
          mkdir test && cd test
          ```
      2. 初始化文件
          ```sh
          git init 
          pnpm init
          ```
      3. 下载依赖
          ```sh
          pnpm add -D vuepress@next @vuepress/client@next vue
          ```
      4. 添加运行和打包指令
          ```json
          {
            "scripts": {
              "dev": "vuepress dev docs",
              "build": "vuepress build docs"
            }
          }
          ```
      5. 添加过滤文件
      6. 运行项目
          ```sh
          pnpm dev
          pnpm build
          ```
      7. 添加配置文件
        ```js
        ```
      8. 连接仓库和上传文件
        ```sh
        ```
  3. 添加自动化部署文件
      1. 进入代码空间,选择`Actions` -> 点击左边的`New workflow` -> 点击`Configure` -> 从`vuepress`文档复制的工作流文件粘贴进去 -> 点击右边的`Start commit` -> 点击`commit new file`
  4. 按照需求配置菜单,后续自动提交会同步更新到博客.
  
