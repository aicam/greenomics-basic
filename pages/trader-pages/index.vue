<template>
  <v-container fluid>
    <v-row justify="center" align="start">
      <v-col lg="3">
        <Wallet/>
      </v-col>
      <v-col>
        <v-card style="padding: 20px">
          <NFTs :all-nfts="allNfts" :owners="owners"/>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card style="padding: 20px">
          <Bids />
        </v-card>
        <v-card style="padding: 20px">
          <SellingNFTs />
        </v-card>
        <v-card style="padding: 20px">
          <FollowingNFTs />
        </v-card>
      </v-col>
      <v-col lg="3">
        <TraderInformation />
        <div style="padding: 20px"></div>
        <LatestNews />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NFTs from "@/components/Trader/NFTs";
import FollowingNFTs from "@/components/Trader/FollowingNFTs";
import TraderInformation from "@/components/Trader/TraderInformation";
import SellingNFTs from "@/components/Trader/SellingNFTs";
import Bids from "@/components/Trader/Bids";
import LatestNews from "@/components/Trader/LatestNews";

export default {
  name: "index",
  components: {LatestNews, Bids, SellingNFTs, TraderInformation, FollowingNFTs, NFTs},
  data() {
    return {
      owners: [],
      allNfts: [],
      username: ""
    }
  },
  mounted() {
    this.getAllNFTs()
    this.username = localStorage.getItem("username")
  },
  methods: {
    getAllNFTs() {
      this.$axios.get('marketplace/owners').then(res => {
        this.owners = res.data
      });
      this.$axios.get('marketplace/nft_list').then(res => {
        this.allNfts = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
