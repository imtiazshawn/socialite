<template>
    <div class="card lg:mx-0 uk-animation-slide-bottom-small" v-if="timelinePost.data && timelinePost.data.length > 0"
        v-for="(post, index) in timelinePost.data" :key="index">
        <div class="flex justify-between items-center lg:p-4 p-2.5">
            <div class="flex flex-1 items-center space-x-4">
                <nuxt-link to="#">
                    <img src="../../assets/images/avatars/avatar-2.jpg"
                        class="bg-gray-200 border border-white rounded-full w-10 h-10">
                </nuxt-link>
                <div class="flex-1 font-semibold capitalize">
                    <nuxt-link to="#" class="text-green-500">
                        {{ post.username }}
                    </nuxt-link>
                    <FeedProfileCard :post="post" />

                    <div class="text-gray-700 flex items-center space-x-2"> {{ post.postTime }} <span>{{ post.postTimeFormat
                    }}</span> <ion-icon name="people"></ion-icon></div>
                </div>
            </div>
            <div>
                <nuxt-link to="#">
                    <ion-icon class="text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"
                        name="ellipsis-vertical-outline"></ion-icon>
                </nuxt-link>
                <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
                    uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small">

                    <ul class="space-y-1">
                        <li>
                            <nuxt-link to="#"
                                class="flex items-center gap-x-1 px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <!-- <i class="uil-share-alt mr-1"></i>  -->
                                <ion-icon class="text-lg" name="share-social-outline"></ion-icon>
                                Share
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#"
                                class="flex items-center gap-x-1 px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <ion-icon class="text-lg" name="create-outline"></ion-icon>
                                Edit Post
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#"
                                class="flex items-center gap-x-1 px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <ion-icon class="text-lg" name="cloud-offline-outline"></ion-icon>
                                Disable comments
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#"
                                class="flex items-center gap-x-1 px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                <!-- <i class="uil-favorite mr-1"></i>   -->
                                <ion-icon class="text-lg" name="star-outline"></ion-icon>
                                Add favorites
                            </nuxt-link>
                        </li>
                        <li>
                            <hr class="-mx-2 my-2 dark:border-gray-800">
                        </li>
                        <li>
                            <nuxt-link to="#"
                                class="flex items-center gap-x-1 px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                <!-- <i class="uil-trash-alt mr-1"></i>   -->
                                <ion-icon class="text-lg" name="trash-outline"></ion-icon>
                                Delete
                            </nuxt-link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <!-- Photos -->
        <div>
            <div uk-lightbox v-for="(picture, index) in post.picture" :key="index">
                <div v-if="post.picture.length == 1">
                    <nuxt-link :to="picture">
                        <img :src="picture" alt="" class="max-h-96 w-full object-cover">
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 px-5">
            <div uk-lightbox v-for="(picture, index) in post.picture" :key="index">
                <div v-if="post.picture.length == 2">
                    <nuxt-link :to="picture">
                        <img :src="picture" alt="" class="max-h-96 w-full object-cover">
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 px-5">
            <!-- First Image -->
            <div uk-lightbox v-if="post.picture && post.picture.length == 3" class="col-span-2">
                <div class="grid grid-cols-1">
                    <nuxt-link :to="post.picture[0]">
                        <img :src="post.picture[0]" alt="" class="max-h-96 w-full object-cover">
                    </nuxt-link>
                </div>
            </div>

            <!-- Second and Third Images -->
            <div class="col-span-2" v-if="post.picture && post.picture.length == 3">
                <div class="grid grid-cols-2 gap-2">
                    <div uk-lightbox v-for="(picture, index) in post.picture.slice(1, 3)" :key="index">
                        <nuxt-link :to="picture">
                            <img :src="picture" alt="" class="max-h-96 w-full object-cover">
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>


        <div class="grid grid-cols-2 gap-2 px-5">
            <div uk-lightbox v-for="(picture, index) in post.picture" :key="index">
                <div v-if="post.picture.length == 4">
                    <nuxt-link :to="picture">
                        <img :src="picture" alt="" class="max-h-96 w-full object-cover">
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 px-5">
            <div uk-lightbox v-for="(picture, index) in post.picture?.slice(0, 4) || []" :key="index">
                <div v-if="post.picture && post.picture.length > 4">
                    <nuxt-link :to="picture" class="col-span-2 relative">
                        <img :src="picture" alt="" class="max-h-96 w-full object-cover">
                        <div v-if="index === 3"
                            class="absolute top-0 left-0 text-white py-2 px-4 bg-gray-900 bg-opacity-30">
                            View +{{ post.picture.length - 4 }} more
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>


        <!-- Caption -->
        <div class="p-5 pt-0 border-b dark:border-gray-700">
            {{ post.caption }}
        </div>

        <div class="p-4 space-y-3">

            <div class="flex space-x-4 lg:font-bold">
                <StatusReacts :index="index" :post="post" />

                <nuxt-link to="#" class="flex items-center space-x-2" @click="toggleComment(index)">
                    <div class="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22"
                            height="22" class="dark:text-gray-100">
                            <path fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div> Comment</div>
                </nuxt-link>
                <nuxt-link to="#" class="flex items-center space-x-2 flex-1 justify-end">
                    <div class="p-2 rounded-full  text-black lg:bg-gray-100 dark:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22"
                            height="22" class="dark:text-gray-100">
                            <path
                                d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                    </div>
                    <div> Share</div>
                </nuxt-link>
            </div>
            <div class="flex items-center space-x-3 pt-2">
                <div class="flex items-center">
                    <img src="../../assets/images/avatars/avatar-1.jpg" alt=""
                        class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900">
                    <img src="../../assets/images/avatars/avatar-4.jpg" alt=""
                        class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                    <img src="../../assets/images/avatars/avatar-2.jpg" alt=""
                        class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                </div>
                <div class="dark:text-gray-100">
                    Liked <strong> {{ post.likedMutual }}</strong> and <strong> {{ post.liked }} Others </strong>
                </div>
            </div>

            <StatusComment v-show="isCommentVisible[index] || isLargeDevice" :post="post" :index="index" />

            <div class="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
                <input placeholder="Add your Comment.." class="bg-transparent max-h-10 shadow-none px-5">
                <div class="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
                    <nuxt-link to="#">
                        <ion-icon name="happy-outline" class="hover:bg-gray-200 p-1.5 rounded-full"></ion-icon>
                    </nuxt-link>
                    <nuxt-link to="#">
                        <ion-icon name="image-outline" class="hover:bg-gray-200 p-1.5 rounded-full"></ion-icon>
                    </nuxt-link>
                    <nuxt-link to="#">
                        <ion-icon name="link-outline" class="hover:bg-gray-200 p-1.5 rounded-full"></ion-icon>
                    </nuxt-link>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import { useTimeline } from '@/stores/api';

export default {
    setup() {
        const timelinePost = useTimeline();

        const fetchApiData = async () => {
            try {
                await timelinePost.fetchTimelinePost()
            } catch (error) {
                console.error(error)
            }
        }
        fetchApiData();

        return {
            timelinePost
        }
    },
    data() {
        return {
            isCommentVisible: [],
            isLargeDevice: false
        };
    },
    mounted() {
        this.checkDeviceSize();
        window.addEventListener('resize', this.checkDeviceSize);
    },
    destroyed() {
        window.removeEventListener('resize', this.checkDeviceSize);
    },
    methods: {
        toggleComment(index) {
            this.isCommentVisible[index] = !this.isCommentVisible[index];
        },
        checkDeviceSize() {
            this.isLargeDevice = window.innerWidth >= 768;
        }
    }
}
</script>