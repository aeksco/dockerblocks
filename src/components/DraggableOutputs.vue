<!-- TODO - abstract this into smaller components -->
<template>
  <g class="outputs">
    <g class="output-field" transform="translate(0, 50)">
      <Port type="output" />
      <text class="port-label" x="176" y="14">Output 1</text>
    </g>

    <g class="output-field" transform="translate(0, 75)">
      <Port type="output" />
      <text class="port-label" x="176" y="14">Output 2</text>
    </g>

    <g class="output-field" transform="translate(0, 100)">
      <Port type="output" />
      <text class="port-label" x="176" y="14">Output 3</text>
    </g>
  </g>
</template>

<script>
import Port from './Port'
export default {
  name: 'DraggableInputs',
  components: {
    Port
  }
}
</script>

<style lang="sass">

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
