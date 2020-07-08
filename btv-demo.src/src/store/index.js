import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

function filterCatchon(arr) {
  return arr instanceof Array ? 
    arr.filter(item => {
      if (item.catchon_flag == '99') 
        console.debug("item.catchon_flag == '99' : ", item.series_id)
      return item.catchon_flag != '99'
    })
    : []
}

async function getThemeItem(searchText) {
  return {
    header : searchText,
    items : (await axios.post(
      '/vod/btv/api/v1.0/theme-search', 
      {
        'query' : searchText,
        'topn' : 10
      }
    )).data
  }
}

export default new Vuex.Store({
  state: () => ({
    searchText: null,

    top100: null,

    themeList: [],
    themePreset: [],
  }),

  getters: {
    // topList: (state) => {
    //   return state.top100
    // },
  },

  mutations: {
    setTop100 (state, status) {
      state.top100 = status
    },

    addThemePreset (state, theme) {
      state.themePreset.push(theme)
    },
    setThemeDefault (state) {
      state.themeList = state.themePreset
    },
    
    setTheme (state, theme) {
      state.themeList = [theme]
    },
  },
  
  actions: {
    loadTop100 ({ commit, state }) {
      if (!state.top100)
        axios.get('/test-data/top100.json')
          .then(res => {
            commit('setTop100', filterCatchon(res.data))
          })
    },

    loadThemePreset ({ commit, state }, themeList) {
      if (state.themePreset.length)
        return

      for(let i in themeList) {
        setTimeout(() => {
          getThemeItem(themeList[i])
          .then(item => {
            commit('addThemePreset', item)
          })
        }, i * 500)
      }
    },

    searchTheme ({ commit }, searchText) {
      getThemeItem(searchText)
      .then(item => 
        commit('setTheme', item)
      )
    }
  },

  strict: debug,
  modules: { }
})

// const sample = new Vuex.Store({
//   state: () => ({
//     items: [],
//     checkoutStatus: null
//   }),

//   getters: {
//     cartProducts: (state, getters, rootState) => {
//       return state.items.map(({ id, quantity }) => {
//         const product = rootState.products.all.find(product => product.id === id)
//         return {
//           title: product.title,
//           price: product.price,
//           quantity
//         }
//       })
//     },
  
//     cartTotalPrice: (state, getters) => {
//       return getters.cartProducts.reduce((total, product) => {
//         return total + product.price * product.quantity
//       }, 0)
//     }
//   },
  
//   actions: {
//     checkout ({ commit, state }, products) {
//       const savedCartItems = [...state.items]
//       commit('setCheckoutStatus', null)
//       // empty cart
//       commit('setCartItems', { items: [] })
//       shop.buyProducts(
//         products,
//         () => commit('setCheckoutStatus', 'successful'),
//         () => {
//           commit('setCheckoutStatus', 'failed')
//           // rollback to the cart saved before sending the request
//           commit('setCartItems', { items: savedCartItems })
//         }
//       )
//     },
//   },

//   mutations: {
//     pushProductToCart (state, { id }) {
//       state.items.push({
//         id,
//         quantity: 1
//       })
//     },
  
//     incrementItemQuantity (state, { id }) {
//       const cartItem = state.items.find(item => item.id === id)
//       cartItem.quantity++
//     },
  
//     setCartItems (state, { items }) {
//       state.items = items
//     },
  
//     setCheckoutStatus (state, status) {
//       state.checkoutStatus = status
//     }
//   },
// })
