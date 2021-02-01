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
    position: fixed;
    background-color: rgba(0,0,0,0.75);
    align-self: flex-start;
    width: 100%;
    min-height: 100vh;
    color: white;
    visibility: hidden;
}
.menu{
    position: fixed;
    height: 100vh;
    background-color: rgb(50,50,50);
}
.open{
    visibility: visible;
}
</style>