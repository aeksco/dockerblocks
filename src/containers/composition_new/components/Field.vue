
<template>
  <div class="form-gorup">

    <div class="row">

      <div class="col-sm-3">
        <label>{{label}}</label>
      </div>

      <div class="col-sm-9">

        <input class='form-control' type="text" v-if="value.type === 'string'">

        <input class='form-control' type="number" v-if="value.type === 'number'">

        <ul class="list-group" v-if="value.type === 'object'">
          <StructForm :struct="value.struct" :label="label"/>
        </ul>

        <ul class="list-group" v-if="value.type === 'collection'">
          <StructForm :struct="value.child" :label="label"/>
        </ul>

        <ul class="list-group" v-if="value.type === 'array'">

          <!-- Handles Array -->
          <ArrayInput v-model="arr" :type="value.datatype" />

          <!-- Text dropdown -->
          <!-- <select class='form-control' type="text" name="" v-if="value.datatype === 'string'"> -->
            <!-- <option>One</option> -->
            <!-- <option>Two</option> -->
            <!-- <option>Three</option> -->
          <!-- </select> -->

          <!-- Number dropdown -->
          <!-- <select class='form-control' type="text" name="" v-if="value.datatype === 'number'"> -->
            <!-- <option>1</option> -->
            <!-- <option>2</option> -->
            <!-- <option>3</option> -->
          <!-- </select> -->
        </ul>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import StructForm from './StructForm'
import ArrayInput from './ArrayInput'
export default {
  name: 'Field',
  props: ['label', 'value'],
  data () {
    return {
      arr: []
    }
  },
  components: {
    StructForm,
    ArrayInput
  },
  created () {
    console.log(JSON.stringify(this.value))
  }
}
</script>

<style type="text/css">
  li.list-group-item {
    padding: 0.25rem .25rem;
  }
  label {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
</style>
