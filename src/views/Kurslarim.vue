<template>
  <div class="main-content">
    <div class="container">
          <h2 class="gradient-color mb-4">Kurslarım</h2>
        <div>
      <b-tabs content-class="py-4">
        <b-tab title="Tüm Kurslar" active>
           <div>
             
             <div class="row mb-3 md-lg-2">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div
                      class="search-input position-relative w-100 form-group"
                    >
                     <b-form-input class="mr-sm-2 w-100" placeholder="Kurslarımda Ara"></b-form-input>
                      <button class="btn"><i class="ri-search-line"></i></button>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
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
                  <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                      <b-form-group>
                            <template>
                              <div>
                                <multiselect placeholder="Kategori"
                                  v-model="selected"
                                  :options="options1" :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false">
                                  <span slot="noResult">Sonuç bulunamadı</span>
                                </multiselect>
                              </div>
                            </template>
                      </b-form-group>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <b-form-group>
                      <template>
                        <div>
                         <multiselect placeholder="İlerleme Durumu"
                                  v-model="selected"
                                  :options="options1" :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false">
                                  <span slot="noResult">Sonuç bulunamadı</span>
                                </multiselect>
                        </div>
                      </template>
                    </b-form-group>
                  </div>
                  <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <button
                      type="button"
                      class="
                        btn
                        d-flex
                        btn-link btn-block
                        justify-content-center
                      "
                      @click="fetchCourses"
                    >
                      Sıfırla
                    </button>
                  </div>
                </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-secondary position-absolute left-0 top-0 mt-2 ml-2">Pasif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                       <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-secondary position-absolute left-0 top-0 mt-2 ml-2">Pasif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage5 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Aktif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
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
                              <b-dropdown-item href="#">
                                  <div @click="archEkle()" v-show="!archVal">
                                    <i class="ri-archive-fill mr-3 color-second align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="archCheck"></b-spinner>Arşive Ekle
                                  </div>
                                  <div @click="archCikar()" v-show="archVal">
                                      <i class="ri-archive-fill mr-3 brand-color align-bottom" v-show="!archCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="archCheck"></b-spinner>Arşivlendi
                                  </div>
                              </b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              <star-rating
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
                              </div>
                        </div>
                      </article>
                </div>
            </div>
            <!-- row end -->
             <div class="overflow-auto mt-5">
                   <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router align="center" 
                   first-text="" prev-text="" next-text="" last-text=""></b-pagination-nav>
              </div>
          </div>
        </b-tab>
        <b-tab title="Arşiv">
          <div class="row">
             <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
                    <article class="card position-relative">
                      <span class="badge badge-secondary position-absolute left-0 top-0 mt-2 ml-2">Pasif</span>
                       <b-dropdown
                              id="dropdown-right"
                              right
                              text="Right align"
                              variant="link"
                              class="dropdown ml-auto after-none position-absolute right-0 top-0">
                              <template #button-content>
                                <i class="ri-more-line"></i>
                              </template>
                              <b-dropdown-item href="#"><i class="ri-archive-fill mr-3 mr-sm-2 color-second align-bottom"></i>Arşivden Çıkar</b-dropdown-item>
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate"><a href="#" class="color-second">John Doe</a></div>
                            <div class="text-capitalize color-second text-truncate text-small mb-3">Game Designer</div>
                             <div class="mb-2">
                               <b-progress :value="value" class="bg-third" variant="success"></b-progress>
                             </div>
                              <div class="card-star-rating d-flex justify-content-between align-items-center">
                                <b class="mb-0 pt-1 top-plus-1">%65</b>
                              </div>
                        </div>
                      </article>
                </div>
          </div>
        </b-tab>
        <b-tab title="Favoriler">
          <div class="my-3 text-center color-third">
            <div class="mb-2">
              <i class="ri-emotion-normal-line ri-5x color-third"></i>
            </div>
              <div class="h4">Henüz favorilere kurs eklemediniz.</div>
          </div>
        </b-tab>
      </b-tabs>
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
  import StarRating from "vue-star-rating";
  import ShareModal from "../components/modal/shareModal";
export default {
  name: 'Kurslarim',
  components: { 
   StarRating,
   ShareModal,
   },
   data() {
      return {
        archCheck:false,
        archVal:false,
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
    archEkle(){
      this.archCheck = true
      this.archVal = false
      var that = this;
        setTimeout(function() { 
              that.archCheck = false,
             that.archVal = true
         }, 500);
    },
    archCikar(){
      this.archVal = true
         this.archCheck = true
       var that = this;
        setTimeout(function() { 
              that.archCheck = false,
             that.archVal = false
         }, 500);
    },
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    } 
  }
</script>
