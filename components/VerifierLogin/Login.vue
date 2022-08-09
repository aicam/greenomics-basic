<template>
  <v-card
    style="padding: 50px"
    elevation="5"
  >
    <v-row justify="center">
      <h3>Verifier Login</h3>
    </v-row>
    <v-text-field label="Username"></v-text-field>
    <v-text-field label="Password"></v-text-field>
    <v-card-actions>
      <v-btn color="green">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
