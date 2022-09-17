<template>
  <v-container fluid>
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px"><v-icon size="50" color="#009494">mdi-arrange-send-to-back</v-icon>Retired NFTs</h1>
    <v-data-table
      dense
      :headers="headers"
      :items="info"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.nft.price="{item}">
        ${{item.nft.price}}
      </template>
      <template v-slot:item.verification="{item}">
        <v-chip :color="item.nft.verification > 0 ? '#2AE909' : '#D11517'"> {{item.nft.verification > 0 ? 'Approved' : 'Initial'}}</v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "RetiredNFTs",
  props: ["info"],
  data() {
    return {
      projectDialogShow: false,
      tbDataShow: null,
      headers: [
        {text: 'Company Name', value: 'nft.company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'nft.co2', align: 'center'},
        {text: 'stock', value: 'stock', align: 'center'},
        {text: 'Price', value: 'nft.price', align: 'center'},
        {text: 'Technology', value: 'nft.technology', align: 'center'},
        {text: 'status', value: 'verification', align: 'center'},
        {text: 'Vintage', value: 'nft.release', align: 'center'},
      ],
      tbData: [
        {
          name: 'Manalor',
          co2: '1',
          mint_date: '01/22/2019',
          price: '$12,000',
          release_date: new Date('08/22/2020'),
          owner: 'Herman',
          tech: 'Natural',
          highest_bid: '$8,922',
          verified: '498'
        },
        {
          name: 'Hi Sea',
          co2: '9',
          mint_date: '11/09/2018',
          price: '$1,000,000',
          release_date: new Date('08/22/2030'),
          owner: 'Moflak',
          tech: 'Industrial',
          highest_bid: '$457,922',
          verified: '1,298'
        },
      ],
    }
  },
  mounted() {
    this.tbDataShow = this.tbData
  }
}
</script>

<style lang="scss" scoped>
.v-data-table::v-deep th {
  font-size: 18px !important;
}

.v-data-table::v-deep td {
  font-size: 16px !important;
}
</style>
