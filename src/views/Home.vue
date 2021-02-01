<template>
  <div class="home">
    <app-bar />
    <div class="content" v-if="selected">
      <city :city="firstCity" />
    </div>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import City from '../components/City.vue'

import { mapGetters } from 'vuex';


export default {
  name: 'Home',
  computed : mapGetters(['firstCity']),
  data(){
    return{
      selected: true,
      city: {},
    }
  },
  components: {
    AppBar,
    City,
  },
  methods:{

  }
}
</script>

<style>
.home{

  min-height: 100vh;
}
.content{
  width: 100%;
  position: absolute;
  z-index: 0;
}
</style>