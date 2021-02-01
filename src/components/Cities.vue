<template>
    <div class="cities">
        <div v-for="city in allCities" :key="city.id" class="element">
            {{ city.name }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Cities",
    computed : mapGetters(['allCities'])
}
</script>

<style lang="scss">
.element{
    padding-left: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
}
</style>
