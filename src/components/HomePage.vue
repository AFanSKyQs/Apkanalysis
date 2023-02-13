<template>
  <div class="banner-area-inner">
    <div class="banner-inner-area banner-area1">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="banner-text-inner">
                        <div class="banner-shape-wrap">
                            <div class="banner-shape-inner">
                                <img src="/assets/img/banner/shaps1.png" alt="" class='shape shape1 rotate3d'>
                                <img src="/assets/img/banner/shaps2.png" alt="" class='shape shape2 rotate2d'>
                                <img src="/assets/img/banner/shaps3.png" alt="" class='shape shape3 rotate-2d'>
                                <img src="/assets/img/banner/shaps4.png" alt="" class='shape shape4 rotate3d'>
                                <img src="/assets/img/banner/shaps5.png" alt="" class='shape shape5 rotate2d'>
                                <img src="/assets/img/banner/shaps6.png" alt="" class='shape shape6 rotate-2d'>
                                <img src="/assets/img/banner/shaps7.png" alt="" class='shape shape7 rotate3d'>
                            </div>
                        </div>
                      <el-upload
                        class="upload-demo"
                        drag
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        multiple
                        ref="uploadRef"
                        :auto-upload="false"
                      >
                        <template #trigger>
                          <el-button type="primary">select file</el-button>
                        </template>

                        <el-button class="ml-3" type="success" @click="submitUpload">
                          upload to server
                        </el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            只能上传apk文件，且不超过300MB
                          </div>
                        </template>
                      </el-upload>
                        <h2>Apk在线分析系统</h2>
                        <p>上传你的apk包即可在线解析应用的各种信息，基本信息、权限信息、调证信息、第三方SDK、Akp服务器、包、以及行为分析等。</p>
                        <a href="#" class="btn">上传 APK</a>
                        <a href="#" class="btn">更多相关</a>
                    </div>
                    <!-- banner text -->
                </div>
                <div class="col-lg-5 offset-lg-1 col-md-4 offse-xl-2">
                    <!-- banner image-->
                    <div class="banner-image">
                        <img src="/assets/img/banner/mockup.png" alt="">
                    </div>
                    <!--End of banner image-->
                </div>
            </div>
        </div>
    </div>
      </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'
const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>

</style>
