<template>
  <g class="node-container">
    <rect class='node-background' width="204" height="128" x="0" y="0" rx="6" ry="6" />

    <g :class="headerCss">
      <rect class="header-round-rect" width="200" height="40" x="2" y="2" rx="4" ry="4" />
      <rect class="header-rect" width="200" height="36" x="2" y="6" />
      <text class="header-title" x="102" y="30">{{ container.label }} </text>
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
  props: ['container'],
  components: {
    DraggableInputs,
    DraggableOutputs
  },
  computed: {
    headerCss () {
      let css = 'node-header '
      css = css + this.container.type.toLowerCase().replace('_', '-')
      return css
    }
  }
}
</script>

<style lang="sass">

.node-container
  cursor: move

.node-background
  fill: #1a1c1d

.node-header
  // fill: #426D92

  &.host-machine
    fill: green

  &.container
    fill: #426D92

  &.network
    fill: orange

  &.volume
    fill: purple

  .header-title
    font-size: 20px
    fill: #fff
    text-anchor: middle

.node-content
  fill: #3C3C3C

</style>
