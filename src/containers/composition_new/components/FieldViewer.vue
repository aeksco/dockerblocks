
<template>
  <div class="form-gorup">

    <div class="row">

      <div class="col-sm-4 text-left">
        <label>{{label}}</label>
      </div>

      <div class="col-sm-8 text-right">

        <!-- text / number value -->
        <p v-if="value.type === 'string' || value.type === 'number' ">
          <!-- {{ value }} -->
          {{ structVal[label] }}
        </p>

        <!-- Nested Object -->
        <StructViewer :structVal="structVal[label]" :struct="value.struct" v-if="value.type === 'object'"/>

        <!-- Collection -->
        <ul class="list-group" v-if="value.type === 'collection'">
          <li class="list-group-item" v-for="each in structVal[label]">
            <!-- {{ each }} -->
            <StructViewer :struct="value.child" :structVal="each"/>
          </li>
        </ul>

        <!-- Array -->
        <ul class="list-group" v-if="value.type === 'array'">
          <li class="list-group-item" v-for="each in structVal[label]">
            {{ each }}
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import StructViewer from './StructViewer'
// import ArrayInput from './ArrayInput'
export default {
  name: 'Field',
  props: ['label', 'value', 'structVal'],
  components: {
    StructViewer
  }
}
</script>

<style type="text/css">
  li.list-group-item {
    padding: 0 .25rem;
  }
  label {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
</style>


