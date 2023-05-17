import { defineStore } from 'pinia'
import axios from 'axios'

export const useTimeline = defineStore('api', {
  state: () => ({
    id: null
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/timeline.json')
        this.id = response.data
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    }
  }
})