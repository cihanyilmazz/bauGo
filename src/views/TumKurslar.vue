<template>
  <div class="main-content">
    <div class="container">
          <h2 class="gradient-color mb-4">Tüm Kurslar</h2>
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage6 + ')' }"></div></a>
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage6 + ')' }"></div></a>
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-30">
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
  import StarRating from "vue-star-rating";
  import ShareModal from "../components/modal/shareModal";
export default {
  name: 'Tüm Kurslar',
  components: { 
   StarRating,
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