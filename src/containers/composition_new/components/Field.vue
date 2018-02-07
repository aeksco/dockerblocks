
<template>
  <div class="form-gorup">

    <div class="row">

      <div class="col-lg-3">
        <label>{{label}}</label>
      </div>

      <div class="col-lg-9">

        <input class='form-control' type="text" name="" v-if="value.type === 'string'">

        <input class='form-control' type="number" name="" v-if="value.type === 'number'">

        <StructForm :struct="value.struct" v-if="value.type === 'object'"/>

        <ul class="list-group" v-if="value.type === 'collection'">
          <StructForm :struct="value.child"/>
        </ul>

        <ul class="list-group" v-if="value.type === 'array'">

          <!-- Handles Array -->
          <ArrayInput v-model="arr" :type="value.datatype" />

          <!-- Text dropdown -->
          <select class='form-control' type="text" name="" v-if="value.datatype === 'string'">
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>

          <!-- Number dropdown -->
          <select class='form-control' type="text" name="" v-if="value.datatype === 'number'">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
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
  label {
    text-transform: capitalize;
  }
</style>


