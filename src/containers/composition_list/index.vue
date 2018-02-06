
<template>
  	<LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'composition_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Composition' // title is now "NAME - Composition"
  },
  computed: {
    collection () {
      return store.getters['composition/collection']
    }
  },
  mounted () {
    return store.dispatch('composition/fetchCollection')
  }
}
</script>


