<template>
    <div class="app-bar">
        <span class="app-bar_l">
        <i class="fas fa-bars"></i>
        </span>
        <h1>{{ title }}</h1>
        <span class="app-bar_r" >
        <i class="fas fa-ellipsis-v"></i>
        </span>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            default: 'Météo',
        },
    }
}
</script>

<style lang="scss">
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  z-index: 1;
    h1 {
      display: flex;
      justify-content: center;
      flex: 1;
    }
    span {
      padding: 0 20px;
    }
}
</style>