export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60255ff1a92bf946c27ade0e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4ccrbi4d',
                  apiId: '927537db-495c-404b-89e6-f3b5b83ddb77'
                },
                {
                  buildHookId: '60255ff2632bfe3ed91b0f1e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8d9m35pa',
                  apiId: '8f21c307-1673-4ea8-be59-d8527a8229cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dardub/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8d9m35pa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
