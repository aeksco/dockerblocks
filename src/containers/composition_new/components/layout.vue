
<template>
  <div class='container'>
    <div class='row'>
      <div class='col-lg-6 bg-dark'>
        <StructViewer :struct='struct' :structVal='obj'/>
        <!-- <d3-network ref='net' :net-nodes='nodes' :net-links='links' :options='options' /> -->
      </div>

      <div class='col-lg-6'>
        <!-- <pre>{{struct}}</pre> -->
        <StructForm :struct='struct' />

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import _ from 'lodash'
import StructForm from './StructForm'
import StructViewer from './StructViewer'
import Field from './Field'
import D3Network from 'vue-d3-network'
window._ = _

// window.myObj = {
//   nodes: [
//     { id: 1, name: 'my awesome node 1' },
//     { id: 2, name: 'my node 2' },
//     { id: 3, name: 'orange node', _color: 'orange' },
//     { id: 4, _color: '#0022ff' },
//     { id: 5 },
//     { id: 6 },
//     { id: 7 },
//  nodeSize   { id: 8 },
//     { id: 9 }
//   ],
//   links: [
//     { sid: 1, tid: 2 },
//     { sid: 2, tid: 8 },
//     { sid: 3, tid: 4 },
//     { sid: 4, tid: 5 },
//     { sid: 5, tid: 6 },
//     { sid: 7, tid: 8 },
//     { sid: 5, tid: 8 },
//     { sid: 3, tid: 8 },
//     { sid: 7, tid: 9 }
//   ]
// }

window.myObj = {
  address: {
    street: '2 Avenue',
    zipcode: '10075',
    building: '1480',
    coord: [-73.9557413, 40.7720266]
  },
  borough: 'Manhattan',
  cuisine: 'Italian',
  grades: [
    {
      date: '2014-10-01',
      grade: 'A',
      score: 11
    },
    {
      date: '2014-01-16',
      grade: 'B',
      score: 17
    }
  ],
  name: 'Vella',
  restaurant_id: '41704620'
}

function parseStruct (obj) {
  // console.log('PARSE STRUCT')
  let struct = {}

  _.each(obj, (v, k) => {
    // console.log(k)
    // console.log(v)

    if (typeof (v) === 'string') {
      // console.log('string')
      // console.log(v)
      struct[k] = { type: 'string' }
    }

    if (typeof (v) === 'number') {
      // console.log('NUMBER')
      // console.log(v)
      struct[k] = { type: 'number' }
    }

    if (Array.isArray(v)) {
      // console.log('IS ARRAY!!')
      // console.log(v)
      // Collection
      if (typeof (v[0]) === 'object') {
        // console.log('COLLECTION')
        // console.log(v)
        struct[k] = { type: 'collection', child: parseStruct(v[0]) }
      } else {
        // console.log('ARRY LITERALS')
        // console.log(v)
        struct[k] = { type: 'array', datatype: 'number' }
      }
    } else if (typeof (v) === 'object') {
      // Nested Object
      struct[k] = { type: 'object', struct: parseStruct(v) }
    }
  })

  // console.log(struct)
  return struct
}

window.parseStruct = parseStruct

export default {
  name: 'composition_new',
  data () {
    return {
      obj: window.myObj
      // nodes: window.myObj.nodes,
      // links: window.myObj.links,
      // nodeSize: 20,
      // canvas: false
    }
  },
  computed: {
    struct () {
      let struct = parseStruct(window.myObj)
      return struct
    },
    options () {
      return {
        force: 3000,
        size: { w: 600, h: 600 },
        nodeSize: this.nodeSize,
        nodeLabels: true,
        canvas: this.canvas
      }
    }
  },
  components: {
    Field,
    D3Network,
    StructForm,
    StructViewer
  },
  methods: {
    formSubmit () {
      return store.dispatch('composition/create', this.model)
    }
  }
}
</script>
