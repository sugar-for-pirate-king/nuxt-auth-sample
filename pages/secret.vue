<template>
  <div>
    <span>This is secret page, you can't see it!</span>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    signOut() {
      this.$store.commit("signOut");
      this.$router.push("/login");
    }
  }
};
</script>