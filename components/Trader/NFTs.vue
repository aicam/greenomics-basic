<template>
  <v-container>
    <SellDialog v-if="sellDialog" :dialog="sellDialog" v-on:close="closeSellDialog" :info="sellDialogInfo"/>
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px"><v-icon size="50" color="#069400">mdi-cart-outline</v-icon>Purchased NFTs</h1>
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
      :items="ownerNfts"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.sell="{item}">
        <v-row justify="center">
          <v-chip color="#942C26" @click="() => {sellDialog = true; sellDialogInfo = item}">Sell</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import SellDialog from "@/components/Trader/SellDialog";
export default {
  name: "NFTs",
  components: {SellDialog},
  props: ['ownerNfts'],
  data() {
    return {
      projectDialogShow: false,
      sellDialogInfo: {},
      sellDialog: false,
      tbDataShow: null,
      headers: [
        {text: 'Company Name', value: 'nft.company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'nft.co2', align: 'center'},
        {text: 'Stock', value: 'stock', align: 'center'},
        {text: 'Technology', value: 'nft.technology', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Release date', value: 'nft.release', align: 'center'},
        {text: 'Bought date', value: 'bought_date', align: 'center'},
        {text: 'Actions', value: 'sell', align: 'center'}
      ],
      tbData: [
        {
          name: 'Kill Carbon',
          co2: '4.33',
          mint_date: '11/09/2017',
          bought_date: '12/08/2021',
          price: '$78,000',
          release_date: new Date('08/22/2030'),
          tech: 'Natural'
        },
        {
          name: 'Green Earth',
          co2: '2.97',
          mint_date: '10/29/2018',
          bought_date: '04/22/2022',
          price: '$129,000',
          release_date: new Date('08/22/2028'),
          tech: 'Natural'
        }
      ],
    }
  },
  mounted() {
    this.tbDataShow = this.tbData
  },
  methods: {
    closeSellDialog() {
      this.sellDialog = false;
    }
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
