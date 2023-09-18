import { createStore } from 'vuex'



export default createStore({
  state: {
   

        targetRefB: null,
        scrollToElementResult: '',
  },

  getters: {

      getTargetRefB: state => state.targetRefB

  },
  mutations: {

    
    
    setTargetRefB(state, ref) {
      state.targetRefB = ref;
    },

  },
  actions: {

    

    setTargetRefB({ commit }, ref) {
      commit('setTargetRefB', ref);
    }
         
    
  },
  modules: {
  }
})
