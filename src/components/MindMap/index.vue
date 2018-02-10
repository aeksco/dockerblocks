<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <mindmap :nodes="nodes" :connections="connections" :editable="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import mapData from './map'
import mindmap from './mapcomponent'
console.log(mindmap)
export default {
  name: 'index',
  components: {
    mindmap
  },
  data () {
    return {
      ...mapData
    }
  }
}
</script>

<style lang="sass">
$grey100: #f5f5f5
$grey500: #9e9e9e
$grey800: #424242
$grey900: #212121
$orange700: #f57c00
$white: #fff
$shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)


.mindmap-svg
  height: 100vh
  width: 100%

  &:focus
    outline: none

.mindmap-node

  rect.outer
    fill: #333333
    stroke: #f3f3f3
    stroke-width: 6px

    &:hover
      stroke: red

  rect.inner
    z-index: 99999999
    fill: blue
    &:hover
      fill: red

  a
    background: $grey100
    border-radius: 10px
    box-shadow: $shadow
    color: #000000
    // display: inline-block
    font-family: 'Raleway'
    font-size: 22px
    margin: 0 auto
    padding: 15px
    text-align: center
    text-decoration: none
    transition: background-color .2s, color .2s ease-out

    &[href]
      &:hover
        background-color: $orange700
        // color: $white
        cursor: pointer

.mindmap-node--editable
  cursor: all-scroll

  & > a
    pointer-events: none

.mindmap-subnode-group
  align-items: center
  border-left: 4px solid $grey500
  display: flex
  margin-left: 15px
  padding: 5px

  a
    // color: $grey900
    font-family: 'Raleway'
    font-size: 16px
    padding: 2px 5px

.mindmap-connection
  fill: transparent
  // stroke: $grey500
  stroke-dasharray: 10px 4px
  stroke-width: 3px

  &.mindmap-connection-link
    stroke: blue

  &.mindmap-connection-volume
    stroke: green

  &.mindmap-connection-port
    stroke: red

.mindmap-emoji
  height: 24px
  vertical-align: bottom
  width: 24px

.reddit-emoji
  border-radius: 50%
</style>
