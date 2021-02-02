<template>
    <div class="city">
        <div class="current" v-if="weather">
            <div class="name">
                {{city.name}}
            </div>
            <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
            <div class="weather">{{ weather.weather[0].description }}</div>
            </div>
        </div>

        <div class="weekly">
            <div class="dayPred" @click="pred('pred')">  
                <div class="daily" v-if="dayPred" >
                    <div class="date">
                        {{ dateBuilder(dayPred.dt) }}
                    </div>

                    Température moyenne {{ dayPred.temp.dayPred}}<br>
                    Température minimum {{ dayPred.temp.min}}<br>
                    Température maximum {{ dayPred.temp.max}}<br>
                    Humidité {{ dayPred.humidity}}%<br>
                    Temps {{ dayPred.weather['0'].description}}<br>
                    <br>
                </div>
            </div>
            <div class="day">
                <div class="daily" v-if="day">
                    <div class="date">
                        {{ dateBuilder(day.dt) }}
                    </div>

                    Température moyenne {{ day.temp.day}}<br>
                    Température minimum {{ day.temp.min}}<br>
                    Température maximum {{ day.temp.max}}<br>
                    Humidité {{ day.humidity}}%<br>
                    Temps {{ day.weather['0'].description}}<br>
                    <br>
                </div>
            </div>
            <div class="dayNext" @click="changeDay('next')">
                <div class="daily" v-if="dayNext">
                    <div class="date">
                        {{ dateBuilder(dayNext.dt) }}
                    </div>
                    <br>
                    Température moyenne {{ dayNext.temp.dayNext}}<br>
                    Température minimum {{ dayNext.temp.min}}<br>
                    Température maximum {{ dayNext.temp.max}}<br>
                    Humidité {{ dayNext.humidity}}%<br>
                    Temps {{ dayNext.weather['0'].description}}<br>
                    <br>
                </div>
            </div>
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
            weather: null,
            daily: null,
            dayPred: null,
            day: null,
            dayNext: null,
            dayCurrent: 1,
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
            this.day = this.daily.daily[0];
            this.dayNext = this.daily.daily[1];
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
        },
        changeDay(change){
            let length = this.daily.daily.length-1;
            if(change == 'next'){
                if(this.dayCurrent < length){
                    this.dayPred = this.day;
                    this.day = this.dayNext;
                    this.dayCurrent = this.dayCurrent+1;
                    this.dayNext = this.daily.daily[this.dayCurrent];
                }else if(length == this.dayCurrent){
                    this.dayPred = this.day;
                    this.day = this.dayNext;
                    this.dayNext = null;
                    this.dayCurrent = this.dayCurrent+1;
                }
            }
        },
        pred(change){
            if(change == 'pred'){
                if(this.dayCurrent > 2){
                    this.dayNext = this.day;
                    this.day = this.dayPred;
                    this.dayCurrent = this.dayCurrent-1;
                    this.dayPred = this.daily.daily[this.dayCurrent-2];
                    
                }else if(this.dayCurrent == 2){
                    this.dayNext = this.day;
                    this.day = this.dayPred;
                    this.dayPred = null;
                    this.dayCurrent = this.dayCurrent-1;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.city{
    width: 100%;
    .current{
        padding: 10%;
    }
    .name{
        font-size: 5rem;
        font-weight: 800;
        padding-bottom: 30px;
    }
    .weather-box{
        font-size: 3rem;
        font-weight: 700;
        .temp{
            margin: 0;
        }
        .weather{
            margin-top: -20px;
        }
        
    }
    .weekly{
        display: flex;
        flex-direction: row;
        margin-right: 0;
        width: 100%;
        height: 400px;
        div{
            border-radius: 16px;
        }
        .date{
            font-size: 2rem;
            margin-bottom: 5%;
        }


        .dayPred{
            margin-left: -5%;
            width: 30%;
            background-color: rgba(255, 0, 0, 0.685);
        }
        .day{
            margin: 0px 5%;
            width: 40%;
            padding: 20px;
            background-color: rgba(255, 255, 0, 0.685);
        }
        .dayNext{
            width: 30%;
            background-color: rgba(0, 255, 0, 0.685);

        }

        
    }
}
</style>