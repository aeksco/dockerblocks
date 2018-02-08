<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">

        <!-- Start DiagramComponent -->
        <svg id="svg">
          <g id="diagram" data-drag="diagram:diagram" data-drag-type="diagram">

            <!-- TODO - abstract into DiagramNodes -->
            <g id="node-layer">

              <!-- Containers -->
              <DraggableContainer :label="each.label" v-for="each in containers" />

            </g>

            <!-- TODO - abstract into Diagram Connections -->
            <g id="connections-layer"></g>

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
        { label: 'Network', type: 'NETWORK' }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      DIAGRAM_FUNC()
    }, 500)
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
