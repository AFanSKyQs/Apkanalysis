<template>
  <section class="border" id='-'>
  </section>
  <section class="bg-2 pt-120 pb-120" id="baseInfoOne">
      <div class="container">
          <div class="row">
              <div class="col-lg-7 col-sm-7">
                <div class="user-interact-inner">
                  <div class="card">
                    <div class="align">
                      <span class="red"></span>
                      <span class="yellow"></span>
                      <span class="green"></span>
                    </div>
                    <h1>APK基本信息解析</h1>
                    <p>
                      Apk基本信息分析，包括<a href="https://baike.baidu.com/item/MD5/212708" target="_blank" rel="noopener">MD5</a>、
                      <a href="https://blog.csdn.net/u011583927/article/details/80905740" target="_blank" rel="noopener">SHA256</a>、文件大小 、包名、版本信息 、程序入口等基本信息 ...
                      <br>
                      <a href="#" class="btn">Get Started</a>
                    </p>
                  </div>
                  <br>
                </div>
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
            <div class="col-lg-5 col-sm-5">
              <div class="user-interact-image">
                <img src="/assets/img/feature/user-interact.png"  alt="">
              </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        name: 'BaseInfoOne'
    }
</script>

<style scoped>
.card {
  z-index: 20;
  margin-top: 8rem;
  width: 580px;
  height: auto;
  padding: 1.5rem;
  background: rgba(198, 198, 198, 0.34);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  position: absolute;
  border-bottom: 3px solid rgba(255, 255, 255, 0.440);
  border-left: 2px  rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
  transform: skewX(12deg);
  transition: .4s;
  overflow: hidden;
  color: white;
  align-items: center;
  justify-content: center;
}

.card:hover {
  height: auto;
  transform: skew(0deg);
}

.align {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
}

.red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff605c;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.yellow {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffbd44;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.green {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ca4e;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
}

.card h1 {
  text-align: center;
  margin: 1.3rem;
  color: rgb(218, 244, 237);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}
</style>
