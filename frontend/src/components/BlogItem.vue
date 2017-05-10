<template>
  <div class="entry">
    <router-link :to="/id/ + item.id" class="title">{{item.title}}</router-link>
    <p>{{item.content.substring(0,300)}}...</p>
    <span class="date">{{ (item.updated_time == "") ? item.created_time : item.updated_time }}</span>
    <router-link :to="/id/ + item.id" class="see-more">Continue reading</router-link>
    <div class="action">
      <span>&#10084; Like ({{item.like.length}})</span><span href="#">&#9998; Comment ({{item.comments.length}})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-item',
  props: ['item']
}
</script>

<style lang="scss">
</style>
