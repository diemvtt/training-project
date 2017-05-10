<template>
  <div id="app">
    <section class="main-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'app',
    methods: {
      isLogin() {
        return this.$route.name === 'login' ? true : false;
      }
    }
  };
</script>
