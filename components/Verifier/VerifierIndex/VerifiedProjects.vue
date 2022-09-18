<template>
  <v-card style="padding: 15px">

    <VerificationProof :id="verifyingNftId" :open-dialog="verificationDialog"
                       v-on:close-func="verificationDialog = false"/>
    <ProjectDialog :open-dialog="projectDialog" v-on:close-func="projectDialog = false"/>

    <v-row justify="center">
      <h3 style="padding-top: 20px">
        <v-icon color="green">mdi-check-decagram</v-icon>
        Projects
      </h3>
    </v-row>
    <v-row justify="center" align="center" style="padding: 20px">
      <v-data-table
        dense
        :headers="verifiedTable"
        :items="info"
        item-key="title"
        class="elevation-1"
      >
        <template v-slot:item.verification="{item}">
          <v-chip small :color="(item.verification > 0 ? 'green' : 'red')" @click="() => {
            verifyingNftId = item.id;
            verificationDialog = true;}">
            {{ (item.verification > 0 ? 'Approved' : 'Initial') }}
          </v-chip>
        </template>
        <template v-slot:item.title="{item}">
          <v-chip small color="#757171" @click="projectDialog = true">{{ item.title }}</v-chip>
        </template>
      </v-data-table>
    </v-row>
  </v-card>
</template>

<script>
import VerificationProof from "@/components/Verifier/VerifierIndex/VerificationProof";

export default {
  name: "VerifiedProjects",
  components: {VerificationProof},
  props: ['info'],
  data() {
    return {
      verifyingNftId: null,
      verificationDialog: false,
      projectDialog: false,
      verifiedTable: [
        {text: 'Company', value: 'company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: 'Technology', value: 'technology', align: 'center'},
        {text: 'Status', value: 'verification', align: 'center'}
      ],
      verifiedProjects: [
        {
          title: 'Green Earth',
          carbon: '2.3',
          date: '11/09/2021',
          tech: 'Industrial'
        },
        {
          title: 'Namirac',
          carbon: '4.4',
          date: '04/22/2022',
          tech: 'Industrial'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
