<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">

        <svg id="svg">

          <g id="diagram" data-drag="diagram:diagram" data-drag-type="diagram">
            <g id="node-layer">

              <!-- PROCESS 1 -->
              <g class="node-container">
                <rect class="node-background" width="204" height="128" x="0" y="0" rx="6" ry="6" />

                <g class="node-header">
                  <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
                  <rect class="header-rect" width="200" height="36" x="2" y="6" />
                  <text class="header-title" x="102" y="30">Process 1</text>
                </g>

                <g class="node-content">

                  <rect class="content-round-rect" width="200" height="82" x="2" y="44" rx="4" ry="4" />
                  <rect class="content-rect" width="200" height="77" x="2" y="44" />

                  <g class="inputs">

                    <g class="input-field" transform="translate(0, 50)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 1</text>
                    </g>

                    <g class="input-field" transform="translate(0, 75)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 2</text>
                    </g>

                    <g class="input-field" transform="translate(0, 100)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 3</text>
                    </g>

                  </g>

                  <g class="outputs">

                    <g class="output-field" transform="translate(0, 50)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 1</text>
                    </g>

                    <g class="output-field" transform="translate(0, 75)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 2</text>
                    </g>

                    <g class="output-field" transform="translate(0, 100)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 3</text>
                    </g>
                  </g>

                </g>
              </g>

              <!-- PROCESS 2 -->
              <g class="node-container">
                <rect class="node-background" width="204" height="128" x="0" y="0" rx="6" ry="6" />

                <g class="node-header">
                  <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
                  <rect class="header-rect" width="200" height="36" x="2" y="6" />
                  <text class="header-title" x="102" y="30">Process 2</text>
                </g>

                <g class="node-content">

                  <rect class="content-round-rect" width="200" height="82" x="2" y="44" rx="4" ry="4" />
                  <rect class="content-rect" width="200" height="77" x="2" y="44" />

                  <g class="inputs">

                    <g class="input-field" transform="translate(0, 50)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 4</text>
                    </g>

                    <g class="input-field" transform="translate(0, 75)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 5</text>
                    </g>

                    <g class="input-field" transform="translate(0, 100)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 6</text>
                    </g>

                  </g>

                  <g class="outputs">

                    <g class="output-field" transform="translate(0, 50)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 4</text>
                    </g>

                    <g class="output-field" transform="translate(0, 75)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 5</text>
                    </g>

                    <g class="output-field" transform="translate(0, 100)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 6</text>
                    </g>
                  </g>

                </g>
              </g>

              <!-- PROCESS 3 -->
              <g class="node-container">
                <rect class="node-background" width="204" height="128" x="0" y="0" rx="6" ry="6" />

                <g class="node-header">
                  <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
                  <rect class="header-rect" width="200" height="36" x="2" y="6" />
                  <text class="header-title" x="102" y="30">Process 3</text>
                </g>

                <g class="node-content">

                  <rect class="content-round-rect" width="200" height="82" x="2" y="44" rx="4" ry="4" />
                  <rect class="content-rect" width="200" height="77" x="2" y="44" />

                  <g class="inputs">

                    <g class="input-field" transform="translate(0, 50)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 7</text>
                    </g>

                    <g class="input-field" transform="translate(0, 75)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 8</text>
                    </g>

                    <g class="input-field" transform="translate(0, 100)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 9</text>
                    </g>

                  </g>

                  <g class="outputs">

                    <g class="output-field" transform="translate(0, 50)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 7</text>
                    </g>

                    <g class="output-field" transform="translate(0, 75)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 8</text>
                    </g>

                    <g class="output-field" transform="translate(0, 100)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 9</text>
                    </g>
                  </g>

                </g>
              </g>

              <!-- PROCESS 4 -->
              <g class="node-container">
                <rect class="node-background" width="204" height="128" x="0" y="0" rx="6" ry="6" />

                <g class="node-header">
                  <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
                  <rect class="header-rect" width="200" height="36" x="2" y="6" />
                  <text class="header-title" x="102" y="30">Process 4</text>
                </g>

                <g class="node-content">

                  <rect class="content-round-rect" width="200" height="82" x="2" y="44" rx="4" ry="4" />
                  <rect class="content-rect" width="200" height="77" x="2" y="44" />

                  <g class="inputs">

                    <g class="input-field" transform="translate(0, 50)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 10</text>
                    </g>

                    <g class="input-field" transform="translate(0, 75)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 11</text>
                    </g>

                    <g class="input-field" transform="translate(0, 100)">
                      <g class="port">
                        <circle class="port-outer" cx="15" cy="10" r="7.5" />
                        <circle class="port-inner" cx="15" cy="10" r="5" />
                        <circle class="port-scrim" cx="15" cy="10" r="7.5" />
                      </g>
                      <text class="port-label" x="28" y="14">Input 12</text>
                    </g>

                  </g>

                  <g class="outputs">

                    <g class="output-field" transform="translate(0, 50)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 10</text>
                    </g>

                    <g class="output-field" transform="translate(0, 75)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 11</text>
                    </g>

                    <g class="output-field" transform="translate(0, 100)">
                      <g class="port" data-clickable="false">
                        <circle class="port-outer" cx="189" cy="10" r="7.5" />
                        <circle class="port-inner" cx="189" cy="10" r="5" />
                        <circle class="port-scrim" cx="189" cy="10" r="7.5" data-clickable="false" />
                      </g>
                      <text class="port-label" x="176" y="14">Output 12</text>
                    </g>
                  </g>

                </g>
              </g>
            </g>

            <g id="connections-layer"></g>

            <g class="connector">

              <path class="connector-path-outline" />
              <path class="connector-path" />

              <circle class="connector-handle input-handle" cx="0" cy="0" r="4" />
              <circle class="connector-handle output-handle" cx="0" cy="0" r="4" />
            </g>

            <circle id="drag-proxy" cx="0" cy="0" r="1" fill="none" />
          </g>
        </svg>

      </div>
    </div>
  </div>
</template>

<script>
import { DIAGRAM_FUNC } from './Helpers'
export default {
  name: 'DraggableDemoComponent',
  mounted () {
    console.log('HELLO')
    // console.log(Draggable)
    console.log(DIAGRAM_FUNC)
    DIAGRAM_FUNC()
    // let nextUid = 0

    // const bezierWeight = 0.675

    // const svg = document.querySelector("#svg")
    // const diagramElement = document.querySelector("#diagram")

    // const shapeLookup = {}
    // const portLookup = {}
    // const connectorLookup = {}

    // const ports = []
    // const shapes = []
    // const connectorPool = []

    // const dragProxy = document.querySelector("#drag-proxy")
    // const shapeElements = Array.from(document.querySelectorAll(".node-container"))

    // const frag = document.createDocumentFragment()
    // frag.appendChild(document.querySelector(".connector"))
    // const connectorElement = frag.querySelector(".connector")
    // const connectorLayer = document.querySelector("#connections-layer")

    /* eslint-disable no-new */
    // const diagram = new Diagram()
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

.node-container
  cursor: move

.node-background
  fill: #1a1c1d

.node-header
  fill: #426D92

  .header-title
    font-size: 20px
    fill: #fff
    text-anchor: middle

.node-content
  fill: #3C3C3C

.port
  cursor: pointer

.port-scrim
  fill: transparent

.port-outer
  fill: #777777

.port-inner
  fill: #202020

.port-label
  font-size: 12px
  fill: #fff

.input-field
  .port-label
    text-anchor: start

.output-field
  .port-label
    text-anchor: end

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
