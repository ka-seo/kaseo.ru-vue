<template lang="pug">
    .section
        h1.title {{ dataSection.title }}

</template>

<script>
    export default {
        name: 'section',
        props: {
            dataSection: {
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
        padding: 2rem 0;
        text-align: center;
        width: 100%;
        height: 100%;
        border: 1px solid red;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        @media (min-width: $breakpoint-lg) {
            padding: 0;
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
            max-width: 22rem;
            line-height:1.25em;
            font-size: 1.125rem;

            @media (min-width: $breakpoint-md) {
                line-height:1.45em;
                font-size: 1.25rem;
            }
        }

        &__action {
            margin-top: 1.5rem;
        }
    }
</style>