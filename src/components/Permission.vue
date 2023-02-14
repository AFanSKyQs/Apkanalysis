<template>
  <section class="border" id='-'>
  </section>
  <section class="pt-120 pb-120" id='Permission'>
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-5">
                <div class="user-interact-inner">
                  <div class="user-interact-image type2">
                    <img src="/assets/img/feature/user-interact2.png"  alt="">
                  </div>
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
                <!--End of user ineract text -->
            </div>
            <div class="col-lg-7 col-sm-7">
              <div class="container">
                <div class="box">
                  <span class="title">APK权限信息分析</span>
                  <div>
                    <strong><ul>
                      应用所需的权限信息分析<br>包括
                      <a href="https://blog.csdn.net/hanhan1016/article/details/105863586" target="_blank" rel="noopener">普通权限、敏感权限、危险权限</a><br>分析结果包括直观比例的
                      <a href="http://charts.jiaminghi.com/example/pie.html" target="_blank" rel="noopener">饼装图展示</a>
                    </ul>
                      <p>
                        各权限信息，包括权限名称、权限描述、权限类型、权限危险等级、权限所属组等信息 ...
                      </p>
                      <a href="#" class="btn">Get Started</a></strong>
                    <!--                        <p>0000 000 000 0000</p>-->
                    <!--                        <span>VALID</span> <span>01/28</span>-->
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
  name: 'Permission'
}
</script>

<style scoped>
.loader {
  position: relative;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loader::before {
  content: '';
  position: absolute;
  inset: 20px;
  background: transparent;
  border: 1px dashed#444;
  border-radius: 50%;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed#444;
  box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
  inset 5px 5px 35px rgba(0,0,0,0.25);
}

.loader span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: radar81 2s linear infinite;
  border-top: 1px dashed #fff;
}

.loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: seagreen;
  transform-origin: top left;
  transform: rotate(-55deg);
  filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
}

@keyframes radar81 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
/*two*/
.container {
  margin-top: 40px;
  z-index: 10;
 position: relative;
  font-family: sans-serif;
}
.container::before, .container::after {
  content: "";
  background-color: rgba(250, 232, 112, 0.3);
  position: absolute;
}

.container::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.container::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
}

.container .box {
  /*width: 11.875em;*/
  width: 30em;
  /*height: 15.875em;*/
  height: auto;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
  transition: all ease .3s;
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box .title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: .1em
}

.container .box div strong {
  display: block;
  margin-bottom: .5rem;
}

.container .box div p {
  margin: 0;
  font-size: .9em;
  font-weight: 300;
  letter-spacing: .1em;
}

.container .box div span {
  font-size: .7rem;
  font-weight: 300;
}

.container .box div span:nth-child(3) {
  font-weight: 500;
  margin-right: .2rem;
}

.container .box:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
</style>
