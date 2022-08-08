<template>
  <v-container>
    <h1 style="font-size: 40px">NFT Marketplace</h1>
    <v-data-table
      dense
      :headers="headers"
      :items="tbData"
      item-key="name"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "NFTMarketplace",
  data () {
    return ({
      headers: [
        {text: 'Company Name', value: 'name', align: 'center'},
        {text: 'CO2 (Ton)', value: 'co2', align: 'center'},
        {text: 'NFT minted date', value: 'mint_date', align: 'center'},
        {text: 'Price', value: 'price', align: 'center'},
        {text: 'Release date', value: 'release_date', align: 'center'},
        {text: 'Owner', value: 'owner', align: 'center'},
        {text: 'Technology', value: 'tech', align: 'center'}
      ],
      tbData: [
        {
          name: 'Kill Carbon',
          co2: '4.33',
          mint_date: '11/09/2017',
          price: '$78,000',
          release_date: '08/22/2030',
          owner: 'Herman',
          tech: 'Natural'
        },
        {
          name: 'Green Earth',
          co2: '2.97',
          mint_date: '10/29/2018',
          price: '$129,000',
          release_date: '08/22/2028',
          owner: 'Kafol',
          tech: 'Natural'
        },
        {
          name: 'Kir Carbon',
          co2: '7.2',
          mint_date: '11/09/2019',
          price: '$480,000',
          release_date: '01/01/2030',
          owner: 'Rafil',
          tech: 'Industrial'
        },
        {
          name: 'Manalor',
          co2: '1',
          mint_date: '01/22/2019',
          price: '$12,000',
          release_date: '08/22/2020',
          owner: 'Herman',
          tech: 'Natural'
        },
        {
          name: 'Hi Sea',
          co2: '9',
          mint_date: '11/09/2018',
          price: '$1,000,000',
          release_date: '08/22/2030',
          owner: 'Moflak',
          tech: 'Industrial'
        },
      ]
    })
  }
}
</script>

<style lang="sass" scoped>
$data-table-regular-row-font-size: 45px
</style>
