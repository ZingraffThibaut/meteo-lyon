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
    components: {
        BackgroundWeather,
    }
}
</script>