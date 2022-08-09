<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col lg="4">
        <Wallet/>
      </v-col>
      <v-col lg="4">
        <VerifiedProjects />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerifiedProjects from "@/components/VerifierIndex/VerifiedProjects";
export default {
  name: "index",
  components: {VerifiedProjects},
}
</script>

<style scoped>

</style>
