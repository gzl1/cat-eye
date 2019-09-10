<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Tabber></Tabber>
  </div>
</template>

<script>

import Tabber from "@/components/Tabber"

import Header from "@/components/Header"

export default {
  components:{
      Tabber,
      Header
  }
 
}
</script>

<style>

</style>
