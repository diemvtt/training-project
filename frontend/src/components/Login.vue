<template>
  <div class="login-container">
      <h1 class="text-center">Login</h1>
      <form>
        <div class="form-group">
          <input type="email" id="email" class="input input-full" placeholder="Email Address">
        </div>

        <div class="form-group">
          <input type="password" id="password" class="input input-full" placeholder="Password">
        </div>
        <div class="text-center">
          <button type="submit" name="button" class="btn btn-primary btn-full">Login</button>
        </div>
      </form>
  </div>
</template>

<script>

  export default {
    name: 'login',
  };
</script>

<style lang="scss">
.login-container {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 15% auto;
  padding: 15px 15px 40px;
  width: 400px;
}
</style>
