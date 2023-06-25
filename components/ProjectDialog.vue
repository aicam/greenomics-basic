<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="800"
    v-model="openDialog"
    @click:outside="$emit('close-func')"
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >Project details</v-toolbar>
        <v-card-text>
          <div class="text-h4" style="padding-top: 45px">Title of Company</div>
          <div class="text-h6"><a href="#">{{title}}</a></div>

          <div class="text-h4" style="padding-top: 45px">Field</div>
          <div class="text-h6">Industry</div>

          <div class="text-h4" style="padding-top: 45px">Total amount of carbon & time</div>
          <div class="text-h6">3.3 Ton CO2 - project relases at 09/07/2024</div>

          <div class="text-h4" style="padding-top: 45px">Location & #Verifications</div>
          <div class="text-h6">344, New York, US, 449 verifications until now</div>

          <div class="text-h4" style="padding-top: 45px">Short Description</div>
          <div class="text-h6">Company established on 2017 with the goal to utilize industry machines to work with
          considerable low amount of carbon and make an ecosystem to increase the production and reduce the carbon consumption.
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="$emit('close-func')"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "ProjectDialog",
  props: ["openDialog", "closeDialog", "title"]
}
</script>

<style scoped>

</style>
