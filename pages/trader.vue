<template>
  <v-row justify="center" align="center" style="margin-top: 50px;">
    <v-col style="max-width: 500px;">
      <v-stepper v-model="step">
        <v-row justify="center" style="padding-top: 25px">
          <v-btn
            @click="step = (step == 0) ? 1 : 0"
            outlined>
            {{ (step == 0) ? `Register` : `Login` }}
          </v-btn>
        </v-row>
        <v-stepper-items>
          <v-stepper-content step="0">
            <Login/>
          </v-stepper-content>
          <v-stepper-content step="1">
            <Register :go-complete="goComplete"/>
          </v-stepper-content>
          <v-stepper-content step="2">
            <Completed />
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "trader"
}
</script>

<style scoped>

</style>
