<template>
    <footer class="footer py-5">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 text-center text-md-left mb-5 mb-md-0 position-relative d-flex flex-column">
                    <div><img src="../../assets/img/footer-logo.png" class="footer-logo"></div>
                   
                    <!-- <div class="footer-column mt-4 mb-xs-3">
                            <a href="#"><img src="http://ec2-52-209-26-186.eu-west-1.compute.amazonaws.com:3000/_nuxt/img/app-store.9d84f7c.png" class="download-app mb-xs-0 mb-3 mr-xs-3"></a>
                            <a href="#"><img src="http://ec2-52-209-26-186.eu-west-1.compute.amazonaws.com:3000/_nuxt/img/google-play.3fd32c7.png" class="download-app"></a>
                    </div> -->
                </div>
                <div class="col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="footer-column">
                        <h4 class="mb-3">Linkler</h4>
                        <div class="menu-link">
                             <router-link to="kullanim-sartlari">Kullanım Şartları</router-link>
                            <router-link to="gizlilik-sozlesmesi">Gizlilik Sözleşmesi</router-link>
                            <router-link to="iletisim">İletişim</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="footer-column">
                        <h4 class="mb-3">Bizi Takip Edin</h4>
                        <div class="menu-link">
                            <div class="mb-2"><router-link to="/" class="d-inline-block m-0 social-media-link facebook-color"><i class="color-third mr-3 align-middle top-minus-1 ri-facebook-fill"></i><span>facebook/baugo</span></router-link></div>
                            <div class="mb-2"><router-link to="/" class="d-inline-block m-0 social-media-link twitter-color"><i class="color-third mr-3 align-middle top-minus-1 ri-twitter-fill"></i><span>twitter/baugo</span></router-link></div>
                            <div class="mb-2"><router-link to="/" class="d-inline-block m-0 social-media-link instagram-color"><i class="color-third mr-3 align-middle top-minus-1 ri-instagram-fill"></i><span>instagram/baugo</span></router-link></div>
                        </div>
                    </div>
                </div>
                 <!-- <div class="col-4 col-xs-12 col-sm-4 col-lg-2">
                    <div class="footer-column">
                        <h4>Download</div>
                            <a href="#"><img src="http://ec2-52-209-26-186.eu-west-1.compute.amazonaws.com:3000/_nuxt/img/app-store.9d84f7c.png" class="download-app mb-xs-0 mb-3 mr-xs-3"></a>
                            <a href="#"><img src="http://ec2-52-209-26-186.eu-west-1.compute.amazonaws.com:3000/_nuxt/img/google-play.3fd32c7.png" class="download-app"></a>
                    </div>
                </div> -->
                 <!-- <div class="col-12 col-lg-4 mt-5 mt-lg-0">
                    <div class="footer-column">
                        <h4 class="mb-3">Stay Up To Date With Us</h4>
                        <p>Be the first to know about new class launches and announcements.</p>
                         <b-form-group class="input-icon mb-2">
                            <i class="ri-mail-line"></i>
                            <b-form-input placeholder="E-Mail Adresiniz..."></b-form-input>
                         </b-form-group>
                         <small>By giving us your e-mail, you agree to our <a href="#" class="color-second"><u>Terms of Service</u></a> and 
                         <a href="/gizlilik-sozlesmesi" class="color-second"><u>Privacy Policy.</u></a></small>
                        
                    </div>
                </div> -->
             <div class="col-12 mt-5 pt-0 pt-md-3 align-items-center d-block d-md-flex text-center justify-content-between">
                    <div class="d-block d-sm-flex justify-content-center justify-content-md-left color-third mb-4 mb-md-0">
                        <i class="ri-copyright-line mr-2 color-third"></i>{{ new Date().getFullYear() }} BAUGO &middot; Tüm Hakları Saklıdır.
                    </div>
                    <div class="grayscale opacity-65">
                         <img src="../../assets/img/kredi-kartlari.png" height="16">
                    </div>
                   <!-- <a href="#" class="color-third"><i class="ri-earth-line mr-2 align-bottom color-third"></i>ENGLISH</a>  -->
                </div> 
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
$ColorDark: rgb(255 255 255 / 40%);
$LightColorSecond: rgba(0, 0, 0, .5);
$ColorDarker: rgb(255 255 255 / 20%);
$LightColor: rgba(0, 0, 0, .8); //light
    footer {
        .footer-column {
            .menu-link a{
                display:block;
                margin-bottom:.6rem;
                color:$LightColorSecond;
                span{
                    color:$LightColorSecond;
                }
             }
             .download-app{
                 width:110px;
                 height:auto;
                 display:block;
             }
        }
        .footer-logo{
            opacity: .25;
        }
        
    }
    small, p{
        color: $ColorDark;
    }
    .theme-dark{
        footer {
        .footer-column {
            .menu-link a{
                span{
                    color:$ColorDark;
                }
             }
        }
    }
    }
</style>
<script>
export default {
    name: "Footer",
}
</script>



