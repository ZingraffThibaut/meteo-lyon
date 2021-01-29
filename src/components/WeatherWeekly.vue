<template>
   <div class="weather-weekly">
        <div class="date">
          <div>{{ dateBuilder(weather.forecast[n].datetime) }}</div>
          <i :class="weatherTransalte(weather.forecast[n].weather)"></i>
        </div>
        
        <div class="temp">
            temperature minimum : <br> <div class="temp-min">{{ weather.forecast[n].tmin }}C</div>
            temperature maximum : <br> <div class="temp-max">{{ weather.forecast[n].tmax }}C</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    weather: {},
    n: Number,
  },
  methods:{
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
    weatherTransalte(time){
      console.log(time);
      let icone;
      switch (time){
        case 1:case 2:case 3:case 4:case 5:
          icone = 'fas fa-cloud';
          break;
        case 6: case 7:
          icone = 'fas fa-smog';
          break;
        case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 20: case 21: case 22: case 30: case 31: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 70: case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 210: case 211: case 212: case 230: case 231: case 232:
          icone = 'fas fa-cloud-showers-heavy';
          break;
        case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 108: case 120: case 121: case 122: case 123: case 124: case 125: case 126: case 127: case 128: case 130: case 131: case 132: case 133: case 134: case 135: case 136: case 137: case 138: case 140: case 141: case 142: case 235:
          icone = 'fas fa-bolt';
          break;
        case 60: case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 220: case 221: case 222:
          icone = 'fas fa-snowflake';
          break;
        default:
          icone = 'fas fa-sun';
      }
      return icone;
    }
  }
}
</script>

<style>
.weather-weekly{
  width: 100%;
  padding: 30px;
  background-color: rgba(28,32,46,0.75);
}
.weather-weekly:last-child{
  border-radius: 0px 0px 30px 30px;
}
</style>
