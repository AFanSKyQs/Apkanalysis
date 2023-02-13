<template>
<!--  <img src="./assets/logo.png" alt="Logo">-->
  <!--  <HelloWorld msg="APK在线解析系统"/>-->
<!--  <el-button type="primary">上传APK</el-button>-->
  <div>
    <NavOne/>
    <HomePage/>
    <BaseInfoOne/>
    <Permission/>
    <CertificationAndSDK/>
    <Service/>
    <Behavior/>
    <UploadApk/>
<!--    <Features/>-->
<!--        <Counter />-->
    <!--&lt;!&ndash;    <Video />&ndash;&gt;-->
    <Testimonial/>
    <ClientsLogo/>
    <Footer/>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import NavOne from './components/NavOne.vue'
import CertificationAndSDK from './components/CertificationAndSDK.vue'
import Permission from './components/Permission.vue'
import BaseInfoOne from './components/BaseInfoOne.vue'
import HomePage from './components/HomePage.vue'
import Behavior from './components/Behavior.vue'
import UploadApk from './components/UploadApk.vue'
import Service from './components/Service.vue'
// import HelloWorld from './components/ApkAnalysisHome.vue';
// // import Video from './components/Video';
import Footer from './components/Footer'
import Features from './components/Features'
import Counter from './components/Counter'
import Testimonial from './components/Testimonial'
import ClientsLogo from './components/ClientsLogo'

export default {
  name: 'App',
  components: {
    NavOne,
    HomePage,
    UploadApk,
    Behavior,
    Service,
    BaseInfoOne,
    Permission,
    CertificationAndSDK,
    // // Video,
    // HelloWorld,
    ClientsLogo,
    Testimonial,
    Counter,
    Features,
    Footer
  }
}
</script>

<style>
@import "../src/assets/css/bootstrap.min.css";
@import "../src/assets/css/custom.css";
@import "../src/assets/css/responsive.css";
@import "../src/assets/css/style.css";
@import "../src/assets/css/font-awesome.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

</style>
