import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const CompositionFactory = new AbstractFactory({
  API_ROOT: '/api/compositions',
  REDIRECT_SUCCESS: '#/compositions',
  messages: {
    CREATE_SUCCESS: 'Created Composition.',
    UPDATE_SUCCESS: 'Updated Composition.',
    DESTROY_SUCCESS: 'Destroyed Composition.'
  }
})

// // // //

export default CompositionFactory
