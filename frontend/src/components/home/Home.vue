<template>
  <div class="container">
    <div class="entry-list">
      <blog-item v-for="(blog,index) in blogs" :item="blog" :key="index">
      </blog-item>
    </div>
    <div class="text-center">

    </div>
  </div>
</template>

<script>

import BlogItem from '../blog/BlogItem';

export default {
  name: 'home',
  components: { BlogItem },

  computed: {
    blogs() {
      return this.$store.state.blogs;
    }

  },
  mounted: function () {
    this.$store.dispatch('LOAD_BLOG_LIST')
  }


};
</script>

<style lang="scss">
.entry-list {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  margin: 20px 0;
  padding: 15px;
}
</style>
