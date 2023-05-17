<template>
    <div class="main_content">
            <div class="mcontainer">

                <div class="profile is_page">

                    <div class="profiles_banner">
                        <img src="../../assets/images/group/group-cover-1.jpg" alt="">
                    </div>
                    <div class="profiles_content">
                        <div class="profile_avatar">
                            <div class="profile_avatar_holder"> 
                                <img src="../../assets/images/group/group-3.jpg" alt="">
                            </div>
                            <div class="icon_change_photo" hidden> <ion-icon name="camera" class="text-xl"></ion-icon> </div>
                        </div>
                        <div class="profile_info">
                            <h1> Graphic Design </h1>
                            <p> Public group ·  12 members</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center -space-x-4">
                                <img src="../../assets/images/avatars/avatar-1.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <img src="../../assets/images/avatars/avatar-2.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <img src="../../assets/images/avatars/avatar-3.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <img src="../../assets/images/avatars/avatar-4.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <img src="../../assets/images/avatars/avatar-5.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <img src="../../assets/images/avatars/avatar-6.jpg" alt="" class="w-10 h-10 rounded-full border-2 border-white">
                                <div class="w-10 h-10 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold"> 12+
                                </div>
                            </div>
                        
                            <nuxt-link to="#" class="flex items-center justify-center h-9 px-5 rounded-md bg-blue-600 text-white  space-x-1.5">
                                <ion-icon name="thumbs-up"></ion-icon>
                                <span> Flow </span>
                            </nuxt-link>
                        </div>

                    </div>

                    <nav class="responsive-nav border-t -mb-0.5 lg:pl-2">
                        <ul>
                            <li class="active"><nuxt-link to="#0"> Home</nuxt-link></li>
                            <li><nuxt-link to="#0">About</nuxt-link></li>
                            <li><nuxt-link to="#0">Photos</nuxt-link></li>
                            <li><nuxt-link to="#0">Reviews</nuxt-link></li>
                            <li><nuxt-link to="#0">Discussion</nuxt-link></li>
                            <li><nuxt-link to="#0">Videos</nuxt-link></li>
                            <li><nuxt-link to="#0">About</nuxt-link></li>
                        </ul>
                    </nav>
                </div>
                    
                <div class="md:flex md:space-x-6 lg:mx-16">
                    <div class="space-y-5 flex-shrink-0 md:w-7/12">

                        <!-- create post  -->
                        <div class="card lg:mx-0 p-4" uk-toggle="target: #create-post-modal">
                            <div class="flex space-x-3">
                                <img src="../../assets/images/avatars/avatar-2.jpg" class="w-10 h-10 rounded-full">
                                <input placeholder="What's Your Mind ? Hamse!" class="bg-gray-100 hover:bg-gray-200 flex-1 h-10 px-6 rounded-full"> 
                            </div>
                            <div class="grid grid-flow-col pt-3 -mx-1 -mb-1 font-semibold text-sm">
                                 <div class="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer"> 
                                     <svg class="bg-blue-100 h-9 mr-2 p-1.5 rounded-full text-blue-600 w-9 -my-0.5 hidden lg:block" data-tippy-placement="top" title="Tooltip" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                     Photo/Video 
                                 </div>
                                 <div class="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer"> 
                                     <svg class="bg-green-100 h-9 mr-2 p-1.5 rounded-full text-green-600 w-9 -my-0.5 hidden lg:block" uk-tooltip="title: Messages ; pos: bottom ;offset:7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="" aria-expanded="false"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                                     Tag Friend 
                                 </div>
                                 <div class="hover:bg-gray-100 flex items-center p-1.5 rounded-md cursor-pointer"> 
                                     <svg class="bg-red-100 h-9 mr-2 p-1.5 rounded-full text-red-600 w-9 -my-0.5 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                     Fealing /Activity 
                                 </div>
                            </div> 
                        </div>
                
                        <Status />
                
                        <div class="flex justify-center mt-6">
                            <nuxt-link to="#" class="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                                Load more ..</nuxt-link>
                        </div>
    
                    </div>
                    <div class="w-full flex-shirink-0">

                        <div class="card p-5 mb-5">

                            <h1 class="block text-lg font-bold"> About  </h1>

                            <div class="space-y-4 mt-3">
                                
                                <div class="flex items-center space-x-3">
                                    <ion-icon name="alert-circle" class="bg-gray-100 p-1.5 rounded-full text-xl"></ion-icon>
                                    <div class="flex-1">
                                        <div>  We Plan ,We Desing, We Estimate for Approval to Build.. </div>
                                    </div>
                                </div> 
                                <div class="flex items-center space-x-3">
                                    <ion-icon name="thumbs-up" class="bg-gray-100 p-1.5 rounded-full text-xl"></ion-icon>
                                    <div class="flex-1">
                                        <div class="font-semibold">  347 people follow this </div>
                                    </div>
                                </div> 
                                <div class="flex items-center space-x-3">
                                    <ion-icon name="globe" class="bg-gray-100 p-1.5 rounded-full text-xl"></ion-icon>
                                    <div class="flex-1">
                                        <div>  <nuxt-link to="#" class="text-blue-500"> https://mydomain.com </nuxt-link> </div> 
                                    </div>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <ion-icon name="mail-open" class="bg-gray-100 p-1.5 rounded-full text-xl"></ion-icon>
                                    <div class="flex-1">
                                        <div>  <nuxt-link to="#" class="text-blue-500">myname@mywebssite.com</nuxt-link> </div> 
                                    </div>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <ion-icon name="albums" class="bg-gray-100 p-1.5 rounded-full text-xl"></ion-icon>
                                    <div class="flex-1">
                                        <div>  <nuxt-link to="#" class="text-blue-500">Product/service</nuxt-link> </div> 
                                    </div>
                                </div>
                                 
                            </div>
                            

                        </div>

                        <div class="widget card p-5 border-t">
                            <div class="flex items-center justify-between mb-2">
                                <div>
                                    <h4 class="text-lg font-semibold"> Related Pages </h4>
                                </div>
                                <nuxt-link to="#" class="text-blue-600 "> See all</nuxt-link>
                            </div>
                            <div>
                          
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                  <nuxt-link to="timeline-group.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                      <img src="../../assets/images/avatars/avatar-3.jpg" class="absolute w-full h-full inset-0 " alt="">
                                  </nuxt-link>
                                  <div class="flex-1">
                                      <nuxt-link to="timeline-page.html" class="text-base font-semibold capitalize"> Monroe Parker  </nuxt-link>
                                      <div class="text-sm text-gray-500 mt-0.5"> 345K  Following</div>
                                  </div>
                                  <nuxt-link to="timeline-page.html" class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                                      Flow
                                  </nuxt-link>
                              </div>
                              <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                  <nuxt-link to="timeline-group.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                      <img src="../../assets/images/group/group-3.jpg" class="absolute w-full h-full inset-0 " alt="">
                                  </nuxt-link>
                                  <div class="flex-1">
                                      <nuxt-link to="timeline-page.html" class="text-base font-semibold capitalize"> Graphic Design  </nuxt-link>
                                      <div class="text-sm text-gray-500 mt-0.5"> 345K  Following</div>
                                  </div>
                                  <nuxt-link to="timeline-page.html" class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                                      Flow
                                  </nuxt-link>
                              </div>
                              <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                  <nuxt-link to="timeline-group.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                      <img src="../../assets/images/avatars/avatar-4.jpg" class="absolute w-full h-full inset-0 " alt="">
                                  </nuxt-link>
                                  <div class="flex-1">
                                      <nuxt-link to="timeline-page.html" class="text-base font-semibold capitalize"> Martin Gray  </nuxt-link>
                                      <div class="text-sm text-gray-500 mt-0.5"> 452k Following </div>
                                  </div>
                                  <nuxt-link to="timeline-page.html" class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                                      Flow
                                  </nuxt-link>
                              </div>
                              <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                  <nuxt-link to="timeline-group.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                      <img src="../../assets/images/group/group-2.jpg" class="absolute w-full h-full inset-0" alt="">
                                  </nuxt-link>
                                  <div class="flex-1">
                                      <nuxt-link to="timeline-page.html" class="text-base font-semibold capitalize">  Coffee Addicts  </nuxt-link>
                                      <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                  </div>
                                  <nuxt-link to="timeline-page.html" class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                                      Flow
                                  </nuxt-link>
                              </div>
                              <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                  <nuxt-link to="timeline-group.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                      <img src="../../assets/images/group/group-1.jpg" class="absolute w-full h-full inset-0" alt="">
                                  </nuxt-link>
                                  <div class="flex-1">
                                      <nuxt-link to="timeline-page.html" class="text-base font-semibold capitalize"> Architecture    </nuxt-link>
                                      <div class="text-sm text-gray-500 mt-0.5"> 237K Following</div>
                                  </div>
                                  <nuxt-link to="timeline-page.html" class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white">
                                      Flow
                                  </nuxt-link>
                              </div>
                      
                            </div>
                        </div>
 

                    </div>
                </div>

            </div>
        </div>
</template>