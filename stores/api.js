import { defineStore } from 'pinia'
import axios from 'axios'

export const useTimeline = defineStore('api', {
  state: () => ({
    id: null,
    data: null,
    videos: null,
    groups: null,
    jobs: null,
    courses: null
  }),
  actions: {
    async fetchTimelineData() {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/timeline.json')
        this.id = response.data
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    },
    async fetchTimelinePost() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/feed-post')
          this.data = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchVideosData() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/videos')
          this.videos = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchGroupsData() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/groups')
          this.groups = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchJobsData() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/job-vacancies')
          this.jobs = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchCoursesData() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/courses')
          this.courses = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
  }
})