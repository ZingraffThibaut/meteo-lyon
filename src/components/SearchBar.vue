<template>
    <div class="search-box">
        <input 
            type="text" 
            class="search"
            placeholder="Rechercher..."
            v-model="query"
            @keypress="fetchWeather"
        />
        <div>{{ query }}</div>
        <div>{{ weather }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            city: '',
            query: '',
            url_base: 'https://api.meteo-concept.com/api/location/',
            token: '956fea801960b3e2d6685c37cb4f31d5eec5bed67a5f66bc3c31cc7f137575c5',
            weather: {}, 
        }
    },
    methods:{
        fetchWeather (e){
        if (e.key == "Enter"){
            fetch(`${this.url_base}cities?token=${this.token}&search=${this.query}`)
            .then(res => {
                return res.json();
            }).then(this.setResults);
        }
        },
        setResults (results){
            this.weather = results;
        },
    }
}
</script>