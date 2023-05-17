<template>
    <div class="main_content">
        <div class="mcontainer">

            <div class="lg:flex lg:space-x-10">

                <div class="lg:w-2/3">
                    <div class="flex justify-between items-center relative md:mb-4 mb-3">
                        <div class="flex-1">
                            <h2 class="text-2xl font-semibold"> Pages </h2>
                            <nav class="responsive-nav border-b md:m-0 -mx-4">
                                <ul>
                                    <li class="active"><nuxt-link to="#" class="lg:px-2"> Suggestions </nuxt-link></li>
                                    <li><nuxt-link to="#" class="lg:px-2"> Newest </nuxt-link></li>
                                    <li><nuxt-link to="#" class="lg:px-2"> My pages</nuxt-link></li>
                                </ul>
                            </nav>
                        </div>
                        <nuxt-link to="/create-page"
                            class="flex items-center justify-center h-10 w-10 z-10 rounded-full bg-blue-600 text-white absolute right-0"
                            data-tippy-placement="left" title="Create New Page">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </nuxt-link>
                    </div>

                    <div class="relative" uk-slider="finite: true">
                        <div class="uk-slider-container px-1 py-3">
                            <ul
                                class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">

                                <li v-if="profile.pages && profile.pages.length > 0" v-for="(page, index) in profile.pages" :key="index">
                                        <nuxt-link to="/timeline/pages" class="uk-link-reset">
                                            <div class="card">
                                                <img src="../../assets/images/avatars/avatar-1.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                                <div class="p-4">
                                                    <h4 class="text-base font-semibold mb-1"> {{ page.pagesName }} </h4>
                                                    <p class="font-medium text-sm">{{ page.pagesIdFollower }} Following
                                                    </p>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </li>
                            </ul>

                            <nuxt-link
                                class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                to="#" uk-slider-item="previous">
                                <!-- <i class="icon-feather-chevron-left"></i> -->
                                <ion-icon name="chevron-back-outline"></ion-icon>
                            </nuxt-link>
                            <nuxt-link
                                class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                to="#" uk-slider-item="next">
                                <!-- <i class="icon-feather-chevron-right"></i> -->
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </nuxt-link>

                        </div>
                    </div>

                    <br>

                    <div class="my-2 flex items-center justify-between pb-3">
                        <div>
                            <h2 class="text-xl font-semibold"> Your Friends also following</h2>
                        </div>
                        <nuxt-link to="#" class="text-blue-500"> See all </nuxt-link>
                    </div>

                    <div class="relative" uk-slider="finite: true">
                        <div class="uk-slider-container px-1 py-3">
                            <ul
                                class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                                <li v-if="profile && profile.pages && profile.pages.length > 0"
                                    v-for="(page, index) in profile.pages" :key="index">
                                    <nuxt-link to="/timeline/pages" class="uk-link-reset">
                                        <div class="card">
                                            <img src="../../assets/images/avatars/avatar-6.jpg"
                                                class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                            <div class="p-4">
                                                <h4 class="text-base font-semibold mb-1">{{ page.pagesName }}</h4>
                                                <p class="font-medium text-sm">{{ page.pagesIdFollower }} Following</p>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </li>
                                <li v-else>
                                    No pages found.
                                </li>
                            </ul>

                            <nuxt-link
                                class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                to="#" uk-slider-item="previous">
                                <!-- <i class="icon-feather-chevron-left"></i> -->
                                <ion-icon name="chevron-back-outline"></ion-icon>
                            </nuxt-link>
                            <nuxt-link
                                class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                to="#" uk-slider-item="next">
                                <!-- <i class="icon-feather-chevron-right"></i> -->
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </nuxt-link>

                        </div>
                    </div>


                </div>

                <!-- Sidebar -->
                <div class="lg:w-1/3 w-full">
                    <div uk-sticky="media @m ; offset:80 ; bottom : true" class="card">


                        <div class="border-b flex items-center justify-between p-4">
                            <div>
                                <h2 class="text-lg font-semibold">Top Pages</h2>
                            </div>
                            <nuxt-link to="#" class="text-blue-500"> See all </nuxt-link>
                        </div>

                        <div class="p-4 -mt-1.5">

                            <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50" v-if="profile && profile.pages && profile.pages.length > 0" v-for="(page, index) in profile.pages" :key="index">
                                <nuxt-link to="/timeline/pages"
                                    class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                    <img src="../../assets/images/avatars/avatar-1.jpg"
                                        class="absolute w-full h-full inset-0 " alt="">
                                </nuxt-link>
                                <div class="flex-1">
                                    <nuxt-link to="/timeline/pages" class="text-base font-semibold capitalize"> {{ page.pagesName }} </nuxt-link>
                                    <div class="text-sm text-gray-500 mt-0.5"> {{ page.pagesIdFollower }} Following</div>
                                </div>
                                <nuxt-link to="/timeline/pages"
                                    class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                    Follow
                                </nuxt-link>
                            </div>

                        </div>

                        <nuxt-link to="#" class="block text-center pb-4 font-medium text-blue-500"> See all </nuxt-link>

                    </div>
                </div>

            </div>


        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default ({
    data() {
        return {
            profile: {}
        }
    },
    mounted() {
        const profile = localStorage.getItem('profile');

        if (profile) {
            this.profile = JSON.parse(profile);
        } else {
            axios.get('https://raw.githubusercontent.com/imtiazshawn/socialite-json/main/timeline.json')
                .then(response => {
                    this.profile = response.data;
                    localStorage.setItem('profile', JSON.stringify(response.data));
                    console.log(localStorage.getItem('profile'));
                })
                .catch(error => {
                    console.error('Error fetching profile data:', error);
                });
        }
    }
})
</script>
