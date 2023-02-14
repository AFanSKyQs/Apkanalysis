<template>
  <header class="header">
          <!-- Start Header Navbar-->
      <div :class="`main-header ${sticky ? 'sticky fadeInDown' : ''}`">
          <div class="main-menu-wrap">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                          <!-- Logo -->
                          <div class="logo">
                            <li><a href="#app">
                              <img src="/assets/img/logo.png" alt="ApkHome">
<!--                              <div class="spinner">-->
<!--                                <div class="Spinner"></div>-->
<!--                              </div>-->
                            </a></li>
<!--                              <nuxt-link to="/">-->
<!--                              </nuxt-link>-->
                          </div>
                          <!-- End of Logo -->
                      </div>
                      <div class="col-xl-8 col-lg-6 col-md-4 col-6 menu-button">
                          <div class="menu--inner-area clearfix">
                              <div class="menu-wraper">
                                  <nav>
                                      <!-- Header-menu -->
                                      <div class="header-menu dosis">
<!--                                        <div id="menu-button" class="">-->
<!--                                          <i class="fa fa-bars"></i>-->
<!--                                        </div>-->
                                          <ul class="main-nav">
<!--                                              <li class="active"><nuxt-link to="/">Home</nuxt-link>-->
<!--                                                  <ul>-->
<!--                                                      <li class="active"><nuxt-link to="/">Home 1</nuxt-link></li>-->
<!--                                                      <li><nuxt-link to="/index2">Home 2</nuxt-link></li>-->
<!--                                                  </ul>-->
<!--                                              </li>-->
                                              <li><a href="#baseInfoOne" class="card">基本信息分析</a></li>
                                              <li><a href="#Permission" class="card">权限分析</a>
                                                <ul>
                                                  <li><a href="https://blog.csdn.net/hanhan1016/article/details/105863586" target="_blank">普通权限<br>敏感权限<br>危险权限</a></li>
                                                </ul>
                                              </li>
                                              <li><a href="#CertificationAndSDK" class="card">调证和SDK</a></li>
                                            <li><a href="#Service" class="card">服务器信息</a></li>
                                            <li><a href="#Behavior" class="card">行为分析</a></li>
                                              <li><a href="#" class="card">More</a>
                                                <ul>
                                                  <li><a href="#blog">行为分析</a></li>
                                                  <li><a href="#blog">行为分析</a></li>
                                                </ul>
<!--                                                  <ul>-->
<!--                                                      <li><nuxt-link to="/blog">Blog Posts</nuxt-link></li>-->
<!--                                                      <li><nuxt-link to="/blog-details">single Post</nuxt-link></li>-->
<!--                                                  </ul>-->
                                              </li>
                                          </ul>
                                      </div>
                                      <!-- End of Header-menu -->
                                  </nav>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-1 col-md-4 col-sm-5 d-md-block d-none">
                          <div class="urgent-call text-right">
                             <a href="#" class="btn">HOME</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- End Header Navbar-->
  </header>
</template>

<script>
    export default {
      name: 'NavOne',
      data () {
        return {
          sticky: false
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)

        this.mobileMenu()
      },

      methods: {

        handleScroll () {
          if (window.scrollY > 70) {
            this.sticky = true
          } else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

        mobileMenu () {
            // Mobile Menu Toggle
            const mainNavToggler = document.querySelector('#menu-button')
            const mainNav = document.querySelector('.main-nav')

            mainNavToggler.addEventListener('click', () => {
                // mainNavToggler.classList.add('menu-opened');
              // eslint-disable-next-line eqeqeq
                mainNav.style.display = ((mainNav.style.display !== 'block' ? 'block' : 'none'))
            })
        }

      }
    }
</script>

<style scoped>
.spinner {
  background-image: linear-gradient(#acb6e5 35%, #86fde8);
  width: 50px;
  height: 50px;
  animation: spinning21 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
  0px 5px 20px 0px rgb(0, 225, 255);
}

.Spinner {
  background-color: rgb(36, 36, 36);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning21 {
  to {
    transform: rotate(360deg);
  }
}
/*分隔*/
.card {
  /*字体大小*/
  font-size: 20px;
  display: flex;
  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
  width: 150px;
  height: 50px;
  padding: 15px;
  border-radius: 3rem;
  overflow: visible;
  background: #f7ba2b;
  background: var(--background);
  position: relative;
  z-index: 1;
}

.card::after {
  position: absolute;
  content: "";
  top: 30px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(0.8);
  filter: blur(25px);
  background: #f7ba2b;
  background: var(--background);
  transition: opacity .5s;
}

.card-info {
  --color: #181818;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: .7rem;
}

.card .title {
  font-weight: bold;
  letter-spacing: .1em;
}

/*Hover*/
.card:hover::after {
  opacity: 0;
}

.card:hover .card-info {
  color: #f7ba2b;
  transition: color 1s;
}

</style>
