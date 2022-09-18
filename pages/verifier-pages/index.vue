<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col lg="3">
        <Wallet/>
      </v-col>
      <v-col lg="5">
        <VerifiedProjects v-if="allNfts" :info="allNfts"/>
      </v-col>
      <v-col lg="2">
        <VerifierInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerifiedProjects from "@/components/Verifier/VerifierIndex/VerifiedProjects";
import VerifierInformation from "@/components/Verifier/VerifierIndex/VerifierInformation";
export default {
  name: "index",
  components: {VerifierInformation, VerifiedProjects},
  data() {
    return {
      allNfts: []
    }
  },
  mounted() {
    this.getAllNFTs();
  },
  methods: {
    async getAllNFTs() {
      await this.$axios.get('marketplace/nft_list').then(res => {
        this.allNfts = res.data
      })
    },
  }
}
</script>

<style scoped>

</style>
