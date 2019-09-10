<template>
  <div class="movie">
      
      <div class="navbar">
          <span class="location" @click="getLocation">青岛<i class="fa fa-map-marker"></i></span>
          <span class="well-received">正在热映</span>
          <span class="release">即将上映</span>
          <span class="search"><i class="fa fa-search"></i></span>
      </div>
     
      <MovieBox></MovieBox>
      
      
  </div>
</template>

<script>
import MovieBox from "./MovieBox"


// import { location } from "../../router/position.js";

export default {
    components:{
      MovieBox,
    },
    methods:{
        getLocation() {
          let _that = this;
          let geolocation = location.initMap("map-container"); //定位
          AMap.event.addListener(geolocation, "complete", result => {
            _that.lat = result.position.lat;
            _that.lng = result.position.lng;
            _that.province = result.addressComponent.province;
            _that.city = result.addressComponent.city;
            _that.district = result.addressComponent.district;
          });
        }
    
    },
    // mounted(){
    //     this.getLocation(); 
    // }
}
</script>

<style lang="scss">
    .movie{
      padding-bottom:.4rem;
      .navbar{
        // position:fixed;
        // top:.8rem;
        width:100%;
        height:44px;
        background: white;
        display: flex;
        justify-content:space-around;
        align-items: center;
        .search{
          i{
            color:red;
          }
        }
      }
    }
</style>