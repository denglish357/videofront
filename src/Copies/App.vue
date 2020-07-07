<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      Youtube ideas
    </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  }

}
</script>
