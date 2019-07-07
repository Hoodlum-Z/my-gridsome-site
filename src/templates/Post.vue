<template>
  <Layout>
    <div>
        <g-image :src="$page.post.featured_image.src"></g-image>
          <h1 v-html="$page.post.title"></h1>
          <div>  
            <p><b>Author</b></p>
              <span v-text="$page.post.author"></span>
          </div>
          <div>
            <p><b>Date</b></p>
              <span v-text="$page.post.date"></span>
          </div>
          <div>  
            <p><b>Time to Read</b></p>
          </div>
          <div>             
              <span>{{ $page.post.timeToRead }} Min</span>
          </div>

            <div v-html="$page.post.content"></div>
        
          <div>
            <PostTags :post="$page.post"></PostTags>
          </div>
    </div>
  </Layout>
</template>


<page-query>
query Post ($path: String!){
  post: post (path: $path){
    title
    date
    author
    timeToRead
    featured_image {
      src (width: 850, blur: 10)
      title
      alt
    }
    excerpt
    content
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent'
import PostTags from '@/components/PostTags'
export default {
  components: {
    BlogContent,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
            meta: [
        {
          name: 'excerpt',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>

<style>

img {
  width: 850px;
}

</style>
