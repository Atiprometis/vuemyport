import { createStore } from 'vuex'



export default createStore({
  state: {
   
        count: 0,
        targetRefB: null,
        scrollToElementResult: '',
  },

  getters: {

      getTargetRefB: state => state.targetRefB

  },
  mutations: {

    
    addCount(state, value){
      state.count = value
    },
    setTargetRefB(state, ref) {
      state.targetRefB = ref;
    },

  },
  actions: {

    addActionCount(context){
      context.commit('addCount', this.state.count+1)
    },

    setTargetRefB({ commit }, ref) {
      commit('setTargetRefB', ref);
    }
         
    
  },
  modules: {
  }
})
