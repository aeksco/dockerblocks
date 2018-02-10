import { drag, event, zoom } from 'd3'
import { getViewBox } from './dimensions'

/**
 * Bind data to a <TAG>, inside a G element, inside the given root element.
 * Root is a D3 selection, data is an object or array, tag is a string.
 */
const bindData = (root, data, tag) => {
  console.log(data)
  return (
    root.append('g')
      .selectAll(tag)
      .data(data)
      .enter()
      .append(tag)
  )
}

/**
 * Bind connections to PATH tags on the given SVG
 */
export const d3Connections = (svg, connections) => (
  bindData(svg, connections, 'path')
  .attr('class', (e) => { return 'mindmap-connection mindmap-connection-' + e.type })
)

/* eslint-disable no-param-reassign */
/**
 * Bind rodes to FOREIGNOBJECT tags on the given SVG,
 * and set dimensions and html.
 */
export const d3Nodes = (svg, nodes) => {
  const selection = svg.append('g')
    .selectAll('g')
    .data(nodes)
    .enter()

  // Creates graph node wrapper
  // const d3nodes = selection
    // .append('g')
    // .html(node => node.html)

  const d3nodes = selection.append('g')
    .attr('class', 'mindmap-node')

  const outers = d3nodes.append('rect')
    .attr('class', 'outer')
    .attr('width', node => node.width + 40)
    .attr('height', node => node.height + 40)
    .property('outer', true)

  const inners = d3nodes.append('rect')
    .attr('class', 'inner')
    .attr('width', node => node.width + 36)
    .attr('height', node => node.height + 36)
    .attr('transform', 'translate(2,2)')
    .property('inner', true)

  // Creates graph node inner
  // d3nodes.append('foreignObject')
  // d3nodes.append('foreignObject')
  //   .attr('class', 'node-inner')
  //   .attr('width', node => node.width)
  //   .attr('height', node => node.height)
  //   .attr('transform', 'translate(15,15)')
  //   // .html(node => node.html)

  // Creates sub-nodes
  const d3subnodes = selection
    .append('foreignObject')
    .attr('class', 'mindmap-subnodes')
    .attr('width', node => node.nodesWidth + 4)
    .attr('height', node => node.nodesHeight)
    // .html(node => node.nodesHTML)

  return {
    nodes: d3nodes,
    subnodes: d3subnodes,
    outers: outers,
    inners: inners
  }
}

/**
 * Callback for forceSimulation tick event.
 */
export const onTick = (conns, nodes, subnodes) => {
  const d = conn => [
    'M',
    conn.source.x,
    conn.source.y,
    'Q',
    conn.source.x + (conn.curve && conn.curve.x ? conn.curve.x : 0),
    conn.source.y + (conn.curve && conn.curve.y ? conn.curve.y : 0),
    ',',
    conn.target.x,
    conn.target.y
  ].join(' ')

  // Set the connections path.
  conns.attr('d', d)

  // Set nodes position.
  // nodes
    // .attr('x', node => node.x - (node.width / 2))
    // .attr('y', node => node.y - (node.height / 2))
  nodes.attr('transform', node => `translate(${node.x},${node.y})`)

  // Set subnodes groups color and position.
  subnodes
    .attr('x', node => node.x + (node.width / 2))
    .attr('y', node => node.y - (node.nodesHeight / 2))
}

/*
 * Return drag behavior to use on d3.selection.call().
 */
export const d3Drag = (simulation, svg, nodes) => {
  // TODO - helper function
  // Gets 'el' from event.sourceEvent

  // Stores what's currently being dragged (inner, outer, null)
  let currentlyDragging = null

  const dragStart = (node) => {
    let el = event.sourceEvent.srcElement

    // Handles drag events on outer elements
    let outer = !!el['outer']
    let inner = !!el['inner']

    if (outer) {
      currentlyDragging = 'outer'
      console.log('OUTER start drag')
    } else if (inner) {
      currentlyDragging = 'inner'
      node.fx = node.x
      node.fy = node.y
    }

    if (!event.active) {
      console.log('inactive')
      simulation.alphaTarget(0.2).restart()
    }

    // Updates node position
  }

  const dragged = (node) => {
    // console.log('dragged')
    // console.log(currentlyDragging)
    let el = event.sourceEvent.srcElement
    let outer = !!el['outer']
    let inner = !!el['inner']
    if (inner || currentlyDragging === 'inner') {
      node.fx = event.x
      node.fy = event.y
    } else if (outer || currentlyDragging === 'outer') {
      console.log('outer dragged - todo - create link')
    }
  }

  const dragEnd = () => {
    console.log('dragEnd')
    if (!event.active) {
      currentlyDragging = null
      simulation.alphaTarget(0)
    }

    svg.attr('viewBox', getViewBox(nodes.data()))
  }

  return drag()
    .on('start', dragStart)
    .on('drag', dragged)
    .on('end', dragEnd)
}

/* eslint-enable no-param-reassign */

/*
 * Return pan and zoom behavior to use on d3.selection.call().
 */
export const d3PanZoom = el => (
  zoom().scaleExtent([0.3, 5])
    .on('zoom', () => (
      el.selectAll('svg > g').attr('transform', event.transform)
    ))
)
