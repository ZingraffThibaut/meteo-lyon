<template>
    <div class="navigation" @click="closeMenu">
        <div class="menu">
            <search-bar />
            <cities />
        </div>
    </div>
</template>

<script>
import Cities from '../components/Cities.vue'
import SearchBar from '../components/SearchBar.vue'


export default {
    data(){
        return{
        }
    },
    components:{
        SearchBar,
        Cities,
    },
    methods: {
        closeMenu(e){
            if(e.target.className == "navigation open"){
                e.target.closest('.navigation').classList.remove('open');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation{
    position: absolute;
    z-index: -1;
    background-color: rgba(255,255,255,0.10);
    align-self: flex-start;
    width: 100vw;
    min-height: 100vh;
    color: white;
    opacity: 0;
    transition: 0.2s cubic-bezier(0.42, 0, 1.0, 1.0);
}
.menu{
    position: absolute;
    z-index: -1;
    height: 100vh;
    background-color: rgb(50,50,50);
}
.open{
    z-index: 2;
    opacity: 1;
    transition: 1s cubic-bezier(0.42, 0, 1.0, 1.0);
}
</style>