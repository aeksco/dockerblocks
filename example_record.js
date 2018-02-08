{
  _id: '4c5vrt98b7789hkjHhYTd543',
  version: '3.2',
  services: [
    {
      dh_id: '12837fuosadkj2'
      identifier: 'db',
      image: 'postgres',
      command: ['bundle', 'exec', 'thin', '-p', '3000'],
      configs: [
        'my_config',
        'my_other_config'
      ],
      networks: [
        'backend'
      ],
      args: {
        buildno: 1
      }
    },
    {
      dh_id: '12837fuosadkj2'
      id: 'mongo_express'
      image: 'mongo-express',
      container_name: 'mongoadmin',
      depends_on: [
        'mongo',
        'jupyter'
      ],
      links: [
        'jupyter',
        'mongo'
      ],
      networks: [
        'frontend',
        'backend'
      ],
      ports: [
        '8081:8081'
      ],
      environment: [
        'ME_CONFIG_SITE_BASEURL=/mongo',
        'ME_CONFIG_SITE_BASEURL=/mongo',
        'ME_CONFIG_SITE_BASEURL=/mongo'
      ]
    }
  ],
  networks: [
    {
      id: 'frontend',
      driver: 'custom-driver-1'
    },
    {
      id: 'backend',
      driver: 'custom-driver-2',
      driver_opts: {
        foo: '1',
        bar: '2'
      }
    }
  ],
  configs: [
    {
      id: 'my_config',
      file: './my_config.txt'
    },
    {
      id: 'my_other_config',
      external: true
    }
  ]
}
