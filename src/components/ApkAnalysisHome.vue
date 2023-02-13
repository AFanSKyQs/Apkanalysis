<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      上传你的apk包即可在线解析应用的各种信息<br>包括应用的基本信息、权限、签名、dex、资源、so等等。
    </p>
    <h3> APK基本信息解析 </h3>
    <ul>
      Apk基本信息分析，包括<a href="https://zh.wikipedia.org/zh-cn/MD5" target="_blank" rel="noopener">MD5</a>、
      <a href="https://blog.csdn.net/u011583927/article/details/80905740" target="_blank" rel="noopener">SHA256</a>、文件大小 、包名、版本信息 、程序入口等基本信息 ...
    </ul>
    <h3>APK权限信息分析</h3>
    <ul>
<!--      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
<!--      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
<!--      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
<!--      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
<!--      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
      应用所需的权限信息分析，包括
      <a href="https://blog.csdn.net/hanhan1016/article/details/105863586" target="_blank" rel="noopener">普通权限、敏感权限、危险权限</a><br>分析结果包括直观比例的
      <a href="http://charts.jiaminghi.com/example/pie.html" target="_blank" rel="noopener">饼装图</a>展示
    </ul>
    <h3>APK调证信息、第三方SDK</h3>
    <ul>
      <a href="https://www.jianshu.com/p/fb23ee3066f9" target="_blank" rel="noopener">第三方SDK</a>数据、APK调证信息，包括调证的方法、调证的参数、调证的返回值等...
<!--      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
<!--      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
<!--      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
<!--      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
    </ul>
    <h3>APK服务器信息 (IP、Address)</h3>
    <ul>
      应用涉及的IP地址信息，包括IP、域名、URL、地址，获取对应的归属地<br>通过正则匹配IP域名分析<a href="https://blog.csdn.net/solo_ws/article/details/77095341" target="_blank" rel="noopener">可疑服务器地址</a>
      ，将地址信息绘制到地图上
    </ul>
    <h3>APK行为分析、包信息</h3>
    <ul>
      包括Apk所涉及的电话、邮箱，获取通讯录、获取短信的<a href="https://blog.csdn.net/weiwan721/article/details/22932275" target="_blank" rel="noopener">行为分析</a>
      <br>打包商、打包id、<a href="https://blog.csdn.net/zhangge3663/article/details/120128077" target="_blank" rel="noopener">加固方式</a>、
      <a href="https://blog.csdn.net/qq409732112/article/details/109382336" target="_blank" rel="noopener">脱壳</a>后文件下载等...
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
