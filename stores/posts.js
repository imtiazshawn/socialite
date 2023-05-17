import { defineStore } from 'pinia'
import axios from 'axios'

export const useTimelinePost = defineStore('api', {
  state: () => ({
    data: null
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/feed-post')
        this.data = response.data
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    }
  }
})