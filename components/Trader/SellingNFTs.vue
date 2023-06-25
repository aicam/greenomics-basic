<template>
  <v-container fluid>
    <ProjectDialog :title="projectDialogTitle" :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

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
      :items="sellingNfts"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:item.release_date="{item}">
        {{ `${item.release_date.getMonth()}/${item.release_date.getDay()}/${item.release_date.getFullYear()}` }}
      </template>
      <template v-slot:item.nft.company_name="{item}">
        <v-chip @click="() => {projectDialogTitle = item.nft.company_name; projectDialogShow = true}">{{ item.nft.company_name }}</v-chip>
      </template>
      <template v-slot:item.nft.price="{item}">
        ${{item.nft.price}}
      </template>
      <template v-slot:item.selling_price="{item}">
        ${{item.selling_price}}
      </template>
      <template v-slot:item.buy="{item}">
        <v-row justify="space-around">
          <v-chip color="#942C26" @click="cancel(item.id)">Cancel</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "SellingNFTs",
  props: ['sellingNfts'],
  data() {
    return {
      projectDialogShow: false,
      projectDialogTitle: "",
      tbDataShow: null,
      headers: [
        {text: 'Company Name', value: 'nft.company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'nft.co2', align: 'center'},
        {text: 'Stock', value: 'selling_stock', align: 'center'},
        {text: 'Stock price', value: 'selling_price', align: 'center'},
        {text: 'Technology', value: 'nft.technology', align: 'center'},
        {text: 'Price', value: 'nft.price', align: 'center'},
        {text: 'Vintage date', value: 'nft.release', align: 'center'},
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
  },
  methods: {
    cancel(id) {
      this.$axios.get("marketplace/cancel/selling?id=" + id).then((res) => location.reload())
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
