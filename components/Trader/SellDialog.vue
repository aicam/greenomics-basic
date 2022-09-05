<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <h3>You are selling stock from {{ info.nft.company_name }}</h3>
      <v-spacer></v-spacer>
      <v-container>
        <v-row justify="center" align="center" style="padding-top: 25px;">
          <v-text-field :label="`You have ${info.stock} stock`" v-model="amount"></v-text-field>
          <v-btn @click="amount = info.stock">Max</v-btn>
        </v-row>
        <v-spacer></v-spacer>
        <v-row justify="center" align="center" style="padding-top: 25px;">
          $<v-text-field :label="`Price in US dollar`" v-model="price"></v-text-field>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn @click="$emit('close')">Close</v-btn>
        <v-btn color="#A5D662" @click="sell">Sell</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SellDialog",
  props: ['dialog', 'info'],
  data() {
    return {
      amount: null,
      price: null
    }
  },
  methods: {
    sell() {
      this.$axios.get("marketplace/sell?id=" +
        this.info.id + "&amount=" + this.amount + "&price=" + this.price).then(() =>
        location.reload()
      )
    }
  }
}
</script>

<style scoped>

</style>
