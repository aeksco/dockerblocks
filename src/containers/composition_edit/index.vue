
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'composition_edit',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Compositions - Edit' // title is now "TITLE - Composition - Edit"
  },
  props: ['id'],
  created () {
    store.dispatch('composition/fetchCollection')
    store.commit('composition/current', { id: this.id })
  },
  computed: {
    model () {
      return store.getters['composition/current']
    }
  }
}
</script>
