<template>
  <div>
  <section class="pb-110" id='features'>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                      <h2>APK基本信息</h2>
                      <p>Apk基本信息分析，包括 MD5、 SHA256 、文件大小 、包名、版本信息 、程序入口等基本信息 ...</p>
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12">
                  <div class="feature-carousel owl-carousel">
                    <swiper :options="swiperOptions">
<!--                      <swiper-slide>-->
<!--                      &lt;!&ndash; single feature inner &ndash;&gt;-->
<!--                      <div class="single-feature-inner text-center">-->
<!--&lt;!&ndash;                          <div class="feature-icon"><img src="/assets/img/icons/project-management.svg" class="svg" alt=""></div>&ndash;&gt;-->
<!--                          <h5>New Artwork<br> Unveiled</h5>-->
<!--                          <p>There are many variations of passages of lorem Ipsum but majority have suffered.</p>-->
<!--                      </div>-->
<!--                      &lt;!&ndash; End of single feature inner &ndash;&gt;-->
<!--                      </swiper-slide>-->

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
<!--                          <div class="feature-icon"><img src="/assets/img/icons/solution.svg" class="svg" alt=""></div>-->
                          <h5>Company Growth<br> Strategy</h5>
                          <p>There are many variations of passages of lorem Ipsum but majority have suffered.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
<!--                          <div class="feature-icon"><img src="/assets/img/icons/planning.svg" class="svg" alt=""></div>-->
                          <h5>Perfect Application Intergration</h5>
                          <p>There are many variations of passages of lorem Ipsum but majority have suffered.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
<!--                          <div class="feature-icon"><img src="/assets/img/icons/goal.svg" class="svg" alt=""></div>-->
                          <h5>Creative App<br>Display</h5>
                          <p>There are many variations of passages of lorem Ipsum but majority have suffered.</p>
                      </div><!-- End of single feature inner -->
                      </swiper-slide>
<!--                      <div class="swiper-pagination" slot="pagination"></div>-->
                      <div class="swiper-pagination"><slot name="pagination"></slot></div>
                    </swiper>
                  </div><!--/.feature-carousel-->
              </div><!--/.col-->
          </div><!--/.row-->
      </div><!--/.container-->
  </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive /* rest swiper/vue API... */ } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

  export default {
    name: 'Features',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data () {
      return {
        swiperOptions: {
          slidesPerView: 3,
          loop: true,
          speed: 1000,
          spaceBetween: 30,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
