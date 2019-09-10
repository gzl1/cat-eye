<template>
  <div class="movieitem">
      <div class="img-box">
          <img :src="movie.img" alt="">
      </div>
      <div class="info">
          <div class="info-left">
              <div class="title">{{movie.nm}}</div>
              <div class="count">观众评分 <span>{{movie.sc}}</span></div>
              <div class="actor">主演：{{movie.star}}</div>
              <div class="counts">{{movie.showInfo}}</div>
              <div class="title"></div>
          </div>
          <div class="info-right">
              <div class="ticket" >购票</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      movie:Object
  }
}
</script>

<style lang="scss">
    .movieitem{
        width:3.5rem;
        height:1.5rem;
        margin:.12rem;
        background: white;
        .img-box{
            width:1rem;
            height:1.5rem;
            float: left;
            img{
                width:1rem;
                height:1rem;
                margin-top:.2rem;
            }
        }
        .info{
            width:2.5rem;
            float: left;
            height:1.5rem;
            padding-left: .2rem;
            padding-top: .1rem;
           
            .info-left{
                width:1.8rem;
                float: left;
                height:1.4rem;
                .title{
                    font-size: 17px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px;
                    flex-shrink: 1;
                }
                .count{
                    font-size: 13px;
                    color: #666;
                    span{
                        font-size: 13px;
                        color: orange;
                    }
                }
            }
            .info-right{
                width:.5rem;
                float: left;
                height:1.4rem;
                .ticket{
                    width:.47rem;
                    height: .27rem;
                    background: red;
                    border-radius: 5px;
                    line-height: .27rem;
                    text-align: center;
                    color: white;
                    margin-top:.4rem;
                }
            }
        }
    }
</style>