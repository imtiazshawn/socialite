<template>
    <div class="main_content">
            <div class="mcontainer">

                <div class="lg:flex lg:space-x-12">

                    <div class="lg:w-3/4">
                    
                        <div class=" md:mb-4 mb-3">
                            <h2 class="text-2xl font-semibold"> Jobs </h2>
                            <nav class="responsive-nav style-2 md:m-0 -mx-4">
                                <ul>
                                    <li class="active"><a href="#" class="lg:px-2">   Suggestions </a></li>
                                    <li><a href="#" class="lg:px-2"> Newest </a></li>
                                    <li><a href="#" class="lg:px-2"> My Jobs </a></li>
                                </ul>
                            </nav>
                        </div>

                        <div class="card divide-y divide-gray-100 sm:m-0 -mx-4">

                            <!-- jobs -->
                            <div class="flex items-start flex-wrap p-7 sm:space-x-6" v-if="jobs.jobs && jobs.jobs.length > 0" v-for="(job, index) in jobs.jobs">
                                <a href="job-details.html" class="w-14 h-14 relative mt-1 order-1">
                                    <img src="assets/images/brand/brand-avatar-4.png" alt="" class="rounded-md">
                                </a>
                                <div class="flex-1 sm:order-2">
                                    <h4 class="text-base text-gray-500 font-medium mb-2"> {{ job.position }} </h4>
                                    <a href="job-details.html">
                                        <h3 class="text-xl font-medium mb-4"> {{ job.companyName }} </h3>
                                    </a>
                                    <p> 
                                        {{ job.description.slice(0, 200) }} ..
                                    </p>
                                    <div class="job-tags mt-5 mb-2 space-x-2.5 space-y-2">
                                        <a href="#" class="border px-3 py-1.5 rounded-md text-sm inline-block" v-if="job.tags && job.tags.length > 0" v-for="(tag, index) in job.tags"> 
                                            {{ tag }} 
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                     
                    
                    </div>
                    <div class="lg:w-1/4 w-full flex-shrink-0">

                        <div uk-sticky="media @m ; offset:80 ; bottom : true" class="lg:mt-0 mt-6">
  
                            <h2 class="text-xl font-semibold mb-2"> Recently Posted </h2>
                            <ul class="-space-y-2">
                                <li>
                                    <a href="#" class="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                                        <h3 class="font-medium line-clamp-2">Technical Event Support and Producer Specialist</h3>
                                        <div class="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                                            <div class="">Full-time</div>
                                            <div class="pb-1"> . </div>
                                            <div class="text-blue-500">100 - 200 / day</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                                        <h3 class="font-medium line-clamp-2">IT Department Manager Blogger Entrepenour list</h3>
                                        <div class="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                                            <div class="">Full-time</div>
                                            <div class="pb-1"> . </div>
                                            <div class="text-blue-500">100 - 200 / day</div>
                                        </div>
                                    </a>
                                </li> 
                                <li>
                                    <a href="#" class="hover:bg-gray-100 rounded-md p-3 -mx-3 block">
                                        <h3 class="font-medium line-clamp-2">Hardware Verification Validation Profissional Engineer</h3>
                                        <div class="flex font-medium items-center mt-1 space-x-1.5 text-xs">
                                            <div class="">Full-time</div>
                                            <div class="pb-1"> . </div>
                                            <div class="text-blue-500">1900 - 2200 / day</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                          <br>
                           
                          <h4 class="text-lg font-semibold mb-3"> Tags </h4>

                        <div class="flex flex-wrap gap-2">
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> Computers</a>
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> Business</a>
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> News</a>
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> Architecher</a>
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> Technolgy</a>
                            <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full"> Music</a> 
                        </div>
                  
                        </div><div class="uk-sticky-placeholder" style="height: 556px; margin: 0px;"></div>
                    </div>

                </div>
 
            </div>
        </div>
</template>


<script>
    import { useTimeline } from '@/stores/api';

    export default {
        setup() {
            const jobs = useTimeline();

            const fetchApiData = async () => {
                try {
                    await jobs.fetchJobsData()
                    console.log(jobs.jobs)
                } catch (error) {
                    console.error(error)
                }
            }

            fetchApiData();

            return {
                jobs
            }
        }
    }
</script>