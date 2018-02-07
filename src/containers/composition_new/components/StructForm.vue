
<template>
  <li class='list-group-item'>

    <div class="row" v-for="v, k in struct">
      <div class="col-sm-12">

        <div class="px-2 py-2">
          <!-- {{ k }} -->
          <!-- {{ v }} -->
          <Field :label="k" :value="v"/>
        </div>

      </div>
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


