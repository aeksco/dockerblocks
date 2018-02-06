// Composition Containers
import CompositionList from '@/containers/composition_list'
import CompositionNew from '@/containers/composition_new'
import CompositionShow from '@/containers/composition_show'
import CompositionEdit from '@/containers/composition_edit'

export const CompositionListRoute = {
  path: '/compositions',
  component: CompositionList
}

export const CompositionNewRoute = {
  path: '/compositions/new',
  component: CompositionNew
}

export const CompositionShowRoute = {
  path: '/compositions/:id',
  component: CompositionShow,
  props: true
}

export const CompositionEditRoute = {
  path: '/compositions/:id/edit',
  component: CompositionEdit,
  props: true
}
