<template>
    <div>
        <div id="wrapper">

            <!-- Header -->
            <Header />

            <!-- sidebar -->
            <Sidebar />

            <!-- Main Contents -->
            <PagesContact />

        </div>

        <!-- birthdays modal -->
        <FeedBirthdayModel />

        <!-- open chat box -->
        <OpenChatBox />

        <!-- story-preview -->
        <FeedStoryPreview />

        <!-- Craete post modal -->
        <CreatePost />

    </div>
</template>
  
<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import PagesContact from '../components/Content/PagesContact.vue';
import FeedBirthdayModel from '../components/Feed/BirthdayModel.vue';
import OpenChatBox from '../components/OpenChatBox.vue';
import FeedStoryPreview from '../components/Feed/StoryPreview.vue';
import CreatePost from '../components/Feed/CreatePost.vue';

export default {
    name: "IndexPage",
    components: { Header, Sidebar, PagesContact, FeedBirthdayModel, OpenChatBox, FeedStoryPreview, CreatePost }
}
</script>