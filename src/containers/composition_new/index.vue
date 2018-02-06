
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'composition_new',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Composition - New' // title is now "TITLE - Composition - New"
  },
  data () {
    return {
      model: {}
    }
  }
}
</script>
