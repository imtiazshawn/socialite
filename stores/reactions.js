import { defineStore } from 'pinia';

export const useReactions = defineStore('reactions', {
  state: () => ({
    react: {
      text: 'Like',
      icon: 'like.png'
    }
  }),
  actions: {
    setReaction(reaction) {
      this.react = {
        text: reaction,
        icon: `${reaction.toLowerCase()}.png`
      };
      console.log(this.react);
    }
  }
});
