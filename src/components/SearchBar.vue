<template>
    <div class="search-box">
        <input 
            type="text" 
            class="search"
            placeholder="Rechercher..."
            v-model="query"
            @keypress="fetchWeather"
        />
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            city: '',
            query: '',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            key: '1b9b5262c0c8b1f5630867880f70ec4c',
            weather: {}, 
        }
    },
    mounted() {

    },
    methods:{
        fetchWeather (e){
            if (e.key == "Enter"){
                axios
                .get(`${this.url_base}weather?q=${this.query}&lang=fr&appid=${this.key}`)
                .then((reponse) => {
                    this.city = reponse.data;
                    console.log(this.city);
                });
            }
        },
    }
}
</script>

<style lang="scss">
.search-box{
    margin: 60px 30px 40px 20px;
}

input{
    padding: 15px;
    color: white;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
    transition: 0.4s;
}
</style>