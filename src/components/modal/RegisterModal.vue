<template>
  <div>
    <b-modal 
      id="modal-register" 
      entrance-transition="animated fadeIn" 
      leave-transition="animated bounceOut" 
      title="Kayıt Ol" 
      centered 
      :hide-footer="true"
      @change="change"
    >
      <template #modal-header="{ close }" class="container">
        <h3>Üye Ol</h3>
        <button type="button" aria-label="Close" class="close" @click="close()">
          <i class="ri-close-line color-third"></i>
        </button>
      </template>
      <template>
        <form @submit.stop.prevent="onSubmit">
          <div class="row">
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Ad"> 
                <i class="ri-user-3-line"></i>
                <b-form-input
                  :state="validateState($v.RegisterName)"
                  v-model="$v.RegisterName.$model"
                  id="input-RegisterName"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Soyad"> 
                <i class="ri-user-3-line"></i>
                  <b-form-input
                    :state="validateState($v.RegisterSurname)"
                    v-model="$v.RegisterSurname.$model"
                    id="input-RegisterSurname"
                  ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12">
              <b-form-group class="input-icon" label="E-Posta"> 
                <i class="ri-user-3-line"></i>
                <b-form-input
                  :state="validateState($v.email)"
                  v-model="$v.email.$model"
                  id="input-email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Şifre"> 
                <i class="ri-lock-line"></i>
                <b-form-input
                  :state="validateState($v.password)"
                  v-model="$v.password.$model"
                  id="input-password" 
                  :type="visibility"
                ></b-form-input>
                <i class="ri-eye-off-line" @click="showPassword()" v-if="visibility == 'password'"></i>
                <i class="ri-eye-line" @click="hidePassword()" v-if="visibility == 'text'"></i>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6">
              <b-form-group class="input-icon" label="Şifre Tekrar"> 
                <i class="ri-lock-line"></i>
                <b-form-input
                  :state="validateState($v.repeatPassword)"
                  v-model="$v.repeatPassword.$model"
                  id="input-repeatPassword"
                  :type="RepeatVisibility"
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
          <button type="submit" class="btn btn-primary w-100 mb-4" >
            Üyeliğimi Oluştur
          </button>
          <a href="#" class="fw-bold text-center mb-4 d-block" role="button" @click="$bvModal.hide('modal-login')" v-b-modal.modal-register>
            Bir hesaba mı ihtiyacınız var? Hemen kayıt olun.
          </a>
          <p class="fw-bold text-center mb-3 d-block font-weight-normal">
            Veya sosyal ağlarla kayıt olun:
          </p>
          <div class="d-flex login-social mb-4">
            <a href="#">
              <div class="iconBg-size facebook-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-facebook-fill"></i>
              </div>
            </a>
            <a href="#">
              <div class="iconBg-size twitter-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-twitter-fill"></i>
              </div>
            </a>
            <a href="#">
              <div class="iconBg-size google-bgcolor rounded-circle d-flex justify-content-center align-items-center mr-3">
                <i class="ri-google-fill"></i>
              </div>
            </a>
          </div>
          <p class="small color-second text-center d-block">
            Giriş yaparak, 
            <a href="/gizlilik-sozlesmesi/" class="color-second">
              <u>Gizlilik ve Hizmet Şartlarımızı</u>
            </a> 
            kabul etmiş olursunuz
          </p>
        </form>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs, email} from "vuelidate/lib/validators";

export default {
  name: "RegisterModal",
  mixins: [validationMixin],
  data() {
    return {
      password: null,
      repeatPassword: null,
      RegisterName: null,
      RegisterSurname: null,
      type: "password",
      email: null,
      visibility: 'password',
      RepeatVisibility: 'password',
      announcement_permission: 0,
      registered: false,
      errors: null
    }
  },
  validations: {
    RegisterName: {
        required,
        minLength: minLength(2)
    },
     RegisterSurname: {
        required,
        minLength: minLength(2)
    },
    password: {
      required, 
       minLength: minLength(8)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      email
    }
  },
  methods: {
    register() {
      const reqData = {
            "language_code": "tr",
            "name": this.RegisterName,
            "surname": this.RegisterSurname,
            "email": this.email,
            "password": this.password,
            "password_confirmation": this.repeatPassword,
            "announcement_permission": this.announcement_permission
          }
      this.axios.post('/user', reqData)
        .then(response => {
          console.log(response)
          this.registered = true
          this.errors = null
        })
        .catch(error => {
          this.registered = false
          this.errors = error.response.data.message
        })
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
    showRepeatPassword() {
      this.RepeatVisibility = 'text'
    },
    hideRepeatPassword() {
      this.RepeatVisibility = 'password'
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return false

      this.register()
    },
    change() {
      this.registered = false
      this.errors = null
    }
  }
}
</script>