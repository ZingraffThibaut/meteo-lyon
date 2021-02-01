<template>
    <div class="city">
        <div class="name">
            {{city.name}}
        </div>
         <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>
        <br>
        <div class="daily" v-for="daily in daily.daily" :key="daily.dt">
            {{ dateBuilder(daily.dt) }}
            <br>
            Température moyenne {{ daily.temp.day}}<br>
            Température minimum {{ daily.temp.min}}<br>
            Température maximum {{ daily.temp.max}}<br>
            Humidité {{ daily.humidity}}%<br>
            Temps {{ daily.weather['0'].description}}<br>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        city: Object,
    },
    data(){
        return{
            url_base: 'https://api.openweathermap.org/data/2.5/',
            key: '1b9b5262c0c8b1f5630867880f70ec4c',
            weather: {},
            daily: {},
        }
    },
    mounted(){
        axios
        .get(`${this.url_base}weather?q=${this.city.name}&lang=fr&units=metric&appid=${this.key}`)
        .then((reponse) => {
            this.weather = reponse.data;
        });

        axios
        .get(`${this.url_base}onecall?lat=${this.city.lat}&lon=${this.city.lon}&exclude=current,minutely,hourly,alerts&lang=fr&units=metric&appid=${this.key}`)
        .then((reponse) => {
            this.daily = reponse.data;
        });
    },
    methods: {
        dateBuilder(d){
            let a = new Date(d * 1000);
            let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();

            let time = date + ' ' + month + ' ' + year;
            return time;
        }
    }
}
</script>

<style lang="scss" scoped>
.city{
    z-index: 1;
}
</style>