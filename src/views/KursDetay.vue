<template>
  <div class="main-content full-content-bg">
    <div class="container">
      <h2 class="gradient-color mb-4">
        AspNet Core Web/API + Çok Katmanlı Mimari | Best Practices
      </h2> 
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-12 col-md-8 col-lg-9 mt-5 mt-md-0">
          <div class="mb-5 pb-5">
            <div class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit
              tempore itaque blanditiis corrupti, ab nam quos ex magnam ratione
              neque adipisci dolorem sed, facere, voluptate enim eligendi!
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-2">
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
                  <div class="pt-2 ml-2">379 Kişi</div>
                </div>
                <div class="mt-2">6.672 kişi satın aldı.</div>
              </div>
              <div class="col-md-6 col-lg-4 mb-2 pt-2">
                <div class="mb-2">Bölüm Sayısı: 14</div>
                <div>Süre: 13 Saat 45 Dakika</div>
              </div>
              <div class="col-md-6 col-lg-4 mb-2 pt-2">
                <div class="mb-2"><a href="#" class="brand-color">AKTS</a></div>
                <div>Eğitmen: <a href="#" class="brand-color">John Doe</a></div>
              </div>
            </div>
            <div class="d-flex mt-4 pt-2">
              <div class="d-flex align-items-center">
                <!-- <button
              type="button"
              class="btn outline-primary d-flex align-items-center text-left mr-3">
              <i class="ri-star-fill mr-3 mr-sm-2 color-second align-bottom"></i>Favorilere Ekle</button> -->
                <button type="button" class="btn outline-primary d-flex align-items-center text-left mr-3">
                  <div @click="favEkle()" v-show="!favVal">
                <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                </div>
                <div @click="favCikar()" v-show="favVal">
                    <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                  </div>
                </button>
              </div>

              <div class="d-flex align-items-center">
                <button v-b-modal.ShareModal type="button" class="btn btn-link">
                  <i
                    class="ri-share-fill mr-0 mr-sm-3 align-bottom color-first"
                  ></i
                  ><span class="d-none d-sm-inline-block">Paylaş</span>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <h3 class="mb-4">Kazanımlar</h3>
            <div class="mb-1 d-flex"><div class="pt-1"><i class="ri-check-fill ri-lg color-green mr-2 top-minus-1"></i></div>
            <div>Sıfırdan çok katmanlı mimari ile aspnet core mvc/api uygulaması geliştirmeyi öğreneceksiniz</div>
            </div>
             <div class="mb-1 d-flex">
                <div class="pt-1"><i class="ri-check-fill ri-lg color-green mr-2 top-minus-1"></i></div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi doloribus quibusdam, veritatis voluptates consectetur accusantium suscipit animi, delectus amet omnis distinctio? Debitis, possimus expedita. </div>
            </div>
          </div>
          <div class="mb-5">
            <h3 class="mb-4">Gereksinimler</h3>
            <div class="mb-1 d-flex align-items-baseline">
              <div class="pt-1"><i class="ri-checkbox-blank-circle-fill ri-xs color-third mr-2"></i></div>
              <div>Ipsum, dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus corporis nulla obcaecati ipsa perferendis illum amet, quos sint excepturi eaque? Necessitatibus dolorem, nulla natus praesentium aspernatur impedit. Debitis, ab.</div>
            </div>
           <div class="mb-1 d-flex align-items-baseline">
              <div class="pt-1"><i class="ri-checkbox-blank-circle-fill ri-xs color-third mr-2"></i></div>
              <div>Bpsum, dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div class="mb-1 d-flex align-items-baseline">
              <div class="pt-1"><i class="ri-checkbox-blank-circle-fill ri-xs color-third mr-2"></i></div>
              <div>Spsum, dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus corporis nulla obcaecati ipsa perferendis illum amet, quos sint excepturi eaque?</div>
            </div>
          </div>
          <div class="mb-5 pt-2">
            <h3 class="mb-3">Kurs İçeriği</h3>
            <template>
              <div class="accordion custom-accordion" role="tablist">
                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-1>
                      Bölüm 1: Başlangıç
                    </button>
                    <div class="color-second pl-0 text-small">
                      10 <span class="slash">/</span> 10 | 45 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-1"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="curriculum-wrapper d-flex mb-3">
                        <div class="curriculum-content">
                          <div class="pt-0-15">
                            <i class="ri-pencil-fill mr-2"></i
                            ><span class="top-minus-1">Anket</span>
                          </div>
                          <div class="color-second">10 Soru</div>
                        </div>
                      </div>

                      <div class="curriculum-wrapper d-flex mb-3">
                        <div class="curriculum-content">
                          <div class="pt-0-15">
                            <i class="ri-pencil-fill mr-2"></i
                            ><span class="top-minus-1">Quiz</span>
                          </div>
                          <div class="color-second">20 Soru | 20 Dakika</div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-2>
                      Bölüm 2: Vue.js ile DOM Etkileşimleri
                    </button>
                    <div class="color-second pl-0 text-small">
                      4 <span class="slash">/</span> 6 | 35 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-3>
                      Bölüm 3: Koşul Kullanımı ve Listeleri
                    </button>
                    <div class="color-second pl-0 text-small">
                      5 <span class="slash">/</span> 7 | 38 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-4"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-4>
                      Bölüm 4: İlk Proje | Canavar Avı Oyunu
                    </button>
                    <div class="color-second pl-0 text-small">
                      5 <span class="slash">/</span> 7 | 38 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-5"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-6>
                      Bölüm 5: VueJS Instance Nedir?
                    </button>
                    <div class="color-second pl-0 text-small">
                      10 <span class="slash">/</span> 14 | 38 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-6"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab">
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-7>
                      Bölüm 6: Webpack ve Vue CLI ile Gerçek
                    </button>
                    <div class="color-second pl-0 text-small">
                      10 <span class="slash">/</span> 14 | 38 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-7"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab">
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-8>
                      Bölüm 7: Component Yapısına Giriş
                    </button>
                    <div class="color-second pl-0 text-small">
                      8 <span class="slash">/</span> 13 | 54 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-8"
                    accordion="my-accordion"
                    role="tabpanel">
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab">
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-9>
                      Bölüm 8: Component'ler Arası İletişim
                    </button>
                    <div class="color-second pl-0 text-small">
                      11 <span class="slash">/</span> 14 | 31 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-9"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-10>
                      Bölüm 9: Gelişmiş Component Kullanımı
                    </button>
                    <div class="color-second pl-0 text-small">
                      11 <span class="slash">/</span> 14 | 40 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-10"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-11>
                      Bölüm 10: Proje | Ürün Ekleme
                    </button>
                    <div class="color-second pl-0 text-small">
                      9 <span class="slash">/</span> 12 | 42 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-11"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-12>
                      Bölüm 11: Input ve Form Elementleriye
                    </button>
                    <div class="color-second pl-0 text-small">
                      12 <span class="slash">/</span> 15 | 38 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-12"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-13>
                      Bölüm 12: Directive Kullanımı
                    </button>
                    <div class="color-second pl-0 text-small">
                      11 <span class="slash">/</span> 14 | 34 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-13"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-14>
                      Bölüm 13: Filters ve Mixins Kullanımı
                    </button>
                    <div class="color-second pl-0 text-small">
                      11 <span class="slash">/</span> 14 | 40 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-14"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card class="shadow-none bg-transparent" no-body>
                  <div
                    class="card-header border-0 py-1 px-0 bg-transparent"
                    role="tab"
                  >
                    <button class="btn pb-1 pl-0" v-b-toggle.accordion-15>
                      Bölüm 14:Animasyonlar ve Geçişler
                    </button>
                    <div class="color-second pl-0 text-small">
                      11 <span class="slash">/</span> 14 | 40 dakika
                    </div>
                  </div>
                  <b-collapse
                    class="bg-transparent"
                    id="accordion-15"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="pl-0">
                      <div v-for="item in resultQuery" :key="item.id">
                        <div class="curriculum-wrapper d-flex mb-3">
                          <div class="curriculum-content">
                            <div>{{ item.courseTitle }}</div>
                            <div class="color-second text-small">
                              {{ item.courseTime }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </template>
          </div>
          <div class="mb-5">
            <h3 class="mb-4">Eğitmen</h3>
            <div class="row">
              <div class="col-12 col-xl-4 mb-3 mb-xl-0">
                <a href="#">
                  <div class="d-flex align-items-center">
                    <div
                      class="rounded-circle bg-image mr-4 wh-64"
                      style="
                        background-image: url(http://ui.ubit.com.tr/profile-picture.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate h4 mb-1">
                        Cihan Yılmaz
                      </div>
                      <div
                        class="color-second text-capitalize text-truncate font-weight-normal h4 mb-0"
                      >
                        Bilgisayar Mühendisi
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 col-xl-4">
                <div class="mt-2 pt-1 top-minus-2">
                  <div class="mb-1">
                    <i class="ri-star-line mr-2 align-bottom top-minus-1"></i
                    >4,7
                    <span class="d-none d-sm-inline-block">Eğitmen Puanı</span>
                  </div>
                  <div>
                    <i class="ri-award-line mr-2 align-bottom top-minus-1"></i
                    >1.997 Yorum
                  </div>
                </div>
              </div>
              <div class="col-6 col-xl-4">
                <div class="mt-2 pt-1 top-minus-2">
                  <div class="mb-1">
                    <i class="ri-user-2-line mr-2 align-bottom top-minus-1"></i
                    >26.935 Öğrenci
                  </div>
                  <div>
                    <i class="ri-video-line mr-2 align-bottom top-minus-1"></i
                    >23 Kurs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5 pb-1">
            <h3 class="mb-4">Geri Bildirim</h3>
            <div class="row">
              <div class="col-12 col-sm-3 col-xl-2 text-left text-sm-center d-flex align-items-center mb-3 mb-sm-0">
                <div class="mx-0 mx-sm-auto">
                  <h1 class="grade-title mb-0 display-4 font-weight-bold">
                    4.7
                  </h1>
                  <star-rating
                    class="star-small star-rating-text-none d-flex justify-content-center mb-2"
                    :rating="4.7"
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
                  <div>Kurs Puanı</div>
                </div>
              </div>
              <div class="col-12 col-sm-9 col-xl-10">
                <div class="d-flex align-items-center mb-2" role="button">
                  <div class="w-100 mr-4 top-minus-1">
                    <b-progress
                      :value="value1"
                      class="bg-third"
                      variant="success"
                    ></b-progress>
                  </div>
                  <div class="w-100 d-flex align-items-center">
                    <star-rating
                      class="star-small star-rating-text-none mr-2 top-minus-2"
                      :rating="5"
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
                    <span>%67</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2 opacity-45" role="button">
                  <div class="w-100 mr-4 top-minus-1">
                    <b-progress
                      :value="value2"
                      class="bg-third"
                      variant="success"
                    ></b-progress>
                  </div>
                  <div class="w-100 d-flex align-items-center">
                    <star-rating
                      class="star-small star-rating-text-none mr-2 top-minus-2"
                      :rating="4"
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
                    <span>%24</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2 opacity-45" role="button">
                  <div class="w-100 mr-4 top-minus-1">
                    <b-progress
                      :value="value3"
                      class="bg-third"
                      variant="success"
                    ></b-progress>
                  </div>
                  <div class="w-100 d-flex align-items-center">
                    <star-rating
                      class="star-small star-rating-text-none mr-2 top-minus-2"
                      :rating="3"
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
                    <span>%6</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-2 opacity-45" role="button">
                  <div class="w-100 mr-4 top-minus-1">
                    <b-progress
                      :value="value4"
                      class="bg-third"
                      variant="success"
                    ></b-progress>
                  </div>
                  <div class="w-100 d-flex align-items-center">
                    <star-rating
                      class="star-small star-rating-text-none mr-2 top-minus-2"
                      :rating="2"
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
                    <span>%1</span>
                  </div>
                </div>
                <div class="d-flex align-items-center opacity-45" role="button">
                  <div class="w-100 mr-4 top-minus-1">
                    <b-progress
                      :value="value5"
                      class="bg-third"
                      variant="success"
                    ></b-progress>
                  </div>
                  <div class="w-100 d-flex align-items-center">
                    <star-rating
                      class="star-small star-rating-text-none mr-2 top-minus-2"
                      :rating="1"
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
                    <span>%2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4 pb-3">
             <h3 class="mb-4">Yorumlar</h3>
              <div class="search-input position-relative w-100 mb-3">
                <b-form-input
                  class="mr-sm-2 w-100"
                  placeholder="Yorumlarda Ara..."
                  v-model="searchQuery"
                ></b-form-input>
                <button class="btn"><i class="ri-search-line"></i></button>
              </div>
          </div>
          <div class="mb-5">
            <!-- comment -->
            <div class="comment-wrapper pb-5">
              <div class="mb-3">
                <div class="d-flex align-items-center">
                  <a href="#" class="d-flex align-items-center">
                    <div
                      class="wh-48 rounded-circle bg-image mr-3"
                      style="
                        background-image: url(https://www.kingrosales.com/wp-content/uploads/2018/05/king-rosales-profile-photo-square.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate">
                        Aytuğ Çağlayan
                      </div>
                    <div class="d-flex align-items-center">
                        <star-rating
                      class="star-smaller star-rating-text-none mr-3 top-minus-1"
                      :rating="5"
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
                      <div class="color-second text-capitalize text-truncate font-weight-normal mb-0 pt-1">1 gün önce</div>
                    </div>
                    </div>
                  </a>

                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Right align"
                    variant="link"
                    class="dropdown ml-auto after-none"
                  >
                    <template #button-content class="py-0">
                      <i class="ri-more-line ml-auto color-third"></i>
                    </template>
                    <b-dropdown-item
                      v-b-modal.GeneralModal
                      @click="reportModal()"
                      ><i class="ri-flag-2-fill mr-3 mr-sm-2 align-bottom top-minus-1"></i>Kötüye kullanım bildir</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <div class="announcement">
                <div class="mb-3">
                  Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                  kullanıldığına ve nasıl masaüstü uygulama yapıldığına 19
                  derslik bir eğitim ile detaylı bir şekilde değinmeye çalıştım.
                  Bu eğitime ulaşmak için aşağıdaki link tanımlayamıyorum. Fakat
                  eğitime; Udemy üzerinden benim profilime girerek tamamen
                  ücretsiz bir şekilde erişebilir ve Udemy kurs koleksiyonunuza
                  ekleyebilirsiniz.
                </div>

                <div class="d-flex justify-content-between">
                  <div class="d-flex color-third">
                    <div class="d-flex align-items-center mr-3">
                      <a role="button">
                        <i class="ri-thumb-up-fill color-green mr-2"></i> </a>3
                    </div>
                    <div class="d-flex align-items-center">
                      <a role="button">
                        <i class="ri-thumb-down-fill color-third mr-2 top-minus-1"></i></a>3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-wrapper pb-5">
              <div class="mb-3">
                <div class="d-flex align-items-center">
                  <a href="#" class="d-flex align-items-center">
                    <div
                      class="wh-48 rounded-circle bg-image mr-3"
                      style="
                        background-image: url(https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate">
                        Ayşe Keskin
                      </div>
                      <div class="d-flex align-items-center">
                        <star-rating
                      class="star-smaller star-rating-text-none mr-3 top-minus-1"
                      :rating="4"
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
                      <div class="color-second text-capitalize text-truncate font-weight-normal mb-0 pt-1">2 gün önce</div>
                    </div>
                    </div>
                  </a>

                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Right align"
                    variant="link"
                    class="dropdown ml-auto after-none"
                  >
                    <template #button-content class="py-0">
                      <i class="ri-more-line ml-auto color-third"></i>
                    </template>
                    <b-dropdown-item
                      v-b-modal.GeneralModal
                      @click="reportModal()"
                      ><i
                        class="ri-flag-2-fill mr-3 mr-sm-2 align-bottom top-minus-1"
                      ></i
                      >Kötüye kullanım bildir</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
              <div class="announcement">
                <div class="mb-3">
                  Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                  kullanıldığına ve nasıl masaüstü uygulama yapıldığına 19
                  derslik bir eğitim ile detaylı bir şekilde değinmeye çalıştım.
                  Bu eğitime ulaşmak için aşağıdaki link tanımlayamıyorum. Fakat
                  eğitime; Udemy üzerinden benim profilime girerek tamamen
                  ücretsiz bir şekilde erişebilir ve Udemy kurs koleksiyonunuza
                  ekleyebilirsiniz.
                </div>

                <div class="d-flex justify-content-between">
                  <div class="d-flex color-third">
                    <div class="d-flex align-items-center mr-3">
                      <a role="button">
                        <i class="ri-thumb-up-fill color-third mr-2"></i> </a
                      >3
                    </div>
                    <div class="d-flex align-items-center">
                      <a role="button">
                        <i
                          class="ri-thumb-down-fill color-red mr-2 top-minus-1"
                        ></i></a
                      >3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-wrapper pb-5">
              <div class="mb-3">
                <div class="d-flex align-items-center">
                  <a href="#" class="d-flex align-items-center">
                    <div
                      class="wh-48 rounded-circle bg-image mr-3"
                      style="
                        background-image: url(https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate">
                        Kerem Polat
                      </div>
                      <div class="d-flex align-items-center">
                        <star-rating
                      class="star-smaller star-rating-text-none mr-3 top-minus-1"
                      :rating="3"
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
                      <div class="color-second text-capitalize text-truncate font-weight-normal mb-0 pt-1">1 hafta önce</div>
                    </div>
                    </div>
                  </a>

                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Right align"
                    variant="link"
                    class="dropdown ml-auto after-none"
                  >
                    <template #button-content class="py-0">
                      <i class="ri-more-line ml-auto color-third"></i>
                    </template>
                    <b-dropdown-item
                      v-b-modal.GeneralModal
                      @click="reportModal()"
                      ><i
                        class="ri-flag-2-fill mr-3 mr-sm-2 align-bottom top-minus-1"
                      ></i
                      >Kötüye kullanım bildir</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
              <div class="announcement">
                <div class="mb-3">
                  Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                  kullanıldığına ve nasıl masaüstü uygulama yapıldığına 19
                  derslik bir eğitim ile detaylı bir şekilde değinmeye çalıştım.
                  Bu eğitime ulaşmak için aşağıdaki link tanımlayamıyorum. Fakat
                  eğitime; Udemy üzerinden benim profilime girerek tamamen
                  ücretsiz bir şekilde erişebilir ve Udemy kurs koleksiyonunuza
                  ekleyebilirsiniz.
                </div>

                <div class="d-flex justify-content-between">
                  <div class="d-flex color-third">
                    <div class="d-flex align-items-center mr-3">
                      <a role="button">
                        <i class="ri-thumb-up-fill color-third mr-2"></i> </a
                      >3
                    </div>
                    <div class="d-flex align-items-center">
                      <a role="button">
                        <i
                          class="ri-thumb-down-fill color-third mr-2 top-minus-1"
                        ></i></a
                      >3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-wrapper pb-5">
              <div class="mb-3">
                <div class="d-flex align-items-center">
                  <a href="#" class="d-flex align-items-center">
                    <div
                      class="wh-48 rounded-circle bg-image mr-3"
                      style="
                        background-image: url(https://i0.wp.com/www.engage-innovate.com/wp-content/uploads/2019/01/Jolene-Foo-Profile-Square.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate">
                        Aynur Yıldız
                      </div>
                      <div class="d-flex align-items-center">
                        <star-rating
                      class="star-smaller star-rating-text-none mr-3 top-minus-1"
                      :rating="1"
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
                      <div class="color-second text-capitalize text-truncate font-weight-normal mb-0 pt-1">2 hafta önce</div>
                    </div>
                    </div>
                  </a>

                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Right align"
                    variant="link"
                    class="dropdown ml-auto after-none"
                  >
                    <template #button-content class="py-0">
                      <i class="ri-more-line ml-auto color-third"></i>
                    </template>
                    <b-dropdown-item
                      v-b-modal.GeneralModal
                      @click="reportModal()"
                      ><i
                        class="ri-flag-2-fill mr-3 mr-sm-2 align-bottom top-minus-1"
                      ></i
                      >Kötüye kullanım bildir</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
              <div class="announcement">
                <div class="mb-3">
                  Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                  kullanıldığına ve nasıl masaüstü uygulama yapıldığına 19
                  derslik bir eğitim ile detaylı bir şekilde değinmeye çalıştım.
                  Bu eğitime ulaşmak için aşağıdaki link tanımlayamıyorum. Fakat
                  eğitime; Udemy üzerinden benim profilime girerek tamamen
                  ücretsiz bir şekilde erişebilir ve Udemy kurs koleksiyonunuza
                  ekleyebilirsiniz.
                </div>

                <div class="d-flex justify-content-between">
                  <div class="d-flex color-third">
                    <div class="d-flex align-items-center mr-3">
                      <a role="button">
                        <i class="ri-thumb-up-fill color-third mr-2"></i> </a
                      >3
                    </div>
                    <div class="d-flex align-items-center">
                      <a role="button">
                        <i
                          class="ri-thumb-down-fill color-third mr-2 top-minus-1"
                        ></i></a
                      >3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-wrapper pb-5">
              <div class="mb-3">
                <div class="d-flex align-items-center">
                  <a href="#" class="d-flex align-items-center">
                    <div
                      class="wh-48 rounded-circle bg-image mr-3"
                      style="
                        background-image: url(http://ui.ubit.com.tr/profile-picture.jpg);
                      "
                    ></div>
                    <div class="educator-info">
                      <div class="text-capitalize text-truncate">
                        Cihan Yılmaz
                      </div>
                      <div class="d-flex align-items-center">
                        <star-rating
                      class="star-smaller star-rating-text-none mr-3 top-minus-1"
                      :rating="5"
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
                      <div class="color-second text-capitalize text-truncate font-weight-normal mb-0 pt-1">2 hafta önce</div>
                    </div>
                    </div>
                  </a>

                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Right align"
                    variant="link"
                    class="dropdown ml-auto after-none"
                  >
                    <template #button-content class="py-0">
                      <i class="ri-more-line ml-auto color-third"></i>
                    </template>
                    <b-dropdown-item
                      v-b-modal.GeneralModal
                      @click="reportModal()"
                      ><i
                        class="ri-flag-2-fill mr-3 mr-sm-2 align-bottom top-minus-1"
                      ></i
                      >Kötüye kullanım bildir</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
              <div class="announcement">
                <div class="mb-3">
                  Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                  kullanıldığına ve nasıl masaüstü uygulama yapıldığına 19
                  derslik bir eğitim ile detaylı bir şekilde değinmeye çalıştım.
                  Bu eğitime ulaşmak için aşağıdaki link tanımlayamıyorum. Fakat
                  eğitime; Udemy üzerinden benim profilime girerek tamamen
                  ücretsiz bir şekilde erişebilir ve Udemy kurs koleksiyonunuza
                  ekleyebilirsiniz.
                </div>

                <div class="d-flex justify-content-between">
                  <div class="d-flex color-third">
                    <div class="d-flex align-items-center mr-3">
                      <a role="button">
                        <i class="ri-thumb-up-fill color-third mr-2"></i> </a
                      >3
                    </div>
                    <div class="d-flex align-items-center">
                      <a role="button">
                        <i
                          class="ri-thumb-down-fill color-third mr-2 top-minus-1"
                        ></i></a
                      >3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- -->
            <div class="spinner text-center py-4">
              <b-spinner label="Spinning" class="color-third"></b-spinner>
            </div>
          </div>
          <div class="pt-2">
            <h3 class="mb-4 pr-5">Benzer Kurslar</h3>
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
                                 <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
                                <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
                               <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
                               <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                      <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
                              <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
                             <div @click="courseFavEkle()" v-show="!courseFavVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="courseFavCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="courseFavCikar()" v-show="courseFavVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!courseFavCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="courseFavCheck"></b-spinner>Favorilere Eklendi
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
                       <div class="color-second text-small mt-2">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
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
        <div class="col-12 col-md-4 col-lg-3">
          <div class="sidebar">
            <div class="videojs-poster-cover mb-4" v-b-modal.GeneralModal  @click="previewCourse()">
              <template>
                <div class="embed-responsive embed-responsive-16by9 rounded">
                  <video
                    ref="videoPlayer"
                    data-setup='{"poster":"https://images.techhive.com/images/article/2014/12/hbo-the-wire-1-100533556-large.jpg"}'
                    class="video video-js rounded embed-responsive-item"
                  ></video>
                </div>
              </template>
            </div>
            <div class="mb-2 pb-1">
              <span class="badge badge-brand">Efsane Cuma İndirimi</span>
            </div>
            <div class="mb-4">
              <div class="color-second text-small">%86 İndirim</div>
              <div class="h2 color-second mb-0 mr-3 d-inline-block"><s>59,99₺</s></div>
              <div class="h2 mb-0 d-inline-block">27,99₺</div>
            </div>
            <div class="mb-3">
              <div class="mb-2 pb-1">
                <button type="button" class="btn btn-primary btn-block" @click="addCart()">
                  <b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="showSpinner"></b-spinner>Sepete Ekle
                </button>
              </div>
              <button type="button" class="btn btn-secondary btn-block">
                Hemen Satın Al
              </button>
            </div>
            <div class="text-smaller color-second text-center">
              30 Gün İçinde Para İade Garantisi
            </div>
            <div class="mt-4 pt-2">
              <div class="text-small mb-2">
                <i
                  class="ri-time-line mr-3 mr-sm-2 align-bottom top-minus-1"
                ></i
                >13 saatlik video içeriği
              </div>
              <div class="text-small mb-2">
                <i
                  class="ri-refresh-line mr-3 mr-sm-2 align-bottom top-minus-1"
                ></i
                >Ömür boyu tam erişim
              </div>
              <div class="text-small mb-2">
                <i
                  class="ri-smartphone-line mr-3 mr-sm-2 align-bottom top-minus-1"
                ></i
                >Mobil ve TV'den erişim
              </div>
              <div class="text-small mb-2">
                <i
                  class="ri-award-line mr-3 mr-sm-2 align-bottom top-minus-1"
                ></i
                >Bitirme sertifikası
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shareModal></shareModal>
    <GeneralModal :size="size">
     <template v-slot:GeneralModalTitle>
        <div v-if="generalModalMode == 'report'">
           <h3>Kötüye Kullanım Bildir</h3>
        </div>
        <div v-else>
          <h3>Kurs Önizleme</h3>
        </div>
      </template>
        <template v-slot:GeneralModalContent>
              <div v-if="generalModalMode == 'report'">
            <div class="alert alert-success mb-4" role="alert">
                <div class="alert-content w-100 d-inline-block">
                      <div class="my-1"><strong>Talebiniz başarıyla gönderildi</strong></div>
                </div>
          </div>
                 <b-form-group label="Sorun Türü">
                    <template>
                      <div>
                        <multiselect placeholder="Seçiniz"
                          v-model="selected"
                          :options="options1" :select-label="''" :selected-label="''" deselect-label="" :allow-empty="false">
                          <span slot="noResult">Sonuç bulunamadı</span>
                        </multiselect>
                      </div>
                    </template>
                </b-form-group>
              <b-form-group>
                <b-form-textarea
                  class="overflow-auto"
                  id="textarea"
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
               </b-form-group>
                <button type="button" class="btn d-flex btn-primary ml-auto">Gönder</button>
        </div>
        <div v-else>
            <div>
            <template>
            <div>
              <video
                ref="videoPlayer"
                class="video video-js rounded embed-responsive embed-responsive-16by9"
                preload="auto" controlsList="nodownload" data-setup='{ "controls": true, "autoplay": false, "preload": "auto" }'>
                <source src="../assets/video/lesson-1.mp4" type="video/mp4"/>
              </video>
            </div>
          </template>
          </div>
        </div>
        </template>
    </GeneralModal>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import StarRating from "vue-star-rating"
import ShareModal from "../components/modal/shareModal"
import GeneralModal from "../components/modal/GeneralModal"
import videojs from "video.js"
export default {
  name: "KursDetay",
  components: {
    StarRating,
    ShareModal,
    GeneralModal,
    VueSlickCarousel
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          controls: true,
          autoplay: true,
        };
      },
    },
  },
  data() {
    return {
      size:"md",
      showSpinner:false,
      favCheck:false,
      favVal:false,
      courseFavCheck:false,
      courseFavVal:false,
      clicked:false,
      text: "demo",
      selected: null,
      options1: ["Seçenek 1", "Seçenek 2", "Seçenek 3"],
      generalModalMode: null,
      player: null,
      value: 65,
      value1: 67,
      value2: 24,
      value3: 6,
      value4: 1,
      value5: 2,
      searchQuery: null,
      resources: [
        {
          courseTitle: "1. Kurs Tanıtımı",
          courseTime: " 5 dakika",
          category: "a",
        },
        {
          courseTitle: "2. Vue.js Nedir? Neden Vue.js Kullanmalıyız?",
          courseTime: " 8 dakika",
          category: "a",
        },
        {
          courseTitle: "3. Vue, React, Angular Kıyaslaması",
          courseTime: " 8 dakika",
          category: "a",
        },
        {
          courseTitle: "4. İlk Vue.js Uygulamamızı oluşturalım",
          courseTime: " 8 dakika",
          category: "a",
        },
      ],
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
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2
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
    addCart(){
      this.showSpinner = true
      setTimeout(() => this.showSpinner = false, 1000);
    },
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
         }, 1000);

    },
    courseFavCikar(){
      this.courseFavVal = true
         this.courseFavCheck = true
       var that = this;
        setTimeout(function() { 
              that.courseFavCheck = false,
             that.courseFavVal = false
         }, 1000);

    },
    reportModal(){
      this.generalModalMode = 'report';
    },
    previewCourse(){
    this.generalModalMode = 'previewCourse';
    this.size = "lg";
  
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
      this.$root.$on('bv::modal::shown', (bvEvent, modalId) => {
      console.log('Modal is about to be shown', bvEvent, modalId)
       this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this)
      }
    );
    })
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this)
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }

    this.saveVideoLastTime()
    clearInterval(this.timer)
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.courseTitle.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
  },
};
</script>
