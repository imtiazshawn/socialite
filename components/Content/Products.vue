<template>
    <div class="main_content">
            <div class="mcontainer">

                <div class="flex justify-between items-center relative md:mb-4 mb-3">
                    <div class="flex-1">
                        <h2 class="text-2xl font-semibold"> Products </h2>
                        <nav class="responsive-nav border-b md:m-0 -mx-4">
                            <ul>
                                <li class="active"><a href="#" class="lg:px-2">   Suggestions </a></li>
                                <li><a href="#" class="lg:px-2"> Newest </a></li>
                                <li><a href="#" class="lg:px-2"> My products </a></li>
                            </ul>
                        </nav>
                    </div>
                    <a href="#offcanvas-create" uk-toggle class="flex items-center justify-center h-8 lg:px-3 px-2 rounded-md bg-blue-600 text-white space-x-1 absolute right-0 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="md:block hidden"> Create </span>
                    </a> 
                    
                </div>

                <div class="relative" uk-slider="finite: true">
                
                    <div class="uk-slider-container px-1 py-3">
                        <ul class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/1.jpg" alt="">
                                            <span class="absolute bg-white px-2 py-1 text-sm rounded-md m-2"> Label</span>
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $24.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Herbel</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Brown headphones </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/15.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $19.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Herbel</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Herbal Shampoo </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/13.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $56.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Parfums</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Parfum Spray </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/14.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $32.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">FURNITURE</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Wood Chair </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/2.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $32.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Accessories</div>
                                            <div class="ext-lg font-medium mt-1 t truncate">Wireless headphones</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/4.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $122.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Mobiles</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> iPhone 7 unboxing </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="previous"> 
                            <!-- <i class="icon-feather-chevron-left"></i> -->
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </a>
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="next"> 
                            <!-- <i class="icon-feather-chevron-right"></i> -->
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </a>
                
                    </div>
                </div>
                
                <div class="sm:my-6 my-3 flex items-center justify-between">
                    <div>
                        <h2 class="text-xl font-semibold"> Categories </h2>
                        <p class="font-medium text-gray-500 leading-6"> Find a group by browsing top categories. </p>
                    </div>
                    <a href="#" class="text-blue-500 sm:block hidden"> See all </a>
                </div> 

                <div class="relative -mt-3" uk-slider="finite: true">
                
                    <div class="uk-slider-container px-1 py-3">
                        <ul class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/travel.jpg" class="absolute w-full h-full object-cover" alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Travel </div>
                                </div>
                            </li>
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/business.jpg" class="absolute w-full h-full object-cover" alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Business </div>
                                </div>
                            </li>
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/health.jpg" class="absolute w-full h-full object-cover" alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Health </div>
                                </div>
                            </li>
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/science-and-tech.jpg" class="absolute w-full h-full object-cover"
                                        alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Science </div>
                                </div>
                            </li>
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/Buy-and-sell.jpg" class="absolute w-full h-full object-cover"
                                        alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Buy & sell</div>
                                </div>
                            </li>
                            <li>
                                <div class="rounded-md overflow-hidden relative w-full h-36">
                                    <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                                    </div>
                                    <img src="../../assets/images/category/travel.jpg" class="absolute w-full h-full object-cover" alt="">
                                    <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Travel </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <a class="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> 
                        <!-- <i class="icon-feather-chevron-left"></i> -->
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                    <a class="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> 
                        <!-- <i class="icon-feather-chevron-right"></i> -->
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </a>

                </div>
                   
                
                <div class="my-6 flex items-center justify-between">
                    <div>
                        <h2 class="text-xl font-semibold"> New Collection
                        </h2>
                    </div>
                    <a href="#" class="text-blue-500"> See all </a>
                </div> 

                <div class="relative -mt-3" uk-slider="finite: true">
                
                    <div class="uk-slider-container px-1 py-3">
                        <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small uk-grid">
                
                            <li>
                                <div class="card p-2 flex space-x-4 border border-gray-100">
                                    <div class="w-20 h-24 overflow-hidden rounded-lg">
                                        <div class="card-media h-24">
                                            <img src="../../assets/images/product/13.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="flex-1 pt-2.5 relative">
                
                                        <div class="text-xs font-semibold uppercase text-yellow-500">Parfumdds </div>
                                        <div class="text-lg mt-3 2.5 text-gray-700">Parfum Spray</div>
                                        <div class="flex items-center space-x-2 text-sm text-gray-400 capitalize">
                                            <div> 15 likes</div>
                                            <div>·</div>
                                            <div> 286 views </div>
                                        </div>
                                        <div
                                            class="top-1.5 absolute bg-gray-100 font-semibold px-2.5 py-1 right-1 rounded-full text text-blude-500 text-sm">
                                            $12.99
                                        </div>
                
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card p-2 flex space-x-4 border border-gray-100">
                                    <div class="w-20 h-24 overflow-hidden rounded-lg">
                                        <div class="card-media h-24">
                                            <img src="../../assets/images/product/15.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="flex-1 pt-2.5 relative">
                
                                        <div class="text-xs font-semibold uppercase text-yellow-500">Herbel</div>
                                        <div class="text-lg mt-3 2.5 text-gray-700">Herbal Shampoo</div>
                                        <div class="flex items-center space-x-2 text-sm text-gray-400 capitalize">
                                            <div> 15 likes</div>
                                            <div>·</div>
                                            <div> 286 views </div>
                                        </div>
                
                                        <div
                                            class="top-1.5 absolute bg-gray-100 font-semibold px-2.5 py-1 right-1 rounded-full text text-blude-500 text-sm">
                                            $12.99
                                        </div>
                
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card p-2 flex space-x-4 border border-gray-100">
                                    <div class="w-20 h-24 overflow-hidden rounded-lg">
                                        <div class="card-media h-24">
                                            <img src="../../assets/images/product/14.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="flex-1 pt-2.5 relative">
                
                                        <div class="text-xs font-semibold uppercase text-yellow-500">Parfum </div>
                                        <div class="text-lg mt-3 2.5 text-gray-700">Wood Chair</div>
                                        <div class="flex items-center space-x-2 text-sm text-gray-400 capitalize">
                                            <div> 15 likes</div>
                                            <div>·</div>
                                            <div> 286 views </div>
                                        </div>
                                        <div
                                            class="top-1.5 absolute bg-gray-100 font-semibold px-2.5 py-1 right-1 rounded-full text text-blude-500 text-sm">
                                            $12.99
                                        </div>
                
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="card p-2 flex space-x-4 border border-gray-100">
                                    <div class="w-20 h-24 overflow-hidden rounded-lg">
                                        <div class="card-media h-24">
                                            <img src="../../assets/images/product/2.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="flex-1 pt-2.5 relative">
                
                                        <div class="text-xs font-semibold uppercase text-yellow-500"> ACCESSORIES </div>
                                        <div class="text-lg mt-3 2.5 text-gray-700"> Wireless headphones </div>
                                        <div class="flex items-center space-x-2 text-sm text-gray-400 capitalize">
                                            <div> 15 likes</div>
                                            <div>·</div>
                                            <div> 286 views </div>
                                        </div>
                                        <div
                                            class="top-1.5 absolute bg-gray-100 font-semibold px-2.5 py-1 right-1 rounded-full text text-blude-500 text-sm">
                                            $12.99
                                        </div>
                
                                    </div>
                                </div>
                            </li>
                
                        </ul>
                    </div>
                
                    <a class="absolute bg-white top-11 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                        href="#" uk-slider-item="previous"> 
                        <!-- <i class="icon-feather-chevron-left"></i> -->
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                    <a class="absolute bg-white top-11 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                        href="#" uk-slider-item="next"> 
                        <!-- <i class="icon-feather-chevron-right"></i> -->
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </a>
                
                </div>

                <br>

                <div class="my-4 flex items-center justify-between border-b pb-3">
                    <div>
                        <h2 class="text-xl font-semibold"> Brand Collection
                        </h2>
                    </div>
                    <a href="#" class="text-blue-500"> See all </a>
                </div> 

                <div class="relative" uk-slider="finite: true">
                
                    <div class="uk-slider-container px-1 py-3">
                        <ul class="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/12.jpg" alt="">
                                            <span class="absolute bg-white px-2 py-1 text-sm rounded-md m-2"> Label</span>
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $22.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Shoes</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Hermes Rivera </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/15.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $12.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Herbel</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Herbal Shampoo </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/4.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $122.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Mobiles</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> iPhone 7 unboxing </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/14.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $32.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Furniture</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Wood Chair </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/9.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $32.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Fruit</div>
                                            <div class="ext-lg font-medium mt-1 t truncate"> Strawberries FreshRipe </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="product-single.html">
                                    <div class="card">
                                        <div class="card-media h-40">
                                            <div class="card-media-overly"></div>
                                            <img src="../../assets/images/product/2.jpg" alt="">
                                            <button class="bg-red-100 absolute right-2 top-2 p-0.5 px-1.5 rounded-full text-red-500">
                                                <!-- <i class="icon-feather-heart"> </i> -->
                                                <ion-icon name="heart-outline" style="font-size: 20px;"></ion-icon>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="-top-3 absolute bg-blue-100 font-medium px-2 py-1 right-2 rounded-full text text-blue-500 text-sm">
                                                $32.99
                                            </div>
                                            <div class="text-xs font-semibold uppercase text-yellow-500">Accessories</div>
                                            <div class="ext-lg font-medium mt-1 t truncate">Wireless headphones</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="previous"> 
                            <!-- <i class="icon-feather-chevron-left"></i> -->
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </a>
                        <a class="absolute bg-white bottom-1/2 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white"
                            href="#" uk-slider-item="next"> 
                            <!-- <i class="icon-feather-chevron-right"></i> -->
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </a>
                
                    </div>
                </div>
        
            </div>
        </div>
</template>