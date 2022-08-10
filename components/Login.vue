<template>
  <v-card
    style="padding: 50px"
    elevation="5"
  >
    <v-row justify="center">
      <h3>Verifier Login</h3>
    </v-row>
    <v-text-field label="Username"></v-text-field>
    <v-text-field type="password" label="Password"></v-text-field>
    <v-card-actions>
      <v-btn @click="window.location.href = `${window.location.href.replace(current_path, dst_path)}`" color="green">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  props: ['current_path', 'dst_path'],
  data () {
    return {
      window: ""
    }
  },
  mounted() {
    this.window = window;
  }
}
</script>

<style scoped>

</style>
