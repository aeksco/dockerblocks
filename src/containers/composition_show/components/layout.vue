
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- <StructViewer :structVal="model.comp" /> -->
        <ContainerList />
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ContainerList from '@/components/ContainerList'
// import StructViewer from '../../composition_new/components/StructViewer'

export default {
  props: ['model'],
  components: {
    // StructViewer
    ContainerList
  },
  methods: {
    onConfirm () {
      return store.dispatch('composition/destroy', this.model._id)
    }
  }
}
</script>


