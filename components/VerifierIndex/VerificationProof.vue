<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="openDialog"
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >Proofs you provided regarding verification</v-toolbar>
        <v-card-text>
          <div class="text-h3" style="padding-top: 45px">Documents</div>
          <div class="text-4"><a href="#">Image from interior of the company</a></div>
          <div class="text-4"><a href="#">Publication that they are referencing to</a></div>
          <div class="text-h3" style="padding-top: 45px">Comment</div>
          <div class="text-4">I checked the  place and there were over 45 people working. I have checked there every
          week and all the employees are the same and have constant roles. The products are being developed over time.</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="closeDialog"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "VerificationProof",
  props: ["openDialog", "closeDialog"]
}
</script>

<style scoped>

</style>
