<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

body{
  font-family: 'montserrat', sans-serif;
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
  margin: 0;
  padding: 0;
  color: white;

  min-height: 100vh;
}
</style>