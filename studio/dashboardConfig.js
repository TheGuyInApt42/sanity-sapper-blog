export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d4c550f75d0a5dcb1d4570c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7g7tnnox',
                  apiId: '51beeaca-cbcc-4618-a350-273fe7d52391'
                },
                {
                  buildHookId: '5d4c551075d0a53019d456c9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-c8o3jwbe',
                  apiId: '272737e8-f665-4185-add4-9c8860ebf2a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheGuyInApt42/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-c8o3jwbe.netlify.com', category: 'apps'}
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
