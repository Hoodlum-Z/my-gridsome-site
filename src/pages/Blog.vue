<template>
  <Layout>
      <h1>Blog Collection</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p> 
        <div v-for="edge in $page.posts.edges" :key="edge.node.id">
         <g-link :to="edge.node.path"> 
              <h2>{{edge.node.title}}</h2>
          </g-link> 
               <p>{{edge.node.excerpt}}</p>
             
              <p>{{edge.node.timeToRead}} Min Read Time</p>
        </div>
  </Layout>
</template>


<page-query>
query Post {
  posts: allPost (limit: 5) {
    edges {
      node { 
        id
        path
        title
        timeToRead
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog Collection'
  }
}
</script>
