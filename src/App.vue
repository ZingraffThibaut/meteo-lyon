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
  background-color: #333333;
  margin: 0;
  padding: 0;
  color: white;

  min-height: 100vh;
}
</style>