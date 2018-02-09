<template>
  <div class="row">
    <div class="col-lg-6">

      <!-- MacroList -->
      <draggable v-model='containers' :options="sortableOptions" element="ul" class='list-group'>

          <!-- Child View -->
          <li class="list-group-item" v-for="container in containers" :key="container.id">
            <div class="row d-flex align-items-center">
              <div class="col-lg-2">
                <i class="fa fa-fw fa-bars drag-handle"></i>
              </div>
              <div class="col-lg-6">
                {{ container.label }}
              </div>
              <div class="col-lg-4 text-right">
                <button class="btn btn-sm btn-outline-warning" @click="editOption(container)">
                  <i class="fa fa-fw fa-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="destroyOption(container)">
                  <i class="fa fa-fw fa-trash"></i>
                </button>
              </div>
            </div>
          </li>

      </draggable>

    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    let data = {
      containers: [
        { id: '11123', label: 'mongo', name: 'mongo', links: [] },
        { id: '12313', label: 'mongo-express', name: 'mongo-express', links: [] },
        { id: '34523', label: 'jupyter', name: 'jupyter', links: [] },
        { id: '45923', label: 'express', name: 'express', links: [] }
      ]
    }
    return data
  },
  computed: {
    sortableOptions () {
      return {
        animation: 150,
        handle: '.drag-handle',
        ghostClass: 'ghost', // Class name for the drop placeholder
        chosenClass: 'chosen', // Class name for the chosen item
        dragClass: 'drag', // Class name for the dragging item
        fallbackTolerance: 100
      }
    }
  }
}
</script>


<style lang="sass" scoped>
  li.list-group-item

    i.drag-handle
      cursor: pointer

    button
      opacity: 0
      transition: opacity 0.3s ease-in-out

    &:hover
      button
        opacity: 1
</style>
