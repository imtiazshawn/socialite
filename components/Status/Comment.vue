<template>
    <div>
        <div class="border-t py-4 space-y-4 dark:border-gray-600">
            <div v-if="isCommentExpanded">
                <div class="flex" v-for="(comment, commentIndex) in post.comments" :key="commentIndex">
                    <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                        <img src="../../assets/images/avatars/avatar-1.jpg" alt=""
                            class="absolute h-full rounded-full w-full" />
                    </div>
                    <div>
                        <div
                            class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                            <p class="font-bold cursor-pointer">{{ comment.personName }}</p>
                            <p class="leading-6">{{ comment.comment }}</p>
                            <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800">
                            </div>
                        </div>
                        <div class="text-sm flex items-center space-x-3 mt-2 ml-5">
                            <nuxt-link to="#" class="text-red-600">
                                <ion-icon name="heart-outline"></ion-icon> Love
                            </nuxt-link>
                            <nuxt-link to="#">Reply</nuxt-link>
                            <span>{{ comment.commentTime }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="flex" v-for="(comment, commentIndex) in visibleComments" :key="commentIndex">
                    <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                        <img src="../../assets/images/avatars/avatar-1.jpg" alt=""
                            class="absolute h-full rounded-full w-full" />
                    </div>
                    <div>
                        <div
                            class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                            <p class="font-bold cursor-pointer">{{ comment.personName }}</p>
                            <p class="leading-6">{{ comment.comment }}</p>
                            <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800">
                            </div>
                        </div>
                        <div class="text-sm flex items-center space-x-3 mt-2 ml-5">
                            <nuxt-link to="#" class="text-red-600">
                                <ion-icon name="heart-outline"></ion-icon> Love
                            </nuxt-link>
                            <nuxt-link to="#">Reply</nuxt-link>
                            <span>{{ comment.commentTime }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="post.comments.length > 2" class="mt-1"></div>
            <nuxt-link v-if="post.comments.length > 2" to="#" class="hover:text-blue-600 hover:underline"
                @click="toggleComments">
                {{ isCommentExpanded ? "Show less" : `View ${remainingComments} more Comments` }}
            </nuxt-link>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            expandedComments: [],
            displayedComments: 2,
        };
    },
    computed: {
        remainingComments() {
            return this.post.comments.length - this.displayedComments;
        },
        visibleComments() {
            if (this.isCommentExpanded) {
                return this.post.comments;
            } else {
                return this.post.comments.slice(0, this.displayedComments);
            }
        },
        isCommentExpanded() {
            return this.expandedComments[this.index] || false;
        },
    },
    methods: {
        toggleComments() {
            this.expandedComments[this.index] = !this.isCommentExpanded;

            this.$nextTick(() => {
                if (this.isCommentExpanded) {
                    this.displayedComments = 2;
                } else {
                    this.displayedComments = this.post.comments.length;
                }
            });

            this.$emit('toggle-comment', this.index); // Emit the event to the parent component
        },
    },
};
</script>
  