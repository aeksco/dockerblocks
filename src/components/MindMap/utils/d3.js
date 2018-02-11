import { mouse, drag, event, zoom, select } from 'd3'
import { getViewBox } from './dimensions'
import _ from 'lodash'

// let path
// let localSvg
// let localNodes
// let localLinks

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
  const drag_line = svg.append('svg:path')
  .attr('class', 'link dragline hidden')
  .attr('d', 'M0,0L0,0')

  const path = svg.append('svg:g').selectAll('path')

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
    .property('_id', _.uniqueId())

  const inners = d3nodes.append('rect')
    .attr('class', 'inner')
    .attr('width', node => node.width + 36)
    .attr('height', node => node.height + 36)
    .attr('transform', 'translate(2,2)')
    .property('inner', true)
    .property('_id', _.uniqueId())

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
    inners: inners,
    path: path,
    drag_line: drag_line
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
 // mouse event vars
let currentlyDragging = null
let selected_node = null
let selected_link = null
let mousedown_link = null
let mousedown_node = null
let mouseup_node = null
let lastNodeId = null

function resetMouseVars () {
  mousedown_node = null
  mouseup_node = null
  mousedown_link = null
}

// This is a dumb hack, get rid of it sometime
// function initLocal (svg, nodes, links, pathProx, drag_line_prox) {
  // localSvg = svg
  // localNodes = nodes
  // localLinks = links
  // path = pathProx
  // drag_line = drag_line_prox
// }

function restart (path, links) {
  console.log('RESTART')
  // path (link) group
  path = path.data(links)

  // update existing links
  path.classed('selected', function (d) { return d === selected_link })
  .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : '' })
  .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : '' })

  // add new links
  path.enter().append('svg:path')
  .attr('class', 'link')
  .classed('selected', function (d) { return d === selected_link })
  .style('marker-start', function (d) { return d.left ? 'url(#start-arrow)' : '' })
  .style('marker-end', function (d) { return d.right ? 'url(#end-arrow)' : '' })
  .on('mousedown', function (d) {
    if (event.ctrlKey) return

    // select link
    mousedown_link = d
    if (mousedown_link === selected_link) selected_link = null
    else selected_link = mousedown_link
    selected_node = null
    restart(path, links)
  })

  // remove old links
  path.exit().remove()
}

let draggingNode = null
export const d3Drag = (simulation, svg, nodes, links, path, drag_line) => {
  // Stores what's currently being dragged (inner, outer, null)
  // let currentlyDragging = null
  const dragStart = (node) => {
    let el = event.sourceEvent.srcElement
    draggingNode = el
    console.log(draggingNode)
    console.log(el)
    mousedown_node = node
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

  function dragged (node) {
    // console.log('dragged')
    // console.log(currentlyDragging)
    let el = event.sourceEvent.srcElement

    if (currentlyDragging['_id'] === el['__id']) {
      // console.log('SAME ID')
    } else {
      console.log('COMPLETE LINK BETWEEN NODES')
      // currentlyDragging = el
      return
    }

    let outer = !!el['outer']
    let inner = !!el['inner']
    if (inner || currentlyDragging === 'inner') {
      node.fx = event.x
      node.fy = event.y
    } else if (outer || currentlyDragging === 'outer') {
      console.log('outer dragged - todo - create link')
      drag_line
      .style('marker-end', 'url(#end-arrow)')
      .classed('hidden', false)
      // .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y)
      .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mouse(this)[0] + ',' + mouse(this)[1])
      simulation.alphaTarget(1)
      // restart(path, connections)
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

  // Applies drag/drop edge
  function onMouseOver (d) {
    // if (!mousedown_node || d === mousedown_node) return
    console.log('mouseover')
    // enlarge target node
    // select(this).attr('transform', 'scale(1.1)')

    if (event.sourceEvent) {
      let el = event.sourceEvent.srcElement
      console.log(el['_id'] === currentlyDragging['__id'])
      // let outer = !!el['outer']
      // let inner = !!el['inner']
      if (currentlyDragging === 'inner') {
        // node.fx = event.x
        // node.fy = event.y
      } else if (currentlyDragging === 'outer') {
        console.log('COMPLETE LINK HERE')
        console.log(d)
      } else {
        console.log('no currently dragging')
      }
    }
  }

  function onMouseOut (d) {
    if (!mousedown_node || d === mousedown_node) return
    console.log('mouseout')
    // unenlarge target node
    select(this).attr('transform', '')
  }
  function onMouseDown (d) {
    if (event.ctrlKey) return
    if (currentlyDragging) return

    console.log('mousedown')

    // select node
    mousedown_node = d
    if (mousedown_node === selected_node) selected_node = null
    else selected_node = mousedown_node
    selected_link = null

    console.log('DRAG LINE')

    // reposition drag line
    drag_line
    .style('marker-end', 'url(#end-arrow)')
    .classed('hidden', false)
    .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y)

    restart(path, links)
  }
  function onMouseUp (d) {
    if (!mousedown_node) return
    console.log('mouseup')

    // needed by FF
    drag_line
    .classed('hidden', true)
    .style('marker-end', '')

    // check for drag-to-self
    mouseup_node = d
    if (mouseup_node === mousedown_node) {
      resetMouseVars()
      return
    }

    // unenlarge target node
    select(this).attr('transform', '')

    // add link to graph (update if exists)
    // NB: links are strictly source < target arrows separately specified by booleans
    var source, target, direction
    if (mousedown_node.id < mouseup_node.id) {
      source = mousedown_node
      target = mouseup_node
      direction = 'right'
    } else {
      source = mouseup_node
      target = mousedown_node
      direction = 'left'
    }

    let link
    link = links.filter(function (l) {
      return (l.source === source && l.target === target)
    })[0]

    if (link) {
      link[direction] = true
    } else {
      link = { source: source, target: target, left: false, right: false }
      link[direction] = true
      links.push(link)
    }

    // select new link
    selected_link = link
    selected_node = null
    restart(path, links)
  }

  console.log(dragStart)
  console.log(dragged)
  console.log(dragEnd)
  // console.log(drag_line)

  // Applies drag

  nodes
  .on('mouseover', onMouseOver)
  .on('mouseout', onMouseOut)
  .on('mousedownX', onMouseDown)
  .on('mouseupX', onMouseUp)

  let myDragged = drag()
  .on('start', dragStart)
  .on('drag', dragged)
  // .on('end', dragEnd)
  return myDragged
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

export const d3Dragline = (svg, nodes, connections, path, drag_line_loc) => {
  // drag_line = svg.append('svg:path')
  // .attr('class', 'link dragline hidden')
  // .attr('d', 'M0,0L0,0')

  console.log('DRAGLINE!!!')

  function mousedown () {
    console.log('SVG MOUSE DOWN')
    // prevent I-bar on drag
    // d3.event.preventDefault()

    // because :active only works in WebKit?
    svg.classed('active', true)

    if (event.ctrlKey || mousedown_node || mousedown_link) return

    // insert new node at point
    let point = mouse(this)
    let node = { id: ++lastNodeId, reflexive: false }
    node.x = point[0]
    node.y = point[1]
    nodes.push(node)

    restart(path, connections)
  }

  function mousemove () {
    console.log('SVG MOUSEMOVE')
    if (!mousedown_node) return

    // update drag line
    drag_line_loc.attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mouse(this)[0] + ',' + mouse(this)[1])

    restart(path, connections)
  }

  function mouseup () {
    console.log('SVG MOUSEUP')

    if (mousedown_node) {
      // hide drag line
      drag_line_loc
      .classed('hidden', true)
      .style('marker-end', '')
    }

    // because :active only works in WebKit?
    svg.classed('active', false)

    // clear mouse event vars
    resetMouseVars()
  }

  svg.on('mousedownx', mousedown)
  .on('mousemovex', mousemove)
  .on('mouseupx', mouseup)
}
