<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col lg="3">
        <Wallet/>
      </v-col>
      <v-col lg="5">
        <VerifiedProjects />
      </v-col>
      <v-col lg="2">
        <VerifierInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerifiedProjects from "@/components/VerifierIndex/VerifiedProjects";
import VerifierInformation from "@/components/VerifierIndex/VerifierInformation";
export default {
  name: "index",
  components: {VerifierInformation, VerifiedProjects},
}
</script>

<style scoped>

</style>
