<template>
  <section class="border" id='-'>
  </section>
  <section class="pb-90" id='Service'>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                      <h2>APK服务器信息 (IP、Address)</h2>
                      <p>应用涉及的IP地址信息，包括IP、域名、URL、地址，获取对应的归属地<br>通过正则匹配IP域名分析<a href="https://blog.csdn.net/solo_ws/article/details/77095341" target="_blank" rel="noopener">可疑服务器地址</a>
                        ，将地址信息绘制到地图上</p>
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                  <div class="price-nav-wrap">
                      <!-- price nav -->
                      <div class="price--nav-inner">
                          <nav>
                              <div @click="handleToggle" class="nav info-tabs">
                                  <a :class="`price--nav-item ${month ? 'active show' : ''}`" id="nav-contact-tab" data-toggle="tab" href="#month">Monthly</a>
                                  <a :class="`price--nav-item ${year ? 'active show' : ''}`" href="#year">Yearly</a>
                              </div>
                          </nav>
                      </div>
                      <!-- End of price nav -->
                  </div>
                  <!-- nav tab content -->
                  <div class="tab-content price-content">
                      <div :class="`tab-pane fade ${month ? 'active show' : ''}`" role="tabpanel">
                          <div class="row">
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan text-center">
                                      <div class="single-price-top">
                                          <h4>Standard</h4>
                                          <span>$20</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan active text-center">
                                      <div class="single-price-top">
                                          <h4>Business</h4>
                                          <span>$30</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan text-center">
                                      <div class="single-price-top">
                                          <h4>Professional</h4>
                                          <span>$40</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                          </div>
                      </div>
                      <div :class="`tab-pane fade ${year ? 'active show' : ''}`" role="tabpanel">
                          <div class="row">
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan text-center">
                                      <div class="single-price-top">
                                          <h4>Standard</h4>
                                          <span>$200</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan active text-center">
                                      <div class="single-price-top">
                                          <h4>Business</h4>
                                          <span>$300</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-times" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                              <div class="col-md-6 col-lg-4">
                                  <!--Single price plan -->
                                  <div class="single-price-plan text-center">
                                      <div class="single-price-top">
                                          <h4>Professional</h4>
                                          <span>$400</span>
                                      </div>
                                      <div class="single-price-body">
                                          <div class="price-list">
                                              <ul>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 pages
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      500 gb storage
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      10 sdd Database
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      Free coustom domain
                                                  </li>
                                                  <li>
                                                      <span><i class="fa fa-check" aria-hidden="true"></i></span>
                                                      24/7 free support
                                                  </li>
                                              </ul>
                                          </div>
                                          <a href="#" class="btn">Get Started</a>
                                      </div>
                                  </div>
                                  <!--end of Single price plan -->
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- End of nav tab content -->
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Service',
  data () {
    return {
      month: true,
      year: false
    }
  },
  methods: {

    handleToggle () {
      const { month } = this
      const { year } = this

      if (month) {
        this.year = true
        this.month = false
      }
      if (year) {
        this.year = false
        this.month = true
      }
    }
  }
}
</script>

<style scoped>

</style>
