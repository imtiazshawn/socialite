<template>
    <div>
      <!-- Default Like React -->
      <nuxt-link class="flex items-center space-x-2 cursor-pointer" @click="setReaction('Liked')">
        <div class="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22"
            class="dark:text-gray-100">
            <path
              d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </div>
        <div>{{ reaction.text }}</div>
      </nuxt-link>
  
      <!-- Other Reacts -->
      <div uk-drop="pos: top-left ;animation: uk-animation-slide-left-small">
        <div class="contact-list-box flex gap-x-2">
          <button @click="setReaction('Liked')">
            <img src="../../assets/images/reacts/like.png" />
          </button>
          <button @click="setReaction('Love')">
            <img src="../../assets/images/reacts/love.png" />
          </button>
          <button @click="setReaction('Care')">
            <img src="../../assets/images/reacts/care.png" />
          </button>
          <button @click="setReaction('Haha')">
            <img src="../../assets/images/reacts/haha.png" />
          </button>
          <button @click="setReaction('Wow')">
            <img src="../../assets/images/reacts/wow.png" />
          </button>
          <button @click="setReaction('Sad')">
            <img src="../../assets/images/reacts/sad.png" />
          </button>
          <button @click="setReaction('Angry')">
            <img src="../../assets/images/reacts/angry.png" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useReactions } from '../../stores/reactions';
  
  export default {
    setup() {
      const reactionsStore = useReactions();
  
      function setReaction(reaction) {
        reactionsStore.setReaction(reaction);
      }
  
      return {
        reaction: computed(() => reactionsStore.react),
        setReaction
      };
    }
  };
  </script>
  
  