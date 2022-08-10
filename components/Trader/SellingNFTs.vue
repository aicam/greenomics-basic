<template>
  <v-container fluid>
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px"><v-icon size="50" color="#009494">mdi-tag-outline</v-icon>NFTs for Sale</h1>
    <v-row justify="center" align="center" style="padding: 25px">
      <v-btn
        outlined
        color="#949133"
        @click="tbDataShow = tbData.filter((tb, i) => {return tb.release_date > new Date()})"
      >
        Invest
      </v-btn>
      <v-btn
        outlined
        color="#947461"
        @click="tbDataShow = tbData.filter((tb, i) => {return tb.release_date < new Date()})"
      >
        Trade
      </v-btn>
      <v-btn
        outlined
        @click="tbDataShow = tbData"
      >
        All
      </v-btn>
    </v-row>
    <v-data-table
      v-if="tbDataShow != null"
      dense
      :headers="headers"
      :items="tbDataShow"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.buy="{item}">
        <v-row justify="space-around">
          <v-chip color="#942C26">Cancel</v-chip>
          <v-chip color="#940A6B">Accept Bid</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "SellingNFTs",
  data() {
    return {
      projectDialogShow: false,
      tbDataShow: null,
      headers: [
        {text: 'Company Name', value: 'name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: 'Technology', value: 'tech', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Highest Bid', value: 'highest_bid', align: 'center'},
        // {text: 'Owner', value: 'owner', align: 'center'},
        {text: 'Release date', value: 'release_date', align: 'center'},
        {text: 'NFT minted date', value: 'mint_date', align: 'center'},
        {text: 'Actions', value: 'buy', align: 'center'},
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
          highest_bid: '$6,668'
        },
        {
          name: 'Hi Sea',
          co2: '9',
          mint_date: '11/09/2018',
          price: '$1,000,000',
          release_date: new Date('08/22/2030'),
          owner: 'Moflak',
          tech: 'Industrial',
          highest_bid: '$877,259'
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
