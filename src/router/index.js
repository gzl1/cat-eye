import Vue from 'vue'
import Router from 'vue-router'

import Cinema from './Cinema'
import Mine from './Mine'
import Movie from './Movie'

Vue.use(Router)

export default new Router({
    // base:process.env.BASE_URL,
    routes:[
        {path:"/",redirect:"movie"},
        Cinema,Mine,Movie
    ]
})
