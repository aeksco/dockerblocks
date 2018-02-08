<template>
  <g class="node-container">
    <rect class="node-background" width="204" height="128" x="0" y="0" rx="6" ry="6" />

    <g class="node-header">
      <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
      <rect class="header-rect" width="200" height="36" x="2" y="6" />
      <text class="header-title" x="102" y="30">{{ label }} </text>
    </g>

    <g class="node-content">

      <rect class="content-round-rect" width="200" height="82" x="2" y="44" rx="4" ry="4" />
      <rect class="content-rect" width="200" height="77" x="2" y="44" />

      <DraggableInputs />
      <DraggableOutputs />

    </g>
  </g>

</template>

<script>
import DraggableInputs from './DraggableInputs'
import DraggableOutputs from './DraggableOutputs'
export default {
  name: 'DraggableContainer',
  props: ['label'],
  components: {
    DraggableInputs,
    DraggableOutputs
  }
}
</script>

<style lang="sass" scoped>

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

</style>
