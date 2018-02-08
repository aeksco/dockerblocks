<template>
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
</template>

<script>
export default {
  name: 'DraggableInputs'
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
