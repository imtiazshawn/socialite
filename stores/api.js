import { defineStore } from 'pinia';
import axios from 'axios';
import { 
    GET_COURSES_DATA, 
    GET_GROUPS_DATA, 
    GET_JOBS_DATA, 
    GET_TIMELINE_DATA, 
    GET_TIMELINE_POST, 
    GET_VIDEO_DATA 
  } 
  from '~/api/baseUrl';

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
        const response = await axios.get(GET_TIMELINE_DATA)
        this.id = response.data
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    },
    async fetchTimelinePost() {
        try {
          const response = await axios.get(GET_TIMELINE_POST)
          this.data = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchVideosData() {
        try {
          const response = await axios.get(GET_VIDEO_DATA)
          this.videos = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchGroupsData() {
        try {
          const response = await axios.get(GET_GROUPS_DATA)
          this.groups = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchJobsData() {
        try {
          const response = await axios.get(GET_JOBS_DATA)
          this.jobs = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
    async fetchCoursesData() {
        try {
          const response = await axios.get(GET_COURSES_DATA)
          this.courses = response.data
        } catch (error) {
          console.error('Error fetching API data:', error)
        }
    },
  }
})