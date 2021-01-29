<template>
  <div id="app">
    <main>

      <!-- <div class="search-box">
        <input type="text" class="search-bar" placeholder="Rechercher...">
      </div> -->

    <div>
      <h1>Lyon</h1>
    </div>
    <div class="weather-wrap">
      <div class="weather-box">
        <div class="weather-dealy">
          <div class="date">{{ dateBuilder() }}</div>
          <div class="temp">2°C</div>
        </div>
      </div>
    </div>

    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
       token: '956fea801960b3e2d6685c37cb4f31d5eec5bed67a5f66bc3c31cc7f137575c5',

    }
  },
  methods:{
    dateBuilder () {
      let d = new Date();
      let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre"];
      let days = ["Dimanche","Lundi","Mardi","Mercredi","Jundi","Vendredi","Samedi"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
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
}

main{
  padding: 30px;
}

.weather-wrap{
  display: flex;
  align-items: center;
}

.weather-box{
  background-color: rgb(28,32,46);
  color: #fff;
}
</style>
