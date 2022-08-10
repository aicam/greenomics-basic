<template>
  <v-card style="padding: 15px">

    <VerificationProof :open-dialog="verificationDialog" :close-dialog="closeDialog" />

    <v-row justify="center">
      <h3 style="padding-top: 20px">
        <v-icon color="green">mdi-check-decagram</v-icon>
        Verified Projects
      </h3>
    </v-row>
    <v-row justify="center" align="center" style="padding: 20px">
      <v-data-table
        dense
        :headers="verifiedTable"
        :items="verifiedProjects"
        item-key="title"
        class="elevation-1"
      >
      <template v-slot:item.proof="{item}">
        <v-chip small color="blue" @click="verificationDialog = true">Click</v-chip>
      </template>
      </v-data-table>
    </v-row>
  </v-card>
</template>

<script>
import VerificationProof from "@/components/VerifierIndex/VerificationProof";
export default {
  name: "VerifiedProjects",
  components: {VerificationProof},
  data () {
    return {
      verificationDialog: false,
      verifiedTable: [
        {text: 'Company', value: 'title', align: 'center'},
        {text: 'CO2 (Ton)', value: 'carbon', align: 'center'},
        {text: 'Date verified', value: 'date', align: 'center'},
        {text: 'Technology', value: 'tech', align: 'center'},
        {text: 'Proof', value:'proof', align: 'center'}
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
  methods: {
    closeDialog() {
      this.verificationDialog = false;
    }
  }
}
</script>

<style scoped>

</style>
