<template>
    <div class="main_content">
            <div class="mcontainer">

                <div class="lg:flex lg:space-x-10">

                    <div class="lg:w-2/3">
                        <div class="md:mb-4 mb-3">
                            <h2 class="text-2xl font-semibold"> Games </h2>
                            <nav class="responsive-nav border-b md:m-0 -mx-4">
                                <ul>
                                    <li class="active"><a href="#" class="lg:px-2">   Suggestions </a></li>
                                    <li><a href="#" class="lg:px-2"> Newest </a></li>
                                    <li><a href="#" class="lg:px-2"> My games</a></li>
                                </ul>
                            </nav>
                        </div>
    
                        <!-- Game slider -->
                        <div class="relative" uk-slider="finite: true">
                            <div class="uk-slider-container px-1 py-3">
                                <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                                
                                    <li>
                                
                                        <div class="card">
                                            <a href="#">
                                                <img src="../../assets/images/games/img-1.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                            </a>
                                            <div class="p-3">
                                                <h4 class="text-base font-semibold mb-0.5"> Larion TV </h4>
                                                <p class="font-medium text-sm">365K Viewers </p>
                                                <a href="#" class="block py-1.5 mt-2 text-sm font-semibold text-center bg-gray-200 rounded-md">Play  now</a>
                                            </div>
                                        </div>
                                
                                    </li>
                                    <li>
                                        <a href="timeline-page.html">
                                            <div class="card">
                                                <img src="../../assets/images/games/img-3.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                                <div class="p-3">
                                                    <h4 class="text-base font-semibold mb-0.5"> ChooxTv </h4>
                                                    <p class="font-medium text-sm">843K Viewers </p>
                                                    <a href="#" class="block py-1.5 mt-2 text-sm font-semibold text-center bg-gray-200 rounded-md">Play now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <a href="#">
                                                <img src="../../assets/images/games/img-4.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                            </a>
                                            <div class="p-3">
                                                <h4 class="text-base font-semibold mb-0.5"> Mobile Legends </h4>
                                                <p class="font-medium text-sm">203k Viewers </p>
                                                <a href="#" class="block py-1.5 mt-2 text-sm font-semibold text-center bg-gray-200 rounded-md">Play now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <a href="#">
                                                <img src="../../assets/images/games/img-2.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                            </a>
                                            <div class="p-3">
                                                <h4 class="text-base font-semibold mb-0.5"> Minecraft </h4>
                                                <p class="font-medium text-sm">423K Viewers </p>
                                                <a href="#" class="block py-1.5 mt-2 text-sm font-semibold text-center bg-gray-200 rounded-md">Play now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <a href="#">
                                                <img src="../../assets/images/games/img-1.jpg" class="h-44 object-cover rounded-t-md shadow-sm w-full">
                                            </a>
                                            <div class="p-3">
                                                <h4 class="text-base font-semibold mb-0.5"> Larion TV </h4>
                                                <p class="font-medium text-sm">248K Viewers </p>
                                                <a href="#" class="block py-1.5 mt-2 text-sm font-semibold text-center bg-gray-200 rounded-md">Play now</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                    href="#" uk-slider-item="previous"> <i class="icon-feather-chevron-left"></i></a>
                                <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                                    href="#" uk-slider-item="next"> <i class="icon-feather-chevron-right"></i></a>

                            </div>
                        </div>
    
                        <br>
                        
                        <!-- Clips -->
    
                        <div class="my-5 flex justify-between pb-3">
                            <h2 class="text-2xl font-semibold"> Top Clips </h2>
                            <a href="#" class="text-blue-500"> See all </a>
                        </div>
    
                        <div class="divide-y -mt-3 card px-5 py-2 ">
    
                            <div class="flex sm:flex-row flex-col sm:space-x-4 py-4 relative w-full">
                                <div class="sm:w-56 w-full h-32 overflow-hidden rounded-lg relative shadow-sm flex-shrink-0"> 
                                    <img src="../../assets/images/games/img-lg-1.jpg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <span class="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                                    <img src="../../assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                </div>
                                <div class="flex-1 relative md:mt-0 mt-4"> 
                                    <a href="#" class="text-xl font-semibold leading-6">Strike Force Heroes 2</a>
                                    <p class="leading-6 line-clamp-2 mt-2"> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                                    <div class="font-semibold mt-2"> Johnson Smath </div>
                                    <div class="flex space-x-2 items-center text-sm pt-1">
                                        <div> 27 weeks ago</div>
                                        <div>·</div>
                                        <div> 156.9K views</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex sm:flex-row flex-col sm:space-x-4 py-4 relative w-full">
                                <div class="sm:w-56 w-full h-32 overflow-hidden rounded-lg relative shadow-sm flex-shrink-0"> 
                                    <img src="../../assets/images/games/img-lg-2.jpg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <span class="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                                    <img src="../../assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                </div>
                                <div class="flex-1 relative lg:mt-0 mt-4"> 
                                    <a href="#" class="text-xl font-semibold leading-6">Free Fire - Battlegrounds</a>
                                    <p class="leading-6 line-clamp-2 mt-2"> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                                    <div class="font-semibold mt-2"> Johnson Smath </div>
                                    <div class="flex space-x-2 items-center text-sm pt-1">
                                        <div> 27 weeks ago</div>
                                        <div>·</div>
                                        <div> 156.9K views</div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex sm:flex-row flex-col sm:space-x-4 py-4 relative w-full">
                                <div class="sm:w-56 w-full h-32 overflow-hidden rounded-lg relative shadow-sm flex-shrink-0"> 
                                    <img src="../../assets/images/games/img-lg-3.jpg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <span class="absolute bg-black bg-opacity-60 bottom-1 font-semibold px-1.5 py-0.5 right-1 rounded text-white text-xs"> 12:21</span>
                                    <img src="../../assets/images/icon-play.svg" class="w-12 h-12 uk-position-center" alt="">
                                </div>
                                <div class="flex-1 relative lg:mt-0 mt-4"> 
                                    <a href="#" class="text-xl font-semibold leading-6">Clip Of Wolv Gamers Playing</a>
                                  <p class="leading-6 line-clamp-2 mt-2"> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                                    <div class="font-semibold mt-2"> Johnson Smath </div>
                                    <div class="flex space-x-2 items-center text-sm pt-1">
                                        <div> 27 weeks ago</div>
                                        <div>·</div>
                                        <div> 156.9K views</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>

                     <!-- Sidebar -->
                     <div class="lg:w-1/3 w-full">
                        <div uk-sticky="media @m ; offset:80 ; bottom : true" class="card">
                        
                        
                            <div class="border-b flex items-center justify-between  p-4">
                                <div>
                                    <h2 class="text-lg font-semibold">Top Games</h2>
                                </div>
                                <a href="#" class="text-blue-500"> See all </a>
                            </div>
                        
                            <div class="p-3">
                        
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-4.jpg" class="absolute w-full h-full inset-0 " alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base font-semibold capitalize"> Mobile Legends </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-2.jpg" class="absolute w-full h-full inset-0 " alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base font-semibold capitalize"> Minecraft </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 356k Following </div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-3.jpg" class="absolute w-full h-full inset-0" alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base font-semibold capitalize"> ChooxTv </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-1.jpg" class="absolute w-full h-full inset-0" alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base font-semibold capitalize"> Larion TV </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-4.jpg" class="absolute w-full h-full inset-0" alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base font-semibold capitalize"> Mobile Legends </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                                <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
                                    <a href="timeline-page.html" class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                                        <img src="../../assets/images/games/img-3.jpg" class="absolute w-full h-full inset-0" alt="">
                                    </a>
                                    <div class="flex-1">
                                        <a href="timeline-page.html" class="text-base  font-semibold capitalize"> ChooxTv </a>
                                        <div class="text-sm text-gray-500 mt-0.5"> 845K Following</div>
                                    </div>
                                    <a href="timeline-page.html"
                                        class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold">
                                        Play
                                    </a>
                                </div>
                        
                            </div>
                        
                            <a href="#" class="border-t block text-center py-2"> See all </a>
                        
                        </div>
                    </div>

 
                </div>

        
            </div>
        </div>
</template>