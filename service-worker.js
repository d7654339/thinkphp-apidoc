if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-17f866c8"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.8fb7ded9.css",revision:"e8b3b4711d7fa651b4c038c00e5d9377"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/25.d766208b.js",revision:"e2a242a0b496d8dac6cac9ae6521cba3"},{url:"assets/js/26.3a9ebf40.js",revision:"3d45621765a99b88f1e45b7604f405d4"},{url:"assets/js/27.9e9ce978.js",revision:"6be9d246d886661024172e7ba8b73aac"},{url:"assets/js/28.b8ce3421.js",revision:"dadb1c0e1558db81b72f7ca4e5a9c3c8"},{url:"assets/js/29.14f420d6.js",revision:"217d48ce7dd0a4f29a4ed0f6ba72bc66"},{url:"assets/js/30.7027b450.js",revision:"a2b6b883dc25bef5405d74252235225b"},{url:"assets/js/31.fc32185b.js",revision:"b1cb962fd56ad4c7c5a2fe09d37f2194"},{url:"assets/js/app.531aed97.js",revision:"c3493c7491db872700f08e4394860467"},{url:"assets/js/layout-Blog.be6ac3c9.js",revision:"3cef0105eed9c1c535ae90872ba503d3"},{url:"assets/js/layout-Layout.b2fd99fb.js",revision:"cf3b10420a7f411965e770c295708132"},{url:"assets/js/layout-NotFound.ca53aab1.js",revision:"d0d07d66379a2033ac5da1f22ce96ad7"},{url:"assets/js/layout-Slide.5ca006f3.js",revision:"c7ba1bf1afc3830bd17862d92fac2df5"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.bf8f12f1.js",revision:"d9a822ca331cd14281eda4aba79a5381"},{url:"assets/js/page-介绍.b49089ea.js",revision:"4815d81c9e931f7166fb7e0225efc3a2"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.7da05120.js",revision:"a18784c43168a0a498e61d7f6cdeaa80"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.f2a77dab.js",revision:"33a81b95f0bfc8909403cb30723e743b"},{url:"assets/js/page-功能使用.1935bc2f.js",revision:"e458d7e58aaf7fc6cb4d4bde9a376527"},{url:"assets/js/page-安装更新.2ddf8ccd.js",revision:"cbe2eebf5ef32819210983a54b180f95"},{url:"assets/js/page-常见问题.2eb63195.js",revision:"a98fc01b29adf4c25474ab74c183557d"},{url:"assets/js/page-指南.c83d4fdf.js",revision:"6a40be21d46ba3c6105b7124abe209c0"},{url:"assets/js/page-教程.fbe1a1e5.js",revision:"e90724c118672a3d614aeaef03e0cf84"},{url:"assets/js/page-更新日志.fe927a08.js",revision:"c527872b0fbbb1189f20cf2e12c25492"},{url:"assets/js/page-编写注释.3e93c8b7.js",revision:"91f7cabe5987a06f084fec08d5a933b5"},{url:"assets/js/page-配置参数.41123d92.js",revision:"6612c3e1df4c80c5fdd9d5504279b513"},{url:"assets/js/page-页面操作.1107d569.js",revision:"04156b2a6e282f855104d2e8d2cb73da"},{url:"assets/js/vendors~flowchart.86a6bda5.js",revision:"9580183907e8ec757a1fd1b34424c503"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4b289c07.js",revision:"b48d2b6d81a3b7d2b9fc5ecaacceac97"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.968742dd.js",revision:"f073ebdbcbf7af854992ba4eaaa40213"},{url:"assets/js/vendors~layout-Layout.05741ec3.js",revision:"697cec3218c2757e5d6a9be799efe071"},{url:"assets/js/vendors~photo-swipe.2345e543.js",revision:"9d8911cbe599883135f8197fe8e123b5"},{url:"assets/js/vendors~reveal.28c9469b.js",revision:"73be8ed42521116c82a3d3c5a1bacf09"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"7050f6fcb600f97fc20fca70d3e67bac"},{url:"config/index.html",revision:"2e179486dee206ad75ad06acabbdbb29"},{url:"course/createTpAndInstall/index.html",revision:"c13faa030773be888804159bca281c83"},{url:"course/githubActionsDeploy/index.html",revision:"046cebd7949fedba2edb7152848782c9"},{url:"course/index.html",revision:"4e249e96d2d7f619d2d2afebe9cce274"},{url:"course/phpStudyInstall/index.html",revision:"3d4494d42c87f8c2c1b8f194638cd0f5"},{url:"guide/changelog/index.html",revision:"9733a5b0d71d4ebd2be33865192b9cbf"},{url:"guide/index.html",revision:"d15f821f06e53b5521ad976b4b17ff36"},{url:"guide/install/index.html",revision:"035922c6e923c36230ca3de3694ce84f"},{url:"index.html",revision:"a26d5eb5400cf4e76861c9124c516160"},{url:"use/actions/index.html",revision:"f5f927d44c9f7e868dac45af1b9e9e68"},{url:"use/function/index.html",revision:"6bb32186ee689ebcf288cc4c5b4059e0"},{url:"use/help/index.html",revision:"2c66852ffd9ae2522a090a0edfc110ca"},{url:"use/index.html",revision:"49e3c193567cc0125ccd8ee0dada10ee"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"dc6db87c76980646dd89d801e7d2fad3"},{url:"images/apidoc-api-dictionary-demo.png",revision:"e2c83946e7669a4b2943d7e505bd449c"},{url:"images/apidoc-api-model-demo.png",revision:"4920f55448d8f0ff7dd34cc7b1a234cc"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"f20c96e4e65d0f325d70313537a3e38a"},{url:"images/apidoc-api-server-demo.png",revision:"0d04ef74eab3027a652f91c2b8781284"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"db279004724dc47565acee78b9edf013"},{url:"images/apidoc-demo-md.png",revision:"b7f978a7285fcc3173dcb8b5faff6b08"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
