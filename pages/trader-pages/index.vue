<template>
  <v-container fluid>
    <v-row justify="center" align="start" v-if="owners.length > 0 && allNfts.length > 0">
      <v-col lg="3">
        <Wallet :balance="balance"/>
      </v-col>
      <v-col>
        <v-card style="padding: 20px">
          <NFTs :owner-nfts="ownerNfts" />
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
      username: "",
      ownerNfts: [],
      balance: 0
    }
  },
  async mounted() {
    await this.getAllNFTs()
    this.username = localStorage.getItem("username")
    this.ownerNfts = this.getUserBalance()
    console.log("owner nfts", this.ownerNfts);
    this.balance = 30000 - this.ownerNfts.reduce((pre, curr) => curr['price'] + pre, 0)
  },
  methods: {
    async getAllNFTs() {
      await this.$axios.get('marketplace/owners').then(res => {
        this.owners = res.data
      });
      await this.$axios.get('marketplace/nft_list').then(res => {
        this.allNfts = res.data
      })
    },
    getUserBalance() {
      let userNfts = []
      this.owners.map(item => {
        if (item['owner'] === this.username)
          this.allNfts.map(nft => {
            if (nft['id'] === item['nft_id']) {
              item['price'] = ((item['stock'] / nft['co2']) * nft['price']).toFixed(2)
              item['nft'] = nft
              userNfts.push(item)
            }
          })
      });
      return userNfts
    }
  }
}
</script>

<style scoped>

</style>
