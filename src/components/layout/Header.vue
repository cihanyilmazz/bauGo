<template>
  <header class="header">
    <b-container>
      <div>
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-toggle target="nav-collapse" class="w-33 text-left" @click="menuCollapse()">
            <template>
              <i class="ri-menu-2-line"></i>
            </template>
          </b-navbar-toggle>
          <b-navbar-brand
            v-if="!nightMode"
            class="navbar-toggler mobile-nav p-0 m-0 align-items-center"
          >
            <img src="../../assets/img/baugo-logo-light.png" />
          </b-navbar-brand>
          <b-navbar-brand
            v-if="nightMode"
            class="navbar-toggler mobile-nav p-0 m-0 align-items-center"
          >
            <img src="../../assets/img/logo.png" />
          </b-navbar-brand>

        <div class="d-flex align-items-center p-0 w-33 justify-content-end top-plus-1">
           <b-navbar-toggle
            target="nav-collapse"
            @click="searchCollapse()"
          >
            <template>
              <i class="ri-search-line"></i>
            </template>
            
            
          </b-navbar-toggle>
         <b-navbar-toggle target="dropdown-toggle">
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
            </b-navbar-toggle>
         
        </div>

          <!-- mobile search -->
          <b-collapse
            v-show="searchCollapsed"
            class="w-100 searchCollapse"
            v-bind:style="{ display: searchCollapsed ? 'none' : 'block' }"
          >
            <b-navbar-nav class="mt-1 mx-0">
              <b-nav-item>
                <b-nav-form class="w-100">
                  <div class="search-input position-relative w-100">
                    <b-form-input
                      class="mr-sm-2 w-100"
                      placeholder="Arama..."
                    ></b-form-input>
                    <button class="btn bg-transparent">
                      <i class="ri-search-line"></i>
                    </button>
                  </div> </b-nav-form
              ></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <!-- -->
          <b-collapse
            v-show="menuCollapsed"
            class="w-100 menuCollapse"
            v-bind:style="{ display: menuCollapsed ? 'none' : 'block' }"
          >
            <b-navbar-nav>
              <li class="nav-item py-2">
                <a v-b-modal.modal-login class="py-2">Giriş Yap</a>
              </li>
              <li class="nav-item py-2">
                <a v-b-modal.modal-register class="py-2">Üye Ol</a>
              </li>
            </b-navbar-nav>
          </b-collapse>

          <b-collapse id="nav-collapse" is-nav class="d-none">
            <b-navbar-nav class="mr-auto">
              <b-navbar-brand v-if="nightMode" to="/"
                ><img src="../../assets/img/logo.png"
              /></b-navbar-brand>
              <b-navbar-brand v-if="!nightMode" to="/"
                ><img src="../../assets/img/baugo-logo-light.png"
              /></b-navbar-brand>
            </b-navbar-nav>
            <b-navbar-nav class="m-auto header-search">
              <b-nav-item class="w-100">
                <b-nav-form class="w-100">
                  <div class="search-input position-relative w-100">
                    <b-form-input
                      class="mr-sm-2 w-100"
                      placeholder="Arama..."
                    ></b-form-input>
                    <button class="btn"><i class="ri-search-line"></i></button>
                  </div>
                </b-nav-form>
              </b-nav-item>
            </b-navbar-nav>
            

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto d-flex align-items-center">
              <li class="nav-item mr-3">
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
              </li>
              <li class="nav-item mr-3">
                <button
                  type="button"
                  class="btn outline-primary"
                  v-b-modal.modal-login
                >
                  Giriş Yap
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-modal.modal-register
                >
                  Üye Ol
                </button>
              </li>
            </b-navbar-nav>
          </b-collapse>
          <!-- dark light mode switch -->
          <!-- <i class="fas fa-sun icon-sun" v-if="nightMode" @click="nightMode = !nightMode"></i>
        <i class="fas fa-moon icon-moon" v-else @click="nightMode = !nightMode"></i> -->
        </b-navbar>
        <!-- dark light mode switch -->
        <!-- <i
          class="fas fa-sun icon-sun"
          v-if="nightMode"
          @click="nightMode = !nightMode"
        ></i>
        <i
          class="fas fa-moon icon-moon"
          v-else
          @click="nightMode = !nightMode"
        ></i> -->
        <!-- Modals -->
        <LoginModal> </LoginModal>
        <ForgotPassword> </ForgotPassword>
        <RegisterModal> </RegisterModal>
      </div>
    </b-container>
  </header>
</template>

<script>
import {get,add} from "../../core/nightMode"
import LoginModal from "../modal/LoginModal";
import ForgotPassword from "../modal/ForgotPassword";
import RegisterModal from "../modal/RegisterModal";
export default {
  name: "Header",
  components: {
    LoginModal,
    ForgotPassword,
    RegisterModal,
  },
  data: () => {
    return {
      nightMode: false,
      menuCollapsed: false,
      searchCollapsed: false,
    };
  },
  methods: {
     goBasket() {
      this.$router.push({ path: "/sepet" }).catch((err) => console.log(err));
    },
    menuCollapse: function () {
      // var myNav = document.querySelector('.menuCollapsed');
      this.menuCollapsed = !this.menuCollapsed;
      // !this.menuCollapsed ? myNav.classList.add('show') : myNav.classList.remove('show');
      this.searchCollapsed = false;
    },
    searchCollapse: function () {
      // var mySearchCollapsed  = document.querySelector('.searchCollapsed');
      this.searchCollapsed = !this.searchCollapsed;
      // this.searchCollapsed ? mySearchCollapsed .classList.add('show') : mySearchCollapsed .classList.remove('show');
      this.menuCollapsed = false;
    },
  },
  watch: {
    nightMode: function () {
      add(this.nightMode)
      this.$emit("nightChange", { nightMode: this.nightMode });
    },
  },
  created() {
    this.nightMode = get()
  },
};
</script>

