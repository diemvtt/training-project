<template>
  <div class="container">
    <div class="entry-list">
      <blog-item v-for="(item,index) in blog" :item="item" :key="index">
      </blog-item>
    </div>
    <div class="text-center">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import {loadJSON} from '../js/common'

import BlogItem from './BlogItem.vue';

export default {
  name: 'home',
  components: { BlogItem },
  data() {
    return {
      blog: []
    }
  },
  created() {
    loadJSON('/data/blog.json',(response) => {
      this.blog = JSON.parse(response).blog;
    });
  },
};
</script>

<style lang="scss">
.entry-list {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px 0;
  padding: 15px;
}
</style>
