<template>
  <v-container fluid>
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px">NFT Marketplace</h1>
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
      class="elevation-1 text-h4"
    >
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.actions="{item}">
        <v-row justify="center">
          <v-chip color="#949200">Bid</v-chip>
          <v-chip color="#3A6F94">Buy</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "NFTMarketplace",
  data() {
    return {
      projectDialogShow: false,
      headers: [
        {text: 'Company Name', value: 'name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: '# Verifications', value: 'verified', align: 'center'},
        {text: 'NFT minted date', value: 'mint_date', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Highest Bid', value: 'highest_bid', align: 'center'},
        {text: 'Release date', value: 'release_date', align: 'center'},
        {text: 'Owner', value: 'owner', align: 'center'},
        {text: 'Technology', value: 'tech', align: 'center'},
        {text: 'Actions', value: 'actions', align: 'center'}
      ],
      tbData: [
        {
          name: 'Kill Carbon',
          co2: '4.33',
          mint_date: '11/09/2017',
          price: '$78,000',
          release_date: new Date('08/22/2030'),
          owner: 'Herman',
          tech: 'Natural',
          highest_bid: '$66,250',
          verified: '248'
        },
        {
          name: 'Green Earth',
          co2: '2.97',
          mint_date: '10/29/2018',
          price: '$129,000',
          release_date: new Date('08/22/2028'),
          owner: 'Kafol',
          tech: 'Natural',
          highest_bid: '$66,250',
          verified: '898'
        },
        {
          name: 'Kir Carbon',
          co2: '7.2',
          mint_date: '11/09/2019',
          price: '$480,000',
          release_date: new Date('01/01/2030'),
          owner: 'Rafil',
          tech: 'Industrial',
          highest_bid: '$122,240',
          verified: '599'
        },
        {
          name: 'Manalor',
          co2: '1',
          mint_date: '01/22/2019',
          price: '$12,000',
          release_date: new Date('08/22/2020'),
          owner: 'Herman',
          tech: 'Natural',
          highest_bid: '$5,921',
          verified: '1,258'
        },
        {
          name: 'Hi Sea',
          co2: '9',
          mint_date: '11/09/2018',
          price: '$1,000,000',
          release_date: new Date('08/22/2030'),
          owner: 'Moflak',
          tech: 'Industrial',
          highest_bid: '$448,250',
          verified: '4,297'
        },
      ],
      tbDataShow: null,
    }
  },
  mounted() {
    this.tbDataShow = this.tbData
  }
}
</script>

<style lang="scss" scoped>
.v-data-table::v-deep th {
  font-size: 20px !important;
}

.v-data-table::v-deep td {
  font-size: 18px !important;
}
</style>
