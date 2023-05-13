<template>
    <div class="border-t py-4 space-y-4 dark:border-gray-600">
        <div v-if="showAllComments">
            <div class="flex" v-for="(comment, index) in post.comments" :key="index">
                <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                    <img src="../../assets/images/avatars/avatar-1.jpg" alt=""
                        class="absolute h-full rounded-full w-full" />
                </div>
                <div>
                    <div
                        class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                        <p class="font-bold cursor-pointer">{{ comment.personName }}</p>
                        <p class="leading-6">{{ comment.comment }}</p>
                        <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                    </div>
                    <div class="text-sm flex items-center space-x-3 mt-2 ml-5">
                        <nuxt-link to="#" class="text-red-600"><ion-icon name="heart-outline"></ion-icon> Love</nuxt-link>
                        <nuxt-link to="#">Reply</nuxt-link>
                        <span>{{ comment.commentTime }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="flex" v-for="(comment, index) in post.comments.slice(0, 2)" :key="index">
                <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                    <img src="../../assets/images/avatars/avatar-1.jpg" alt=""
                        class="absolute h-full rounded-full w-full" />
                </div>
                <div>
                    <div
                        class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12 dark:bg-gray-800 dark:text-gray-100">
                        <p class="font-bold cursor-pointer">{{ comment.personName }}</p>
                        <p class="leading-6">{{ comment.comment }}</p>
                        <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
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
        <div class="mt-1"></div>
        <nuxt-link to="#" class="hover:text-blue-600 hover:underline" @click="toggleComments">
            {{ showAllComments ? "Show less" : `View ${remainingComments} more Comments` }}
        </nuxt-link>
    </div>
</template>


<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showAllComments: false,
            displayedComments: 2,
        };
    },
    computed: {
        remainingComments() {
            return this.post.comments.length - this.displayedComments;
        },
    },
    methods: {
        toggleComments() {
            this.showAllComments = !this.showAllComments;
            if (this.showAllComments) {
                this.displayedComments = this.post.comments.length;
            } else {
                this.displayedComments = 2;
            }
        },
    },
};
</script>
