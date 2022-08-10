<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col lg="3">
        <Wallet/>
      </v-col>
      <v-col>
        <v-card style="padding: 20px">
          <NFTs/>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card style="padding: 20px">
          <FollowingNFTs />
        </v-card>
        <v-card style="padding: 20px">
          <SellingNFTs />
        </v-card>
      </v-col>
      <v-col lg="3">
        <TraderInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NFTs from "@/components/Trader/NFTs";
import FollowingNFTs from "@/components/Trader/FollowingNFTs";
import TraderInformation from "@/components/Trader/TraderInformation";
import SellingNFTs from "@/components/Trader/SellingNFTs";

export default {
  name: "index",
  components: {SellingNFTs, TraderInformation, FollowingNFTs, NFTs}
}
</script>

<style scoped>

</style>
