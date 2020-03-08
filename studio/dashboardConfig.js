export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e6469d146c324343ef054c9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s9y25a7k',
                  apiId: 'fcfabcf7-9ec3-493d-a46c-ee98139ccfc6'
                },
                {
                  buildHookId: '5e6469d146c32427ecf05572',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1v3n9cyx',
                  apiId: '6861ca15-49bc-49f8-9b92-37f66a350057'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pietvanzoen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1v3n9cyx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
