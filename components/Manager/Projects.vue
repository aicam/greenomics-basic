<template>
  <v-container fluid>
    <ProjectDialog :open-dialog="projectDialogShow" v-on:close-func="projectDialogShow = false"/>

    <h1 style="font-size: 40px; padding-top: 40px; padding-bottom: 40px"><v-icon size="50" color="#069400">mdi-cart-outline</v-icon>Minted NFTs</h1>
    <v-data-table
      v-if="tbDataShow != null"
      dense
      :headers="headers"
      :items="allNfts"
      item-key="id"
      class="elevation-1"
    >
<!--      <template v-slot:item.release="{item}">-->
<!--        {{ `${item.release.getMonth()}/${item.release.getDay()}/${item.release.getFullYear()}` }}-->
<!--      </template>-->
      <template v-slot:item.name="{item}">
        <v-chip @click="projectDialogShow = true">{{ item.name }}</v-chip>
      </template>
      <template v-slot:item.stat="{item}">
        <v-row justify="center">
          <v-chip color="#D6CFC2" outlined>Modify</v-chip>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "NFTs",
  data() {
    return {
      projectDialogShow: false,
      tbDataShow: null,
      headers: [
        {text: 'Company Name', value: 'company_name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: 'Technology', value: 'technology', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Vintage date', value: 'release', align: 'center'},
        {text: 'NFT minted date', value: 'mint', align: 'center'},
        {text: 'Actions', value: 'stat', align: 'center'}
      ],
      tbData: [
        {
          id: 23112,
          name: 'Kill carbon',
          co2: '1560.3',
          mint_date: '11/09/2017',
          bought_date: 'Not Sold',
          price: '$78,000',
          release_date: new Date('08/22/2030'),
          tech: 'Natural',
          stat: 'bid',
          highest_bid: '$44,250'
        },
        {
          id: 23111,
          name: 'Kill carbon',
          co2: '1560.3',
          mint_date: '10/29/2018',
          bought_date: '04/22/2022',
          price: '$129,000',
          release_date: new Date('08/22/2028'),
          tech: 'Natural',
          satat: 'sold',
          highest_bid: '$129,000'
        }
      ],
      allNfts: []
    }
  },
  mounted() {
    this.tbDataShow = this.tbData
    this.$axios.get('marketplace/nft_list').then(res => {
      res.data.map(nft => {
        if (nft.added)
          this.allNfts.push(nft)
      })
    })
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
