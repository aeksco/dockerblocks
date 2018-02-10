<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <button class="btn btn-outline-success" @click="addNode()">
          <i class="fa fa-fw fa-plus"></i>
          Add Node
        </button>
      </div>
      <div class="col-lg-12">

        <svg xmlns="http://www.w3.org/2000/svg"
             :width="width+'px'"
             :height="height+'px'"
             @mousemove="drag($event)"
             @mouseup="drop()"
             v-if="bounds.minX">

          <line v-for="link in graph.links"
                :x1="coords[link.source.index].x"
                :y1="coords[link.source.index].y"
                :x2="coords[link.target.index].x"
                :y2="coords[link.target.index].y"
                stroke="black" stroke-width="2"
                @mousedown="currentMoveLink = {x: $event.screenX, y: $event.screenY, link: link}"/>

          <circle v-for="(node, i) in graph.nodes"
                  :cx="coords[i].x"
                  :cy="coords[i].y"
                  :r="20" :fill="colors[Math.ceil(Math.sqrt(node.index))]"
                  stroke="white" stroke-width="1"
                  @mousedown="currentMove = {x: $event.screenX, y: $event.screenY, node: node}"/>

        </svg>

      </div>
    </div>
  </div>
</template>

<script>
const d3 = require('d3')
window.d3 = d3
export default {
  name: 'D3DemoComponent',
  data () {
    return {
      circleSize: 50,
      graph: {
        nodes: d3.range(10).map(i => ({ index: i, x: null, y: null })),
        links: d3.range(9).map(i => ({ source: Math.floor(Math.sqrt(i)), target: i + 1 }))
      },
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 40,
      padding: 20,
      colors: ['#2196F3', '#E91E63', '#7E57C2', '#009688', '#00BCD4', '#EF6C00', '#4CAF50', '#FF9800', '#F44336', '#CDDC39', '#9C27B0'],
      simulation: null,
      currentMove: null
    }
  },
  computed: {
    bounds () {
      return {
        minX: Math.min(...this.graph.nodes.map(n => n.x)),
        maxX: Math.max(...this.graph.nodes.map(n => n.x)),
        minY: Math.min(...this.graph.nodes.map(n => n.y)),
        maxY: Math.max(...this.graph.nodes.map(n => n.y))
      }
    },
    coords () {
      return this.graph.nodes.map(node => {
        return {
          x: this.padding + (node.x - this.bounds.minX) * (this.width - 2 * this.padding) / (this.bounds.maxX - this.bounds.minX),
          y: this.padding + (node.y - this.bounds.minY) * (this.height - 2 * this.padding) / (this.bounds.maxY - this.bounds.minY)
        }
      })
    }
  },
  created () {
    this.initGraph()
  },
  methods: {
    initGraph () {
      this.simulation = d3.forceSimulation(this.graph.nodes)
      .force('charge', d3.forceManyBody().strength(d => -100))
      // .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      // .force('collide', d3.forceCollide(function (d) { return d.r + 8 }).iterations(16))
      .force('link', d3.forceLink(this.graph.links))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
    },
    addNode () {
      let height = this.height / 2
      let width = this.width / 2
      this.graph.nodes.push({ index: this.graph.nodes.length + 1, x: width, y: height })
      // this.initGraph()
      this.simulation.alpha(1)
      this.simulation.restart()
    },
    drag (e) {
      if (this.currentMoveLink) {
        // console.log('MOVE LINK')
      }
      if (this.currentMove) {
        this.currentMove.node.fx = this.currentMove.node.x - (this.currentMove.x - e.screenX) * (this.bounds.maxX - this.bounds.minX) / (this.width - 2 * this.padding)
        this.currentMove.node.fy = this.currentMove.node.y - (this.currentMove.y - e.screenY) * (this.bounds.maxY - this.bounds.minY) / (this.height - 2 * this.padding)
        this.currentMove.x = e.screenX
        this.currentMove.y = e.screenY
      }
    },
    drop () {
      delete this.currentMove.node.fx
      delete this.currentMove.node.fy
      this.currentMove = null
      this.currentMoveLink = null
      this.simulation.alpha(1)
      this.simulation.restart()
    }
  }
}
</script>

<style type="text/css">
/*  #cy {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }*/
</style>
