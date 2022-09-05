<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <h3>You are buying stock from {{ info.company_name }}</h3>
      <v-spacer></v-spacer>
      <v-text-field :label="`Max is ${info.stock}`" v-model="stock"></v-text-field>
      <v-spacer></v-spacer>
      <v-container class="justify-center align-center">
        <h3>NFT price paid: {{(stock !== null) ? ((stock / info.co2) * info.price).toFixed(2) : 0}}</h3>
        <h3>Verifiers comission (5%): {{(stock !== null) ? (((stock / info.co2) * info.price) / 20).toFixed(2) : 0}}</h3>
        <h3>Marketplace comission (2.12%): {{(stock !== null) ? (((stock / info.co2) * info.price).toFixed(2) * 2.12 / 100).toFixed(2) : 0}}</h3>
      </v-container>
      <v-card-actions>
        <v-btn @click="$emit('close')">Close</v-btn>
        <v-btn color="#D6D34E" @click="buy">Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BuyDialog",
  props: ['dialog', 'info'],
  data() {
    return {
      stock: null
    }
  },
  methods: {
    buy() {
      this.$axios.post('marketplace/buy', {
        "owner": localStorage.getItem("username"),
        "nft_id": this.info.id,
        "stock": this.stock
      }).then(res => {location.reload();})
    }
  }
}
</script>

<style scoped>

</style>
