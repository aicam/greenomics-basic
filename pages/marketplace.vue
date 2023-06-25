<template>
  <v-container fluid class="text-center">
    <h1 id="header" style="margin-bottom: 30px">Greenomics Marketplace</h1>

    <v-footer app bottom fixed padless>
      <FooterCustom/>
    </v-footer>
    <v-container fluid>
      <v-card
        elevation="10"
        style="background: #333232"
      >
        <v-card-title>
<!--          <h3 id="title" style="color: #cecaca;">Greenomics carbon Token</h3>-->
        </v-card-title>
        <GCTStat/>
        <v-container fluid>
          <NFTMarketplace/>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import NFTMarketplace from "@/components/Marketplace/NFTMarketplace";
import FooterCustom from "@/components/Marketplace/FooterCustom";
import GCTStat from "@/components/Marketplace/GCTStat";


export default {
  name: "marketplace",
  components: {GCTStat, FooterCustom, NFTMarketplace},

}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  #title {
    font-size: 35px;
  }

  #header {
    font-size: 100px;
  }
}

@media only screen and (max-width: 600px) {
  #header {
    font-size: 30px;
  }
}


</style>

