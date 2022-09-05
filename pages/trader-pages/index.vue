<template>
  <v-container fluid>
    <v-row justify="center" align="start" v-if="owners.length > 0 && allNfts.length > 0">
      <v-col lg="3">
        <Wallet :retired-nfts="ownerRetiredNfts" :balance="balance"/>
      </v-col>
      <v-col>
        <v-card style="padding: 20px">
          <NFTs :owner-nfts="ownerNfts"/>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card style="padding: 20px">
          <SellingNFTs :selling-nfts="ownerSellingNfts"/>
        </v-card>
        <v-card style="padding: 20px">
          <FollowingNFTs :market="market"/>
        </v-card>
      </v-col>
      <v-col lg="3">
        <TraderInformation/>
        <div style="padding: 20px"></div>
        <LatestNews/>
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
      ownerSellingNfts: [],
      balance: 0,
      ownerRetiredNfts: [],
      market: []
    }
  },
  async mounted() {
    await this.getAllNFTs()
    this.username = localStorage.getItem("username")
    this.getUserNFTInfo()
    this.balance = 30000 - this.ownerNfts.reduce((pre, curr) => curr['price'] + pre, 0)
    this.ownerNfts.map(item => {
      if (item.selling_stock > 0)
        this.ownerSellingNfts.push(item)
    });
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
    getUserNFTInfo() {
      let userNfts = []
      this.market = structuredClone(this.allNfts)
      this.market.map((nft, i) => this.market[i]['stock'] = nft['co2'])
      this.owners.map(item => {
        this.allNfts.map(nft => {
          if (nft['id'] === item['nft_id'])
            this.market.map((market_nft, i) => {
              if (market_nft['id'] === nft['id'])
                this.market[i]['stock'] -= item['stock']
            });
          if (nft['id'] === item['nft_id'] && item['owner'] === this.username) {
            item['price'] = ((item['stock'] / nft['co2']) * nft['price']).toFixed(2)
            item['nft'] = nft
            userNfts.push(item)
            if (item['retired'])
              this.ownerRetiredNfts.push(item)
          }
        })
      });
      this.ownerNfts = userNfts
    }
  }
}
</script>

<style scoped>

</style>
