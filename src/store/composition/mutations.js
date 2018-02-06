import _ from 'lodash'

// Composition Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, { id }) {
    state.current = id
  },
  remove (state, id) {
    state.collection = _.filter(state.collection, (each) => { return each._id !== id })
  }
}

export default mutations
