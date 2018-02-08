<template>
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
</template>

<script>
export default {
  name: 'DraggableInputs'
}
</script>

<style lang="sass" scoped>

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
