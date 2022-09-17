<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <h3>You are buying Carbon asset (per Ton) from {{ info.company_name }}</h3>
      <v-spacer></v-spacer>
      <h3>Stock price: ${{info.price}}</h3>
      <v-spacer></v-spacer>
      <v-text-field :label="`Max is ${info.stock}`" v-model="stock"></v-text-field>
      <v-spacer></v-spacer>
      <v-container class="justify-center align-center">
        <h3 style="color: #f7d3bd">Each trade includes commission fees for verifiers and marketplace. </h3>
        <h3>NFT price paid: {{(stock !== null) ? (stock * info.price).toFixed(2) : 0}}</h3>
        <h3>Verifiers comission (5%): {{(stock !== null) ? ((stock * info.price) / 20).toFixed(2) : 0}}</h3>
        <h3>Marketplace comission (2.12%): {{(stock !== null) ? ((stock * info.price).toFixed(2) * 2.12 / 100).toFixed(2) : 0}}</h3>
        <h3>Overall price: {{ ((stock * info.price).toFixed(2) * (107.12 / 100)).toFixed(2) }}</h3>
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
      console.log({
        "buyer": localStorage.getItem("username"),
        "owner": this.info.owner,
        "stock": this.stock,
        "nft_id": this.info.id
      })
      if (this.info.owner)
        this.$axios.post('marketplace/buy/off', {
          "buyer": localStorage.getItem("username"),
          "owner": this.info.owner,
          "stock": this.stock,
          "nft_id": this.info.id
        }).then(res => {location.reload();})
      else
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
