import { defineStore } from 'pinia';

export const useReactions = defineStore('reactions', {
  state: () => ({
    react: {
      text: 'Like'
    }
  }),
  actions: {
    setReaction(reaction) {
      this.react = {
        text: reaction,
      };
      console.log(this.react);
    }
  }
});
