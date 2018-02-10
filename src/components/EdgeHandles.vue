<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <div id="cy"></div>
      </div>
    </div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
/* eslint-disable */
import edgehandles from 'cytoscape-edgehandles'

// https://codepen.io/Asmor/pen/KyrzOm?limit=all&page=2&q=cytoscape
cytoscape.use(edgehandles)

export default {
  name: 'FormInput',
  mounted () {
    console.log('om.evt')

    const cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid',
        rows: 2,
        cols: 2
      },

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(name)',
            'shape': 'roundrectangle'
          }
        },

        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        },

        // some style for the extension

        {
          selector: '.eh-handle',
          style: {
            'background-color': 'red',
            'width': 12,
            'height': 12,
            'shape': 'ellipse',
            'overlay-opacity': 0,
            'border-width': 12, // makes the handle easier to hit
            'border-opacity': 0
          }
        },

        {
          selector: '.eh-hover',
          style: {
            'background-color': 'red'
          }
        },

        {
          selector: '.eh-source',
          style: {
            'border-width': 2,
            'border-color': 'red'
          }
        },

        {
          selector: '.eh-target',
          style: {
            'border-width': 2,
            'border-color': 'red'
          }
        },

        {
          selector: '.eh-preview, .eh-ghost-edge',
          style: {
            'background-color': 'red',
            'line-color': 'red',
            'target-arrow-color': 'red',
            'source-arrow-color': 'red'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'j', name: 'Jerry' } },
          { data: { id: 'e', name: 'Elaine' } },
          { data: { id: 'k', name: 'Kramer' } },
          { data: { id: 'g', name: 'George' } }
        ],
        edges: [
          { data: { source: 'j', target: 'e' } },
          { data: { source: 'j', target: 'k' } },
          { data: { source: 'j', target: 'g' } },
          { data: { source: 'e', target: 'j' } },
          { data: { source: 'e', target: 'k' } },
          { data: { source: 'k', target: 'j' } },
          { data: { source: 'k', target: 'e' } },
          { data: { source: 'k', target: 'g' } },
          { data: { source: 'g', target: 'j' } }
        ]
      }
    })

    let eh = cy.edgehandles()
    console.log(eh)
  }
}
</script>

<style type="text/css">
  #cy {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
</style>
