<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">

        <svg width="500" height="300"></svg>

        <br/>

        <input
          type="range"
          v-model="circleSize"
          min="1"
          max="100"
          step="1"
        >

      </div>
    </div>
  </div>
</template>

<script>
const d3 = require('d3')

export default {
  name: 'D3DemoComponent',
  data () {
    return {
      circleSize: 50
    }
  },
  mounted (createElement) {
    let svg = d3.select(this.$el).select('svg')
    this.circle = svg
      .append('circle')
      .attr('cx', '250')
      .attr('cy', '150')
      .attr('r', this.circleSize)
  },
  watch: {
    circleSize (newValue) {
      this.circle.attr('r', newValue)
    }
  }
}
</script>

<style type="text/css">
/*  #cy {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }*/
</style>
