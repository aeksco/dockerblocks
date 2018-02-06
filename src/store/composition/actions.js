import Factory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => {
    // Factory.fetchCollection({ commit })
    console.log('FETCH')
  },

  create: ({ commit }, attributes) => Factory.create({ commit }, attributes),

  update: ({ commit }, attributes) => Factory.update({ commit }, attributes),

  destroy: ({ commit }, id) => Factory.destroy({ commit }, id)
}

// // // //

export default actions
