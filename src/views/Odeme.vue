    <template>
    <div class="main-content">
      <div class="container">
        <h2 class="gradient-color mb-4">Ödeme Bilgileri</h2>
        <!-- odeme baslangic -->
        <div>
          <!-- Gostermek icin d-flex eklenmeli -->
            <!-- <div class="spinner over bg-transparent py-5 mt-5 position-relative d-none">
                  <b-spinner label="Spinning" class="brand-color mt-5 mb-1"></b-spinner>
            </div> -->
            <!-- basarılı durumunda d-none yerine d-flex gelmeli -->
          <div class="fadeIn h-0" :class="[{'d-block h-auto show' : paymentControl},{'d-none' : !paymentControl}]"> 
              <div class="pt-5 text-center align-items-center justify-content-center " v-show="paymentSuccess">
              <div>
                <div><i class="ri-checkbox-circle-fill ri-6x color-green"></i></div>
                <div class="h3 d-block mb-5 pb-4">Ödeme başarıyla gerçekleşti.</div>
                <a href="#"><u>Anasayfaya Dön</u></a>
              </div>
            </div>
              <!-- basarisiz durumunda d-none yerine d-flex gelmeli -->
            <div class="pt-5 text-center align-items-center justify-content-center " v-show="!paymentSuccess">
              <div>
                <div><i class="ri-close-circle-fill ri-6x color-red"></i></div>
                <div class="h3 d-block mb-5 pb-4">Ödeme başarısız oldu.</div>
                <a href="#" @click="tryAgain()"><u>Lütfen tekrar deneyin</u></a>
              </div>
            </div>
          </div>
        <!-- bos sepet -->
        <form @submit.prevent="submit" class="fadeIn h-0" :class="[{'d-block h-auto show' : !paymentControl},{'d-none' : paymentControl}]"> 
          <div class="row"><!-- spinner gosterildiginde d-none gelmeli -->
            <div class="col-12 col-lg-9">
            <div class="mb-5">
            <div class="row">
              <div class="col-12 col-md-6">
                    <b-form-group class="input-icon" label="Kart Numarası">
                      <i class="ri-bank-card-2-line"></i>
                      <b-form-input
                      :state="validateState($v.cardNumber)"
                        v-model="$v.cardNumber.$model"
                        v-mask="'#### #### #### ####'"
                    ></b-form-input> 
                    </b-form-group>
              </div>
                <div class="col-12 col-md-6">
                    <b-form-group class="input-icon" label="Kart Üzerindeki İsim">
                      <i class="ri-user-3-line"></i>
                      <b-form-input
                      :state="validateState($v.cardName)"
                        v-model="$v.cardName.$model"
                        id="nameOnCard"
                        v-on:keyup="validateAlpha()"></b-form-input>
                </b-form-group>
              </div>
                <div class="col-12 col-md-4">
                    <b-form-group label="Ay">
                    <template>
                      <div>
                        <multiselect 
                        v-on:input="validFunc" :class="{'is-valid':valid=='valid', 'is-invalid':valid=='invalid'}"
                          placeholder="Seçiniz"
                          v-model="selected"
                          :options="options1" 
                          :select-label="''" 
                          :selected-label="''" 
                          deselect-label="" 
                          :allow-empty="false"
                          :searchable="false"
                        >
                          <span slot="noResult">
                            Sonuç bulunamadı
                          </span>
                        </multiselect>
                      </div>
                    </template>
              </b-form-group>
              </div>
                <div class="col-12 col-md-4">
                    <b-form-group label="Yıl">
                    <template>
                      <div>
                        <multiselect 
                         v-on:input="valid2Func" :class="{'is-valid':valid2=='valid', 'is-invalid':valid2=='invalid'}"
                          placeholder="Seçiniz"
                          v-model="selected2"
                          :options="options1" 
                          :select-label="''" 
                          :selected-label="''" 
                          deselect-label="" 
                          :allow-empty="false"
                          :searchable="false"
                        >
                          <span slot="noResult">
                            Sonuç bulunamadı
                          </span>
                        </multiselect>
                      </div>
                    </template>
              </b-form-group>
              </div>
                    <div class="col-12 col-md-4">
              <b-form-group class="input-icon" label="CVC">
                      <i class="ri-bank-card-line"></i>
                      <b-form-input
                      :state="validateState($v.cardCvc)"
                        v-model="$v.cardCvc.$model"
                        v-mask="'###'"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-12">
                    <b-form-group label="Taksit Sayısı">
                    <template>
                      <div>
                        <multiselect 
                         v-on:input="valid3Func" :class="{'is-valid':valid3=='valid', 'is-invalid':valid3=='invalid'}"
                          placeholder="Seçiniz"
                          v-model="selected3"
                          :options="hirepurchase" 
                          :select-label="''" 
                          :selected-label="''" 
                          deselect-label="" 
                          :searchable="false"
                          :allow-empty="required"
                        >
                          <span slot="noResult">
                            Sonuç bulunamadı
                          </span>
                        </multiselect>
                      </div>
                    </template>
              </b-form-group>
              </div>
                <div class="col-12">
                <div class="checkbox-group reverse-hover">
                  <input
                    type="checkbox"
                    class="check-group"
                    name="check"
                    :true-value="true"
                    :false-value="false"
                    v-on:input="termCheckFunc" :class="{'is-valid':termCheck=='invalid', 'is-invalid':termCheck=='valid'}"
                  />
                  <label class="form-check-label" for="check">
                    <span class="check"></span>
                    <span class="box"></span>
                    <a href="#" class="position-relative z-index-top d-inline-block" v-b-modal.GeneralModal  @click="preInfo()"><u>Ön Bilgilendirme</u></a>, <a class="position-relative z-index-top d-inline-block" v-b-modal.GeneralModal @click="saleInfo()"><u>Mesafeli Satış Sözleşmesi</u></a> ve <a class="position-relative z-index-top d-inline-block" v-b-modal.GeneralModal @click="returnInfo()"><u>İptal-İade Şartları</u></a>nı okudum, kabul ediyorum.
                  </label>
                </div>
              </div>
            </div>
            </div>
              <div class="cart-items mb-5">
                <h3 class="mb-4">Sipariş Detayı</h3>
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
                      <div class="font-weight-bold ellipsis-1 mb-2">
                        <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                      </div>
                      <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                        <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                      </div>
                    </div>
                    <div class="cart-items-price pr-0 pr-md-3">
                      <div class="align-items-center d-flex d-md-block mt-2 mt-sm-3 mt-md-0">
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
                      <div class="font-weight-bold ellipsis-1 mb-2">
                        <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                      </div>
                      <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                        <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                      </div>
                    </div>
                    <div class="cart-items-price pr-0 pr-md-3">
                      <div class="align-items-center d-flex d-md-block mt-2 mt-sm-3 mt-md-0">
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
                      <div class="font-weight-bold ellipsis-1 mb-2">
                        <a href="#" class="d-block">Kodlama Serüveni : 01 - Algoritma Öğrenmeden Önce!</a>
                      </div>
                      <div class="text-capitalize text-truncate ellipsis-2 mb-2 color-second white-space text-small">
                        <a href="#" class="color-second">Eğitmen: KodBilim Teknoloji Eğitimleri, Bilgi paylaştıkça değerlidir!</a>
                      </div>
                    </div>
                    <div class="cart-items-price pr-0 pr-md-3">
                      <div class="align-items-center d-flex d-md-block mt-2 mt-sm-3 mt-md-0">
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
              <div class="mb-3">
                <button  class="btn btn-primary btn-block" type="submit" :disabled="disabled">
                  <b-spinner label="Spinning" class="top-minus-1 align-middle mr-3" small v-show="showSpinner"></b-spinner>Ödemeyi Tamamla
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
        <!-- odeme bitis -->
      </div>
      <GeneralModal>
      <template v-slot:GeneralModalTitle>
          <div v-if="generalModalMode == 'preInfo'">
            <h3>Ön Bilgilendirme</h3>
          </div>
          <div v-if="generalModalMode == 'saleInfo'">
            <h3>Mesafeli Satış Sözleşmesi</h3>
          </div>
          <div v-if="generalModalMode == 'returnInfo'">
            <h3>İptal-İade Şartları</h3>
          </div>
        </template>
          <template v-slot:GeneralModalContent>
            <div v-if="generalModalMode == 'preInfo'">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed enim dignissimos voluptatum numquam fuga delectus magnam blanditiis perferendis ipsum molestias, placeat ducimus, dolorum vel? Quia autem odit tempora maxime voluptate!
                Aliquid optio debitis quis exercitationem odit non, voluptatibus perspiciatis labore! Sed sit iure, veritatis dolore explicabo facere asperiores placeat provident, doloremque minima omnis ipsam quia aperiam modi deserunt amet animi.
                Modi blanditiis quisquam facilis quae libero sit repudiandae molestiae incidunt unde assumenda eaque quam consectetur a saepe vel architecto quas fugiat commodi aut, explicabo odit provident! Error, officiis? Quibusdam, ducimus.
                Facilis earum blanditiis possimus dolorum ipsa excepturi voluptatum in. Odio sequi commodi, at nemo omnis alias distinctio! Dicta, ea, eaque natus nesciunt quae dolore facilis, nisi vero tenetur nulla beatae!
            </div>
            <div v-if="generalModalMode == 'saleInfo'">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quisquam, veritatis inventore eaque illo facere harum nobis ipsam, cumque quod asperiores eum, reiciendis excepturi earum quia nisi sint. Deleniti, esse.
                Distinctio iure, hic repellendus consequatur, tempora ducimus deleniti exercitationem dignissimos quo commodi molestiae corrupti blanditiis, sequi saepe. Ut laudantium qui minus aliquam quidem maiores tempora assumenda sit eum repellendus. Sunt.
                Deserunt rerum quaerat provident excepturi, voluptas at, odit non placeat, eveniet saepe similique vero hic earum velit mollitia itaque suscipit sit nisi perferendis ea voluptatum! Eligendi aperiam rem deleniti perferendis?
                Voluptatibus sapiente porro laudantium! Sed laboriosam at veniam, perspiciatis sint nisi, totam molestias ex et modi, dolorum quod eaque error possimus laudantium? Earum minima facere laboriosam commodi vel? Ad, dolores!
            </div>
            <div v-if="generalModalMode == 'returnInfo'">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, at voluptate incidunt, consequatur repellendus atque sint nam magni quidem aut repudiandae reprehenderit explicabo assumenda suscipit ab iusto minus tenetur aperiam?
                Placeat, similique natus! Iste quia dolore, consequuntur corporis fugit officia animi at adipisci doloremque dolores veniam mollitia distinctio eveniet delectus atque? Aut nam laborum dolorum consequuntur assumenda vel, in molestiae.
                Odio earum rerum inventore nam, vero ipsum nihil voluptate impedit reiciendis et? Totam non dolores doloribus? Nam, voluptatem! Illum, soluta asperiores temporibus quidem tenetur culpa voluptas magni beatae est possimus.
                Voluptates nihil repudiandae, repellat cumque impedit libero quisquam sequi incidunt nobis quidem porro, tenetur distinctio iure quibusdam. Eos ducimus temporibus voluptatem consequatur asperiores voluptatibus, quos odit, aspernatur quas sequi eveniet.
            </div>
          </template>
      </GeneralModal>
    </div>
  </template>

    <script>
    import GeneralModal from "../components/modal/GeneralModal";
    import Multiselect from 'vue-multiselect';
    import { validationMixin } from 'vuelidate';
    import { required, minLength } from 'vuelidate/lib/validators';

  export default {
    name: "Odeme",
    mixins: [validationMixin],
    components: {
      Multiselect,
      GeneralModal,
    },
    data() {
      return {
        paymentSuccess:false,
        paymentControl:false,
        showSpinner:false,
        disabled: false,
        user: {},
        cardNumber: null,
        cardName: null,
        cardCvc: null,
        cardMount:null,
        selected: null,
        selected2: null,
        selected3: null,
        inputEvaluated: null,
        inputEvaluated2: null,
        inputEvaluated3: null,
        generalModalMode: null,
        termCheck: null,
        valid:null,
        valid2:null,
        valid3:null,
        submitStatus: null,
        value: 65,
        options1: ['Seçenek 1', 'Seçenek 2', 'Seçenek 3'],
        hirepurchase: ['Tek Çekim (80₺)', '2 Ay (2 x 40₺)', '4 Ay (4 x 21₺ = 84₺)'],
        CardImage1: "https://picsum.photos/600/300/?image=27",
        CardImage2: "https://picsum.photos/600/300/?image=22",
        CardImage3: "https://picsum.photos/600/300/?image=23",
        CardImage4: "https://picsum.photos/600/300/?image=24",
        CardImage5: "https://picsum.photos/600/300/?image=25",
        CardImage6: "https://picsum.photos/600/300/?image=26",
        

      };
    },
    validations: {
      cardNumber: {
        required,
        minLength: minLength(19),
      },
      cardName: {
        required,
        minLength: minLength(5),
      },
      cardCvc: {
        required,
        minLength: minLength(3),
      },
    },
    methods: {  
      tryAgain(){
        this.paymentControl = false
      },
       termCheckFunc:function(){
            if(this.termCheck=='invalid'){
                this.termCheck = 'valid';
                console.log("test2")
            }
            else{
                this.termCheck = 'invalid';
                console.log("test3")
            }
       },
       validFunc:function(){
            if(this.inputEvaluated){
        this.valid = 'invalid';
      }
      else{
       this.valid = 'valid';
      }
       },
        valid2Func:function(){
            if(this.inputEvaluated2){
        this.valid2 = 'invalid';
      }
      else{
       this.valid2 = 'valid';
      }
       },
        valid3Func:function(){
            if(this.inputEvaluated3){
        this.valid3 = 'invalid';
      }
      else{
       this.valid3 = 'valid';
      }
       },
      validateAlpha(){
          var textInput = document.getElementById("nameOnCard").value;
          textInput = textInput.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ, ]/g, "");
          document.getElementById("nameOnCard").value = textInput;
      },
      preInfo(){
      this.generalModalMode = 'preInfo';
      },
      saleInfo(){
      this.generalModalMode = 'saleInfo';
      },
      returnInfo(){
        this.generalModalMode = 'returnInfo';
      },

      validateState(item) {
        const { $dirty, $error } = item
        return $dirty ? !$error : null
      },
      submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
          this.showSpinner = false
        this.disabled = false
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
          this.showSpinner = true
        this.disabled = true
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
      if(this.valid == 'valid'){
        this.valid = 'valid';
      }
      else{
      this.valid = 'invalid';
      }
      if(this.valid2 == 'valid'){
        this.valid2 = 'valid';
      }
      else{
       this.valid2 = 'invalid';
      }
      if(this.valid3 == 'valid'){
        this.valid3 = 'valid';
        }
      else{
       this.valid3 = 'invalid';
      }
      if(this.termCheck == 'invalid'){
        this.termCheck = 'invalid';
        }
      else{
       this.termCheck = 'valid';
      }
    }
    }
  };
  </script>

