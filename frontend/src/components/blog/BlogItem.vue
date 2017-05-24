<template>
  <div class="entry">
    <router-link :to="/blog/ + item.id" class="entry-title">{{item.title}}</router-link>
    <p>{{item.body.substring(0,300)}}...</p>
    <router-link :to="/blog/ + item.id" class="see-more">Continue reading</router-link>
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
