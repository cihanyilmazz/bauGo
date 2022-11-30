<template>
  <div class="home">
    <div class="home-slider">
      <template>
        <VueSlickCarousel
          v-bind="settings"
          ref="carousel"
          :arrows="false"
          @afterChange="changeDomSliderIndex"
        >
          <div class="slider-wrapper">
            <div
              class="slide bg-image" style="
    background-image: url(http://ui.ubit.com.tr/profile-picture.jpg);
">
              <div class="container">
                <div class="slide-content">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <h1 class="mb-2 pb-1">Daha fazlasını hedefleyin</h1>
                      <p>
                        Eğitim almak bir adım önde olmanızı sağlar. Çevrenizi
                        etkilemek için popüler yetkinlikler edinin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="slider-wrapper">
            <div
              class="slide bg-image"
             v-bind:style="{'background-image': 'url(' + require('../assets/img/slide-2.jpg') + ')'}">
              <div class="container">
                <div class="slide-content">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <h1 class="mb-2 pb-1">
                        Kurslar şimdi yalnızca ₺27,99'den başlayan fiyatlarla!
                      </h1>
                      <p>
                        Sezonun en büyük indirimi 27 Mayıs'ta sona eriyor. Sizi
                        bir adım öne geçirecek yetkinlikler edinin.
                      </p>
                      <div class="mt-4">
                        <button class="btn btn-lg btn-primary">Satın Al</button>
                        <button class="btn btn-lg btn-secondary ml-3">
                          İncele
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slider-wrapper">
            <div
              class="slide bg-image"
            v-bind:style="{'background-image': 'url(' + require('../assets/img/slide-1.jpg') + ')'}">
              <div class="container">
                <div class="slide-content">
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <h1 class="mb-2 pb-1">
                        Kurslar şimdi yalnızca ₺27,99'den başlayan fiyatlarla!
                      </h1>
                      <p>
                        Sezonun en büyük indirimi 27 Mayıs'ta sona eriyor. Sizi
                        bir adım öne geçirecek yetkinlikler edinin.
                      </p>
                      <div class="mt-4">
                        <button class="btn btn-lg btn-primary">Satın Al</button>
                        <button class="btn btn-lg btn-secondary ml-3">
                          İncele
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </VueSlickCarousel>
      </template>
    </div>
 <section class="py-5">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Kategoriler</h2>
        <VueSlickCarousel v-bind="CourseCoruselSettings" :class="slideClass">
          <div class="mb-4">
            <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage7 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage8 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          
        </VueSlickCarousel>
        <div class="see-more position-relative d-flex justify-content-end"><a class="color-second" href="/tum-kategoriler">Tümünü Gör</a></div>
      </div>
    </section>
 <section class="py-5 section-striped">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Eğitmenler</h2>
        <VueSlickCarousel v-bind="CourseCoruselSettings" :class="slideClass">
          <div class="mb-4">
            <article class="card position-relative pic-card">
              <span class="badge badge-success position-absolute left-0 top-0 mt-3 ml-3">Yeni</span>

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage7 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">Muhammet Cihan Yılmaz</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

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
          <div class="mb-4">
            <article class="card position-relative pic-card">

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
          <div class="mb-4">
            <article class="card position-relative pic-card">

              <a href="#" class="h-100">
                <div class="card-img-top h-100 bg-image" :style="{ backgroundImage: 'url(' + CardImage8 + ')' }">
                    <div class="font-weight-bold position-absolute left-0 bottom-0 p-4 pt-5 pic-card-title">
                      <div class="pt-5">John Doe</div>
                      <div class="mt-1 white-60">Bilgisayar Mühendisi</div>
                    </div>
                </div>
              </a>
            </article>
          </div>
          <div class="mb-4">
            <article class="card position-relative pic-card">

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
          <div class="mb-4">
            <article class="card position-relative pic-card">

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
          
        </VueSlickCarousel>
        <div class="see-more position-relative d-flex justify-content-end"><a class="color-second" href="/tum-kategoriler">Tümünü Gör</a></div>
      </div>
    </section>
 <section class="py-5">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Popüler Kurslar</h2>
        <VueSlickCarousel v-bind="CourseCoruselSettings" :class="slideClass">
            <div class="mb-4">
               <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Rd"
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                      <div class="d-flex align-items-center mt-3">
                          <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Popüler</span>
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                        <div class="d-flex align-items-center mt-3">
                        <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
                        </div>
                      </article>
            </div>
          </VueSlickCarousel>
          <div class="see-more position-relative d-flex justify-content-end"><a class="color-second" href="/tum-kurslar">Tümünü Gör</a></div>
      </div>
    </section>
 <section class="py-5 section-striped">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Son Eklenen Kurslar</h2>
       <VueSlickCarousel v-bind="CourseCoruselSettings" :class="slideClass">
            <div class="mb-4">
               <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Rd"
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                      <div class="d-flex align-items-center mt-3">
                          <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Popüler</span>
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                        <div class="d-flex align-items-center mt-3">
                        <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div> 
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
                        </div>
                      </article>
            </div>
             <div class="mb-4">
               <article class="card position-relative">
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
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
                           
                        <div class="card-star-rating d-flex align-items-center">
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
                       <div class="d-flex align-items-center mt-3">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
                        </div>
                      </article>
            </div>
          </VueSlickCarousel>
          <div class="see-more position-relative d-flex justify-content-end"><a class="color-second" href="/tum-kurslar">Tümünü Gör</a></div>
      </div>
    </section>
    <section class="py-5">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Kullanıcılar Ne Diyor?</h2>
        <VueSlickCarousel v-bind="CoruselSettings2">
          <div class="mb-4">
            <div class="card side-card">
              <div class="row m-0 h-100 h-xs-inherit">
                <div class="col-12 col-sm-4 col-lg-5 px-0 h-100 h-xs-inherit">
                  <div
                    class="bg-image w-100 h-100 h-xs-inherit"
                    v-bind:style="{
                      backgroundImage:
                        'url(\'https://picsum.photos/600/300/?image=4\')',
                    }"
                  ></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-7 px-1 h-100 h-xs-inherit">
                  <div class="card-body d-flex flex-column h-100 h-xs-inherit">
                    <div class="card-text mb-4">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic libero cumque, necessitatibus fugiat delectus facilis voluptatibus maiores fugit iste placeat nulla modi deleniti repellendus pariatur harum
                    </div>
                    <div class="text-small color-second mb-0 mt-auto">
                     John Doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="card side-card">
              <div class="row m-0 h-100 h-xs-inherit">
                <div class="col-12 col-sm-4 col-lg-5 px-0 h-100 h-xs-inherit">
                  <div
                    class="bg-image w-100 h-100 h-xs-inherit"
                    v-bind:style="{
                      backgroundImage:
                        'url(\'https://picsum.photos/600/300/?image=4\')',
                    }"
                  ></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-7 px-1 h-100 h-xs-inherit">
                  <div class="card-body d-flex flex-column h-100 h-xs-inherit">
                    <div class="card-text mb-4">
                     amet consectetur adipisicing elit. Hic libero cumque, necessitatibus fugiat delectus facilis voluptatibus maiores fugit iste placeat nulla modi deleniti repellendus pariatur harum
                    </div>
                    <div class="text-small color-second mb-0 mt-auto">
                     Muhammet Cihan Yılmaz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="card side-card">
              <div class="row m-0 h-100 h-xs-inherit">
                <div class="col-12 col-sm-4 col-lg-5 px-0 h-100 h-xs-inherit">
                  <div
                    class="bg-image w-100 h-100 h-xs-inherit"
                    v-bind:style="{
                      backgroundImage:
                        'url(\'https://picsum.photos/600/300/?image=4\')',
                    }"
                  ></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-7 px-1 h-100 h-xs-inherit">
                  <div class="card-body d-flex flex-column h-100 h-xs-inherit">
                    <div class="card-text mb-4">
                     Hic libero cumque, necessitatibus fugiat delectus facilis voluptatibus maiores fugit iste placeat nulla modi deleniti repellendus
                    </div>
                    <div class="text-small color-second mb-0 mt-auto">
                     Turgut Karahan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </VueSlickCarousel>
      </div>
    </section>
    <section class="py-5 section-striped">
      <div class="container py-4"> 
       <div class="row">
         <div class="col-12 col-lg-4 mb-2 mb-lg-0">
           <div class="p-4 bg-second w-100 h-100 rounded">
             <div class="mb-2 color-second">Kurs Sayısı</div>
             <div class="h3 mb-0">132</div>
           </div>
         </div>
         <div class="col-12 col-lg-4 mb-2 mb-lg-0">
           <div class="p-4 bg-second w-100 h-100 rounded">
             <div class="mb-2 color-second">Ders Sayısı</div>
             <div class="h3 mb-0">1218</div>
           </div>
         </div>
         <div class="col-12 col-lg-4">
           <div class="p-4 bg-second w-100 h-100 rounded">
             <div class="mb-2 color-second">Toplam Ders Saati</div>
             <div class="h3 mb-0">2137</div>
           </div>
         </div>
       </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container py-4">
        <h2 class="mb-4 pr-5">Sıkça Sorulan Sorular</h2>
        
       <template>
                <div class="accordion custom-accordion" role="tablist">
                  <h4 class="mb-3 mt-4 pt-2 color-second accordion-title">Tenetur velit aliquid similique quam modi culpa corporis iusto?</h4>
                  <b-card class="shadow-none mb-2 rounded" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent btn-block"
                        v-b-toggle.accordion-1>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit? 
                      </button>
                    </div>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body class="pt-0 pr-4 pb-4 pl-4">
                       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, magnam quae impedit quisquam dolorum! Eos illum iusto quisquam inventore asperiores corrupti ullam molestias, illo reprehenderit, eum maxime beatae provident?
                       Ipsam unde fugit eveniet laboriosam excepturi esse distinctio nulla dolore dicta, soluta nobis aliquid ab sunt quaerat quis sequi minus. Voluptate exercitationem officia, ullam eveniet consequatur adipisci odio! Repellendus, praesentium?</div>
                      </b-card-body>



    


                    </b-collapse>
                  </b-card>
                  <h4 class="mb-3 mt-4 pt-2 color-second accordion-title">Accusamus illo sit vero autem in nesciunt, nam saepe atque est consectetur tempore cupiditate sunt?</h4>
                  <b-card class="shadow-none mb-2 rounded" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent btn-block"
                        v-b-toggle.accordion-2>
                        Laborum, dolore perferendis! Libero, perferendis quo aspernatur, molestias, natus perspiciatis?
                      </button>
                    </div>
                    <b-collapse
                      id="accordion-2"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body class="pt-0 pr-4 pb-4 pl-4">
                       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, magnam quae impedit quisquam dolorum! Eos illum iusto quisquam inventore asperiores corrupti ullam molestias, illo reprehenderit, eum maxime beatae provident?
                       Ipsam unde fugit eveniet laboriosam excepturi esse distinctio nulla dolore dicta, soluta nobis aliquid ab sunt quaerat quis sequi minus. Voluptate exercitationem officia, ullam eveniet consequatur adipisci odio! Repellendus, praesentium?</div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <h4 class="mb-3 mt-4 pt-2 color-second accordion-title">Autem in nesciunt, nam saepe atque est consectetur tempore?</h4>
                  <b-card class="shadow-none mb-2 rounded" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent btn-block"
                        v-b-toggle.accordion-3>
                        Et distinctio placeat nulla eum totam pariatur ut assumenda asperiores expedita consequatur?
                      </button>
                    </div>
                    <b-collapse
                      id="accordion-3"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body class="pt-0 pr-4 pb-4 pl-4">
                       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At accusamus, magnam quae impedit quisquam dolorum! Eos illum iusto quisquam inventore asperiores corrupti ullam molestias, illo reprehenderit, eum maxime beatae provident?
                       Ipsam unde fugit eveniet laboriosam excepturi esse distinctio nulla dolore dicta, soluta nobis aliquid ab sunt quaerat quis sequi minus. Voluptate exercitationem officia, ullam eveniet consequatur adipisci odio! Repellendus, praesentium?</div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                </div>
              </template>
      </div>
    </section>

  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import StarRating from "vue-star-rating";
export default {
  name: "Anasayfa",
  components: {
    VueSlickCarousel,
    StarRating,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          controls: true,
          responsive: true,
        };
      },
    },
  },
  data() {
    return {
       favCheck:false,
        favVal:false,
      slideClass:"pagination-left",
      value: 65,
      slideIndex: 0,
      CardImage1: "https://source.unsplash.com/260x330/?technology",
      CardImage2: "https://source.unsplash.com/260x330/?desktop",
      CardImage3: "https://source.unsplash.com/260x330/?business",
      CardImage4: "https://source.unsplash.com/260x330/?book",
      CardImage5: "https://source.unsplash.com/260x330/?education",
      CardImage6: "https://source.unsplash.com/260x330/?design",
      CardImage7: "https://source.unsplash.com/260x330/?building",
      CardImage8: "https://source.unsplash.com/260x330/?keyboard",

       settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        accessibility: false,
        fade: true,
        autoplay: false,
      },
      CoruselSettings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
      CoruselSettings2: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      },
      CourseCoruselSettings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
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
  mounted() {
    console.log(this.$refs.carousel);
  
  },

};
</script>
