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
    <v-row justify="center" align="start">
      <v-col lg="9">
        <DefineProject />
      </v-col>
      <v-col lg="3">
        <ManagerInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectInformation from "@/components/Manager/Projects";
import Projects from "@/components/Manager/Projects";
import DefineProject from "@/components/Manager/DefineProject";
import ManagerInformation from "@/components/Manager/ManagerInformation";

export default {
  name: "index",
  components: {ManagerInformation, DefineProject, Projects, ProjectInformation},
}
</script>

<style scoped>

</style>
