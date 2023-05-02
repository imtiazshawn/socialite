<template>
    <div class="sidebar">
        
        <div class="sidebar_inner" data-simplebar>
    
            <ul>
                <li :class="{ slide_active: this.$route.path === '/feed' }">
                    <nuxt-link to="/feed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-blue-600"> 
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span :class="{ slide_bold: this.$route.path === '/feed' }"> Feed </span>
                    </nuxt-link>
                </li>
                <li :class="{ slide_active: this.$route.path === '/pages' }">
                    <nuxt-link to="/pages">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-yellow-500">
                        <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
                        </svg>
                        <span :class="{ slide_bold: this.$route.path === '/pages' }"> Pages </span>
                    </nuxt-link>
                </li>

                <li :class="{ slide_active: this.$route.path === '/videos' }">
                    <nuxt-link to="videos">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-red-500">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
                        </svg>
                        <span :class="{ slide_bold: this.$route.path === '/videos' }"> Video</span>
                    </nuxt-link>
                </li> 
                <li :class="{ slide_active: this.$route.path === '/groups' }">
                    <nuxt-link to="/groups"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-blue-500">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg><span :class="{ slide_bold: this.$route.path === '/groups' }"> Groups </span>
                    </nuxt-link> 
                </li>
                <li :class="{ slide_active: this.$route.path === '/jobs' }">
                    <nuxt-link to="/jobs"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-pink-500">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg> <span :class="{ slide_bold: this.$route.path === '/jobs' }"> Jobs</span> 
                    </nuxt-link> 
                </li> 
                <li :class="{ slide_active: this.$route.path === '/courses' }">
                    <nuxt-link to="/courses">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span :class="{ slide_bold: this.$route.path === '/courses' }"> Course</span>
                    </nuxt-link> 
                </li>
                <li :class="{ slide_active: this.$route.path === '/games' }">
                    <nuxt-link to="/games"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-green-500">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>  <span :class="{ slide_bold: this.$route.path === '/games' }">  Games </span>
                    </nuxt-link> 
                </li> 
                
                <li id="more-veiw" hidden>
                    <nuxt-link to="events.html"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-yellow-500">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg><span>  Events </span>
                    </nuxt-link>
                </li>
                <li id="more-veiw" hidden>
                    <nuxt-link to="products.html"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-red-500">
                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                        </svg>
                        <span> Products</span>
                    </nuxt-link> 
                </li> 
                <li id="more-veiw" hidden>
                    <nuxt-link to="albums.html"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-purple-500">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                        </svg>  <span>  Photos </span>
                    </nuxt-link> 
                </li>
                <li id="more-veiw" hidden>
                    <nuxt-link to="blogs.html">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-pink-500">
                            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                        </svg>
                        <span> Blog</span>
                    </nuxt-link> 
                </li> 
                <li id="more-veiw" hidden>
                    <nuxt-link to="forums.html"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-blue-500">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                    <span> forum</span> 
                    </nuxt-link> 
                </li>
                <li id="more-veiw" hidden><nuxt-link to="birthdays.html"> 
                    <svg fill="currentColor" class="text-yellow-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                    <span> Birthdays </span> <span class="new">N</span></nuxt-link> 
                </li>
                <li id="more-veiw" hidden><nuxt-link to="fundraiser.html"> 
                    <svg fill="currentColor" class="text-red-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                    <span> Fundraiser </span> <span class="new">N</span></nuxt-link> 
                </li> 
            </ul>

            <nuxt-link to="#" class="see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600" uk-toggle="target: #more-veiw; animation: uk-animation-fade"> 
                <span class="w-full flex items-center" id="more-veiw">
                    <svg class="  bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    See More  
                </span>
                <span class="w-full flex items-center" id="more-veiw" hidden>
                    <svg  class="bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg> 
                    See Less 
                </span>
            </nuxt-link>
            
            <h3 class="side-title"> Contacts </h3>

            <div class="contact-list my-2 ml-1">
                
                <nuxt-link to="chats-friend.html">
                    <div class="contact-avatar">
                        <img src="../assets/images/avatars/avatar-1.jpg" alt="">
                        <span class="user_status status_online"></span>
                    </div>
                    <div class="contact-username"> Dennis Han</div>
                </nuxt-link>
                <nuxt-link to="chats-friend.html">
                    <div class="contact-avatar">
                        <img src="../assets/images/avatars/avatar-2.jpg" alt="">
                        <span class="user_status"></span>
                    </div>
                    <div class="contact-username"> Erica Jones</div>
                </nuxt-link>
                <nuxt-link to="chats-friend.html">
                    <div class="contact-avatar">
                        <img src="../assets/images/avatars/avatar-7.jpg" alt="">
                    </div>
                    <div class="contact-username">Stella Johnson</div>
                </nuxt-link>
                <nuxt-link to="chats-friend.html">
                    <div class="contact-avatar">
                        <img src="../assets/images/avatars/avatar-4.jpg" alt="">
                    </div>
                    <div class="contact-username"> Alex Dolgove</div>
                </nuxt-link>

            </div>

            <ul class="side_links" data-sub-title="Pages">
                <li><nuxt-link to="feed.html"> <ion-icon name="settings-outline" class="side-icon"></ion-icon>  <span> Setting  </span> </nuxt-link> 
                    <ul>
                        <li><nuxt-link to="pages-setting.html">layout 1</nuxt-link></li>
                        <li><nuxt-link to="pages-setting2.html">layout 2</nuxt-link></li>
                    </ul>
                </li>
                <li><nuxt-link to="#"> <ion-icon name="albums-outline" class="side-icon"></ion-icon> <span> Info Pages  </span> </nuxt-link>
                    <ul> 
                        <li><nuxt-link to="pages-about.html"> About </nuxt-link></li>
                        <li><nuxt-link to="pages-contact.html"> Contact us </nuxt-link></li>
                        <li><nuxt-link to="pages-privacy.html"> Privacy </nuxt-link></li>
                    </ul>
                </li> 
                <li><nuxt-link to="#"> <ion-icon name="document-outline" class="side-icon"></ion-icon> <span> Create Content </span>  </nuxt-link> 
                    <ul>
                        <li><nuxt-link to="create-group.html"> Create Group </nuxt-link></li>
                        <li><nuxt-link to="create-page.html"> Create Page </nuxt-link></li> 
                    </ul>
                </li>
                <li><nuxt-link to="#"> <ion-icon name="code-slash-outline" class="side-icon"></ion-icon> <span> Development  </span> </nuxt-link>
                    <ul> 
                        <li><nuxt-link to="development-components.html"> Compounents </nuxt-link></li>
                        <li><nuxt-link to="development-plugins.html"> Plugins </nuxt-link></li>
                        <li><nuxt-link to="development-icons.html"> Icons </nuxt-link></li>
                    </ul>
                </li>
                <li><nuxt-link to="#"> <ion-icon name="log-in-outline" class="side-icon"></ion-icon> <span>  Authentication  </span>  </nuxt-link>
                    <ul>
                        <li><nuxt-link to="form-login.html">form login </nuxt-link></li>
                        <li><nuxt-link to="form-register.html">form register</nuxt-link></li>
                    </ul>
                </li>
                
            </ul>

            <div class="footer-links">
                <nuxt-link to="#">About</nuxt-link>
                <nuxt-link to="#">Blog </nuxt-link>
                <nuxt-link to="#">Careers</nuxt-link>
                <nuxt-link to="#">Support</nuxt-link>
                <nuxt-link to="#">Contact Us </nuxt-link>
                <nuxt-link to="#">Developer</nuxt-link>
                <nuxt-link to="#">Terms of service</nuxt-link>
            </div>

        </div>

        <!-- sidebar overly for mobile -->
        <div class="side_overly" uk-toggle="target: #wrapper ; cls: is-collapse is-active"></div>

    </div> 
</template>


<style>
    .sidebar_inner {
        overflow-y: auto;
        height: 100%;
    }
    .slide_active {
        background-color: #eaecfa;
        border-radius: 10px;
    }
    .slide_bold {
        font-weight: bold;
        color: #4055ec;
    }

        /* Style the scrollbar */
    ::-webkit-scrollbar {
    width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #e4e4e5;
    border-radius: 20%;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #e4e4e5
;
    }
</style>