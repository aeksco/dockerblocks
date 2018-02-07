
<template>
  <li class='list-group-item'>
    <!-- CANT iterate on root element -->
    <div v-for="v, k in struct">
      <!-- {{ k }} -->
      <!-- {{ v }} -->
      <FieldViewer :label="k" :value="v" :structVal="structVal" />
    </div>
  </li>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'StructViewer',
  props: ['struct', 'structVal'],
  beforeCreate () {
    this.$options.components.FieldViewer = require('./FieldViewer.vue').default
    if (!this.$options.propsData.struct) {
      this.$options.propsData.struct = window.parseStruct(this.$options.propsData.structVal)
    }
  }
}
</script>
