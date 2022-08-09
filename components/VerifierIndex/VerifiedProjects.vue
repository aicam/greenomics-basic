<template>
  <v-card style="padding: 50px">
    <v-row justify="center">
      <h3>
        <v-icon color="green">mdi-check-decagram</v-icon>
        Verified Projects
      </h3>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "VerifiedProjects",
  data () {
    return {
      verifiedProjects: [
        {
          title: 'Green Earth',
          carbon: '2.3',
          date: '11/09/2021',
          tech: 'Industrial'
        },
        {
          title: 'Namirac',
          carbon: 'Carbon (Ton)',
          date: '04/22/2022',
          tech: 'Industrial'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
