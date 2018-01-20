<template lang="pug">
    section.sidebar#left-sidebar
        .cover
            //.cover__photo
            //    img(src="../img/cover-photo-1.jpg").cover__image
            .profile
                .profile__picture
                    img(src="../img/cover-photo.jpg")
                .profile__info
                    h2.profile__title.title Andrew Klimov
                    p.profile__subtitle - Frontend developer -
                    ul.social-account
                        li: a(target="_blank", href="https://vk.com/kaseo"): i.fa.fa-vk
                        li: a(target="_blank", href="https://www.facebook.com/andr.klimov"): i.fa.fa-facebook
                        li: a(target="_blank", href="https://github.com/ka-seo"): i.fa.fa-github
</template>

<script>
    export default {
        name: 'sidebar',
        props: {

        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .sidebar {
        top: 0;
        left: 0;
        bottom: 0;
        width: 30%;
        display: none;
        position: fixed;
        overflow: hidden;
        @include clearfix;

        @media (min-width: $breakpoint-lg) {
            display: block;
        }
    }

    .cover {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: $color-base no-repeat center center;
        background-size: cover;

        &:before {
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            background: transparentize(#000, .25);

        }

        &__photo {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            position: absolute;


            &:before {
                content: '';
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                background: transparentize(#000, .25);

            }
        }

        &__image {
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
        }
    }

    .profile {
        top: 50%;
        left: 50%;
        width: 100%;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);

        &__picture {
            position: relative;
            z-index: 1;
            width: 12.5rem;
            height: 12.5rem;
            margin: 0 auto 2rem;
            overflow: hidden;
            text-align: center;
            border-radius: 100%;

            img {
                display: block;
                max-width: 100%;
            }
        }

        &__info {
            position: relative;
            z-index: 1;
            color: #fff;
        }

        &__title {
            margin: 0 auto 1rem;
            line-height: 1em;
            font-size: 1.75rem;
            text-transform: uppercase;
        }

        &__subtitle {
            margin: 0 auto 1rem;
        }
    }

    .social-account {
        list-style: none inside none;
        padding: 0;
        margin: 0;

        li {
            display: inline-block;
            vertical-align: middle;
            width: 1.875rem;
            height: 1.875rem;
            margin: 0 .3rem 0;
            padding: 0;
            text-align: center;
        }

        a {
            width: 100%;
            height: 100%;
            display: block;
            line-height: 1.875rem;
            color: rgba(255,255,255,0.5);
            border: 1px solid rgba(255,255,255,0.3);
            transition: .2s ease;

            &:hover {
                color: #141414;
                border-color: #fff;
                background-color: #fff;
            }
        }
    }
</style>