<template>
  <div class="main-content">
    <div class="container">
      <h2 class="gradient-color mb-4">Şifre Sıfırlama</h2>
      <div v-if="error != null" class="alert alert-error mb-4" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div class="my-1">
            <strong>
              {{ error }}
            </strong>
          </div>
        </div>
      </div>
      <div v-if="success != null" class="alert alert-success mb-4" role="alert">
        <div class="alert-content w-100 d-inline-block">
          <div class="my-1">
            <strong>
              {{ success }}
            </strong>
          </div>
        </div>
      </div>
      <form @submit.prevent="submit">
        <div class="row flex-column-reverse flex-md-row">
          <div class="col-12 col-md-6 col-lg-4">
            <b-form-group class="input-icon" label="Yeni Şifre">
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

              <b-form-group class="input-icon" label="Yeni Şifre Tekrar">
              <i class="ri-lock-line"></i>
              <b-form-input
                :state="validateState($v.repeatPassword)"
                v-model="$v.repeatPassword.$model"
                id="input-repeatPassword"
                :type="RepeatVisibility"
              ></b-form-input>
              <i
                class="ri-eye-off-line"
                @click="showRepeatPassword()"
                v-if="RepeatVisibility == 'password'"
              ></i>
              <i
                class="ri-eye-line"
                @click="hideRepeatPassword()"
                v-if="RepeatVisibility == 'text'"
              ></i>
            </b-form-group>

          <button
            type="submit"
            @click="passwordChange()"
            class="btn btn-primary"
              :disabled="disabled">
                  <b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="updated"></b-spinner>
            Şifre Değiştir
          </button>
          </div>
          <div class="col-12 col-md-6 col-lg-8 pl-auto pl-lg-5 mb-4 mb-lg-0">
            <h3 class="mb-3 d-none d-md-block">Şifre Güvenliği Uyarısı</h3>
           <div class="brand-color"><i class="ri-error-warning-line mr-3 brand-color align-middle top-minus-1"></i>Güvenliğiniz için lütfen basit şifreler kullanmayınız.</div>
          </div>
        </div>
      </form>
    </div>
      <AlertDialogModal :visible="visible">
       <template v-slot:AlertDialogContent>
         <div v-if="alertSuccess"><i class="ri-checkbox-circle-fill text-success mr-4 mr-sm-3  align-middle ri-lg"></i>Değişiklikler başarıyla kaydedildi.</div>
         <div v-if="!alertSuccess"><i class="ri-close-circle-fill text-danger mr-4 mr-sm-3  align-middle ri-lg"></i>Bir hata oluştu, lütfen tekrar deneyin.</div>
            
      </template>
    </AlertDialogModal>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { not, required, minLength, sameAs } from "vuelidate/lib/validators";
import AlertDialogModal from "../components/modal/AlertDialogModal";
export default {
  name: "SifreSifirlama",
  components:{
    AlertDialogModal
  },
  mixins: [validationMixin],
  data() {
    return {
      disabled:false,
      alertTime: 3,
      alertSuccess:true,
      timerEnabled: false,
      timeVal: 2,
      timerCount: this.timeVal,
      visible:false,
      updated:false,
      show: false,
      success: null,
      error: null,
      password: null,
      repeatPassword: null,
      oldPassword: null,
      type: "password",
      visibility: "password",
      RepeatVisibility: "password",
      oldVisibility2: "password",
    };
  },
  validations: {
    oldPassword: {
      required,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(6),
      sameAsNotPassword: not(sameAs("oldPassword")),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password"),
      sameAsNotPassword: not(sameAs("oldPassword")),
    },
  },
     watch: {
  timerEnabled(value) {
    // saniye sayar
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    timerCount: {
      handler(value) {
        if((value > 0 && this.timerEnabled2)  || (value > 0 && this.timerEnabled) ) {
          setTimeout(() => {this.timerCount--;}, 1000);
          if(this.timerEnabled === true){
              this.updated= true 
              this.visible = false
              this.disabled = true
          }
          else if(this.timerEnabled2 === true){
              this.updated2= true 
               this.visible = false
                this.disabled2 = true
          }
        } 
        else {
            if(this.timerEnabled === true){
              this.updated= false 
              this.visible = true 
              this.timerEnabled = false
              this.disabled = false
              setTimeout(() => this.visible = false, this.alertTime * 1000);
          }
          else if(this.timerEnabled2 === true){
              this.updated2= false 
              this.visible = true 
              this.timerEnabled2 = false
              this.disabled2 = false
              setTimeout(() => this.visible = false, this.alertTime * 1000);
          }

           // alert gizleme suresi

        }
      },
    },
  },
  methods: {
    passwordChange(){
       this.timerEnabled = true
        this.updated = true
        this.timerCount = this.timeVal
        this.visible = false
        this.alertSuccess = true
    },
    validateState(item) {
      const { $dirty, $error } = item;
      return $dirty ? !$error : null;
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
    showRepeatPassword() {
      this.RepeatVisibility = "text";
    },
    hideRepeatPassword() {
      this.RepeatVisibility = "password";
    },
    showOldPassword() {
      this.oldVisibility2 = "text";
    },
    hideOldPassword() {
      this.oldVisibility2 = "password";
    },
    validFunc: function () {
      if (this.inputEvaluated) {
        this.valid = "invalid";
      } else {
        this.valid = "valid";
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

