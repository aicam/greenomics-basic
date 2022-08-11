<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col lg="3">
        <Wallet/>
      </v-col>
      <v-col lg="9">
        <v-card>
          <Projects/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectInformation from "@/components/Manager/Projects";
import Projects from "@/components/Manager/Projects";

export default {
  name: "index",
  components: {Projects, ProjectInformation}
}
</script>

<style scoped>

</style>
