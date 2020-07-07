<template>
  <div class="create-idea">
    <h1>Create an idea</h1>
    <form @submit="_submitIdea">

      <v-col cols="12" md="6">
        <v-textarea
          solo
          name=""
          label="Idea Description"
 @change="_setForm"
        ></v-textarea>
      </v-col>

      <br>
    <v-btn type="submit" color="success">Submit</v-btn>
    </form>

  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  methods: {

    ...mapMutations(['setForm']),
    ...mapActions(['createIdea']),
    _setForm (value) {
      this.setForm({ key: 'idea', value })
    },
    _submitIdea (event) {
      event.preventDefault()
      this.createIdea()
    }
  }
}
</script>

<style scoped>
textarea {
  width: 300px;
  height: 300px;
  font-size: 24px;
}
</style>
