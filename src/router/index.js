import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import Profil from '../views/Profil.vue'
import ProfilDuzenle from '../views/ProfilDuzenle.vue'
import Bildirimler from '../views/Bildirimler.vue'
import BildirimAyarlari from '../views/BildirimAyarlari.vue'
import Hosgeldin from '../views/Hosgeldin.vue'
import GizlilikSozlesmesi from '../views/GizlilikSozlesmesi.vue'
import KullanimSartlari from '../views/KullanimSartlari.vue'
import Kurslarim from '../views/Kurslarim.vue'
import TumKategoriler from '../views/TumKategoriler.vue'
import TumKurslar from '../views/TumKurslar.vue'
import EgitimVideo from '../views/Egitim-Video.vue'
import EgitimQuiz from '../views/EgitimQuiz.vue'
import EgitimAnket from '../views/EgitimAnket.vue'
import errorPage from '../views/404.vue'
import error500 from '../views/500.vue'
import Progress from '../views/Progress.vue'
import KursDetay from '../views/KursDetay.vue'
import SatinAlmaGecmisi from '../views/SatinAlmaGecmisi.vue'
import Makbuz from '../views/Makbuz.vue'
import Sepet from '../views/Sepet.vue'
import SepetMisafir from '../views/SepetMisafir.vue'
import Odeme from '../views/Odeme.vue'
import Ayarlar from '../views/Ayarlar.vue'
import Iletisim from '../views/Iletisim.vue'
import SifreSifirlama from '../views/SifreSifirlama.vue'

import { store } from '../store'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Anasayfa',
      component: Anasayfa,
      meta: { requiresAuth: true }

    },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    props: true
  },
  {
    path: '/profil-duzenle',
    name: 'ProfilDuzenle',
    component: ProfilDuzenle
  },
  {
    path: '/kurs-detay',
    name: 'kurs-detay',
    component: KursDetay,
    props: true
  },
  {
    path: '/bildirimler',
    name: 'Bildirimler',
    component: Bildirimler
  },
  {
    path: '/bildirim-ayarlari',
    name: 'BildirimAyarlari',
    component: BildirimAyarlari
  },
  {
    path: '/hosgeldin',
    name: 'Hosgeldin',
    component: Hosgeldin
  },
  {
    path: '/gizlilik-sozlesmesi',
    name: 'gizlilik-sozlesmesi',
    component: GizlilikSozlesmesi
  },
  {
    path: '/kullanim-sartlari',
    name: 'KullanimSartlari',
    component:KullanimSartlari
  },
  {
    path: '/kurslarim',
    name: 'Kurslarim',
    component: Kurslarim
  },
  {
    path: '/tum-kategoriler',
    name: 'TumKategoriler',
    component: TumKategoriler
  },
  {
    path: '/tum-kurslar',
    name: 'TumKurslar',
    component: TumKurslar
  },
  {
    path: '/egitim-video',
    name: 'egitim-video',
    component: EgitimVideo
  },
  {
    path: '/egitim-anket',
    name: 'egitimAnket',
    component: EgitimAnket
  },
  {
    path: '/egitim-quiz',
    name: 'EgitimQuiz',
    component: EgitimQuiz
  },
  {
    path: '/404',
    name: '404',
    component: errorPage
  },
  {
    path: '/500',
    name: '500',
    component: error500
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/satin-alma-gecmisi',
    name: 'satin-alma-gecmisi',
    component: SatinAlmaGecmisi
  },
  {
    path: '/makbuz',
    name: 'makbuz',
    component: Makbuz
  },
  {
    path: '/sepet',
    name: 'Sepet',
    component: Sepet
  },
  {
    path: '/sepet-misafir',
    name: 'SepetMisafir',
    component: SepetMisafir,
    meta: { requiresAuth: true }
  },
  {
    path: '/odeme',
    name: 'Odeme',
    component: Odeme
  },
  {
    path: '/ayarlar',
    name: 'Ayarlar',
    component: Ayarlar
  },
  {
    path: '/iletisim',
    name: 'Iletisim',
    component: Iletisim
  },
  {
    path: '/sifre-sifirlama',
    name: 'SifreSifirlama',
    component: SifreSifirlama,
    meta: { requiresAuth: true }
  },
  {
    path: '/hosgeldin',
    component: Hosgeldin
  },
  {
    path: '*',
    component: errorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem('user_data'))
  if(to.matched.some(record => record.meta.requiresAuth)) {
    next()
    if (userData && userData.user && userData.user.picture_expire_in < new Date().toLocaleString()) {
      axios.get('/user?language_code=tr')
        .then(response => {
          var picture_expire_in = new Date()
          picture_expire_in.setMinutes(picture_expire_in.getMinutes() + 4)
          let data = response.data.data
          data.picture_expire_in = picture_expire_in.toLocaleString()
          var user_data = userData
          user_data.user = data
  
          localStorage.setItem('user_data', JSON.stringify(user_data))
          store.dispatch('setUserData', user_data)
        })
    }
  }

  if (userData && userData.access_token) {
    next()
  }
})

export default router

