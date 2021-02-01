<template>
    <div class="app-bar">
        <Navigation :class="{'open':showNav}"/>
        <span class="app-bar_l"  @click="showNav = !showNav"> 
          <i class="fas fa-bars"></i>
        </span>
        <h1>{{ title }}</h1>
        <span class="app-bar_r" >
          <i class="fas fa-ellipsis-v"></i>
        </span>
    </div>
</template>

<script>
import Navigation from './Navigation';

export default {
    data(){
      return{
        showNav: false,
      }
    },
    components: {
      Navigation,
    },
    props:{
        title: {
            type: String,
            default: 'Météo',
        },
    },
    methods: {

    }
}
</script>

<style lang="scss">
.app-bar {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  font-size: 15px;
  z-index: 1;
    .app-bar_l{
      width: 30px;
    }
    .app-bar_r{
      width: 30px;
    }
    .app-bar_l:hover {
      cursor: pointer;
    }
    h1 {
      display: flex;
      justify-content: center;
      flex: 1;
    }
    span {
      padding: 0 20px;
    }
}
</style>