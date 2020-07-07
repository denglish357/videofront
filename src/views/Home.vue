<template>
  <div class="home">
    <v-btn @click="$router.push('/create-idea')" class="mb-4" color="blue">
    Add Idea
</v-btn>

  <v-card v-for="idea in ideas"
    class="mx-auto mb-4" :key="idea._id"
    max-width="344"
    outlined
  >
    <v-card-text>
      {{ idea.idea}}
    </v-card-text>

    <v-card-actions>
      <v-btn @click="upVoteIdea(idea)">Up Vote</v-btn>

      <div class="ml-2 mr-2" >{{ idea.votes }}</div>
      <v-btn @click="downVoteIdea(idea)">Down Vote</v-btn>
    </v-card-actions>
  </v-card>

</div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  created () {
    this.getIdeas()
  },
  methods: {
    ...mapActions(['getIdeas', 'upVoteIdea', 'downVoteIdea'])
  },
  components: {
  },
  computed: {
    ...mapState(['ideas'])
  }
}
</script>
