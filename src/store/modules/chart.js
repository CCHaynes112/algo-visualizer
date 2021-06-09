import Vue from "vue";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



// initial state
const state = () => ({
    barCount: 100,
    bars: [],
    sortSpeed: 250, // In ms
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
    updateSortSpeed(context, payload) {
        context.commit('updateSortSpeed', payload)
    },
    updateBarCount(context, payload) {
        context.commit('updateBarCount', payload)
    }
    // selectionSort({ commit }) {
    //     commit('selectionSort')
    // },
    // insertionSort({ commit }) {
    //     commit('insertionSort')
    // }
}

// mutations
const mutations = {
    generateBar(state) {
        state.bars.push(getRandomInt(100))
    },
    updateBar(state, payload) {
        Vue.set(state.bars, payload.index, payload.val)
    },
    updateSortSpeed(state, payload) {
        state.sortSpeed = payload;
    },
    updateBarCount(state, payload) {
        state.barCount = payload;
    },
    // async selectionSort(state) {
    //     console.log("Sorting...");
    //     let n = state.bars.length;

    //     for (let i = 0; i < n; i++) {
    //         // Finding the smallest number in the subarray
    //         let min = i;
    //         for (let j = i + 1; j < n; j++) {
    //             if (state.bars[j] < state.bars[min]) {
    //                 min = j;
    //             }
    //         }
    //         if (min != i) {
    //             // Swapping the elements
    //             let tmp = state.bars[i];
    //             state.bars[i] = state.bars[min];
    //             state.bars[min] = tmp;
    //             await sleep(state.sortSpeed);
    //         }
    //     }
    //     console.log("Done!");
    // },
    // async insertionSort(state) {
    //     console.log("Sorting...");
    //     for (let i = 1; i < state.bars.length; i++) {
    //         let currentEl = state.bars[i];
    //         for (var j = i - 1; j >= 0 && state.bars[j] > currentEl; j--) {
    //             state.bars[j + 1] = state.bars[j];
    //             await sleep(state.sortSpeed);
    //         }
    //         state.bars[j + 1] = currentEl;
    //     }
    //     console.log("Done!");
    // },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}