<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
    <v-card style="padding: 25px; background: rgba(91,88,88,0.76)">
      <h3>You are going to retire your NFT from {{ info.nft.company_name }} company. This retirement will be recorded
        on your smart contract so everyone can check it. If you retire this project in any other marketplace or
        registry, it is
        considered as fraud and result in prosecution. The retired carbon can not be traded anymore.</h3>
      <v-row justify="center" align="center" style="padding: 20px">
        <h3 style="color: #f9b98d">Number of tokens required: {{ info.stock }}</h3>
      </v-row>
      <v-card-actions>
        <v-btn
          @click="$emit('close')"
          outlined>
          Close
        </v-btn>
        <v-btn
          @click="$emit('retire')"
          color="#43D6CE"
          outlined>
          Retire
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "RetirementDialog",
  props: ['dialog', 'info'],
  mounted() {
    console.log(this.info);
  },
  methods: {
    retire() {
      this.$axios.get("marketplace/retire?id=" + this.info.id).then((res) => location.reload())
    }
  }
}
</script>

<style scoped>

</style>
