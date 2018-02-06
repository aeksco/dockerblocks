
<template>
  <table class="table table-striped table-hover">

    <!-- Table Header -->
    <thead>

      <th>
        Name
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Name of the individual" ></i>
      </th>

      <th>
        Location
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Location of the individual" ></i>
      </th>

      <th>
        Phone Number
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="Phone number of the individual" ></i>
      </th>

      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>

      <!-- Empty Table Row -->
      <tr class='tr-warning' v-if="!collection[0]">


        <td>Empty</td>



        <td></td>



        <td></td>


        <td></td>
      </tr>

      <tr v-for="m in collection" :key="m._id">



        <td>
          <a :href=" '#/compositions/' + m._id ">
            {{ m.name }}
          </a>
        </td>




        <td>{{m.location}}</td>




        <td>{{m.phone}}</td>


        <!-- Edit Composition-->
        <td class='text-right'>
          <a class="btn btn-sm btn-outline-primary" :href=" '#/compositions/' + m._id">
            <i class="fa fa-fw fa-eye"></i>
          </a>

          <a class="btn btn-sm btn-outline-warning" :href=" '#/compositions/' + m._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </a>

          <!-- Destroy -->
          <button class="btn btn-sm btn-outline-danger" @click="confirmDestroy(m._id)">
            <i class="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>

  </table>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['collection'],
  methods: {
    confirmDestroy (id) {
      store.commit('composition/remove', id)
      return store.dispatch('composition/destroy', id)
    }
  }
}
</script>


