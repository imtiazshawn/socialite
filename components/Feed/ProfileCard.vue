<template>
    <div uk-drop="pos: bottom-left ;animation: uk-animation-slide-left-small">
        <div class="contact-list-box">
            <div class="contact-avatar">
                <img src="../../assets/images/avatars/avatar-2.jpg" alt="">
                <span class="user_status status_online"></span>
            </div>
            <div class="contact-username text-green-500"> {{ post.username }} </div>
            <p>
                <ion-icon name="people" class="text-lg mr-1"></ion-icon> Become friends with
                <strong> {{ post.mutual }} </strong> and <strong> {{ post.mutualFriends }} Others</strong>
            </p>
            <div class="contact-list-box-btns">
                <button type="button" class="button primary flex-1 block mr-2">
                    <i class="uil-envelope mr-1"></i> Send message</button>
                <button type="button" href="#" class="button secondary button-icon mr-2">
                    <!-- <i class="uil-list-ul"> </i>  -->
                    <ion-icon name="list-outline"></ion-icon>
                </button>
                <button type="button" a href="#" class="button secondary button-icon">
                    <!-- <i class="uil-ellipsis-h"> </i> -->
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
    export default ({
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    })
</script>