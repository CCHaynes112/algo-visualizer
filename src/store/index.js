import Vue from 'vue'
import Vuex from 'vuex'
import chart from './modules/chart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        chart
    },
})