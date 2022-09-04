<template>
  <v-card
    style="padding: 50px"
    elevation="5"
  >
    <v-row justify="center">
      <h3>Sign In Form</h3>
    </v-row>
    <v-text-field label="Email" v-model="username"></v-text-field>
    <v-text-field type="password" label="Password"></v-text-field>
    <v-card-actions>
      <v-btn @click="login" color="green">Sign In</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  props: ['current_path', 'dst_path'],
  data () {
    return {
      window: "",
      username: ""
    }
  },
  mounted() {
    this.window = window;
  },
  methods: {
    login() {
      window.location.href = `${window.location.href.replace(this.current_path, this.dst_path)}`
      localStorage.setItem("username", this.username);
    }
  }
}
</script>

<style scoped>

</style>
