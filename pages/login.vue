<template>
  <div>
    <h4>Login page</h4>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("signIn");
      this.$router.push("/secret");
    }
  }
};
</script>