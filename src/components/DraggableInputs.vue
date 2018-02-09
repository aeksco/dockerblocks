<!-- TODO - abstract this into smaller components -->
<template>
  <g class="inputs">
    <g class="input-field" transform="translate(0, 50)">
      <Port type="input" />
      <text class="port-label" x="28" y="14">Input 1</text>
    </g>

    <g class="input-field" transform="translate(0, 75)">
      <Port type="input" />
      <text class="port-label" x="28" y="14">Input 2</text>
    </g>

    <g class="input-field" transform="translate(0, 100)">
      <Port type="input" />
      <text class="port-label" x="28" y="14">Input 3</text>
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
