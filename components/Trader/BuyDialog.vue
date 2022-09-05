<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    @click:outside="$emit('close')"
    width="400px"
  >
  </v-dialog>
</template>

<script>
export default {
  name: "BuyDialog",
  props: ['dialog'],

}
</script>

<style scoped>

</style>
