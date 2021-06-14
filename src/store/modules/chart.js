import Vue from "vue";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



// initial state
const state = () => ({
    barCount: 100,
    bars: [],
    sortSpeed: 100, // In ms
})

// getters
const getters = {
    bars: state => {
        return state.bars
    }
}

// actions
const actions = {
    generateBar(context) {
        context.commit('generateBar')
    },
    updateBar(context, payload) {
        context.commit('updateBar', payload)
    },
    clearBars(context) {
        context.commit('clearBars')
    },
    updateSortSpeed(context, payload) {
        context.commit('updateSortSpeed', payload)
    },
    updateBarCount(context, payload) {
        context.commit('updateBarCount', payload)
    }
}

// mutations
const mutations = {
    generateBar(state) {
        state.bars.push(getRandomInt(300))
    },
    updateBar(state, payload) {
        Vue.set(state.bars, payload.index, payload.val)
    },
    clearBars(state) {
        state.bars = [];
    },
    updateSortSpeed(state, payload) {
        state.sortSpeed = payload;
    },
    updateBarCount(state, payload) {
        state.barCount = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}