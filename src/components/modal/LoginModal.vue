<template>
  <div>
    <b-modal
      id="modal-login"
      entrance-transition="animated fadeIn"
      leave-transition="animated bounceOut"
      centered
      :hide-footer="true"
      @change="change"
    >
      <template #modal-header="{ close }" class="container">
        <!-- Emulate built in modal header close button action -->
        <h3>Giriş Yap</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
        <form @submit.stop.prevent="onSubmit">
          <!-- E-posta -->
          <b-form-group class="input-icon" label="E-Posta">
            <i class="ri-user-3-line"></i>
            <b-form-input
              :state="validateState($v.email)"
              v-model="$v.email.$model"
              id="input-email"
            ></b-form-input>
          </b-form-group>
          <!-- Şifre -->
          <b-form-group class="input-icon" label="Şifre">
            <i class="ri-lock-line"></i>
            <b-form-input
              :state="validateState($v.password)"
              v-model="$v.password.$model"
              id="input-password"
              :type="visibility"
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
            <div class="col-12 col-sm-6 text-center text-sm-left">
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
            <div class="col-12 col-sm-6 text-center text-sm-right mb-3 mb-sm-0">
              <a
                href="javascript:void(0)"
                @click="$bvModal.hide('modal-login')"
                v-b-modal.modal-forgotPassword
                class="color-second"
              >
                Şifremi Unuttum
              </a>
            </div>
          </div>
          <div v-if="errors" class="row mb-3">
            <vue-recaptcha v-if="errors.recaptcha"
              class="mx-auto" ref="recaptcha"
              :sitekey="recaptchaKey" :loadRecaptchaScript="true" @verify="onVerify"
            ></vue-recaptcha>
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100 mb-4"
          >
            Giriş Yap
          </button>
        </form>
          <a
            href="#"
            class="fw-bold text-center mb-4 d-block"
            role="button"
            @click="$bvModal.hide('modal-login')"
            v-b-modal.modal-register
          >
            Bir hesaba mı ihtiyacınız var? Hemen kayıt olun.
          </a>
          <p class="fw-bold text-center mb-3 d-block font-weight-normal">
            Veya sosyal ağlarla giriş yapın:
          </p>
          <div class="d-flex login-social mb-4">
            <a href="#" @click="facebookClick">
              <div class="iconBg-size facebook-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-facebook-fill"></i>
              </div>
            </a>
            <a href="#">
              <div class="iconBg-size twitter-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-twitter-fill"></i>
              </div>
            </a>
            <a href="#" @click="googleClick">
              <div class="iconBg-size google-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-google-fill"></i>
              </div>
            </a>
            <GoogleLogin id="loginWithGoogle" :params="params" :onSuccess="loginWithGoogle" hidden></GoogleLogin>
            <v-facebook-login id="loginWithFacebook" :app-id="facebookClientID" @login="loginWithFacebook" hidden></v-facebook-login>
          </div>
          <p class="small color-second text-center d-block">
            Giriş yaparak,
            <a href="/gizlilik-sozlesmesi/" class="color-second">
              <u>Gizlilik ve Hizmet Şartlarımızı</u>
            </a>
            kabul etmiş olursunuz
          </p>
      </template>
    </b-modal>
  </div>
</template>


<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
import { GoogleLogin } from 'vue-google-login'
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: 'LoginModal',
  mixins: [validationMixin],
  components: { VueRecaptcha, GoogleLogin, VFacebookLogin },
  data() {
    return {
      password: null,
      email: null,
      recaptcha: null,
      visibility: 'password',
      errors: null,
      socialLoginError: null,
      rememberMe: null,
      recaptchaKey: this.$recaptchaKey,
      params: {
        client_id: this.$googleClientID,
      },
      facebookClientID: this.$facebookClientID
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    email: {
      required,
      email,
    }
  },
  methods: {
    async login() {
      await this.axios.post('user/login', {
        language_code: 'tr',
        email: this.email,
        password: this.password,
        recaptcha: this.recaptcha
      })
        .then((response) => {
          var picture_expire_in = new Date()
          picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4)
          let data = response.data.data
          data.user.picture_expire_in = picture_expire_in.toLocaleString()
          localStorage.setItem('user_data', JSON.stringify(data))
          this.$store.dispatch('setUserData', data)

          this.makeAuth()
          this.rememberUser()
          this.$router.push("/hosgeldin")
        })
        .catch(error => {
          this.errors = error.response.data.message
        })
    },
    makeAuth() {
      const userData = JSON.parse(localStorage.getItem('user_data'))
      if (userData && userData.access_token) {
        this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + userData.access_token
      }
    },
    rememberUser() {
      if (this.rememberMe == true) {
            localStorage.setItem('email', this.email)
            localStorage.setItem('password', this.password)
      } else {
        localStorage.setItem('email', '')
        localStorage.setItem('password', '')
      }
    },
    validateState(item) {
      const { $dirty, $error } = item
      return $dirty ? !$error : null
    },
    showPassword() {
      this.visibility = 'text'
    },
    hidePassword() {
      this.visibility = 'password'
    },
    onSubmit() {
      this.$v.$touch()

      if (this.$v.$anyError) {
        return false
      }
      else {
        this.login()
      }
    },
    onVerify(response) {
      if (response) 
        this.recaptcha = response
    },
    change() {
      this.email = localStorage.getItem('email')
      this.password = localStorage.getItem('password')
      this.errors = null
      this.socialLoginError = null
    },
    googleClick() {
      document.getElementById("loginWithGoogle").click()
    },
    loginWithGoogle(googleUser) {
      //console.log(googleUser)
      //console.log(googleUser.getBasicProfile())
      if (googleUser) {
        this.axios.post('/user/social-login', {
          'provider': 'google',
          'language_code': 'tr',
          'token': googleUser.qc.access_token
        })
          .then(response => {
            var picture_expire_in = new Date()
            picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4)
            let data = response.data.data
            data.user.picture_expire_in = picture_expire_in.toLocaleString()
            localStorage.setItem('user_data', JSON.stringify(data))
            this.$store.dispatch('setUserData', data)

            this.makeAuth()
            this.$router.push("/hosgeldin")
          })
          .catch(error => {
            this.socialLoginError = error.response.data.message
          })
      }
    },
    facebookClick() {
      document.getElementById("loginWithFacebook").click()
    },
    loginWithFacebook(facebookUser) {
      if (facebookUser) {
        this.axios.post('/user/social-login', {
          'provider': 'facebook',
          'language_code': 'tr',
          'token': facebookUser.authResponse.accessToken
        })
          .then(response => {
            var picture_expire_in = new Date()
            picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4)
            let data = response.data.data
            data.user.picture_expire_in = picture_expire_in.toLocaleString()
            localStorage.setItem('user_data', JSON.stringify(data))
            this.$store.dispatch('setUserData', data)

            this.makeAuth()
            this.$router.push("/hosgeldin")
          })
          .catch(error => {
            this.socialLoginError = error.response.data.message
          })
      }
    }
  },
  computed: {
    ...mapGetters(['getUserData'])
  },
  created() {
    this.email = localStorage.getItem('email')
    this.password = localStorage.getItem('password')
    if(this.email) {
      this.rememberMe = true
    } else {
      this.rememberMe = false
    }
  }
}
</script>