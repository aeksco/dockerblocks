<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <button class="btn btn-outline-primary" @click="addContainer()">
          <i class="fa fa-plus mr-2"></i>
          Add Container
        </button>
      </div>

      <div class="col-lg-12">

        <!-- Start DiagramComponent -->
        <svg id="svg">
          <g id="diagram" data-drag="diagram:diagram" data-drag-type="diagram">

            <!-- TODO - abstract into DiagramNodes -->
            <g id="node-layer">

              <!-- Containers -->
              <DraggableContainer :container="each" v-for="each in containers" />

            </g>

            <!-- TODO - abstract into Diagram Connections -->
            <g id="connections-layer">
            </g>

            <!-- <g id="connex-old"> -->
              <!-- <g class="connector-old"> -->
                <!-- <path d="M315 135 C 263.7 135 290.3 110 239 110" class="connector-path-outline"></path> -->
                <!-- <path d="M315 135 C 263.7 135 290.3 110 239 110" class="connector-path"></path> -->
                <!-- <circle cx="0" cy="0" r="4" data-drag="port_10:port" data-svg-origin="-319 -139" transform="matrix(1,0,0,1,315,135)" class="connector-handle input-handle"></circle> -->
                <!-- <circle cx="0" cy="0" r="4" data-drag="port_5:port" data-svg-origin="-243 -114" transform="matrix(1,0,0,1,239,110)" class="connector-handle output-handle"></circle></g> -->
            <!-- </g> -->

            <!-- TODO - what is this used for exactly? -->
            <g class="connector">

              <path class="connector-path-outline" />
              <path class="connector-path" />

              <circle class="connector-handle input-handle" cx="0" cy="0" r="4" />
              <circle class="connector-handle output-handle" cx="0" cy="0" r="4" />
            </g>

            <circle id="drag-proxy" cx="0" cy="0" r="1" fill="none" />

          </g>
        </svg>
        <!-- End DiagramComponent -->

      </div>
    </div>
  </div>
</template>

<script>
import { DIAGRAM_FUNC } from './Helpers'
import DraggableContainer from './DraggableContainer'
export default {
  name: 'DraggableDemoComponent',
  components: {
    DraggableContainer
  },
  data () {
    return {
      containers: [
        { label: 'Host Machine', type: 'HOST_MACHINE' },
        { label: 'Mongo DB', type: 'CONTAINER' },
        { label: 'Mongo Admin', type: 'CONTAINER' },
        { label: 'Network', type: 'NETWORK' },
        { label: 'Shared Volume', type: 'VOLUME' }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      DIAGRAM_FUNC()
    }, 500)
  },
  methods: {
    addContainer () {
      this.containers.push({ label: 'Jupyter', type: 'CONTAINER' })
    }
  }
}
</script>

<style lang="sass">
body
  overflow: hidden
  background: #1a1a1a

#svg
  position: fixed
  width: 100%
  height: 100%
  font-family: Arial, sans-serif

// Connector Styles
.connector-handle
  fill: #E88802

.connector-path
  stroke: #E88802
  stroke-width: 4
  fill: none

.connector-path-outline
  stroke: #333
  stroke-width: 6
  fill: none

</style>
