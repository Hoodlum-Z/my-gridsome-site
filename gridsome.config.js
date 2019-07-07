// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Gridsome Site',
  siteUrl: 'https://amazing-gnizama.netlify.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
        '@gridsome/remark-prismjs'
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        route: '/posts/:slug', // Create routes
        resolveAbsolutePaths: true,
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
       tags: {
        typeName: 'Tag',
        route: '/tag/:id',
        create: true
        }
      },
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
  ]
}