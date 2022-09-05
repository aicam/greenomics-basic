<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
    <v-card>
      <v-card-title class="text-center">
        You are selling stock from {{info.nft.company_name}}
      </v-card-title>
      <v-card-actions>
        <v-btn @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SellDialog",
  props: ['dialog', 'info']
}
</script>

<style scoped>

</style>
