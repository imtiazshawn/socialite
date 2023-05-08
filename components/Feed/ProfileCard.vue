<template>
    <div uk-drop="pos: right-center ;animation: uk-animation-slide-left-small">
        <div class="contact-list-box">
            <div class="contact-avatar">
                <img src="../../assets/images/avatars/avatar-2.jpg" alt="">
                <span class="user_status status_online"></span>
            </div>
            <div class="contact-username"> Dennis Han</div>
            <p>
                <ion-icon name="people" class="text-lg mr-1"></ion-icon> Become friends with
                <strong> Stella Johnson </strong> and <strong> 14 Others</strong>
            </p>
            <div class="contact-list-box-btns">
                <button type="button" class="button primary flex-1 block mr-2">
                    <i class="uil-envelope mr-1"></i> Send message</button>
                <button type="button" href="#" class="button secondary button-icon mr-2">
                    <i class="uil-list-ul"> </i> </button>
                <button type="button" a href="#" class="button secondary button-icon">
                    <i class="uil-ellipsis-h"> </i>
                </button>
            </div>
        </div>
    </div>
</template>