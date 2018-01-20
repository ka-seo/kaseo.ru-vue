<template lang="pug">
    .section#section-help
        .section__inner
            h1.title.section__title {{ input.title }}
            .section__text
                p  {{ input.text }}
                p(style="margin-top: 1.5rem")
                    a(:href="input.btn.url").btn.btn-fill
                        i.fa.fa-download
                        | {{input.btn.label}}
</template>

<script>
    export default {
        name: 'about',
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


</style>