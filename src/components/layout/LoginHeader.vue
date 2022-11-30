<template>
  <header class="header login">
    <b-container>
      <div>
        <b-navbar toggleable="lg" type="dark">
          <div
            class="d-flex mobile-nav navbar-toggler m-0 p-0 align-items-center"
          >
            <b-navbar-brand
              v-if="!nightMode"
              href=""
              to="/"
              class="navbar-toggler mobile-nav p-0 m-0 align-items-center"
              ><img src="../../assets/img/baugo-logo-light.png"
            /></b-navbar-brand>
            <b-navbar-brand
              v-if="nightMode"
              href=""
              to="/"
              class="navbar-toggler mobile-nav p-0 m-0 align-items-center"
              ><img src="../../assets/img/logo.png"
            /></b-navbar-brand>
          </div>
          <div
            class="d-flex mobile-nav navbar-toggler m-0 p-0 align-items-center"
          >
            <b-navbar-toggle target="nav-mobil-search dropdown-toggle" class="top-plus-1">
              <template>
                <b><i class="ri-search-line"></i></b>
              </template>
            </b-navbar-toggle>
            <div class="dropdown-notification cart mobile-nav navbar-toggler">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none border-none"
                no-caret
                id="dropdown-right"
                right
              >
                <template #button-content>
                  <div class="notification">{{ courseSize }}</div>
                  <i class="ri-shopping-cart-line"></i>
                </template>
                <li class="dropdown-content">
                      <ul>
                        <b-dropdown-item href="/">
                           <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                             AspNet Core Web/API + Çok Katmanlı Mimari
                            </div>
                            <div class="color-second">Cihan Yılmaz</div>
                            <div><b>199,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="/">
                          <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                              Yeni Kurslarımıza Göz Atın
                            </div>
                            <div class="color-second">Turgut Karahan</div>
                            <div><b>19,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="/">
                          <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                              Projelerle İleri Css ve Flexbox
                            </div>
                           <div class="color-second">John Doe</div>
                            <div><b>29,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                      </ul>
                    </li>
                    <li class="divider-line mb-0"></li>
                    <li class="text-center px-4 py-3">
                       <div class="h4 text-center color-first mb-3">Toplam: 567₺</div>
                       <button type="button" class="btn btn-primary btn-block">Sepete Git</button>
                    </li>
                  </b-dropdown>
            </div>
            <div class="dropdown-notification mobile-nav navbar-toggler">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none border-none"
                no-caret
                id="dropdown-right"
                right
              >
                <template #button-content class="test">
                  <div v-if="unread > 0" class="notification"></div>
                  <i class="ri-notification-line"></i>
                </template>
                <li class="dropdown-header px-4 py-3">
                  <div class="d-flex justify-content-between">
                    <div class="cursor-default color-first">Bildirimler</div>
                    <div>
                      <div>
                        <a href="/bildirim-ayarlari" class="color-second"
                          >Ayarlar</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <li class="divider-line mt-0"></li>
                <li v-if="notifications.length > 0" class="dropdown-content">
                  <ul>
                    <b-dropdown-item
                      to="../bildirimler"
                      v-for="notification in notifications"
                      :key="notification.id"
                    >
                      <div
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link + ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                      <div class="notification-dropdown">
                        <div class="notification-message ellipsis-2">
                          {{ notification.message }}
                        </div>
                        <div class="notification-time text-right">
                          {{ notification.time_diff }}
                        </div>
                      </div>
                    </b-dropdown-item>
                  </ul>
                </li>
                <li v-else class="dropdown-content">
                  <ul>
                    <li>
                      <div class="notification-dropdown">
                        <div
                          class="
                            notification-message
                            ellipsis-2
                            color-second
                            text-small text-center
                            py-2
                          "
                        >
                          Hiç bildiriminiz yok.
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="divider-line mb-0"></li>
                <li class="text-center px-4 py-3">
                  <a href="/bildirimler" class="color-second">Tümünü Gör</a>
                </li>
              </b-dropdown>
            </div>
            <div class="headProfileButton mobile-nav navbar-toggler pr-0">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none border-none"
                no-caret
                id="dropdown-right"
                right
              >
                <template #button-content>
                  <div
                    v-if="!nightMode"
                    class="profileImage rounded-circle bg-image"
                    :style="
                      getUserData.user.picture_link
                        ? {
                            backgroundImage:
                              'url(' + getUserData.user.picture_link + ')',
                          }
                        : {
                            backgroundImage:
                              'url(https://svgshare.com/i/bnS.svg)',
                          }
                    "
                  ></div>
                  <div
                    v-if="nightMode"
                    class="profileImage rounded-circle bg-image"
                    :style="
                      getUserData.user.picture_link
                        ? {
                            backgroundImage:
                              'url(' + getUserData.user.picture_link + ')',
                          }
                        : {
                            backgroundImage:
                              'url(https://svgshare.com/i/bnS.svg)',
                          }
                    "
                  ></div>
                </template>
                <li class="dropdown-content pt-0">
                  <ul>
                    <b-dropdown-item
                      to="../profil-duzenle"
                      class="dropdown-profile px-4 py-3 hover-bg-none"
                    >
                      <div
                        v-if="!nightMode"
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link+ ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                      <div
                        v-if="nightMode"
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link + ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                      <div class="white-space">
                        <div class="text-truncate dropdown-name">
                          {{ getUserData.user.name }}
                          {{ getUserData.user.surname }}
                        </div>
                        <div class="text-truncate dropdown-mail color-second">
                          {{ getUserData.user.email }}
                        </div>
                      </div>
                    </b-dropdown-item>
                    <li class="divider-line"></li>
                    <b-dropdown-item href="/kurslarim" class="pb-0">
                      <i class="ri-video-line mr-3"></i>
                      Kurslarım
                    </b-dropdown-item>
                    <b-dropdown-item href="/ayarlar" class="pb-0">
                      <i class="ri-settings-2-line mr-3"></i>Ayarlar
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-if="!nightMode"
                      @click="nightMode = !nightMode"
                      class="pb-0"
                    >
                      <i class="ri-moon-line mr-3"></i>Koyu Tema
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-if="nightMode"
                      @click="nightMode = !nightMode"
                      class="pb-0"
                    >
                      <i class="ri-sun-line mr-3"></i>Açık Tema
                    </b-dropdown-item>
                    <li class="divider-line mt-2"></li>
                    <b-dropdown-item
                      @click="handleLogout"
                      href="/"
                      class="pb-0 reverse-hover"
                    >
                      <i class="ri-logout-box-line mr-3 color-second"></i
                      ><span class="color-second">Çıkış Yap</span>
                    </b-dropdown-item>
                  </ul>
                </li>
              </b-dropdown>
            </div>
          </div>

          <!-- mobile search -->
          <b-collapse id="nav-mobil-search" class="w-100">
            <b-navbar-nav class="my-0 mx-0">
              <b-nav-item>
                <b-nav-form class="w-100">
                  <div class="search-input position-relative w-100">
                    <vue-autosuggest
                      class="hello"
                      ref="autosuggest"
                      v-model="query"
                      :suggestions="suggestions"
                      :inputProps="inputProps"
                      :sectionConfigs="sectionConfigs"
                      :getSuggestionValue="getSuggestionValue"
                      @input="fetchResults"
                    >
                      <template v-slot="{ suggestion }">
                        <div v-if="suggestion.name == 'hotels'">
                          <img
                            :class="{ avatar: true }"
                            :src="
                              suggestion.item.picture_link == null
                                ? `https://svgshare.com/i/bnS.svg`
                                : suggestion.item.picture_link
                            "
                          />
                          {{ suggestion.item.title }}
                        </div>
                        <div v-else>
                          <img
                            :class="{ avatar: true }"
                            :src="
                              suggestion.item.picture_link == null
                                ? `https://svgshare.com/i/bnS.svg`
                                : suggestion.item.picture_link
                            "
                          />
                          {{ suggestion.item.full_name }}
                        </div>
                      </template>
                    </vue-autosuggest>
                    <button class="btn"><i class="ri-search-line"></i></button>
                  </div>
                </b-nav-form>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <!-- -->

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mr-auto e">
              <b-navbar-brand v-if="!nightMode" href="" to="/"
                ><img src="../../assets/img/baugo-logo-light.png"
              /></b-navbar-brand>
              <b-navbar-brand v-if="nightMode" href="" to="/"
                ><img src="../../assets/img/logo.png"
              /></b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav class="m-auto header-search">
              <b-nav-item class="w-100">
                <b-nav-form class="w-100">
                  <div class="search-input position-relative w-100">
                    <vue-autosuggest
                      class="hello"
                      ref="autosuggest"
                      v-model="query"
                      :suggestions="suggestions"
                      :inputProps="inputProps2"
                      :sectionConfigs="sectionConfigs"
                      :getSuggestionValue="getSuggestionValue"
                      @input="fetchResults"
                    >
                      <template v-slot="{ suggestion }">
                        <div v-if="suggestion.name == 'hotels'">
                          <img
                            :class="{ avatar: true }"
                            :src="
                              suggestion.item.picture_link == null
                                ? `https://svgshare.com/i/bnS.svg`
                                : suggestion.item.picture_link
                            "
                          />

                          {{ suggestion.item.title }}
                        </div>
                        <div v-else>
                          <img
                            :class="{ avatar: true }"
                            :src="
                              suggestion.item.picture_link == null
                                ? `https://svgshare.com/i/bnS.svg`
                                : suggestion.item.picture_link
                            "
                          />
                          {{ suggestion.item.full_name }}
                        </div>
                      </template>
                    </vue-autosuggest>
                    <button class="btn"><i class="ri-search-line"></i></button>
                  </div>
                </b-nav-form>
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto d-flex align-items-center">
              <!-- <b-nav-item>
                <router-link to="#" class="color-second"
                  >English</router-link>
              </b-nav-item> -->
              <div class="dropdown-notification cart mr-2">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none border-none"
                  no-caret
                  id="dropdown-right"
                  right
                >
                  <template #button-content>
                    <div class="notification">4</div>
                    <i class="ri-shopping-cart-line"></i>
                  </template>
                <li class="dropdown-content">
                      <ul>
                        <b-dropdown-item href="/">
                           <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                             AspNet Core Web/API + Çok Katmanlı Mimari
                            </div>
                            <div class="color-second">Cihan Yılmaz</div>
                            <div><b>199,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="/">
                          <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                              Yeni Kurslarımıza Göz Atın
                            </div>
                            <div class="color-second">Turgut Karahan</div>
                            <div><b>19,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                        <b-dropdown-item href="/">
                          <div class="dropdown-profile-img rounded bg-image mr-3 wh-48" style="background-image: url(https://img-b.udemycdn.com/course/480x270/1384236_0d3c_3.jpg);"></div>
                          <div class="notification-dropdown">
                            <div class="notification-message ellipsis-2">
                              Projelerle İleri Css ve Flexbox
                            </div>
                           <div class="color-second">John Doe</div>
                            <div><b>29,99₺</b></div>
                          </div>
                        </b-dropdown-item>
                      </ul>
                    </li>
                    <li class="divider-line mb-0"></li>
                    <li class="text-center px-4 py-3">
                       <div class="h4 text-center color-first mb-3">Toplam: 567₺</div>
                       <button type="button" class="btn btn-primary btn-block">Sepete Git</button>
                    </li>
                  </b-dropdown>
              </div>
              <div class="dropdown-notification mx-4">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none border-none"
                  no-caret
                  id="dropdown-right"
                  right
                >
                  <template #button-content class="test">
                    <div v-if="unread > 0" class="notification"></div>
                    <i class="ri-notification-line"></i>
                  </template>
                  <li class="dropdown-header px-4 py-3">
                    <div class="d-flex justify-content-between">
                      <div class="cursor-default color-first">Bildirimler</div>
                      <div>
                        <a href="/bildirim-ayarlari" class="color-second"
                          >Ayarlar</a
                        >
                      </div>
                    </div>
                  </li>
                  <li class="divider-line mt-0"></li>
                  <li v-if="notifications.length > 0" class="dropdown-content">
                    <ul>
                      <b-dropdown-item
                        to="../bildirimler"
                        v-for="notification in notifications"
                        :key="notification.id"
                      >
                        <div
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link + ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                        <div class="notification-dropdown">
                          <div class="notification-message ellipsis-2">
                            {{ notification.message }}
                          </div>
                          <div class="notification-time text-right">
                            {{ notification.time_diff }}
                          </div>
                        </div>
                      </b-dropdown-item>
                    </ul>
                  </li>
                  <li v-else class="dropdown-content">
                    <ul>
                      <li>
                        <div class="notification-dropdown">
                          <div
                            class="
                              notification-message
                              ellipsis-2
                              color-second
                              text-small text-center
                              py-2
                            "
                          >
                            Hiç bildiriminiz yok.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="divider-line mb-0"></li>
                  <li class="text-center px-4 py-3">
                    <a href="/bildirimler" class="color-second">Tümünü Gör</a>
                  </li>
                </b-dropdown>
              </div>
              <div class="headProfileButton">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none border-none"
                  no-caret
                  id="dropdown-right"
                  right
                >
                  <template #button-content>
                    <div
                      v-if="!nightMode"
                      class="profileImage rounded-circle bg-image"
                      :style="
                        getUserData.user.picture_link
                          ? {
                              backgroundImage:
                                'url(' + getUserData.user.picture_link + ')',
                            }
                          : {
                              backgroundImage:
                                'url(https://svgshare.com/i/bnS.svg)',
                            }
                      "
                    ></div>
                    <div
                      v-if="nightMode"
                      class="profileImage rounded-circle bg-image"
                      :style="
                        getUserData.user.picture_link
                          ? {
                              backgroundImage:
                                'url(' + getUserData.user.picture_link + ')',
                            }
                          : {
                              backgroundImage:
                                'url(https://svgshare.com/i/bnS.svg)',
                            }
                      "
                    ></div>
                  </template>
                  <li class="dropdown-content pt-0">
                    <ul>
                       <b-dropdown-item
                      to="../profil-duzenle"
                      class="dropdown-profile px-4 py-3 hover-bg-none"
                    >
                      <div
                        v-if="!nightMode"
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link+ ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                      <div
                        v-if="nightMode"
                        class="rounded-circle bg-image mr-3 wh-48"
                        :style="
                          getUserData.user.picture_link
                            ? {
                                backgroundImage:
                                  'url(' + getUserData.user.picture_link + ')',
                              }
                            : {
                                backgroundImage:
                                  'url(https://svgshare.com/i/bnS.svg)',
                              }
                        "
                      ></div>
                      <div class="white-space">
                        <div class="text-truncate dropdown-name">
                          {{ getUserData.user.name }}
                          {{ getUserData.user.surname }}
                        </div>
                        <div class="text-truncate dropdown-mail color-second">
                          {{ getUserData.user.email }}
                        </div>
                      </div>
                    </b-dropdown-item>
                      <li class="divider-line"></li>
                      <b-dropdown-item href="/kurslarim" class="pb-0">
                        <i class="ri-video-line mr-3"></i>
                        Kurslarım
                      </b-dropdown-item>
                      <b-dropdown-item href="/ayarlar" class="pb-0">
                        <i class="ri-settings-2-line mr-3"></i>Ayarlar
                      </b-dropdown-item>
                      <b-dropdown-item
                        v-if="!nightMode"
                        @click="nightMode = !nightMode"
                        class="pb-0"
                      >
                        <i class="ri-moon-line mr-3"></i>Koyu Tema
                      </b-dropdown-item>
                      <b-dropdown-item
                        v-if="nightMode"
                        @click="nightMode = !nightMode"
                        class="pb-0"
                      >
                        <i class="ri-sun-line mr-3"></i>Açık Tema
                      </b-dropdown-item>
                      <li class="divider-line mt-2"></li>
                      <b-dropdown-item
                        @click="handleLogout"
                        href="/"
                        class="pb-0 reverse-hover"
                      >
                        <i class="ri-logout-box-line mr-3 color-second"></i
                        ><span class="color-second">Çıkış Yap</span>
                      </b-dropdown-item>
                    </ul>
                  </li>
                </b-dropdown>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-container>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { VueAutosuggest } from "vue-autosuggest";
import axios from "axios";

export default {
  name: "LoginHeader",
  components: {
    VueAutosuggest,
  },
  data() {
    return {
      nightMode: false,
      allBasket: [],
      notifications: [],
      unread: 0,
      allCoursePrice: 0,
      courseSize: 0,
      query: "",
      results: [],
      timeout: null,
      selected: null,
      searchText: "",
      debounceMilliseconds: 50,
      usersUrl: "https://jsonplaceholder.typicode.com/users",
      photosUrl: "https://jsonplaceholder.typicode.com/photos",
      inputProps: {
        id: "autosuggest__input",
        placeholder: "Arama...",
        class: "form-control w-100",
      },
      inputProps2: {
        id: "autosuggest__input_m2",
        placeholder: "Arama...",
        class: "form-control w-100",
      },
      photosPromise: [],
      usersPromise: [],
      suggestions: [],
      sectionConfigs: {
        destinations: {
          limit: 6,
          label: "Eğitmenler",
          onSelected: (selected) => {
            this.$router.push("/profil/" + selected.item.id).catch(() => {});
            this.selected = selected.item;
          },
        },
        allBasketData: [],
        hotels: {
          limit: 6,
          label: "Kurslar",
          onSelected: (selected) => {
            this.$router
              .push({
                path: "/kurs-detay/" + selected.item.slug,
                params: selected.item.id,
              })
              .catch(() => {});
            this.selected = selected.item;
          },
        },
        default: {
          onSelected: () => {
            this.doSearch(this);
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },

  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      this.$emit("nightChange", { nightMode: this.nightMode });
    },
    suggestions(n, o) {
      console.log({ n, o });
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
    this.fetchFirst3Notifications();
    this.fetchUnreadNotificationsCount();
    this.basketData();
  },
  mounted() {
    this.$root.$on("new-course", (data) => {
      this.allBasketData = data;
      this.courseSize = data.length;
      this.allCoursePrice = data
        .map((d) => d.course.price)
        .reduce((a, b) => a + b, 0);
    });
    this.$root.$on("delete-course", (data) => {
      this.allBasketData = data;
      this.courseSize = data.length;
      this.allCoursePrice = data
        .map((d) => d.course.price)
        .reduce((a, b) => a - b, 0);
    });
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("setUserData", null);
      localStorage.removeItem("user_data", null);
      this.$router.push("/").catch(() => {});
    },
    basketData() {
      this.allBasketData = JSON.parse(localStorage.getItem("basketData")) || [];
      this.courseSize = this.allBasketData.length;
      if(this.courseSize != null && this.courseSize > 0){
        for (var item = 0; item <= this.allBasketData.length; item++) {
        this.allCoursePrice += this.allBasketData[item].course.price;
        }
      }
      
    },
    otherPage(is_paid,slug) {
      console.log("isPaid", is_paid,slug);
      if(is_paid == true) {
        this.$router.push("/egitim-video/" +slug)
      }else {
        this.$router.push("/kurs-detay/" +slug)
      }
    },
    fetchFirst3Notifications() {
      this.axios
        .get("/notification/1?language_code=tr")
        .then((response) => {
          Object.keys(response.data.data).forEach((date) => {
            response.data.data[date].forEach((noti) => {
              if (this.notifications.length < 3)
                this.notifications.push(JSON.parse(JSON.stringify(noti)));
              else return;
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUnreadNotificationsCount() {
      this.axios.get("/notification/unread").then((response) => {
        this.unread = response.data.data;
      });
    },
    doSearch() {
      console.log("Searching...");
    },
    fetchResults() {
      const query = this.query;
      // console.log("queryy",this.query.charAt(0).toUpperCase())
      if(this.query.charAt(0) == 'i') {
        console.log('ideyim')
        this.query = 'İ'
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(
        () => {
          axios.post("/search?search=" + query).then((response) => {
            this.photosPromise = response.data.data.courses;
            this.usersPromise = response.data.data.users;
            Promise.all([this.photosPromise, this.usersPromise]).then(
              (values) => {
                this.suggestions = [];
                this.selected = null;

                const photos = this.filterResults(values[0], query, "title");
                const users = this.filterResults(values[1], query, "full_name");

                users.length &&
                  this.suggestions.push({ name: "destinations", data: users });
                photos.length &&
                  this.suggestions.push({ name: "hotels", data: photos });
                console.log("users", this.suggestions);
              }
            );
          }).catch(error => console.log(error.response));
        },
        this.debounceMilliseconds
      );
    },
    filterResults(data, text, field) {
      return data
        .filter((item) => {
          if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {
            return item[field];
          }
        })
        .sort();
    },
    getSuggestionValue(suggestion) {
      let { name, item } = suggestion;
      return name === "hotels" ? item.title : item.name;
    },
  },
};
</script>
