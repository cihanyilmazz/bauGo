  <template>
  <div class="main-content">
    <div class="container">
      <h2 class="gradient-color mb-4">Sepet</h2>
      <!-- dolu sepet baslangic -->
      <div>
        <div class="row flex-column-reverse flex-lg-row mb-5 pb-4">
          <div class="col-12 col-lg-9 mt-5 mt-lg-0">
             <div class="cart-items mb-4 pb-1">
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded" :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                       <a href="#" role="button" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <div @click="favEkle()" v-show="!favVal">
                            <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                          </div>
                          <div @click="favCikar()" v-show="favVal">
                              <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                          </div>
                      </a>
                      <a href="#" class="mr-5 color-second d-inline-block"><i class="ri-bookmark-fill mr-3 color-second align-bottom top-minus-1">
                        </i>Sonrası İçin Kaydet</a>
                      <a
                        href="#"
                        class="color-second hover-none d-inline-block"
                        v-b-modal.DeleteModal
                        ><i class="ri-close-fill mr-3 align-bottom"></i>Sil</a
                      >
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded"
                      :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"
                    ></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                      <a href="#" role="button" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <div @click="favEkle()" v-show="!favVal">
                            <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                          </div>
                          <div @click="favCikar()" v-show="favVal">
                              <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                          </div>
                      </a>
                      <a href="#" class="mr-5 color-second d-inline-block"><i class="ri-bookmark-fill mr-3 color-second align-bottom top-minus-1">
                        </i>Sonrası İçin Kaydet</a>
                      <a
                        href="#"
                        class="color-second hover-none d-inline-block"
                        v-b-modal.DeleteModal
                        ><i class="ri-close-fill mr-3 align-bottom"></i>Sil</a
                      >
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded"
                      :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"
                    ></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                    <a href="#" role="button" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <div @click="favEkle()" v-show="!favVal">
                            <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                          </div>
                          <div @click="favCikar()" v-show="favVal">
                              <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                          </div>
                      </a>
                      <a href="#" class="mr-5 color-second d-inline-block"><i class="ri-bookmark-fill mr-3 color-second align-bottom top-minus-1">
                        </i>Sonrası İçin Kaydet</a>
                      <a
                        href="#"
                        class="color-second hover-none d-inline-block"
                        v-b-modal.DeleteModal
                        ><i class="ri-close-fill mr-3 align-bottom"></i>Sil</a
                      >
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4 pb-1 d-none">
                <div class="mt-3 mb-5 text-center color-third">
                  <div class="mb-1">
                    <i class="ri-shopping-bag-line ri-8x color-third"></i>
                  </div>
                  <div class="h4">Sepetinizde kurs bulunmuyor.</div>
                </div>
              </div>
            </div>
            <div class="cart-items mb-5">
              <h3 class="mb-4">Daha Sonrası İçin Kaydedilenler</h3>
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded"
                      :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"
                    ></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                      <a href="#" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <i class="ri-star-fill mr-3 color-second align-bottom top-minus-1"></i>Favorilere Ekle</a>
                      <a href="#" class="mr-5 color-second hover-none"><i class="ri-shopping-cart-2-fill mr-3 align-middle top-minus-1"></i>Sepete Taşı</a>
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded"
                      :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"
                    ></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                      <a href="#" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <i class="ri-star-fill mr-3 color-second align-bottom top-minus-1"></i>Favorilere Ekle</a>
                      <a href="#" class="mr-5 color-second hover-none"><i class="ri-shopping-cart-2-fill mr-3 align-middle top-minus-2"></i>Sepete Taşı</a>
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12 col-sm-3 mb-3 mb-sm-0 pr-3 pr-sm-1 pr-md-3">
                  <a href="#">
                    <div  class="bg-image embed-responsive embed-responsive-16by9 rounded"
                      :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"
                    ></div>
                  </a>
                </div>
                <div class="col-12 col-sm-9 d-md-flex justify-content-between">
                  <div class="cart-item-info d-flex flex-column pr-md-4">
                    <div class="font-weight-bold ellipsis-2 mb-2">
                      <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                    </div>
                    <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                      <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                    </div>
                    <div class="cart-items-actions mt-2 mt-sm-auto">
                      <a href="#" class="mr-5 color-second mb-2 mb-sm-0 d-inline-block">
                        <i class="ri-star-fill mr-3 color-second align-bottom top-minus-1"></i>Favorilere Ekle</a>
                      <a href="#" class="mr-5 color-second hover-none"><i class="ri-shopping-cart-2-fill mr-3 align-middle top-minus-1"></i>Sepete Taşı</a>
                    </div>
                  </div>
                  <div class="cart-items-price pr-0 pr-md-3">
                    <div class="align-items-center d-flex d-md-block mt-3 mt-md-0">
                      <div class="h3 color-second mb-0 mr-3 mr-md-0">
                        <s>59,99₺</s>
                      </div>
                      <div class="h3 mb-0">27,99₺</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="mb-3 pb-1">
              <div class="mb-2 pb-1 font-weight-bold">Tutar: 100₺ </div>
              <div class="mb-2 pb-1 font-weight-bold">Kurs İndirimi <span class="color-second text-small">(%20)</span>: <span class="color-green ml-2">20₺</span></div>
               <!-- Kupon indirimi olduğu zaman bu alanda gözükmelidir -->
               <!-- <div class="mb-2 pb-1 font-weight-bold">Kupon İndirimi: <span class="color-green ml-2">10₺</span></div> -->
              <div class="h3 mb-0 d-inline-block">Toplam Tutar: 80₺</div>
            </div>
            <b-input-group class="mb-3 pb-1">
              <b-form-input ref="text" placeholder="Kupon Girin"></b-form-input>
              <b-input-group-append>
                <b-button>
                  <span>Uygula</span>
                  <!-- <span class="color-green">Uygulandı!</span> -->
                  <!-- Uygula butonuna tıkladındığı zaman yorum satırındaki gözükmelidir -->
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <div class="mb-3">
              <button type="button" class="btn btn-primary btn-block">Ödemeye Geç
              </button>
            </div>
            <!-- gecersiz kupon durumunda gosterilmelidir -->
             <!-- <div class="alert alert-error mt-3 py-2 px-3" role="alert">
                    <div class="alert-content w-100 d-inline-block">
                            <div class="text-small my-1"><strong>Kupon geçersiz</strong></div>
                    </div>
            </div> -->
          </div>
        </div>
        <div class="pt-2">
          <h3 class="mb-4 pr-5">Beğenebileceğin Diğer Kurslar</h3>
          <VueSlickCarousel v-bind="settings">
            <div class="mb-4">
              <article class="card position-relative">
                <span class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2">Yeni</span>
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#">
                      <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                  </b-dropdown-item>
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
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
                <span
                  class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2"
                  >Yeni</span
                >
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >
                       <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                     </b-dropdown-item
                  >
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage1 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
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
                <span
                  class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2"
                  >Yeni</span
                >
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >
                       <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                     </b-dropdown-item
                  >
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage3 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
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
                <span
                  class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2"
                  >Yeni</span
                >
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >
                       <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                     </b-dropdown-item
                  >
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage4 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
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
                <span
                  class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2"
                  >Yeni</span
                >
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >
                       <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                     </b-dropdown-item
                  >
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage5 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
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
                <span
                  class="badge badge-success position-absolute left-0 top-0 mt-2 ml-2"
                  >Yeni</span
                >
                <b-dropdown
                  id="dropdown-right"
                  right
                  text="Right align"
                  variant="link"
                  class="dropdown ml-auto after-none position-absolute right-0 top-0"
                >
                  <template slot="button-content">
                    <i class="ri-more-line"></i>
                  </template>
                  <b-dropdown-item v-b-modal.ShareModal><i class="ri-share-fill mr-3 align-bottom top-minus-1"></i>Paylaş</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >
                       <div @click="courseFavEkle()" v-show="!courseFavVal">
                         <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                      </div>
                      <div @click="courseFavCikar()" v-show="courseFavVal">
                        <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
                     </div>
                     </b-dropdown-item
                  >
                </b-dropdown>
                <a href="#"><div class="card-img-top card-image"
                    :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"
                  ></div
                ></a>
                <div class="card-body">
                  <div class="font-weight-bold ellipsis-2 mb-2">
                    <a href="#"
                      >React Native ile Mobil Uygulama Geliştirme ve MobX</a
                    >
                  </div>
                  <div class="text-capitalize text-truncate mb-2">
                    <a href="#" class="color-second">John Doe</a>
                  </div>
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
                  <div class="color-second text-small mt-2">
                    Toplam 16,5 saat
                    <div class="clearfix d-none d-md-block d-xl-none"></div>
                    <span
                      class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block"
                      >&middot;</span
                    >14 bölüm
                  </div>
                  <div class="d-flex align-items-center mt-3">
                    <div class="h3 mb-0 mr-2">27,99₺</div>
                    <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                  </div>
                </div>
              </article>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <!-- dolu sepet bitis -->
      <!-- bos sepet -->
      <div class="mb-4 pb-1">
        <div class="mt-3 mb-5 text-center color-third">
          <div class="mb-1">
            <i class="ri-shopping-bag-line ri-8x color-third"></i>
          </div>
          <div class="h4">Sepetinizde kurs bulunmuyor.</div>
        </div>
      </div>
      <!-- bos sepet -->
    </div>
    <DeleteModal></DeleteModal>
  </div>
</template>

  <script>
import DeleteModal from "../components/modal/DeleteModal";
import VueSlickCarousel from "vue-slick-carousel";
import StarRating from "vue-star-rating";
export default {
  name: "Sepet",
  components: {
    VueSlickCarousel,
    DeleteModal,
    StarRating,
  },
  data() {
    return {
       courseFavCheck:false,
      courseFavVal:false,
       favCheck:false,
      favVal:false,
      user: {},
      value: 65,
      CardImage1: "https://picsum.photos/600/300/?image=27",
      CardImage2: "https://picsum.photos/600/300/?image=22",
      CardImage3: "https://picsum.photos/600/300/?image=23",
      CardImage4: "https://picsum.photos/600/300/?image=24",
      CardImage5: "https://picsum.photos/600/300/?image=25",
      CardImage6: "https://picsum.photos/600/300/?image=26",
      settings: {
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
              slidesToShow: 3,
              slidesToScroll: 3,
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
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
  methods: {
    favEkle(){
      this.favCheck = true
      this.favVal = false
      var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = true
         }, 1000);
    },
    favCikar(){
      this.favVal = true
         this.favCheck = true
       var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = false
         }, 1000);
    },
    courseFavEkle(){
      this.courseFavCheck = true
      this.courseFavVal = false
      var that = this;
        setTimeout(function() { 
              that.courseFavCheck = false,
             that.courseFavVal = true
         }, 500);
    },
    courseFavCikar(){
      this.courseFavVal = true
         this.courseFavCheck = true
       var that = this;
        setTimeout(function() { 
              that.courseFavCheck = false,
             that.courseFavVal = false
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

