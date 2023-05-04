<template>
    <div>
        <div id="wrapper">

            <!-- Header -->
            <Header />

            <!-- sidebar -->
            <Sidebar />

            <!-- Main Contents -->
            <slot />

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