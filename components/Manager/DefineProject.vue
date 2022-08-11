<template>
  <v-container fluid>
    <v-card style="padding: 40px;">
      <h1>Define New Project</h1>

      <v-row align="center" style="padding-top: 40px;">
        <v-col lg="8">
          <h3>The company should have been registered under certified LLC brands</h3>
        </v-col>
        <v-text-field
          label="Company Name"
          counter="30"/>
      </v-row>

      <v-row align="center">
        <v-col lg="8">
          <h3>Your mentioned CO2 removal should be accurate and with error less than 0.1 Ton of CO2</h3>
        </v-col>
        <v-text-field
          label="CO2 Removal by Ton"
          counter="10"/>
      </v-row>

      <v-row align="center">
        <v-col lg="8">
          <h3>Your initial price represents the minimum price that your project (NFT) starts in market with. Take care
            of
            your fee percentage. Each time the NFT is traded, you get 5% fee out of the price, in this regard, you can
            start
            your project with low price to let it trade for many times and gain fee out of all transactions</h3>
        </v-col>
        <v-text-field
          label="Initial price by US dollar"
          counter="10"/>
      </v-row>

      <v-row align="center">
        <v-col lg="8">
          <h3>Release date should be accurate and can not be changed for more than one month</h3>
        </v-col>

        <div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Release date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :active-picker.sync="activePicker"
              :max="formatDate((new Date()).setFullYear((new Date()).getFullYear() + 10))"
              :min="formatDate((new Date()).setFullYear((new Date()).getFullYear() - 5))"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-row>

      <v-row align="center">
        <v-col lg="8">
          <h3>If you are a farmer or have a plan to cultivate to remove carbon choose Natural. Otherwise choose
          Industrial</h3>
        </v-col>
        <v-col>
          <v-select
            label="Technology"
            :items="['Natural', 'Industrial']"
            ></v-select>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn outlined color="#AEAFF9">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DefineProject",
  data: () => ({
    date: null,
    activePicker: null,
    menu: false,
  }),
  mounted() {
    this.date = this.formatDate(new Date());
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    formatDate(date) {
      let d = new Date(date);
      let month = (d.getMonth() + 1).toString();
      let day = d.getDate().toString();
      let year = d.getFullYear();
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return [year, month, day].join('-');
    }
  }
}
</script>

<style scoped>

</style>
