<template>
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
                                 <div @click="favEkle()" v-show="!favVal">
                                    <i class="ri-star-fill mr-3 color-second align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small v-show="favCheck"></b-spinner>Favorilere Ekle
                                  </div>
                                  <div @click="favCikar()" v-show="favVal">
                                      <i class="ri-star-fill mr-3 color-yellow align-bottom" v-show="!favCheck"></i><b-spinner label="Spinning" class="align-middle top-minus-1 mr-3" small  v-show="favCheck"></b-spinner>Favorilere Eklendi
                                  </div>
                             </b-dropdown-item>
                        
                          </b-dropdown>
                        <a href="#"><div class="card-img-top card-image" :style="{ backgroundImage: 'url(' + CardImage2 + ')' }"></div></a>
                        <div class="card-body">
                            <div class="font-weight-bold ellipsis-2 mb-2"><a href="#">React Native ile Mobil Uygulama Geliştirme ve MobX</a></div>
                            <div class="text-capitalize text-truncate mb-2"><a href="#" class="color-second">John Doe</a></div>
                           
                        <div class="card-star-rating d-flex align-items-center mb-2">
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
                          <div class="pt-2 ml-2">(379)</div>
                       </div>
                       <div class="mb-2 color-second text-small">Toplam 16,5 saat<div class="clearfix d-none d-md-block d-xl-none"></div>
                         <span class="h4 m-0 color-second mx-2 d-md-none d-xl-inline-block">&middot;</span>14 bölüm</div>
                       <div class="d-flex align-items-center">
                         <div class="h3 mb-0 mr-2">27,99₺</div>
                         <div class="h3 color-second mb-0"><s>59,99₺</s></div>
                         
                        </div>
                        </div>
                      </article>
            </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "Course",
  components: {
    StarRating,
  },
  data() {
    return {
      favCheck:false,
        favVal:false,
      user: {},
      value: 65,
        CardImage1: "https://picsum.photos/600/300/?image=27",
        CardImage2: "https://picsum.photos/600/300/?image=22",
        CardImage3: "https://picsum.photos/600/300/?image=23",
        CardImage4: "https://picsum.photos/600/300/?image=24",
        CardImage5: "https://picsum.photos/600/300/?image=25",
        CardImage6: "https://picsum.photos/600/300/?image=26",
    };
  },
  methods: {
       favEkle(){
      this.favCheck = true
      this.favVal = false
      var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = true
         }, 500);
    },
    favCikar(){
      this.favVal = true
         this.favCheck = true
       var that = this;
        setTimeout(function() { 
              that.favCheck = false,
             that.favVal = false
         }, 500);
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
}
</script>
