
<template>
  <li class='list-group-item'>
    <div class="mb-4" v-for="v, k in struct">
      <!-- {{ k }} -->
      <!-- {{ v }} -->
      <Field :label="k" :value="v"/>
    </div>
  </li>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'StructForm',
  props: ['struct'],
  beforeCreate () {
    this.$options.components.Field = require('./Field.vue').default
  }
}
</script>


