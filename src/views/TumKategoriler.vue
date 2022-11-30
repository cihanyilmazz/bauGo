<template>
  <div class="main-content">
    <div class="container">
          <h2 class="gradient-color mb-4">Tüm Kategoriler</h2>
        <div>
     <div>
              <div class="row mb-3 md-lg-2">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                     <div class="search-input position-relative form-group">
                        <b-form-input class="mr-sm-2 w-100" placeholder="Arama..."></b-form-input>
                        <button class="btn"><i class="ri-search-line"></i></button>
                     </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <b-form-group>
                            <template>
                              <div>
                                <multiselect placeholder="Sırala"
                                  v-model="selected"
                                  :options="options1" :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false">
                                  <span slot="noResult">Sonuç bulunamadı</span>
                                </multiselect>
                              </div>
                            </template>
                      </b-form-group>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <b-form-group>
                            <template>
                              <div>
                                <multiselect placeholder="Eğitmen"
                                  v-model="selected"
                                  :options="options1" :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false">
                                  <span slot="noResult">Sonuç bulunamadı</span>
                                </multiselect>
                              </div>
                            </template>
                      </b-form-group>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <button type="button" class="btn d-flex btn-link btn-block justify-content-center">Sıfırla</button>
                  </div>
               </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage6 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage6 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                       <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
                </div>
            </div>
            <!-- row end -->
             <div class="overflow-auto mt-5">
                   <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router align="center" 
                   first-text="" prev-text="" next-text="" last-text=""></b-pagination-nav>
              </div>
          </div>
</div>
  
    </div>
      <!-- Modal -->
   <shareModal>
   </shareModal> 
  </div>
</template>

<script>
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
  // import StarRating from "vue-star-rating";
  import ShareModal from "../components/modal/shareModal";
export default {
  name: 'Tüm Kategoriler',
  components: { 
  //  StarRating,
   ShareModal,
   },
   data() {
      return {
         favCheck:false,
        favVal:false,
           selected: null,
      options1: ['Seçenek 1', 'Seçenek 2', 'Seçenek 3'],
        value: 32.333333333,
        CardImage1: "https://picsum.photos/600/300/?image=27",
        CardImage2: "https://picsum.photos/600/300/?image=22",
        CardImage3: "https://picsum.photos/600/300/?image=23",
        CardImage4: "https://picsum.photos/600/300/?image=24",
        CardImage5: "https://picsum.photos/600/300/?image=25",
        CardImage6: "https://picsum.photos/600/300/?image=26",
        settings: {
      "dots": true,
      "infinite": false,
      "speed": 500,
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    }
      }
    },
    methods:{
         favEkle(){
      this.favCheck = true
      this.favVal = false
      var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = true
         }, 500);
    },
    favCikar(){
      this.favVal = true
         this.favCheck = true
       var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = false
         }, 500);
    },
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    } 
  }
</script>