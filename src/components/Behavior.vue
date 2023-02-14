<template>
  <section class="border-top pt-115 pb-80" id='Behavior'>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 col-md-12">
                      <!-- section title -->
                      <div class="section-title text-center">
                          <h2>APK行为分析、包信息</h2>
                          <p>包括Apk所涉及的电话、邮箱，获取通讯录、获取短信的<a href="https://blog.csdn.net/weiwan721/article/details/22932275" target="_blank" rel="noopener">行为分析</a>
                            <br>打包商、打包id、<a href="https://blog.csdn.net/zhangge3663/article/details/120128077" target="_blank" rel="noopener">加固方式</a>、
                            <a href="https://blog.csdn.net/qq409732112/article/details/109382336" target="_blank" rel="noopener">脱壳</a>后文件下载等...</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-4">
                      <div class="single-blog-inner">
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog1.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>日1</span>月1</p>
                              </div>
                          </div>
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>1</span> Comment</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">预留信息位置1</nuxt-link></h3>
                                  </div>
                                  <p>预留信息位置1的描述</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog2.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>日2</span>月2</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>2</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">预留信息位置2</nuxt-link></h3>
                                  </div>
                                  <p>预留信息位置2的描述</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog3.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>日3</span>月3</p>
                              </div>
                          </div>
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>5</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">预留信息位置3</nuxt-link></h3>
                                  </div>
                                  <p>预留信息位置3的描述</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: 'Behavior'
    }
</script>

<style scoped>

</style>
