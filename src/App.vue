<template>
  <div id="app" :class="{ 'theme-dark': nightMode }">
    <LoginHeader v-if="getUserData" @nightChange="nightCatcher" />
    <Header v-else @nightChange="nightCatcher" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import LoginHeader from './components/layout/LoginHeader'
import Footer from './components/layout/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    LoginHeader,
    Footer,
  },
  data() {
    return {
      nightMode: false
    }
  },
  methods: {
    nightCatcher(data) {
      this.nightMode = data.nightMode
      this.nightMode ? document.body.classList.add('theme-dark') : document.body.classList.remove('theme-dark')
    }
  },
  computed: {
    ...mapGetters(['getUserData'])
  },
  watch: {
    nightMode() {
      localStorage.setItem('nightMode', JSON.stringify(this.nightMode))
    }
  },
  async created() {
    const nightMode = JSON.parse(localStorage.getItem('nightMode'))
    if (nightMode) {
      this.nightMode = nightMode
    }
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem('user_data'))
    if (userData) {
      this.$store.dispatch('setUserData', userData)
    }
  }
}
</script>

