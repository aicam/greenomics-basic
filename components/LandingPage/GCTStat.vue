<template>
  <v-container fluid style="background: #769dea" class="text-center">
    <h2 style="color: black">GCT Statistics</h2>
    <v-row style="padding: 25px" justify="space-around">
      <v-col lg="5">
        <v-toolbar
          color="light-blue"
          dark
        >
          <v-toolbar-title>Greenomics Carbon Token price</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list
          subheader
          two-line
          style="padding: 10px"
        >
          <strong>Current price: $93.6</strong>
          <v-list-item
            v-for="item in gctTimeBased"
            :key="item.title"
          >
            <v-list-item-content class="text-left">
              <v-list-item-title style="color: #cecaca; font-size: 20px" v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-row justify="center" align="center">
                <v-icon :color="item.color">{{ item.icon }}</v-icon>
                {{ item.val }}
              </v-row>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col lg="5">
        <v-toolbar
          color="light-blue"
          dark
        >
          <v-toolbar-title>Project minted by time</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
          subheader
          two-line
          style="padding: 10px"
        >
<!--          <strong>Average mint per year: 338620</strong>-->
          <v-list-item
            v-for="item in gctMintBased"
            :key="item.title"
          >
            <v-list-item-content class="text-left">
              <v-list-item-title style="color: #cecaca; font-size: 20px" v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-row justify="center" align="center">
                {{ item.val }}
              </v-row>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GCTStat",
  data() {
    return ({
      gctTimeBased: [
        {
          title: 'Today',
          icon: 'mdi-arrow-up',
          color: 'green',
          val: '0.03%'
        },
        {
          title: 'This week',
          icon: 'mdi-arrow-down',
          color: 'red',
          val: '0.67%'
        },
        {
          title: 'This month',
          icon: 'mdi-arrow-up',
          color: 'green',
          val: '0.12%'
        }
      ],
      gctMintBased: [
        {
          title: 'Today',
          val: '8'
        },
        {
          title: 'This week',
          val: '14'
        },
        {
          title: 'This month',
          val: '79'
        }
      ]
    })
  }
}
</script>

<style scoped>

</style>
