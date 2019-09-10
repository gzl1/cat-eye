<template>
  <div class="moviebox">
     <MovieItem
         v-for="movie in movies"
         :key="movie.id"
         :movie="movie"
     >

     </MovieItem>
  </div>
</template>

<script>
import MovieItem from "./Movieitem"
export default {
    components:{
       MovieItem,
    },
    data(){
       return {
          movies:[]
       }
    },
    created(){
        this.$http.get("/api/maoyan/index/list",{
           params:{
              limit:10
           }
        }).then(res=>{
            this.movies = res.data.data.object_list
        })
    }

}
</script>

<style>

</style>