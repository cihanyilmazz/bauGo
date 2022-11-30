<template>
  <div class="main-content">
    <div class="container large">
      <h2 class="gradient-color mb-4">
        Sıfırdan İleri Seviye Vue.JS Eğitimi ve Uygulama Geliştirme
      </h2>
      <div class="row">
        <div class="col-12 col-lg-9">
          <template>
            <div>
              <video
                ref="videoPlayer"
                @timeupdate="trackTime"
                class="video video-js embed-responsive embed-responsive-16by9"
              >
                <source src="../assets/video/lesson-1.mp4" type="video/mp4" />
              </video>
            </div>
          </template>
          <!-- <div class="embed-responsive embed-responsive-16by9 rounded">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/C5QFHp1oAws" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> -->
          <div class="curriculum-tabs mt-4 position-relative">
           
         <div class="buttons-for-tabs d-flex">
             <!--  <div class="align-items-center mx-2">
                 <button
              type="button"
              class="btn btn-link btn-sm d-flex">
              <i class="ri-folder-fill mr-2"></i>Arşivle</button>
              </div> -->

              <div class="d-flex align-items-center mx-2">
                 <button
              type="button"
              class="btn btn-link d-flex">
              <i class="ri-folder-fill mr-3 mr-sm-2 brand-color align-bottom"></i>Arşivlendi</button>
              </div>
           <!-- <button
              type="button"
              class="btn btn-link btn-sm d-flex align-items-center mx-2 color-second">
              <i class="ri-star-fill mr-3 mr-sm-2"></i>Favorilere Ekle</button> -->
            <div class="d-flex align-items-center mx-2">
                <button
              type="button"
              class="btn btn-link btn btn-link d-flex align-items-center text-left">
              <i class="ri-star-fill mr-3 mr-sm-2 color-yellow align-bottom"></i>Favorilere Eklendi</button>
            </div>
              <div class="d-flex align-items-center mx-2">
                <button
            v-b-modal.ShareModal
              type="button"
              class="btn btn-link">
              <i class="ri-share-fill mr-0 mr-sm-2 align-bottom color-first"></i><span class="d-none d-sm-inline-block">Paylaş</span></button>
              </div>
         </div>
            <b-tabs content-class="py-5">
              <div class="row">
                <div class="col-12 col-md-8 offset-md-2">
                  <b-tab title="Tartışma">
                    <div class="mb-5 pb-1">
                      <b-form-group>
                        
                        <b-form-textarea
                          class="overflow-auto"
                          id="textarea"
                          rows="3"
                          max-rows="6"
                          v-model="comment"
                          @keyup="remaincharCount()"
                          maxlength="500"
                        ></b-form-textarea>
                      </b-form-group>
                      <div class="mb-5">
                        <div class="d-flex">
                          <p class="d-flex align-items-top mb-0 color-third">
                            {{ commentRemaincharactersText }}
                          </p>
                          <button
                            type="button"
                            class="btn btn-primary d-flex align-items-center ml-auto"
                          >
                            Gönder
                          </button>
                        </div>
                      </div>
                      <div class="comment-wrapper">
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
                                  Cihan Yılmaz<span class="color-second mx-2"
                                    >&middot;</span
                                  ><span
                                    class="brand-color text-smaller text-uppercase"
                                    >Eğitmen</span
                                  >
                                </div>
                                <div
                                  class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                                >
                                  1 hafta önce
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
                              <b-dropdown-item href="#">Sil</b-dropdown-item>
                              <b-dropdown-item href="#"
                                >Kötüye kullanım bildir</b-dropdown-item
                              >
                            </b-dropdown>
                          </div>
                        </div>
                        <div class="announcement">
                          <div class="mb-3">
                            Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                            kullanıldığına ve nasıl masaüstü uygulama
                            yapıldığına 19 derslik bir eğitim ile detaylı bir
                            şekilde değinmeye çalıştım. Bu eğitime ulaşmak için
                            aşağıdaki link tanımlayamıyorum. Fakat eğitime;
                            Udemy üzerinden benim profilime girerek tamamen
                            ücretsiz bir şekilde erişebilir ve Udemy kurs
                            koleksiyonunuza ekleyebilirsiniz. Giriş
                            seviyesindeki olan bu kursa gelecek tepkilere göre
                            profesyonel bir şekilde sıfırdan ileri seviye
                            eğitimini de hazırlamayı düşünüyorum.
                          </div>

                          <div class="d-flex justify-content-between">
                            <div class="d-flex color-third">
                              <div class="d-flex align-items-center mr-3">
                                <a role="button">
                                     <i class="ri-heart-fill color-third mr-2" 
                                    ></i>
                                
                                  </a
                                >3
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="ri-reply-fill color-third mr-2"></i>3
                              </div>
                            </div>
                            <div class="d-flex">
                               <a
                                        href="javascript:void(0)"
                                        class="d-flex align-items-center togglebutton"
                                        v-on:click="toggleBottom"
                                        :class="[ active1 ? 'color-first' : 'color-third',  ]"
                                        ><i
                                          class="ri-pencil-fill mr-2"
                                          :class="[active1 ? 'color-first' : 'color-third', ]"
                                        ></i
                                        >Yanıtla</a
                                      >
                            </div>
                          </div>
                         <vue-slide-up-down :active="active1">
                                    <div class="element">
                                      <fieldset class="pt-3" id="__BVID__69">
                                        <div>
                                          <b-form-textarea class="overflow-auto mt-2 mb-3" id="textarea" rows="3" max-rows="6"
                                            v-model="message"
                                            @keyup="remaincharCount()"
                                            maxlength="500"
                                            style="
                                              resize: none;
                                              overflow-y: scroll;
                                              height: 74px;
                                            "
                                          ></b-form-textarea>
                                        </div>
                                      </fieldset>
                                    </div>
                                      <div class="mb-5">
                            <div class="d-flex">
                              <p class="d-flex align-items-top mb-0 color-third text-small" >
                                {{ remaincharactersText }}
                              </p>
                              <button type="button" class="btn btn-sm btn-primary d-flex align-items-center ml-auto">
                                Gönder
                              </button>
                            </div>
                          </div>
                                  </vue-slide-up-down>
                          
                      
                          <div class="row mt-4">
                            <div class="col-12 col-md-11 offset-md-1">
                              <!-- comment -->
                              <div class="comment-wrapper mb-4">
                                <div class="mb-3">
                                  <div class="d-flex align-items-center">
                                    <a
                                      href="#"
                                      class="d-flex align-items-center"
                                    >
                                      <div
                                        class="wh-48 rounded-circle bg-image mr-3"
                                        style="
                                          background-image: url(https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg);
                                        "
                                      ></div>
                                      <div class="educator-info">
                                        <div
                                          class="text-capitalize text-truncate"
                                        >
                                          Ayşe Keskin
                                        </div>
                                        <div
                                          class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                                        >
                                          5 gün önce
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
                                        <i
                                          class="ri-more-line ml-auto color-third"
                                        ></i>
                                      </template>
                                      <b-dropdown-item href="#"
                                        >Sil</b-dropdown-item
                                      >
                                      <b-dropdown-item href="#"
                                        >Kötüye kullanım bildir</b-dropdown-item
                                      >
                                    </b-dropdown>
                                  </div>
                                </div>
                                <div class="announcement">
                                  <div class="mb-3">
                                    Giriş seviyesinde Electron.js' in ne
                                    olduğuna, nasıl kullanıldığına ve nasıl
                                    masaüstü uygulama yapıldığına 19 derslik bir
                                    eğitim ile detaylı bir şekilde değinmeye
                                    çalıştım. Bu eğitime ulaşmak için aşağıdaki
                                    link tanımlayamıyorum. Fakat eğitime; Udemy
                                    üzerinden benim profilime girerek tamamen
                                    ücretsiz bir şekilde erişebilir ve Udemy
                                    kurs koleksiyonunuza ekleyebilirsiniz.
                                  </div>

                                  <div class="d-flex justify-content-between">
                                    <div class="d-flex color-third">
                                      <div
                                        class="d-flex align-items-center mr-3"
                                      >
                                        <a href="#"><i class="ri-heart-fill color-third mr-2"></i></a>
                                      </div>
                                      <div class="d-flex align-items-center">
                                        <i
                                          class="ri-reply-fill color-third mr-2"
                                        ></i
                                        >2
                                      </div>
                                    </div>
                                    <div class="d-flex">
                                      <a
                                        href="javascript:void(0)"
                                        class="d-flex align-items-center togglebutton"
                                        v-on:click="toggleBottom"
                                        :class="[ active1 ? 'color-first' : 'color-third',  ]"
                                        ><i
                                          class="ri-pencil-fill mr-2"
                                          :class="[active1 ? 'color-first' : 'color-third', ]"
                                        ></i
                                        >Yanıtla</a
                                      >
                                    </div>
                                  </div>
                                  <vue-slide-up-down :active="active1">
                                    <div class="element">
                                      <fieldset class="pt-3" id="__BVID__69">
                                        <div>
                                          <b-form-textarea class="overflow-auto mt-2 mb-3" id="textarea" rows="3" max-rows="6"
                                            v-model="message"
                                            @keyup="remaincharCount()"
                                            maxlength="500"
                                            style="
                                              resize: none;
                                              overflow-y: scroll;
                                              height: 74px;
                                            "
                                          ></b-form-textarea>
                                        </div>
                                      </fieldset>
                                    </div>
                                  </vue-slide-up-down>
                                </div>
                              </div>
                              <!--  D-none classı gizlemek için kullanıldı-->
                              <div class="hide-comment-wrapper d-none">
                                    <div class="hide-coment">
                                  <div class="comment-wrapper mb-4">
                                    <div class="mb-3">
                                      <div class="d-flex align-items-center">
                                        <a
                                          href="#"
                                          class="d-flex align-items-center"
                                        >
                                          <div
                                            class="wh-48 rounded-circle bg-image mr-3"
                                            style="
                                              background-image: url(https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg);
                                            "
                                          ></div>
                                          <div class="educator-info">
                                            <div
                                              class="text-capitalize text-truncate"
                                            > Kerem Polat</div>
                                            <div
                                              class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                                            >4 gün önce</div>
                                          </div>
                                        </a>

                                        <b-dropdown
                                          id="dropdown-right"
                                          right
                                          text="Right align"
                                          variant="link"
                                          class="dropdown ml-auto after-none"
                                        >
                                          <template
                                            #button-content
                                            class="py-0"
                                          >
                                            <i
                                              class="ri-more-line ml-auto color-third"
                                            ></i>
                                          </template>
                                          <b-dropdown-item href="#"
                                            >Sil</b-dropdown-item
                                          >
                                          <b-dropdown-item href="#"
                                            >Kötüye kullanım
                                            bildir</b-dropdown-item
                                          >
                                        </b-dropdown>
                                      </div>
                                    </div>
                                    <div class="announcement">
                                      <div class="mb-3">
                                        <a href="" class="brand-color"
                                          >@Ayşe Keskin</a
                                        >
                                        Giriş seviyesinde Electron.js' in ne
                                        olduğuna, nasıl kullanıldığına ve nasıl
                                        masaüstü uygulama yapıldığına 19 derslik
                                        bir eğitim ile detaylı bir şekilde
                                        değinmeye çalıştım. Bu eğitime ulaşmak
                                        için aşağıdaki link tanımlayamıyorum.
                                        Fakat eğitime; Udemy üzerinden benim
                                        profilime girerek tamamen ücretsiz bir
                                        şekilde erişebilir ve Udemy kurs
                                        koleksiyonunuza ekleyebilirsiniz.
                                      </div>

                                      <div
                                        class="d-flex justify-content-between"
                                      >
                                        <div class="d-flex color-third">
                                          <div
                                            class="d-flex align-items-center mr-3"
                                          >
                                              <a href="#"><i class="ri-heart-fill color-third mr-2"></i></a>
                                          </div>
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <i
                                              class="ri-reply-fill color-third mr-2"
                                            ></i>
                                          </div>
                                        </div>
                                        <div class="d-flex">
                                          <a
                                            href="#"
                                            class="color-third d-flex align-items-center"
                                            ><i
                                              class="ri-pencil-fill color-third mr-2"
                                            ></i
                                            >Yanıtla</a
                                          >
                                        </div>
                                      </div>
                                      <b-form-group class="mt-3 d-none">
                                        <b-form-textarea
                                          class="overflow-hidden"
                                          id="textarea"
                                          rows="4"
                                          max-rows="6"
                                        ></b-form-textarea>
                                      </b-form-group>
                                    </div>
                                  </div>
                                  <!-- -->
                                  <div class="comment-wrapper mb-4">
                                    <div class="mb-3">
                                      <div class="d-flex align-items-center">
                                        <a
                                          href="#"
                                          class="d-flex align-items-center"
                                        >
                                          <div
                                            class="wh-48 rounded-circle bg-image mr-3"
                                            style="
                                              background-image: url(https://i0.wp.com/www.engage-innovate.com/wp-content/uploads/2019/01/Jolene-Foo-Profile-Square.jpg);
                                            "
                                          ></div>
                                          <div class="educator-info">
                                            <div
                                              class="text-capitalize text-truncate"
                                            >
                                              Aynur Yıldız
                                            </div>
                                            <div
                                              class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                                            >
                                              3 gün önce
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
                                          <template
                                            #button-content
                                            class="py-0"
                                          >
                                            <i
                                              class="ri-more-line ml-auto color-third"
                                            ></i>
                                          </template>
                                          <b-dropdown-item href="#"
                                            >Sil</b-dropdown-item
                                          >
                                          <b-dropdown-item href="#"
                                            >Kötüye kullanım
                                            bildir</b-dropdown-item
                                          >
                                        </b-dropdown>
                                      </div>
                                    </div>
                                    <div class="announcement">
                                      <div class="mb-3">
                                        <a href="" class="brand-color"
                                          >@Kerem Polat</a
                                        >
                                        Giriş seviyesinde Electron.js' in ne
                                        olduğuna, nasıl kullanıldığına ve nasıl
                                        masaüstü uygulama yapıldığına 19 derslik
                                        bir eğitim ile detaylı bir şekilde
                                        değinmeye çalıştım. Bu eğitime ulaşmak
                                        için aşağıdaki link tanımlayamıyorum.
                                        Fakat eğitime; Udemy üzerinden benim
                                        profilime girerek tamamen ücretsiz bir
                                        şekilde erişebilir ve Udemy kurs
                                        koleksiyonunuza ekleyebilirsiniz.
                                      </div>

                                      <div
                                        class="d-flex justify-content-between"
                                      >
                                        <div class="d-flex color-third">
                                          <div
                                            class="d-flex align-items-center mr-3"
                                          >
                                             <a href="#"><i class="ri-heart-fill color-third mr-2"></i></a>
                                          </div>
                                          <div
                                            class="d-flex align-items-center"
                                          >
                                            <i
                                              class="ri-reply-fill color-third mr-2"
                                            ></i>
                                          </div>
                                        </div>
                                        <div class="d-flex">
                                          <a
                                            href="#"
                                            class="color-third d-flex align-items-center"
                                            ><i
                                              class="ri-pencil-fill color-third mr-2"
                                            ></i
                                            >Yanıtla</a
                                          >
                                        </div>
                                      </div>
                                      <b-form-group class="mt-3 d-none">
                                        <b-form-textarea
                                          class="overflow-hidden"
                                          id="textarea"
                                          rows="4"
                                          max-rows="6"
                                        ></b-form-textarea>
                                      </b-form-group>
                                    </div>
                                  </div>
                                  <!-- -->
                                </div>
                               
                                <div  class="show-replys text-center color-third pb-3">
                                  <a href="javascript:void(0)" class=" d-flex align-items-center justify-content-center text-smaller" >
                                    Daha fazla yanıt göster<i class="ri-arrow-down-line  ml-2"></i>
                                    </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- comment -->
                      <div class="comment-wrapper mb-4">
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
                                <div
                                  class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                                >
                                  6 gün önce
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
                              <b-dropdown-item href="#">Sil</b-dropdown-item>
                              <b-dropdown-item href="#"
                                >Kötüye kullanım bildir</b-dropdown-item
                              >
                            </b-dropdown>
                          </div>
                        </div>
                        <div class="announcement">
                          <div class="mb-3">
                            Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                            kullanıldığına ve nasıl masaüstü uygulama
                            yapıldığına 19 derslik bir eğitim ile detaylı bir
                            şekilde değinmeye çalıştım. Bu eğitime ulaşmak için
                            aşağıdaki link tanımlayamıyorum. Fakat eğitime;
                            Udemy üzerinden benim profilime girerek tamamen
                            ücretsiz bir şekilde erişebilir ve Udemy kurs
                            koleksiyonunuza ekleyebilirsiniz.
                          </div>

                          <div class="d-flex justify-content-between">
                            <div class="d-flex color-third">
                              <div class="d-flex align-items-center mr-3">
                                 <a href="#"><i class="ri-heart-fill color-third mr-2"></i></a>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="ri-reply-fill color-third mr-2"></i>2
                              </div>
                            </div>
                            <div class="d-flex">
                              <a
                                href="#"
                                class="color-third d-flex align-items-center"
                                ><i class="ri-pencil-fill color-third mr-2"></i
                                >Yanıtla</a
                              >
                            </div>
                          </div>
                          <b-form-group class="mt-3 d-none">
                            <b-form-textarea
                              class="overflow-hidden"
                              id="textarea"
                              rows="4"
                              max-rows="6"
                            ></b-form-textarea>
                          </b-form-group>
                        </div>
                      </div>
                      <!-- -->
                      <div class="spinner text-center py-4">
                        <b-spinner
                          label="Spinning"
                          class="color-third"
                        ></b-spinner>
                      </div>
                    </div>
                  </b-tab>
                </div>
                <div class="col-12 col-md-8 offset-md-2">
                  <b-tab title="Duyurular">
                    <div class="mb-5 pb-1">
                      <div class="mb-4">
                        <a href="#">
                          <div class="d-flex align-items-center">
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
                              <div
                                class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                              >
                                1 hafta önce
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="announcement">
                        <h3 class="mb-4">
                          Ücretsiz Eğitim Duyurusu | Electron.js
                        </h3>
                        <img
                          src="https://img-a.udemycdn.com/redactor/raw/2019-04-10_10-10-38-65b942968d6cb556327437b3668328d1.jpg?CA3Vig_oqAAyee9tEv8Zcj3B5dWGB8A1FMVZrNtcLHwBdVyxmzrWSnmW9Og9xEzP8kZRerSIEW6fn0ZE-8gc8s6OrV_IetkNJKoByQzi7x9bo4zodOxH79AOuplmsgvJhx-VyLXcALv3mLvbF_GjvEcMPoaGNTAFB5kfmzDrlE1UZG1f"
                          width="100%"
                          class="rounded mb-3"
                        />
                        <p>
                          Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                          kullanıldığına ve nasıl masaüstü uygulama yapıldığına
                          19 derslik bir eğitim ile detaylı bir şekilde
                          değinmeye çalıştım. Bu eğitime ulaşmak için aşağıdaki
                          link tanımlayamıyorum. Fakat eğitime; Udemy üzerinden
                          benim profilime girerek tamamen ücretsiz bir şekilde
                          erişebilir ve Udemy kurs koleksiyonunuza
                          ekleyebilirsiniz.
                        </p>
                        <p>
                          Giriş seviyesindeki olan bu kursa gelecek tepkilere
                          göre profesyonel bir şekilde sıfırdan ileri seviye
                          eğitimini de hazırlamayı düşünüyorum.
                        </p>
                      </div>
                    </div>
                    <div class="mb-5 pb-1">
                      <div class="mb-4">
                        <a href="#">
                          <div class="d-flex align-items-center">
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
                              <div
                                class="color-second text-capitalize text-truncate font-weight-normal mb-0"
                              >
                                1 hafta önce
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="announcement">
                        <h3 class="mb-4">
                          Ücretsiz Eğitim Duyurusu | Electron.js
                        </h3>

                        <p>
                          Giriş seviyesinde Electron.js' in ne olduğuna, nasıl
                          kullanıldığına ve nasıl masaüstü uygulama yapıldığına
                          19 derslik bir eğitim ile detaylı bir şekilde
                          değinmeye çalıştım. Bu eğitime ulaşmak için aşağıdaki
                          link tanımlayamıyorum. Fakat eğitime; Udemy üzerinden
                          benim profilime girerek tamamen ücretsiz bir şekilde
                          erişebilir ve Udemy kurs koleksiyonunuza
                          ekleyebilirsiniz.
                        </p>
                        <p>
                          Giriş seviyesindeki olan bu kursa gelecek tepkilere
                          göre profesyonel bir şekilde sıfırdan ileri seviye
                          eğitimini de hazırlamayı düşünüyorum.
                        </p>
                      </div>
                    </div>
                  </b-tab>
                </div>
                <div class="col-12 col-md-8 offset-md-2">
                  <b-tab title="Genel Bakış">
                    <h3 class="mb-4">Bu Kurs Hakkında</h3>
                    <p>
                      Vue Router & Vuex dahildir! Angular ve React 'ın en modern
                      özelliklerine sahip JavaScript framework'ü VueJS 'i
                      öğrenin!
                    </p>
                    <div class="row mt-4">
                      <div class="col-12 col-sm-6 mb-2">
                        <b>Yetkinlik düzeyi</b>
                        <p>Tüm Düzeyler</p>
                      </div>

                      <div class="col-12 col-sm-6 mb-2">
                        <b>Öğrenci Sayısı</b>
                        <p>5112</p>
                      </div>

                      <div class="col-12 col-sm-6 mb-2">
                        <b>Diller</b>
                        <p>Türkçe</p>
                      </div>

                      <div class="col-12 col-sm-6 mb-2">
                        <b>Dersler</b>
                        <p>397</p>
                      </div>
                      <div class="col-12 col-sm-6 mb-2">
                        <b>Kazanım</b>
                        <p>Vue ile Uygulama Geliştirme</p>
                      </div>

                      <div class="col-12 col-sm-6 mb-2">
                        <b>Sertifika</b>
                        <p>Baugo sertifika</p>
                      </div>

                      <div class="col-12 col-md-2 mb-4"><b>Açıklama</b></div>
                      <div class="col-12 col-md-10 mb-4">
                        Frontend Frameworkleri, bize Reactivity verdiği için
                        inanılmaz popüler. Mobil Uygulamalardan bildiğimiz
                        mükemmel kullanıcı deneyimi, artık bu frameworkler
                        sayesinde bu mükemmel kullanıcı deneyimi tarayıcılarda
                        da mümkün. 
                      </div>

                      <div class="col-12 col-md-2 mb-4 mt-4">
                        <b>Eğitmen</b>
                      </div>
                      <div class="col-12 col-md-10 mb-4 mt-4">
                        <a href="#">
                          <div class="d-flex align-items-center">
                            <div
                              class="rounded-circle bg-image mr-4 wh-64"
                              style="
                                background-image: url(http://ui.ubit.com.tr/profile-picture.jpg);
                              "
                            ></div>
                            <div class="educator-info">
                              <div
                                class="text-capitalize text-truncate h4 mb-1"
                              >
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
                    </div>
                  </b-tab>
                </div>
              </div>
            </b-tabs>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="sidebar">
            <div class="row">
              <div class="col-12 col-md-7">
                <div class="bg-second rounded mb-3 pt-3 pb-4 px-4">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3 mt-1"
                  >
                    <b class="mb-0">%65</b>
                    <a class="color-second" v-b-modal.GeneralModal>Detaylar</a>
                  </div>
                  <b-progress
                    :value="value"
                    :max="max"
                    class="bg-third"
                    variant="success"
                  ></b-progress>
                </div>
              </div>
              <div class="col-12 col-md-5 pl-md-0">
                <div
                  class="grade-wrapper bg-second rounded position-relative mb-3 pt-2 pb-3 px-4"
                >
                  <h2 class="grade-title mt-2 mb-0">
                    4.7<span class="slash">/</span>5
                  </h2>
                  <star-rating
                    :increment="0.5"
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

                  <!-- <div class="d-flex grade-wrapper justify-content-center">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                          </div> -->
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
                        v-b-toggle.accordion-1
                      >
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
                      <b-card-body>
                        <div v-for="item in resultQuery" :key="item.id">
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
                              <div>{{ item.courseTitle }}</div>
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
    <!-- Modal -->
   <shareModal>
   </shareModal> 

    <!-- Questions Modal -->
    <Questions ref="questionModal">
      <template v-slot:optionQuestionsTitle>
        <h3>Soru 3</h3>
      </template>
      <template v-slot:curriculumQuestions>
        <div class="curriculum-question-wrapper">
          <div class="mb-4">
            <p>Css'te media sorgusu aşağıdaki gibi yazılır:</p>
            <code>
              <p class="mb-0">media (max-width 1200px) {</p>
              <p class="mb-0 pl-2">body {</p>
              <p class="mb-0 pl-3">font-size:1rem;</p>
              <p class="mb-0 pl-2">}</p>
              <p class="mb-0">}</p>
            </code>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div
                class="py-2 px-3 mb-2 rounded q-option text-center"
                role="button">Doğru</div>
            </div>
            <div class="col-12 col-md-6">
              <div
                class="py-2 px-3 mb-2 rounded q-option text-center correct"
                role="button"
              >
                Yanlış
              </div>
            </div>
          </div>
        </div>
      </template>
    </Questions>

    <!-- General Modal -->
    <GeneralModal ref="GeneralModal">
      <template v-slot:GeneralModalTitle>
        <h3>İlerleme Durumu</h3>
      </template>
      <template v-slot:GeneralModalContent>  
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
      </template>
    </GeneralModal>
    <!-- -->
  </div>
</template>
<script>
import Questions from "../components/modal/Questions";
import GeneralModal from "../components/modal/GeneralModal";
import StarRating from "vue-star-rating";
import videojs from "video.js";
import ShareModal from "../components/modal/shareModal";
export default {
  name: "EgitimVideo",
  components: {
    StarRating,
    Questions,
    ShareModal,
    GeneralModal
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
      player: null,
      active1: false,
      stopTimings: [2, 5, 7],
      stopTimingsIndex: 0,
      value: 32.333333333,
      favorited: false,
      animating: false,
      message: "",
      comment: "",
      maxcharacter: 500,
      remaincharactersText: "500",
      commentRemaincharactersText: "500",
      max: 50,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `,
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
    };
  },
  methods: {
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
    toggleBottom() {
      this.active1 = !this.active1;
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
        console.log("test");
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
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
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
};
</script>
