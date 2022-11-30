<template>
  <div class="main-content">
    <div class="container large">
      <h2 class="gradient-color mb-4">Anket</h2>
      <div class="row">
        <div class="col-12 col-lg-9 pb-4 pb-lg-0 mb-5 mb-lg-0">
          <div class="">
             <div class="d-flex justify-content-between flex-column flex-md-row mb-4">
              <div class="mb-2 mb-md-0">{{ slideIndex + 1  }}/3</div>
              <div class="color-second mb-2 mb-md-0">4 yanlış cevap, 1 doğru cevabı götürecektir.</div>
              <div class="mb-2 mb-md-0">
                <i class="ri-time-line mr-3 align-bottom top-minus-1"></i>09:30
              </div>
            </div>
            <template>
              <VueSlickCarousel v-bind="settings" ref="carousel" :arrows="false" @afterChange="changeDomSliderIndex">
             <div class="mb-4">
                <div class="curriculum-question-wrapper">
                <div class="mb-4">1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quaerat dolore eligendi, dolor ipsa veniam corrupti aut dignissimos maiores rerum blanditiis recusandae voluptas libero magni vitae quisquam deserunt, qui soluta.</div>
                <div class="py-3 px-3 mb-2 rounded q-option wrong" role="button">A) Kütüphane</div>
                <div class="py-3 px-3 mb-2 rounded q-option selected" role="button">B) Framework</div>
                <div class="py-3 px-3 mb-2 rounded q-option correct" role="button">C) Veritabanı</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">D) Plugin</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">E) Extension</div>
                </div> 
              </div>
               <div class="mb-4">
               <div class="curriculum-question-wrapper">
               <div class="mb-4">Vue js kullanmanın avantajları nelerdir?</div>
               <b-form-group class="mb-3">
                    <b-form-textarea
                      id="textarea"
                      rows="5"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
            </div>
              </div>
               <div class="mb-4">
                <div class="curriculum-question-wrapper">
                <div class="mb-4">3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quaerat dolore eligendi, dolor ipsa veniam corrupti aut dignissimos maiores rerum blanditiis recusandae voluptas libero magni vitae quisquam deserunt, qui soluta.</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">A) Kütüphane</div>
                <div class="py-3 px-3 mb-2 rounded q-option selected" role="button">B) Framework</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">C) Veritabanı</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">D) Plugin</div>
                <div class="py-3 px-3 mb-2 rounded q-option" role="button">E) Extension</div>
                </div> 
              </div>

              <template #customPaging="page">
                <div class="slick-number-pager">
                  {{ page + 1 }}
                </div>
               </template>
               
              </VueSlickCarousel>
            </template>
          </div>
           <div class="d-flex justify-content-between mt-5">
             <button class="btn btn-secondary d-block d-sm-inline-block" @click="showPrev">Önceki</button>
              <a v-b-modal.ExamEnd class="btn btn-primary d-block d-sm-inline-block" >Anketi Bitir</a>
              <button class="btn btn-secondary d-block d-sm-inline-block" @click="showNext">Sonraki</button>
           </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="sidebar">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-12 col-xl-7">
                <div class="bg-second rounded mb-3 pt-3 pb-4 px-3 ">
                 <div class="px-1">
                    <div class="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <b class="mb-0">%65</b>
                    <a class="color-second" v-b-modal.GeneralModal @click="progressModal()">Detaylar</a>
                  </div>
                  <b-progress
                    :value="value"
                    class="bg-third"
                    variant="success"
                  ></b-progress>
                   </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-12 col-xl-5 pl-sm-0 pl-lg-3 pl-xl-0">
                <div class="grade-wrapper bg-second rounded position-relative mb-3 pt-2 pb-3 px-3">
                 <div class="px-1 pt-1">
                    <h3 class="grade-title text-right mt-2 mb-0">
                    4.7<span class="slash">/</span>5
                  </h3>
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
              </div>
            </div>
             <div class="panel panel-default">
              <div class="search-input position-relative w-100 mb-3">
                <b-form-input
                  class="mr-sm-2 w-100"
                  placeholder="Arama..."
                  v-model="searchQuery"
                ></b-form-input>
                <button class="btn"><i class="ri-search-line"></i></button>
              </div>
              <template>
                <div class="accordion custom-accordion" role="tablist">
                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-1>
                        Bölüm 1: Başlangıç
                      </button>
                      <div class="color-second pl-2 ml-1">
                        10 <span class="slash">/</span> 10 | 45 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-2
                      >
                        Bölüm 2: Vue.js ile DOM Etkileşimleri
                      </button>
                      <div class="color-second pl-2 ml-1">
                        4 <span class="slash">/</span> 6 | 35 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-2"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-3
                      >
                        Bölüm 3: Koşul Kullanımı ve Listeleri
                      </button>
                      <div class="color-second pl-2 ml-1">
                        5 <span class="slash">/</span> 7 | 38 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-4"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-4
                      >
                        Bölüm 4: İlk Proje | Canavar Avı Oyunu
                      </button>
                      <div class="color-second pl-2 ml-1">
                        5 <span class="slash">/</span> 7 | 38 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-5"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-6
                      >
                        Bölüm 5: VueJS Instance Nedir?
                      </button>
                      <div class="color-second pl-2 ml-1">
                        10 <span class="slash">/</span> 14 | 38 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-6"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                        <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-7
                      >
                        Bölüm 6: Webpack ve Vue CLI ile Gerçek
                      </button>
                      <div class="color-second pl-2 ml-1">
                        10 <span class="slash">/</span> 14 | 38 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-7"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                        <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-8
                      >
                        Bölüm 7: Component Yapısına Giriş
                      </button>
                      <div class="color-second pl-2 ml-1">
                        8 <span class="slash">/</span> 13 | 54 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-8"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-9
                      >
                        Bölüm 8: Component'ler Arası İletişim
                      </button>
                      <div class="color-second pl-2 ml-1">
                        11 <span class="slash">/</span> 14 | 31 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-9"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text>{{ text }}</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-10
                      >
                        Bölüm 9: Gelişmiş Component Kullanımı
                      </button>
                      <div class="color-second pl-2 ml-1">
                        11 <span class="slash">/</span> 14 | 40 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-10"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                       <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-11
                      >
                        Bölüm 10: Proje | Ürün Ekleme
                      </button>
                      <div class="color-second pl-2 ml-1">
                        9 <span class="slash">/</span> 12 | 42 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-11"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                       <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-12
                      >
                        Bölüm 11: Input ve Form Elementleriye
                      </button>
                      <div class="color-second pl-2 ml-1">
                        12 <span class="slash">/</span> 15 | 38 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-12"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                        <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-13
                      >
                        Bölüm 12: Directive Kullanımı
                      </button>
                      <div class="color-second pl-2 ml-1">
                        11 <span class="slash">/</span> 14 | 34 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-13"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                        <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-14
                      >
                        Bölüm 13: Filters ve Mixins Kullanımı
                      </button>
                      <div class="color-second pl-2 ml-1">
                        11 <span class="slash">/</span> 14 | 40 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-14"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
                                {{ item.courseTime }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card class="shadow-none" no-body>
                    <div class="card-header border-0 p-2" role="tab">
                      <button
                        class="btn background-transparent pb-1"
                        v-b-toggle.accordion-15
                      >
                        Bölüm 14:Animasyonlar ve Geçişler
                      </button>
                      <div class="color-second pl-2 ml-1">
                        11 <span class="slash">/</span> 14 | 40 dakika
                      </div>
                    </div>
                    <b-collapse
                      id="accordion-15"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                         <b-card-body class="curriculum-card">
                        <div v-for="item in resultQuery" :key="item.id" class="curriculum-item">
                          <div class="curriculum-wrapper d-flex mb-3">
                            <div class="checkbox-group">
                              <input
                                type="checkbox"
                                class="check-group"
                                name="check"
                                value="1"
                              />
                              <label class="form-check-label" for="check">
                                <span class="check"></span>
                                <span class="box"></span>
                              </label>
                            </div>
                            <div class="curriculum-content">
                              <div><a href="#">{{ item.courseTitle }}</a></div>
                              <div class="color-second">
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
          </div>
        </div>
      </div>
    </div>

    <GeneralModal>
      <template v-slot:GeneralModalTitle>
        <div v-if="generalModalMode == 'report'">
           <h3>İlerleme Durumu</h3>
        </div>
        <div v-else>
          <h3>Uyarı</h3>
        </div>
      </template>
      <template v-slot:GeneralModalContent>
        <div v-if="generalModalMode == 'report'">
                <div class="mb-4 pb-2"><button type="button" class="btn btn-block btn-secondary">İlerleme Durumunu Sıfırla</button></div>          
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"><i class="ri-checkbox-circle-fill color-green"></i></span>Bölüm 1: Başlangıç</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"><i class="ri-checkbox-circle-fill color-green"></i></span>Bölüm 2: Vue.js ile DOM Etkileşimleri</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"><i class="ri-checkbox-circle-fill color-green"></i></span>Bölüm 3: Koşul Kullanımı ve Listeleri</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"><i class="ri-checkbox-circle-fill color-green"></i></span>Bölüm 4: İlk Proje | Canavar Avı Oyunu</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 5: VueJS Instance Nedir?</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 6: Webpack ve Vue CLI ile Gerçek</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 7: Component Yapısına Giriş</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 8: Component'ler Arası İletişim</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 9: Gelişmiş Component Kullanımı</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 10: Proje | Ürün Ekleme</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 11: Input ve Form Elementleriye</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 12: Directive Kullanımı</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 13: Filters ve Mixins Kullanımı</a></div>
                <div class="mb-3 d-flex align-items-center"><a href="" class="d-flex color-second"><span class="wh-24 mr-2 ri-lg top-minus-2 d-flex align-items-center"></span>Bölüm 14:Animasyonlar ve Geçişler</a></div>
        </div>
        <div v-else class="mb-3 text-center">
          <div class="mb-1">
            <i class="ri-time-line ri-5x color-third"></i>
          </div>
          Süreniz doldu, cevaplarınız sisteme aktarılmıştır.</div>
      </template>
    </GeneralModal>
    <ExamEnd>
        <template v-slot:ExamEndTitle>
          <h3>Uyarı</h3>
      </template>
       <template v-slot:ExamEndContent>
           <div>Anketi bitirmek istediğinize emin misiniz?</div>
       </template>
    </ExamEnd>
  </div>
</template>
<script>
import GeneralModal from "../components/modal/GeneralModal";
import ExamEnd from "../components/modal/ExamEnd";
import StarRating from "vue-star-rating";
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
export default {
  name: "EgitimAnket",
  components: {
    StarRating,
    GeneralModal,
    ExamEnd,
    VueSlickCarousel,
  },
  data() {
    return {
      slideIndex:0,
      value: 65.333333333,
      generalModalMode: null,
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
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "adaptiveHeight": true,
        
        
    }
    };
  },
  methods: {
    changeDomSliderIndex(newIndex){
      this.slideIndex = newIndex
    },
    showNext() {
        this.$refs.carousel.next()
      },
      showPrev() {
        this.$refs.carousel.prev()
      },
      progressModal(){
      this.generalModalMode = 'report';
      },
    remaincharCount: function () {
      if (this.message.length > this.maxcharacter) {
        // this.remaincharactersText = this.maxcharacter;
        this.remaincharactersText = 0;
      } else {
        var remainCharacters = this.maxcharacter - this.message.length;
        this.remaincharactersText = remainCharacters;
      }
      if (this.comment.length > this.maxcharacter) {
        // this.remaincharactersText = this.maxcharacter;
        this.remaincharactersText = 0;
      } else {
        var commentRemainCharacters = this.maxcharacter - this.comment.length;
        this.commentRemaincharactersText = commentRemainCharacters;
      }
    },
    trackTime(e) {
      console.log(Math.trunc(e.target.currentTime));
      if (
        Math.trunc(e.target.currentTime) ==
        this.stopTimings[this.stopTimingsIndex]
      ) {
        this.player.pause();
        this.$refs.questionModal.showModal();
        this.stopTimingsIndex++;
        // $('.curriculum-wrapper input.check-group').prop( "checked" );
      }
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

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
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
  mounted(){
    setTimeout(function() { this.closed = false; }, 1000);
    console.log(this.$refs.carousel)
  }
};
</script>
