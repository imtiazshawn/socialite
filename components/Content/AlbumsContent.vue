<template>
    <div class="main_content">
            <div class="mcontainer">


                <div class="flex justify-between items-center relative md:mb-4 mb-3">
                    <div class="flex-1">
                        <h2 class="text-2xl font-semibold"> Photos </h2>
                        <nav class="responsive-nav border-b md:m-0 -mx-4">
                            <ul>
                                <li class="active"><a href="#" class="lg:px-2">  Photos of you  <span> 230</span> </a></li>
                                <li><a href="#" class="lg:px-2"> Recently added </a></li>
                                <li><a href="#" class="lg:px-2"> Family </a></li>
                                <li><a href="#" class="lg:px-2"> University </a></li>
                                <li><a href="#" class="lg:px-2"> Albums </a></li>
                            </ul>
                        </nav>
                    </div>
                    <a href="#offcanvas-create" uk-toggle class="flex items-center justify-center z-10 h-10 w-10 rounded-full bg-blue-600 text-white absolute right-0"
                    data-tippy-placement="left" title="Create New Album">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>

                <div class="grid md:grid-cols-4 grid-cols-2 gap-3 mt-5">
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-1.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-2.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/avatars/avatar-3.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-4.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/avatars/avatar-7.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/avatars/avatar-4.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-1.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-2.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-3.jpg" class="w-full h-full absolute object-cover inset-0">
                          <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-2.jpg" class="w-full h-full absolute object-cover inset-0">
                          <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-3.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
                            <img src="../../assets/images/post/img-2.jpg" class="w-full h-full absolute object-cover inset-0">
                            <!-- overly-->
                            <div class="-bottom-12 absolute bg-gradient-to-b from-transparent h-1/2 to-gray-800 uk-transition-slide-bottom-small w-full"></div>
                            <div class="absolute bottom-0 w-full p-3 text-white uk-transition-slide-bottom-small flex items-center">
                                <div class="flex-1"> 
                                    <div class="text-lg"> Image description  </div>
                                    <div class="flex space-x-3 lg:flex-initial text-sm">
                                       <a href="#">  Like</a>
                                       <a href="#">  Comment </a>
                                       <a href="#">  Share </a> 
                                    </div>
                                </div> 
                                <i class="btn-down text-2xl uil-cloud-download px-1"></i>
                            </div>
                        </div>
                    </div>
                </div>

        
            </div>
        </div>
</template>