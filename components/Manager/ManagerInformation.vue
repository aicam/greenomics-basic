<template>
  <v-card style="padding: 30px">
    <v-row justify="center" align="center" style="padding-bottom: 25px;">
      <h3><v-icon>mdi-information</v-icon>Information</h3>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn
        outlined
        color="#85837E">
        Edit
      </v-btn>
    </v-row>
    <v-card-text style="padding-top: 50px">
      <p style="font-size: 20px; font-weight: bold"><v-icon color="#85841E">mdi-map-marker-outline</v-icon>Address</p>
      <p>2433 Lancaster Ave, Los Angeles, US</p>
      <p style="font-size: 20px; font-weight: bold"><v-icon color="#85841E">mdi-cellphone-basic</v-icon>Phonenumber</p>
      <p>+1 (626) 998-6543</p>
      <p style="font-size: 20px; font-weight: bold"><v-icon color="#85841E">mdi-account-hard-hat-outline</v-icon>Career</p>
      <p>Business Owner</p>
      <p style="font-size: 20px; font-weight: bold"><v-icon color="#85841E">mdi-clipboard-account-outline</v-icon>Business License Number</p>
      <p>443552334 </p>
      <p style="font-size: 20px; font-weight: bold"><v-icon color="#85841E">mdi-check-circle-outline</v-icon> NFTs</p>
      <p>2</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ManagerInformation"
}
</script>

<style scoped>

</style>
