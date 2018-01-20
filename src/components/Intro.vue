<template lang="pug">
    .intro
        .intro__inner
            h1.intro__title.title
                span Hi
                |  {{ input.title }}
            .intro__text(v-html="input.text")
            .intro__action
                a(:href="input.btn.url" v-scroll-to="{ el: input.btn.url, offset: 0, easing: 'ease-in-out'}").btn.btn-fill
                    i.fa.fa-briefcase
                    | {{input.btn.label}}
                | &nbsp; 
                a(href="Andrew.Klimov.Frontend-developer.pdf").btn.btn-fill
                    i.fa.fa-download
                    | My resume
            .intro__arrow
                a(href="", v-scroll-to="{ el: '#portfolio', offset: 0, easing: 'ease-in-out'}") scroll down
                    span.fa.fa-angle-double-down
</template>

<script>
    export default {
        name: 'Intro',
        props: {
            input: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .intro {
        padding: 0 0;
        text-align: center;
        position: relative;
        width: 100%;
        height: 100vh;
        min-height: 350px;
        display: table;


        @media (min-width: $breakpoint-lg) {
            padding: 3rem 0;
            height: 100vh;
        }

        &__inner {
            display: table-cell;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }

        &__title {
            font-size: 2rem;
            line-height: 2.5rem;
            margin: .5rem auto 1.5rem;
            text-transform: capitalize;

            span {
                padding: .25rem .5rem;
                color: #fff;
                text-align: center;
                background-color: #141414;
            }

            @media (min-width: $breakpoint-md) {
                font-size: 2.62rem;
                line-height: 3rem;
            }
        }

        &__text {
            display: block;
            margin: 0 auto;
            max-width: 27rem;
            line-height:1.65em;
            font-size: 1rem;

            /*@media (min-width: $breakpoint-md) {
                line-height:1.45em;
                font-size: 1.25rem;
            }*/
        }

        &__action {
            margin: 1.5rem 0 3rem;
        }

        &__arrow {
            position: absolute;
            bottom: 1.75rem;
            left: 0;
            right: 0;
            top: auto;
            text-transform: uppercase;
            color: #ccc;
            font-size: .75rem;
            font-weight: 400;

            a {
                display: inline-block;
                text-decoration: none;
                color: #ccc;
                transition: color .2s ease-in-out;

                &:hover {
                    color: $color-base;
                }
            }

            span {
                display: block;
                font-size: 1rem;
                margin-top: .25rem;
            }
        }
    }
</style>