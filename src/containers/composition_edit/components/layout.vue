
<template>
  <div class="container">
    <a :href="'#/compositions/' + id">Back</a>
    <h2>Composition Edit - {{model.name}}</h2>
    <hr>

    <form v-on:submit.prevent="formSubmit">


        <div class="form-group">
          <label>
            Name
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted">Name of the individual</small>

          <input type="text" class="form-control" placeholder="Name" v-model="model.name">

        </div>


        <div class="form-group">
          <label>
            Location

          </label>
          <small class="form-text text-muted">Location of the individual</small>

          <input type="text" class="form-control" placeholder="Location" v-model="model.location">

        </div>


        <div class="form-group">
          <label>
            Phone Number

          </label>
          <small class="form-text text-muted">Phone number of the individual</small>

          <input type="number" class="form-control" placeholder="Phone Number" v-model="model.phone">

        </div>


      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>

  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['id'],
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      return store.dispatch('composition/fetchModel', this.id)
    },
    formSubmit () {
      // TODO - validations
      return store.dispatch('composition/update', this.model)
    }
  },
  computed: {
    model () {
      return store.getters['composition/current']
    }
  }

}
</script>


