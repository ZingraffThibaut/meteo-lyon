<template>
    <div class="background">
        <background-weather />
        <!-- <background-weather 
            v-for="(city, index) in citys"
            :key="city.name"
            :weathers="city.weather"
            :active="index <= currentIndex"
        /> -->
        
    </div>
</template>

<script>
import BackgroundWeather from '../components/BackgroundWeather.vue'

export default {
    data(){
        return{
            city: '',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            key: '1b9b5262c0c8b1f5630867880f70ec4c',
            weather: {}, 
        }
    },
    components: {
        BackgroundWeather,
    },
    mounted() {
        axios
        .get(`${this.url_base}weather?q=${this.query}&lang=fr&appid=${this.key}`)
        .then((reponse) => {
            this.city = reponse.data;
            console.log(this.city);
        });
    }
}
</script>