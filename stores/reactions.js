import { defineStore } from 'pinia';

export const useReactions = defineStore('reactions', {
  state: () => ({
    reactions: [],
  }),
  actions: {
    setReaction(reaction, index) {
      this.reactions[index] = {
        text: reaction,
      };
      console.log(this.reactions[index]);
    },
  },
});
