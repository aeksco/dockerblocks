<template>
  <g class="port" :data-clickable="clickable">
    <circle class="port-outer" :cx="cxVal" cy="10" r="7.5" />
    <circle class="port-inner" :cx="cxVal" cy="10" r="5" />
    <circle class="port-scrim" :cx="cxVal" cy="10" r="7.5" :data-clickable="clickable" />
  </g>
</template>

<script>
export default {
  name: 'Port',
  props: ['type'],
  computed: {
    clickable () {
      if (this.type === 'output') {
        return 'false'
      }
    },
    cxVal () {
      if (this.type === 'output') {
        return '189'
      } else {
        return '15'
      }
    }
  }
}
</script>

<style lang="sass">

.port
  cursor: pointer

.port-scrim
  fill: transparent

.port-outer
  fill: #777777

.port-inner
  fill: #202020

</style>
