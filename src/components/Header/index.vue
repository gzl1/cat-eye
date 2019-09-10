<template>
  <div class="header">
      <span class="moviespan">{{title}}</span>
  </div>
</template>

<script>
import router from "@/router"
export default {
    data(){
        return {
            title:"猫眼电影"
        }
    },
    created(){
        router.beforeEach((to,from,next)=>{
            switch(to.name){
                case "movie":
                    this.title = "猫眼电影"
                    break;
                case "cinema":
                    this.title = "影院"
                    break;
                case "mine":
                    this.title = "我的"
                    break;        
            }
            next();
        })
    }
}
</script>

<style lang="scss">
    .moviespan{
        display: block;
        width:100%;
        height:50px;
        background: red;
        color: white;
        font-size: 28px;
        text-align: center;
        line-height: 50px;
        font-family:"隶书";
        position: fixed;
        z-index: 10;
    }
</style>