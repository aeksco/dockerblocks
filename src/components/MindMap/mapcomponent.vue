<template>
  <svg class='mindmap-svg' ref='mountPoint'/>
</template>

<script>
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  select,
  zoom,
  zoomIdentity
} from 'd3'

import {
  d3Connections,
  d3Nodes,
  d3Drag,
  d3PanZoom,
  d3Dragline,
  onTick
} from './utils/d3'

import { getDimensions, getViewBox } from './utils/dimensions'
import subnodesToHTML from './utils/subnodesToHTML'
import nodeToHTML from './utils/nodeToHTML'

export default {
  props: {
    nodes: {
      type: Array,
      default: () => ([])
    },
    connections: {
      type: Array,
      default: () => ([])
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      simulation: null
    }
  },
  methods: {
    prepareNodes () {
      const render = (node) => {
        node.html = nodeToHTML(node)
        node.nodesHTML = subnodesToHTML(node.nodes)

        const dimensions = getDimensions(node.html, {}, 'mindmap-node')
        node.width = dimensions.width
        node.height = dimensions.height

        const nodesDimensions = getDimensions(node.nodesHTML, {}, 'mindmap-subnodes-text')
        node.nodesWidth = nodesDimensions.width
        node.nodesHeight = nodesDimensions.height
      }

      this.nodes.forEach(node => render(node))
    },
    /**
     * Add new class to nodes, attach drag behevior,
     * and start simulation.
     */
    prepareEditor (svg, conns, nodes, subnodes, outers, inners, path, drag_line) {
      nodes
        .attr('class', 'mindmap-node mindmap-node--editable')
        .on('dbclick', (node, e) => {
          console.log('dbl')
          console.log(node)
          console.log(e)
          node.fx = null
          node.fy = null
        })

      // Setup d3Drag helper
      nodes.call(d3Drag(this.simulation, svg, nodes, conns, path, drag_line))
      // console.log('stubs: ', d3Drag)

      // Tick the simulation 100 times
      for (let i = 0; i < 100; i += 1) {
        this.simulation.tick()
      }

      setTimeout(() => {
        this.simulation
          .alphaTarget(0.5).on('tick', () => (
            onTick(conns, nodes, subnodes)
          ))
      }, 200)
    },
    /**
     * Render mind map unsing D3
     */
    renderMap () {
      const svg = select(this.$refs.mountPoint)

      // // // //
      // define arrow markers for graph links
      svg.append('svg:defs').append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#000')

      svg.append('svg:defs').append('svg:marker')
      .attr('id', 'start-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 4)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M10,-5L0,0L10,5')
      .attr('fill', '#000')

      // Clear the SVG in case there's stuff already there.
      svg.selectAll('*').remove()

      // Add subnode group
      svg.append('g').attr('id', 'mindmap-subnodes')

      // Prepares nodes
      this.prepareNodes()

      // Bind data to SVG elements and set all the properties to render them
      const connections = d3Connections(svg, this.connections)
      const { nodes, subnodes, outers, inners, path, drag_line } = d3Nodes(svg, this.nodes)

      // line displayed when dragging new nodes
      d3Dragline(svg, nodes, connections, path, drag_line)
      // console.log(drag_line)
      // console.log(d3Dragline)
      // console.log(path)

      // title attached to each node
      // nodes.append('title').text(node => node.note)

      // Bind nodes and connections to the simulation
      this.simulation
        .nodes(this.nodes)
        .force('link').links(this.connections)

      if (this.editable) {
        this.prepareEditor(svg, connections, nodes, subnodes, outers, inners, path, drag_line)
      }

      // Tick the simulation 100 times
      for (let i = 0; i < 100; i += 1) {
        this.simulation.tick()
      }

      onTick(connections, nodes, subnodes)

      svg.attr('viewBox', getViewBox(nodes.data()))
        .call(d3PanZoom(svg))
        .on('dbClick.zoom', null)
    }
  },
  mounted () {
    this.renderMap()
  },
  updated () {
    zoom().transform(select(this.$refs.mountPoint), zoomIdentity)

    this.renderMap()
  },
  created () {
    // Create force simulation to position nodes that have
    // no coordinate, and add it to the component state
    this.simulation = forceSimulation()
      .force('link', forceLink().id(node => node.text))
      .force('charge', forceManyBody())
      .force('collide', forceCollide().radius(100))
  }
}
</script>

<style type="text/css">

/*svg {
  background-color: #FFF;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
*/
/*svg:not(.active):not(.ctrl) {
  cursor: crosshair;
}*/

path.link {
  fill: none;
  stroke: #fefefe;
  stroke-width: 8px;
  cursor: default;
}

svg:not(.active):not(.ctrl) path.link {
  cursor: pointer;
}

path.link.selected {
  stroke-dasharray: 10,2;
}

path.link.dragline {
  pointer-events: none;
}

path.link.hidden {
  stroke-width: 0;
}

/*circle.node {
  stroke-width: 1.5px;
  cursor: pointer;
}

circle.node.reflexive {
  stroke: #000 !important;
  stroke-width: 2.5px;
}
*/
text {
  font: 12px sans-serif;
  pointer-events: none;
}

text.id {
  text-anchor: middle;
  font-weight: bold;
}

</style>
