
<template>
    <v-card>
      <v-card-text>
        <!-- New Addition -->
        <v-row class="d-flex flex-column" dense align="center" justify="center">
          <v-icon class="mt-5" size="60">mdi-cloud-upload</v-icon>
          <p>
            Drop your file(s) here, or click to select them.
          </p>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon id="upload-button">mdi-upload</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "UploadFile",
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    }
  }
};
</script>

<style scoped></style>
