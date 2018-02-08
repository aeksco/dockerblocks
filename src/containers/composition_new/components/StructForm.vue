
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

    <div class="row">
      <div class="col-sm-12 text-right">
        <button class='my-2 mx-2 btn btn-sm btn-outline-success'>
          <i class="fa fa-plus"></i>
          Add {{ label }}
        </button>
      </div>
    </div>

  </li>


</template>

<!-- // // // //  -->

<script>

export default {
  name: 'StructForm',
  props: ['struct', 'label'],
  beforeCreate () {
    this.$options.components.Field = require('./Field.vue').default
  }
}
</script>

<style type="text/css" scoped>
  button.btn-outline-success {
    text-transform: capitalize;
  }
</style>
