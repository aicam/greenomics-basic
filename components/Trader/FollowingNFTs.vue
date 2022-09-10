<template>
  <v-container fluid>
    <BuyDialog v-if="buyDialog" v-on:close="buyDialog = false" :info="buyInfo" :dialog="buyDialog" />
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px"><v-icon size="50" color="#009494">mdi-shopping-outline</v-icon>NFT Marketplace</h1>
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
      :items="market"
      item-key="name"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search by any column"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.buy="{item}">
        <v-row justify="center">
          <v-chip color="#229433" @click="() => {buyInfo = item; buyDialog = true}">Buy</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import BuyDialog from "@/components/Trader/BuyDialog";
export default {
  name: "FollowingNFTs",
  components: {BuyDialog},
  props: ['market'],
  data() {
    return {
      buyDialog: false,
      buyInfo: null,
      projectDialogShow: false,
      tbDataShow: null,
      search: '',
      headers: [
        {text: 'Company Name', value: 'company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: 'Stock Remained', value: 'stock', align: 'center'},
        {text: 'Technology', value: 'technology', align: 'center'},
        {text: '# Verifications', value: 'verification', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Release date', value: 'release', align: 'center'},
        // {text: 'NFT minted date', value: 'mint_date', align: 'center'},
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
