<template>
  <div class="tabbar">
      <Tabitem txt="电影" mark="movie" :sel="selected" :change-selected="changeSelected">
          <img slot="normalImg" src="../../assets/1.png" alt="">
          <img slot="activeImg" src="../../assets/22.png" alt="">
      </Tabitem>
      <Tabitem txt="影院" mark="cinema" :sel="selected" :change-selected="changeSelected">
          <img slot="normalImg" src="../../assets/1.png" alt="">
          <img slot="activeImg" src="../../assets/11.png" alt="">
      </Tabitem>
      <Tabitem txt="我的" mark="mine" :sel="selected" :change-selected="changeSelected">
          <img slot="normalImg" src="../../assets/1.png" alt="">
          <img slot="activeImg" src="../../assets/1.png" alt="">
      </Tabitem>
  </div>
</template>

<script>
import Tabitem from "./Tabitem"
export default {
    data(){
        return {
            selected:"movie"
        }
    },
    components:{
        Tabitem
    },
    methods:{
        changeSelected(sel){
            this.selected = sel;
        }
    }
}
</script>

<style lang="scss">
    .tabbar{
        position: fixed;
        width:100%;
        height: 48px;
        left:0;
        bottom:0;
        background: white;
        display: flex;
    }
</style>