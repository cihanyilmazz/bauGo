<template>
  <div class="main-content">
    <div class="container">
      <form @submit.stop.prevent="onSubmit">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="sidebar">
              <div class="text-center text-sm-left text-md-center"> 
             <div class="d-flex justify-content-center flex-column place-items-center">
               <div class="text-center">
                 <div class="profile-image-wrapper mb-4">
                  <div
                    class="profile-image m-auto position-relative rounded-circle bg-image"
                    style="background-image: url(http://ui.ubit.com.tr/profile-picture.jpg);"
                  >
                   <!-- Gostermek icin d-flex eklenmeli -->
                   <div class="spinner over bg-transparent d-none">
                        <b-spinner
                          label="Spinning"
                          class="brand-color">
                        </b-spinner>
                   </div>
                  </div>
                </div>
               </div>
               <div class="text-center mw-100">
                <div class="profile-info mb-4">
                  <div
                    class="profile-name text-capitalize text-truncate h4 mb-1"
                  >
                    John Doe
                  </div>
                  <div
                    class="color-second text-capitalize text-truncate font-weight-normal h4 mb-0"
                  >
                   Bilgisayar Mühendisi
                  </div>
                </div>
               </div>
               <div class="d-flex d-md-inline-block text-left mw-100">
              <div class="mt-2 pr-5 pr-md-0">
                  <div class="mb-2">
                    <i class="ri-star-line mr-2 align-bottom top-minus-1"></i
                    >4,7 Eğitmen Puanı
                  </div>
                  <div class="mb-2">
                    <i class="ri-award-line mr-2 align-bottom top-minus-1"></i
                    >1.997 Yorum
                  </div>
                  <div class="mb-2">
                    <i class="ri-user-2-line mr-2 align-bottom top-minus-1"></i
                    >26.935 Öğrenci
                  </div>
                  <div class="mb-2">
                    <i class="ri-video-line mr-2 align-bottom top-minus-1"></i
                    >23 Kurs
                  </div>
                </div>
              <div class="mt-2 mt-md-4 pt-0 pt-md-2 pl-5 pl-md-0">
                  <div class="mb-2">
                    <a href="#" target="blank">
                      <i class="ri-link-m mr-2 align-bottom top-minus-1"></i>Website
                    </a>
                  </div>
                  <div class="mb-2">
                    <a href="#" target="blank" class="social-media-link facebook-color">
                      <i class="ri-facebook-fill mr-2 align-bottom top-minus-1 facebook-color"></i><span>Facebook</span>
                    </a>
                  </div>
                   <div class="mb-2">
                    <a href="#" target="blank" class="social-media-link linkedin-color">
                      <i class="ri-linkedin-fill mr-2 align-bottom top-minus-1 linkedin-color"></i><span>Linkedin</span>
                    </a>
                  </div>
                   <div class="mb-2">
                    <a href="#" target="blank" class="social-media-link twitter-color">
                      <i class="ri-twitter-fill mr-2 align-bottom top-minus-1 twitter-color"></i><span>Twitter</span>
                    </a>
                  </div>
                 
                </div>
               </div>

             </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8 col-lg-9 mt-5 mt-md-0">
            <div class="content">
              <h2 class="gradient-color mb-4">Profil</h2>
            <div class="mb-4">
                <h3>Hakkımda</h3>
              <p>2008 yılından itibaren yazılım teknolojileriyle ilgilenmekteyim. Ağırlıklı olarak .Net teknolojileri üzerine projeler geliştiriyorum.</p>
              <p>freelance ve proje bazlı olarak çalışmaktayım.</p>
              <p>İkinci üniversite olarak yönetim bilişim sistemleri mezunuyum.</p>
              <p>Yazılım teknolojileri ilgili her konuyu merak ediyor ve  bilgi sahibi olmaya çalışıyorum. Sıkı bir medium okuyucusuyum.</p>
              <p>Daha çok üzerinde durduğum teknolojiler; Asp Net Core,Asp Net Mvc, Web Api, Azure, Angular,Native Android,Docker, DevOps..</p>
              <p>Boş zamanlarımda native android uygulamalar üzerine geliştirmeler yapıyorum.</p>
              <p>2017 yılından itibaren Ankarada yaşamaktayım.</p>
            </div>
               <div class="pt-4">
            <h3 class="mb-4 pr-5">Kurslarım <span class="color-second">(25)</span></h3>
            <VueSlickCarousel v-bind="settings">
             <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
          <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
            <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
             <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
          <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
            <div class="mb-4">
              <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template slot="button-content">
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                             <b-dropdown-item href="#">
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
                          <b class="pt-2 mr-2 h4 mb-0 color-yellow">4.5</b>
                          <star-rating
                            :rating="4.5"
                            :round-start-rating="false"
                            :read-only="true"
                            :star-points="[
                              23,
                              2,
                              14,
                              17,
                              0,
                              19,
                              10,
                              34,
                              7,
                              50,
                              23,
                              43,
                              38,
                              50,
                              36,
                              34,
                              46,
                              19,
                              31,
                              17,
                            ]"
                          ></star-rating>
                          <div class="pt-1 ml-2">(379)</div>
                       </div>
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <!-- <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div> -->
                        </div>
                      </article>
            </div>
          </VueSlickCarousel>
          </div>
              
            </div>
          </div>
        </div>
      </form>
    </div>
      <shareModal></shareModal>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import StarRating from "vue-star-rating";
import ShareModal from "../components/modal/shareModal";
export default {
  name: "Profil",
  components: {
    StarRating,
    VueSlickCarousel,
    ShareModal
  },
  data() {
    return {
       favCheck:false,
        favVal:false,
      value: 65,
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
      "slidesToShow": 3,
      "slidesToScroll": 3,
      "initialSlide": 0,
      "responsive": [
        {
          "breakpoint": 1100,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "infinite": true,
            "dots": true
          }
        },
          {
          "breakpoint": 992,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "initialSlide": 1
          }
        },
        {
          "breakpoint": 576,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    }
    };
  },
  methods: {
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
    setRating: function (rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function (rating) {
      this.currentRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating: function (rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
};
</script>