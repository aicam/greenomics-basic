<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="openDialog"
    @click:outside="$emit('close-func')"
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >Provide information regarding your proof or contradiction
        </v-toolbar>
        <v-container style="padding: 50px">
          <v-radio-group>
            <v-row justify="space-around" v-model="rg">
              <v-radio value="p" label="Proof"></v-radio>
              <v-radio value="c" label="Contradiction"></v-radio>
            </v-row>
          </v-radio-group>
          <v-text-field v-model="title" label="Verification Type"></v-text-field>
          <v-text-field v-model="description" label="Explanation"></v-text-field>
          <v-btn
            color="#7F918D">Upload documents
          </v-btn>
        </v-container>
        <v-card-actions class="justify-end">
          <v-btn
            text
            @click="$emit('close-func')"
          >Close
          </v-btn>
          <v-btn
            @click="verify"
            text>
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "VerificationProof",
  props: ["openDialog", "closeDialog", "id"],
  data() {
    return {
      title: "",
      description: "",
      rg: null
    }
  },
  methods: {
    verify() {
      this.$axios.get("marketplace/approve/nft?id=" + this.id).then(res => location.reload());
    }
  }
}
</script>

<style scoped>

</style>
