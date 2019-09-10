<template>
  <div class="tabitem" @click="change">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props:["txt","mark","sel","changeSelected"],
    methods:{
        change(){
        this.changeSelected(this.mark)
        this.$router.push("/"+this.mark)
        }
    },
    computed:{
        flag(){
          if(this.mark === this.sel){
            return true
          }
          return false
        }
    }

}
</script>

<style lang="scss">
    .tabitem{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width:20px;
            height:20px;
        }
        .active{
            color: red;
        }
    }
</style>