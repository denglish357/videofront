import Vue from 'vue'
import Vuex from 'vuex'
import * as ideaService from '../services/ideas'

import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
    },
    ideas: []
  },
  mutations: {
    setForm (state, { key, value }) {
      state.form[key] = value
    },
    setIdeas (state, ideas) {
      state.ideas = ideas
    },

    setIdea (state, updatedIdea) {
      Object.assign(
        state.ideas.find(idea => idea._id === updatedIdea._id, updatedIdea))
    }

  },
  actions: {
    async   createIdea (context) {
      await ideaService.createIdea(context.state.form)
      router.push('/')
    },
    async getIdeas (context) {
      const ideas = await ideaService.getIdeas()
      context.commit('setIdeas', ideas)
    },
    async upVoteIdea (context, idea) {
      const updatedIdea = await ideaService.upVoteIdea(idea._id)
      context.commit('setIdea', updatedIdea)
    },
    async downVoteIdea (context, idea) {
      const updatedIdea = await ideaService.downVoteIdea(idea._id)
      context.commit('setIdea', updatedIdea)
    }
  },
  modules: {
  }
})
