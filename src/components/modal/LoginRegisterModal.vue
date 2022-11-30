<template>
  <div>
    <b-modal id="modal-loginRegister" centered :hide-footer="true" @change="change" :modal-class="classVal">
      <template #modal-header="{ close }" >
        <!-- Emulate built in modal header close button action -->
       <ul class="d-flex heading-tab mb-0">
          <b-nav-item @click="tabIndex = 0" class="mr-2"><h3 class="mb-0" :class="[{'brand-color' : tabIndex === 0}]">Giriş Yap</h3></b-nav-item>
        <b-nav-item @click="tabIndex = 1"><h3 class="mb-0" :class="[{'brand-color' : tabIndex === 1}]">Üye Ol</h3></b-nav-item>
       </ul>
        <!-- <h3>Giriş Yap</h3> -->
        <div type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third top-plus-2"></i>
        </div>
      </template>
      <template>
         <form @submit.stop.prevent="onSubmit">
        <b-tabs id="myTabs" v-model="tabIndex" nav-wrapper-class="d-none">
        <b-tab>
          <!-- E-posta -->
          <b-form-group class="input-icon" label="E-Posta">
            <i class="ri-user-3-line"></i>
            <b-form-input
              :state="validateState($v.email)"
              v-model="$v.email.$model"
              id="input-email"
              @focus="doNotShow()"
            ></b-form-input>
          </b-form-group>

          <!-- Şifre -->
          <b-form-group class="input-icon" label="Şifre">
            <i class="ri-lock-line"></i>
            <b-form-input
              :state="validateState($v.password)"
              v-model="$v.password.$model"
              autocomplete="on"
              id="input-password"
              :type="visibility"
              @focus="doNotShow()"
            ></b-form-input>
            <i
              class="ri-eye-off-line"
              @click="showPassword()"
              v-if="visibility == 'password'"
            ></i>
            <i
              class="ri-eye-line"
              @click="hidePassword()"
              v-if="visibility == 'text'"
            ></i>
          </b-form-group>
          <div class="row">
            <div class="col-6">
              <div class="checkbox-group">
                <input
                  type="checkbox"
                  class="check-group"
                  name="check"
                  v-model="rememberMe"
                  :true-value="true"
                  :false-value="false"
                />
                <label class="form-check-label" for="check">
                  <span class="check"></span>
                  <span class="box"></span>
                  Beni hatırla
                </label>
              </div>
            </div>
            <div class="col-6 text-right mb-3 mb-sm-0">
              <a
                href="javascript:void(0)"
               @click="$bvModal.hide('modal-loginRegister')"
                v-b-modal.modal-forgotPassword
                class="color-second"
              >
                Şifremi Unuttum
              </a>
            </div>
          </div>
          <div v-if="errors" class="row mb-3">
            <vue-recaptcha
              v-if="errors.recaptcha"
              class="mx-auto"
              ref="recaptcha"
              :sitekey="recaptchaKey"
              :loadRecaptchaScript="true"
              @verify="onVerify"
            ></vue-recaptcha>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg mb-4">
            <b-spinner label="Spinning" class="align-middle mr-3 top-minus-1" small v-show="loginSpinner"></b-spinner>Giriş Yap
          </button>
        <p class="fw-bold text-center mb-3 d-block font-weight-normal">
         Sosyal ağlarla giriş yapın:
        </p>
        <div class="d-flex login-social mb-4">
          <a @click="facebookClick">
            <div
              class="
                iconBg-size
                facebook-bgcolor
                rounded-circle
                d-flex
                justify-content-center
                align-items-center
                mr-3
              "
            >
              <i class="ri-facebook-fill"></i>
            </div>
          </a>
          <a @click="googleClick">
            <div
              class="
                iconBg-size
                google-bgcolor
                rounded-circle
                d-flex
                justify-content-center
                align-items-center
                mr-3
              "
            >
              <i class="ri-google-fill"></i>
            </div>
          </a>
          <GoogleLogin
            id="loginWithGoogle"
            :params="params"
            :onSuccess="loginWithGoogle"
            hidden
          ></GoogleLogin>
          <v-facebook-login
            id="loginWithFacebook"
            :app-id="facebookClientID"
            @login="loginWithFacebook"
            hidden
          ></v-facebook-login>
        </div>
        <p class="small color-second text-center d-block mb-0">
          Giriş yaparak,
          <router-link to="/gizlilik-sozlesmesi/" class="color-second">
            <u>Gizlilik ve Hizmet Şartlarını</u>
          </router-link>
          kabul etmiş olursunuz.
        </p>
        </b-tab>
        <b-tab>
          <div class="row">
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Ad"> 
                <i class="ri-user-3-line"></i>
                <b-form-input
                  :state="validateState($v.registerName)"
                  v-model="$v.registerName.$model"
                  id="input-RegisterName"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Soyad"> 
                <i class="ri-user-3-line"></i>
                  <b-form-input
                    :state="validateState($v.registerSurname)"
                    v-model="$v.registerSurname.$model"
                    id="input-RegisterSurname"
                  ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="E-Posta"> 
                <i class="ri-user-3-line"></i>
                <b-form-input
                  :state="validateState($v.registerEmail)"
                  v-model="$v.registerEmail.$model"
                  id="input-email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="Şifre"> 
                  <div class="info-label text-smaller color-second fw-bold">
                  Şifre en az 8 karakter olmalıdır
                </div>
                <i class="ri-lock-line"></i>
                <b-form-input
                  :state="validateState($v.registerPassword)"
                  v-model="$v.registerPassword.$model"
                  id="input-registerPassword" 
                  :type="registerVisibility"
                  autocomplete="on"
                ></b-form-input>
                    <i class="ri-eye-off-line" @click="showRegisterPassword()" v-if="registerVisibility == 'password'"></i>
                <i class="ri-eye-line" @click="hideRegisterPassword()" v-if="registerVisibility == 'text'"></i>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="Şifre Tekrar"> 
                <i class="ri-lock-line"></i>
                <b-form-input
                  :state="validateState($v.registerRepeatPassword)"
                  v-model="$v.registerRepeatPassword.$model"
                  id="input-repeatPassword"
                  :type="RepeatVisibility"
                  autocomplete="on"
                ></b-form-input>
                <i class="ri-eye-off-line" @click="showRepeatPassword()" v-if="RepeatVisibility == 'password'"></i>
                <i class="ri-eye-line" @click="hideRepeatPassword()" v-if="RepeatVisibility == 'text'"></i>
              </b-form-group>
            </div>
          </div>
          <div class="checkbox-group">
            <input 
              type="checkbox" class="check-group" name="check" 
              v-model="announcement_permission"
              true-value="1"
              false-value="0"
            >
              <label class="form-check-label" for="check">
                <span class="check"></span>
                <span class="box"></span>
                Beni sınıf etkinlikleri ve yeni sürümler hakkında güncel tutun
              </label>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg mb-4" >
           <b-spinner label="Spinning" class="align-middle mr-3 top-minus-1" small v-show="loginSpinner"></b-spinner>Üyeliğimi Oluştur
          </button>
          <p class="fw-bold text-center mb-3 d-block font-weight-normal">
            Sosyal ağlarla kayıt olun:
          </p>
          <div class="d-flex login-social mb-4">
          <a @click="facebookClick">
            <div
              class="
                iconBg-size
                facebook-bgcolor
                rounded-circle
                d-flex
                justify-content-center
                align-items-center
                mr-3
              "
            >
              <i class="ri-facebook-fill"></i>
            </div>
          </a>
          <a @click="googleClick">
            <div
              class="
                iconBg-size
                google-bgcolor
                rounded-circle
                d-flex
                justify-content-center
                align-items-center
                mr-3
              "
            >
              <i class="ri-google-fill"></i>
            </div>
          </a>
          <GoogleLogin
            id="loginWithGoogle"
            :params="params"
            :onSuccess="loginWithGoogle"
            hidden
          ></GoogleLogin>
          <v-facebook-login
            id="loginWithFacebook"
            :app-id="facebookClientID"
            @login="loginWithFacebook"
            hidden
          ></v-facebook-login>
        </div>
          <p class="small color-second text-center d-block mb-0">
            Üye olarak, 
            <router-link to="/gizlilik-sozlesmesi/" class="color-second">
              <u>Gizlilik ve Hizmet Şartlarını</u>
            </router-link> 
            kabul etmiş olursunuz.
          </p>
        </b-tab>
     
        </b-tabs>
        </form>
        <!-- loader spinner Start -->

        <!-- loader spinner End -->
      
      </template>
    </b-modal>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs, } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import VueRecaptcha from "vue-recaptcha";
import { GoogleLogin } from "vue-google-login";
import VFacebookLogin from "vue-facebook-login-component";

export default {
  name: "LoginRegisterModal",
  mixins: [validationMixin],
  components: { VueRecaptcha, GoogleLogin, VFacebookLogin },
  data() {
    return {
      classVal: "login-register-modal",
      tabIndex: 0,
      loginSpinner: false,
      loading: false,
      showError: true,
      showFacebook: false,
      showGoole: false,
      password: null,
      email: null,
      recaptcha: null,
      registerName:null,
      registerSurname:null,
      registerPassword:null,
      registerRepeatPassword:null,
      registerEmail:null,
      type: "password",
      registerVisibility: "password",
      visibility: "password",
      RepeatVisibility: "password",
      errors: null,
      socialLoginError: null,
      rememberMe: null,
      recaptchaKey: this.$recaptchaKey,
      params: {
        client_id: this.$googleClientID,
      },
      facebookClientID: this.$facebookClientID,
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    email: {
      required,
      email,
    },
      registerName: {
        required,
        minLength: minLength(2)
    },
     registerSurname: {
        required,
        minLength: minLength(2)
    },
    registerPassword: {
      required, 
       minLength: minLength(8)
    },
    registerRepeatPassword: {
      required,
      sameAsPassword: sameAs('registerPassword'),
    },
    registerEmail: {
      required,
      email
    }
  },
  methods: {
    // LoginClick(){
    //   this.loginSpinner = true

    // },
    
    async login() {
      this.loading = true;
      this.loginSpinner = true
      await this.axios
        .post("user/login", {
          language_code: "tr",
          email: this.email,
          password: this.password,
          recaptcha: this.recaptcha,
        })
        .then((response) => {
          var picture_expire_in = new Date();
          picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4);
          let data = response.data.data;
          data.user.picture_expire_in = picture_expire_in.toLocaleString();
          localStorage.setItem("user_data", JSON.stringify(data));
          this.$store.dispatch("setUserData", data);

          this.loading = false;
          this.loginSpinner = false

          this.makeAuth();
          this.rememberUser();
          this.$router.push("/hosgeldin");
        })
        .catch((error) => {
          this.errors = error.response.data.message;
          this.loading = false;
          this.loginSpinner = false
        });
    },

    makeAuth() {
      const userData = JSON.parse(localStorage.getItem("user_data"));
      if (userData && userData.access_token) {
        this.axios.defaults.headers.common["Authorization"] =
          "Bearer " + userData.access_token;
      }
    },
    rememberUser() {
      if (this.rememberMe == true) {
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
      } else {
        localStorage.setItem("email", "");
        localStorage.setItem("password", "");
      }
    },
 validateState(item) {
   const { $dirty, $error } = item;
   return $dirty ? !$error : null;
 },
    doNotShow() {
      this.showError = false;
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
    showRegisterPassword() {
      this.registerVisibility = "text";
    },
    hideRegisterPassword() {
      this.registerVisibility = "password";
    },
       showRepeatPassword() {
      this.RepeatVisibility = "text"
    },
    hideRepeatPassword() {
      this.RepeatVisibility = "password"
    },
    onSubmit() {
      this.$v.$touch();

      if (this.$v.$anyError) {
        this.showError = true;
        return false;
      } else {
        this.login();
      }
    },
    onVerify(response) {
      if (response) this.recaptcha = response;
    },
    change() {
      this.email = localStorage.getItem("email");
      this.password = localStorage.getItem("password");
      this.errors = null;
      this.socialLoginError = null;
    },
    googleClick() {
      document.querySelector("#loginWithGoogle").click();
    },
    facebookClick() {
      document.querySelector("#loginWithFacebook").click();
    },
    loginWithGoogle(googleUser) {
      console.log("girdi", googleUser);

      if (googleUser) {
        this.axios
          .post("/user/social-login", {
            provider: "google",
            language_code: "tr",
            token: googleUser.Zb.access_token,
          })
          .then((response) => {
            console.log("Hello", googleUser);

            var picture_expire_in = new Date();
            picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4);
            let data = response.data.data;
            data.user.picture_expire_in = picture_expire_in.toLocaleString();
            localStorage.setItem("user_data", JSON.stringify(data));
            this.$store.dispatch("setUserData", data);

            this.makeAuth();
            this.$router.push("/hosgeldin");
          })
          .catch((error) => {
            this.socialLoginError = error.response.data.message;
          });
      }
    },
    loginWithFacebook(facebookUser) {
      if (facebookUser) {
        this.axios
          .post("/user/social-login", {
            provider: "facebook",
            language_code: "tr",
            token: facebookUser.authResponse.accessToken,
          })
          .then((response) => {
            var picture_expire_in = new Date();
            picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4);
            let data = response.data.data;
            data.user.picture_expire_in = picture_expire_in.toLocaleString();
            localStorage.setItem("user_data", JSON.stringify(data));
            this.$store.dispatch("setUserData", data);
            this.makeAuth();
            this.$router.push("/hosgeldin");
          })
          .catch((error) => {
            this.socialLoginError = error.response.data.message;
          });
      }
    },
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  created() {
    this.email = localStorage.getItem("email");
    this.password = localStorage.getItem("password");
    if (this.email) {
      this.rememberMe = true;
    } else {
      this.rememberMe = false;
    }
  },
};
</script>