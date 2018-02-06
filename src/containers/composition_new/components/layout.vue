
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <!-- <pre>{{struct}}</pre> -->
        <StructForm :struct="struct" />

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import _ from 'lodash'
import StructForm from './StructForm'
import Field from './Field'
window._ = _

window.myObj = {
  'version': '2',
  'services': [
    {
      'image': 'mongo-express',
      'container_name': 'mongoadmin',
      'depends_on': [
        'mongo'
      ],
      'links': [
        'mongo'
      ],
      'ports': [
        '8081:8081'
      ],
      'environment': [
        'ME_CONFIG_SITE_BASEURL=/mongo'
      ]
    }
  ]
}

function parseStruct (obj) {
  console.log('PARSE STRUCT')
  let struct = {}

  _.each(obj, (v, k) => {
    console.log(k)
    console.log(v)

    if (typeof (v) === 'string') {
      console.log('string')
      console.log(v)
      struct[k] = { type: 'string' }
    }

    if (typeof (v) === 'number') {
      console.log('NUMBER')
      console.log(v)
      struct[k] = { type: 'number' }
    }

    if (Array.isArray(v)) {
      console.log('IS ARRAY!!')
      console.log(v)
      // Collection
      if (typeof (v[0]) === 'object') {
        console.log('COLLECTION')
        console.log(v)
        struct[k] = { type: 'collection', child: parseStruct(v[0]) }
      } else {
        console.log('ARRY LITERALS')
        console.log(v)
        struct[k] = { type: 'array', datatype: 'number' }
      }
    } else if (typeof (v) === 'object') {
      // Nested Object
      struct[k] = { type: 'object', struct: parseStruct(v) }
    }
  })

  console.log(struct)
  return struct
}

window.parseStruct = parseStruct

export default {
  name: 'composition_new',
  data () {
    return {
      model: {}
    }
  },
  components: {
    Field,
    StructForm
  },
  methods: {
    formSubmit () {
      return store.dispatch('composition/create', this.model)
    }
  },
  computed: {
    struct () {
      let struct = parseStruct(window.myObj)
      return struct
    }
  }
}
</script>


