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
                          <div class="el-upload__text">
                            选择上传文件或者 <em>拖入文件到此处</em>
                          </div>
                          <el-button clss="mb-4" type="primary" plain>选择上传APK <em>(小于300MB)</em></el-button>
                          <div class="loadingspinner">
                            <div id="square1"></div>
                            <div id="square2"></div>
                            <div id="square3"></div>
                            <div id="square4"></div>
                            <div id="square5"></div>
                          </div>
<!--                          <br>-->
<!--                          <el-icon class="el-icon&#45;&#45;upload"><upload-filled /></el-icon>-->
<!--                          <br>-->
<!--                          <div class="el-upload__tip">-->
<!--                            只能上传apk文件，且大小不超过300MB-->
<!--                          </div>-->
                        </template>
                        <br>
<!--                        <button >-->
<!--                        </button>-->
                        <el-button @click="submitUpload">
                          <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                              </svg>
                            </div>
                          </div>
                          <span>
                            开始上传
                          </span>
                        </el-button>
                      </el-upload>
                        <h2><br>Apk在线分析系统</h2>
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
<script setup lang="ts">
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'
const uploadRef = ref<UploadInstance>()
const submitUpload = () => {
  uploadRef.value?.submit()
}
</script>

<style scoped>
.loadingspinner {
  --square: 26px;
  --offset: 30px;
  --duration: 2.4s;
  --delay: 0.2s;
  --timing-function: ease-in-out;
  --in-duration: 0.4s;
  --in-delay: 0.1s;
  --in-timing-function: ease-out;
  width: calc( 3 * var(--offset) + var(--square));
  height: calc( 2 * var(--offset) + var(--square));
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
}

.loadingspinner div {
  display: inline-block;
  background: darkorange;
  /*background: var(--text-color);*/
  /*box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);*/
  border: none;
  border-radius: 2px;
  width: var(--square);
  height: var(--square);
  position: absolute;
  padding: 0px;
  margin: 0px;
  font-size: 6pt;
  color: black;
}

.loadingspinner #square1 {
  left: calc( 0 * var(--offset) );
  top: calc( 0 * var(--offset) );
  animation: square1 var(--duration) var(--delay) var(--timing-function) infinite,
  squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square2 {
  left: calc( 0 * var(--offset) );
  top: calc( 1 * var(--offset) );
  animation: square2 var(--duration) var(--delay) var(--timing-function) infinite,
  squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square3 {
  left: calc( 1 * var(--offset) );
  top: calc( 1 * var(--offset) );
  animation: square3 var(--duration) var(--delay) var(--timing-function) infinite,
  squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square4 {
  left: calc( 2 * var(--offset) );
  top: calc( 1 * var(--offset) );
  animation: square4 var(--duration) var(--delay) var(--timing-function) infinite,
  squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
}

.loadingspinner #square5 {
  left: calc( 3 * var(--offset) );
  top: calc( 1 * var(--offset) );
  animation: square5 var(--duration) var(--delay) var(--timing-function) infinite,
  squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
}

@keyframes square1 {
  0% {
    left: calc( 0 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  8.333% {
    left: calc( 0 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  100% {
    left: calc( 0 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }
}

@keyframes square2 {
  0% {
    left: calc( 0 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  8.333% {
    left: calc( 0 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  16.67% {
    left: calc( 1 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  25.00% {
    left: calc( 1 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  83.33% {
    left: calc( 1 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  91.67% {
    left: calc( 1 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  100% {
    left: calc( 0 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }
}

@keyframes square3 {
  0%,100% {
    left: calc( 1 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  16.67% {
    left: calc( 1 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  25.00% {
    left: calc( 1 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  33.33% {
    left: calc( 2 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  41.67% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  66.67% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  75.00% {
    left: calc( 2 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  83.33% {
    left: calc( 1 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  91.67% {
    left: calc( 1 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }
}

@keyframes square4 {
  0% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  33.33% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  41.67% {
    left: calc( 2 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  50.00% {
    left: calc( 3 * var(--offset) );
    top: calc( 2 * var(--offset) );
  }

  58.33% {
    left: calc( 3 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  100% {
    left: calc( 3 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }
}

@keyframes square5 {
  0% {
    left: calc( 3 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  50.00% {
    left: calc( 3 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  58.33% {
    left: calc( 3 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  66.67% {
    left: calc( 2 * var(--offset) );
    top: calc( 0 * var(--offset) );
  }

  75.00% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }

  100% {
    left: calc( 2 * var(--offset) );
    top: calc( 1 * var(--offset) );
  }
}

@keyframes squarefadein {
  0% {
    transform: scale(0.75);
    opacity: 0.0;
  }

  100% {
    transform: scale(1.0);
    opacity: 1.0;
  }
}
/*分隔*/
button {
  margin: 0 auto;
  font-family: inherit;
  font-size: 18px;
  background: #48de69;
  color: rgb(255, 255, 255);
  padding: 0.5em 1.5em 0.5em 1.5em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.6em;
  /*transition: all 0.3s ease-in-out;*/
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(1.2em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}
</style>
