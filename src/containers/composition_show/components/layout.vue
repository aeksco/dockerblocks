
<template>

  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body">

          <div class="row">
            <div class="col-lg-8">
              <h2>
                Composition Detail
              </h2>
            </div>
            <div class="col-lg-4 text-right">

              <!-- Edit Link -->
              <a class="btn btn-outline-warning btn-sm" :href="'#/compositions/' + model._id + '/edit'">
                <i class="fa fa-fw fa-pencil"></i>
              </a>

              <!-- Opens Destroy Confirmation Modal -->
              <button class="btn btn-outline-danger btn-sm" v-b-modal.confirm-modal>
                <i class="fa fa-fw fa-trash"></i>
              </button>

              <!-- Bootstrap Modal Component -->
              <b-modal id="confirm-modal" title="Destroy Composition?" @ok="onConfirm">
                <p class="my-4">Are you sure you want to destroy this Composition?</p>
              </b-modal>

            </div>
          </div>

          <table class="table table-striped">

            <!-- Table Header -->
            <tbody>

              <tr>
                <td>
                  Name
                </td>
                <td>
                  {{model.name}}
                </td>
              </tr>

              <tr>
                <td>
                  Location
                </td>
                <td>
                  {{model.location}}
                </td>
              </tr>

              <tr>
                <td>
                  Phone Number
                </td>
                <td>
                  {{model.phone}}
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>
    </div>

  </div>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['model'],
  methods: {
    onConfirm () {
      return store.dispatch('composition/destroy', this.model._id)
    }
  }
}
</script>


