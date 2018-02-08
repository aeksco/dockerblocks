<template>
  <div class='container'>
    <div class="row">
      <div class="col-sm-12">
        <h1>Home</h1>
        <div id="paper" class='joint-paper joint-theme-default'></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import joint from 'jointjs'

export default {
  name: 'jointjs_demo',
  mounted () {
    /* eslint-disable no-new */
    const graph = new joint.dia.Graph()

    /* eslint-disable no-new */
    const paper = new joint.dia.Paper({
      el: document.getElementById('paper'),
      width: 800,
      height: 400,
      gridSize: 2,
      model: graph,
      snapLinks: true,
      linkPinning: false,
      embeddingMode: true,
      highlighting: {
        'default': {
          name: 'stroke',
          options: {
            padding: 6
          }
        },
        'embedding': {
          name: 'addClass',
          options: {
            className: 'highlighted-parent'
          }
        }
      },
      validateEmbedding: function (childView, parentView) {
        return parentView.model instanceof joint.shapes.devs.Coupled
      },
      validateConnection: function (sourceView, sourceMagnet, targetView, targetMagnet) {
        return sourceMagnet !== targetMagnet
      }
    })

    const connect = function (source, sourcePort, target, targetPort) {
      // Custom link definition?
      /* eslint-disable no-new */
      const link = new joint.shapes.devs.Link({
        source: {
          id: source.id,
          port: sourcePort
        },
        target: {
          id: target.id,
          port: targetPort
        }
      })

      link.addTo(graph).reparent()
    }

    /* eslint-disable no-new */
    const c1 = new joint.shapes.devs.Coupled({
      position: {
        x: 230,
        y: 50
      },
      size: {
        width: 300,
        height: 300
      }
    })

    // C1?
    c1.set('inPorts', ['in'])
    c1.set('outPorts', ['out 1', 'out 2'])

    /* eslint-disable no-new */
    const a1 = new joint.shapes.devs.Atomic({
      position: {
        x: 360,
        y: 260
      },
      /* eslint-disable */
      inPorts: ['xy'],
      outPorts: ['x', 'y']
    })

    /* eslint-disable no-new */
    const a2 = new joint.shapes.devs.Atomic({
        position: {
            x: 50,
            y: 160
        },
        outPorts: ['out']
    })

    /* eslint-disable no-new */
    const a3 = new joint.shapes.devs.Atomic({
        position: {
            x: 650,
            y: 50
        },
        size: {
            width: 100,
            height: 300
        },
        inPorts: ['a', 'b']
    })

    // Add cells?
    graph.addCells([c1, a1, a2, a3])

    // Embeds?
    c1.embed(a1)

    // Connect edges & types
    connect(a2, 'out', c1, 'in')
    connect(c1, 'in', a1, 'xy')
    connect(a1, 'x', c1, 'out 1')
    connect(a1, 'y', c1, 'out 2')
    connect(c1, 'out 1', a3, 'a')
    connect(c1, 'out 2', a3, 'b')

    /* rounded corners */
    _.each([c1, a1, a2, a3], function (element) {
      element.attr({
        '.body': {
          rx: 6,
          ry: 6
        }
      })
    })

    console.log(paper)
  }
}
</script>


<style type="text/css">
  .joint-type-devs text {
      text-transform: uppercase;
      font-weight: 800;
      font-family: "Source Sans Pro", sans-serif;
  }

  .joint-type-devs .body {
      fill: #ffffff;
      stroke: #31d0c6;
      stroke-width: 6px;
  }

  .joint-type-devs .label {
      fill: #31d0c6;
      font-size: 16px;
  }

  .joint-type-devs .port-body {
      stroke: #ffffff;
      stroke-width: 3px;
      fill: #7c68fc;
  }

  .joint-type-devs .port-body:hover {
      opacity: 1;
      fill: #ff7e5d;
  }

  .joint-type-devs .port-label {
      fill: #7c68fc;
      text-decoration: none;
  }

  .joint-type-devs.joint-type-devs-atomic .body {
      stroke: #feb663;
  }

  .joint-type-devs.joint-type-devs-atomic .label {
      fill: #feb663;
  }

  /* links */

  .joint-link .connection {
      stroke: #4B4F6A;
      stroke-width: 4px;
  }

  .joint-link .marker-arrowheads .marker-arrowhead,
  .joint-link .marker-vertex-group .marker-vertex,
  .joint-link .marker-vertex-group .marker-vertex:hover {
      fill: #31D0C6;
  }

  .joint-link .marker-arrowheads .marker-arrowhead:hover {
      fill: #F39C12;
  }

  .joint-link .link-tools .link-tool .tool-remove circle {
      fill: #fe854f;
  }

  /* highlighting */
  .highlighted-parent .body {
      stroke: #fe854f;
      transition: stroke 1s;
  }

  .highlighted-parent .label {
      fill: #fe854f;
      transition: fill 1s;
      text-decoration: underline;
  }

  .joint-type-devs .joint-highlight-stroke {
      stroke: #ff7e5d;
      stroke-width: 6px;
      pointer-events: none;
  }
</style>
