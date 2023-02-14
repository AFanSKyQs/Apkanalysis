<template>
  <section class="border-top pt-110 pb-150">
    <div class="card">
      <h2>Upload your Apk Today &<br>Conduct online analysis.</h2>
      <h2>在线上传您的Apk进行各方位分析~</h2>
    </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-10 col-md-12">
                      <div class="download-app-inner text-center">
                          <h2 class="h2">
                          </h2>
                          <a href="#" class="btn">上传APK分析</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
export default {
  name: 'UploadApk'
}
</script>

<style scoped>
.card {
  /*渐变色*/
  /*透明度*/
  opacity: 0.8;
  /*卡片位于屏幕中间*/
  margin: 0 auto;
  width: 800px;
  height: 150px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h2 {
  position: relative;
  z-index: 1;
  color: white;
  font-size: 2em;
  line-height: 1.2em;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 0 20px rgba(62, 234, 208, 0.6);
}

.card::before {
  content: '';
  position: absolute;
  width: 800px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 70%;
  animation: rotBGimg 4s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  /*颜色斜着渐变*/
  background-image: linear-gradient(45deg, rgb(0, 183, 255), rgb(255, 48, 255));
  /*毛玻璃效果*/
  /*background: rgba(255, 255, 255, 0.2);*/
  /*background: #a263ef;*/
;
  inset: 5px;
  border-radius: 15px;
}
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
</style>
