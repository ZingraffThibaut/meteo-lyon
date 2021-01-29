<template>
  <div id="app">
    <main>
      <div>
        <h1>{{ weather.city.name }}</h1>
        
      </div>
      <div class="weather-wrap">
        <div class="weather-box">
          <WeatherDealy v-bind:weather="weather"/>
          <WeatherWeekly v-for="n in 6" :key="n" v-bind:weather="weather" v-bind:n = "n"/>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import WeatherDealy from './components/WeatherDealy.vue'
import WeatherWeekly from './components/WeatherWeekly.vue'

export default {
  name: 'App',
  components: {
    WeatherDealy,
    WeatherWeekly,
  },
  data() {
    return{
       token: '956fea801960b3e2d6685c37cb4f31d5eec5bed67a5f66bc3c31cc7f137575c5',
       url_base: 'https://api.meteo-concept.com/api/forecast/',
       query: '69381',
       weather: {},
    }
  },
  mounted() {
    this.fetchWeather()
  },
  methods:{
    fetchWeather(){
      fetch(`${this.url_base}daily?token=${this.token}&insee=${this.query}`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
    },
    setResults (results){
      this.weather = results;
    },
    dateBuilder (d) {
      d = new Date(d);
      let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre"];
      let days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
    weatherTransalte(){
      // let codetemp = [];
      return 'Beau';
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'montserrat', sans-serif;
  background-image: url('https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80');
  background-size: cover;
  background-position: bottom;
}

main{
  padding: 30px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}

h1{
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}

.weather-wrap{
  margin-top: 30px;
}

.weather-box{
  width: 100%;
  color: #fff;
}

.temp{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.temp-min, .temp-max{
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 500;
}
.date{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  padding-top: 20px;
}

i{
  color: #fff;
  font-size: 50px;
  margin-right: 50px;
}
</style>
