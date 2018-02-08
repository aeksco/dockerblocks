
// Composition Module State
const state = {
  collection: [
    {
      _id: '123123123',
      name: 'Jupyter + MongoDB',
      comp: {
        'version': '2',
        'services': [
          {
            'image': 'mongo-express',
            'container_name': 'mongoadmin',
            'depends_on': [
              'mongo',
              'jupyter'
            ],
            'links': [
              'jupyter',
              'mongo'
            ],
            'ports': [
              '8081:8081'
            ],
            'environment': [
              'ME_CONFIG_SITE_BASEURL=/mongo',
              'ME_CONFIG_SITE_BASEURL=/mongo',
              'ME_CONFIG_SITE_BASEURL=/mongo'
            ]
          }
        ]
      }
    }
  ],
  current: {},
  fetching: false
}

export default state
