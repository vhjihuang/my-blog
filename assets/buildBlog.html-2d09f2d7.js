import{_ as t,M as o,p,q as c,R as s,t as a,N as l,a1 as n}from"./framework-8fa3e4ce.js";const i="/my-blog/assets/create_repository_1-cd3ccd93.png",r="/my-blog/assets/create_repository_2-14dd79f0.png",u="/my-blog/assets/create_repository_3-c1df863b.jpg",k="/my-blog/assets/create_repository_4-266e0169.png",d="/my-blog/assets/create_repository_5-6a4db4bc.png",g="/my-blog/assets/create_repository_6-7d95ebf2.png",m="/my-blog/assets/create_repository_7-3a1fb343.png",_="/my-blog/assets/create_repository_8-eb606547.png",y="/my-blog/assets/create_repository_10-2ac13555.png",h="/my-blog/assets/local_repository_1-542bae63.png",b="/my-blog/assets/local_repository_2-162207e0.png",v="/my-blog/assets/local_repository_3-210ad940.png",f="/my-blog/assets/local_repository_4-cddc89e7.png",w="/my-blog/assets/local_repository_5-0da50b0b.png",x="/my-blog/assets/local_repository_6-1ad19605.png",j="/my-blog/assets/self-deployment_1-42c7a118.png",N="/my-blog/assets/self-deployment_2-e5062b36.png",q={},E=n('<h3 id="如何用vuepress搭建博客" tabindex="-1"><a class="header-anchor" href="#如何用vuepress搭建博客" aria-hidden="true">#</a> 如何用vuepress搭建博客</h3><ol><li>提示: 我用的是<code>mac</code>电脑,此文章编辑时间是2022年12月17日,目前<code>vuepress</code>及依赖和软件还在更新,搭建步骤仅供参考.</li><li>搭建博客时软件的版本 <ol><li><code>node</code>版本: <code>v18.12.0</code>.</li><li><code>pnpm</code>版本: <code>7.18.1</code>.</li><li><code>vuepress</code>版本: <code>2.0.0-beta.59</code>.</li><li><code>git</code>版本:<code>2.38.2</code>.</li></ol></li><li>搭建博客的步骤本质上只有三部分 <ol><li>远程仓库的创建,及生成自动化部署需要的<code>token</code>.(<code>ps</code>:我不知道之前生成的<code>token</code>可不可以复用,没有试验过)</li><li>本地仓库的初始化,本地仓库连接远程仓库,并且上传本地代码</li><li>在远程仓库添加自动化部署文件</li></ol></li><li>总结 <ol><li>在搭建的过程中,所有报的一切错都是上述3部分中的某一部分,仔细分辨,逐个解决,实在不行从头再来是个好方法.下面的步骤不是只有按照我写的才能完成,有些步骤不一定按照我的写法也是可以的.比如: 创建好仓库后获取仓库地址,然后就可以直接在本地使用<code>git clone 仓库地址</code>克隆到本地,就不需要手动连接到远程仓库</li><li>搭建过程可能遇到的问题,依赖版本不对,工具版本不对,本地仓库的分支不对,配置文件不对,配置文件和部署文件配置没对上等很多问题.</li></ol></li></ol><h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3>',3),S=n('<li><p>远程仓库部分</p><ol><li><p>创建仓库</p><ol><li>仓库名称和你的<code>config.js</code>内的<code>base</code>要一致,规则是源自<code>vuepress</code>官方文档<strong>部署模块</strong>.</li></ol><p><img src="'+i+'" alt="创建仓库"></p></li><li><p>生成<code>Personal access tokens (classic)</code></p><ol><li>鼠标点击头像出现菜单,选择 <code>Settings</code> -&gt; 选择左边菜单下的 <code>Developer settings</code>.</li></ol><p><img src="'+r+'" alt="创建仓库"><img src="'+u+'" alt="创建仓库"></p><ol start="2"><li>左边菜单选择 <code>Personal access tokens</code> -&gt; 选择 <code>Tokens(classic)</code> -&gt; 点击<code>Generate new token</code> -&gt; 选择 <code>Generate new token (classic)</code>.</li></ol><p><img src="'+k+'" alt="创建仓库"><img src="'+d+'" alt="创建仓库"></p><ol start="3"><li>在页面输入<code>token</code>名称 -&gt; 选择 <code>Expiration</code> 时间 (过期后需要更新,选<code>no Expiration</code>永远不过期,存在安全隐患) -&gt; 勾选<code>repo</code>和<code>workflow</code> -&gt; 拉到底部点击 <code>Generate token</code> -&gt; 生成 <code>Personal access tokens</code> -&gt; 复制保存<code>token</code>.</li></ol><p><img src="'+g+'" alt="创建仓库"><img src="'+m+'" alt="创建仓库"></p></li><li><p>在项目中设置<code>token</code></p><ol><li>进入代码空间,选择 <code>Settings</code> -&gt; 选择左边菜单的 <code>Secrets</code> -&gt; 选择<code>Actions</code> -&gt; 点击<code>New repository secret</code> -&gt; 输入 <code>token</code> 名称,把生成的<code>token</code>粘贴到<code>secret</code>输入框内.</li></ol><p><img src="'+_+'" alt="创建仓库"><img src="'+y+'" alt="创建仓库"></p></li></ol></li>',1),B=s("p",null,"本地仓库部分",-1),T={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},P=n(`<ol><li><p>创建文件并且进入文件内</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token builtin class-name">test</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
</code></pre></div></li><li><p>初始化文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init 
<span class="token function">pnpm</span> init
</code></pre></div></li><li><p>下载依赖</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue
</code></pre></div><p><img src="`+h+'" alt="创建文件到下载依赖的所有步骤"></p></li><li><p>添加过滤文件 <img src="'+b+`" alt="添加过滤文件"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre></div></li><li><p>添加运行和打包指令</p><p><img src="`+v+`" alt="添加运行和打包指令"></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>运行项目</p><p><img src="`+f+`" alt="运行项目"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dev
</code></pre></div></li><li><p>添加配置文件</p><ol><li>添加<code>config.js</code>配置文件,并添加以下代码</li></ol><p><img src="`+w+`" alt="添加config.js文件"></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Welcome My test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Welcome My test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/test/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>连接仓库和上传文件</p><p><img src="`+x+`" alt="提交代码到远程仓库"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/vhjihuang/test.git  // 此处改为自己的仓库地址
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> <span class="token function">add</span> ./
<span class="token function">git</span> commit -m<span class="token string">&#39;初始化项目&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre></div></li></ol>`,1),V=n('<li><p>添加自动化部署文件</p><ol><li><p>进入代码空间,选择<code>Actions</code> -&gt; 点击左边的<code>New workflow</code> -&gt; 点击<code>Configure</code> -&gt; 从<code>vuepress</code>文档复制的工作流文件粘贴进去 -&gt; 点击右边的<code>Start commit</code> -&gt; 点击<code>commit new file</code></p><ol><li><p>打开相应的页面</p><p><img src="'+j+'" alt="经过的页面"></p></li><li><p>添加部署文件和添加部署代码</p><p><img src="'+N+`" alt="添加文件的页面"></p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.TEST_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre></div></li><li><p>部署成功之后,你本地改完代码,提交到远程仓库后会自动更新你的博客.</p></li></ol></li></ol></li>`,1),C=s("p",null,[s("strong",null,"后续"),a(": 你们可能发现了,我没有配置菜单部分和插件之类的,实际上我对于菜单配置和插件配置有些没弄懂,所以呢,我就没有配置,但是这些配置可以在项目成功上线并且自动化部署后添加上去的,菜单配置之类的可以自己琢磨配置上去,也可以参考其他网友的,或者看官方文档也可以的.")],-1);function G(z,M){const e=o("ExternalLinkIcon");return p(),c("div",null,[E,s("ol",null,[S,s("li",null,[B,s("p",null,[s("a",T,[a("vuepress文档"),l(e)])]),P]),V]),C])}const I=t(q,[["render",G],["__file","buildBlog.html.vue"]]);export{I as default};
