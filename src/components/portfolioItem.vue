<template lang="pug">
    .work
        | {{ input.name }}

            
</template>

<script>
    export default {
        name: 'work',
        props: {
            input: {
                type: Object,

            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .work {
        border: 1px solid #ccc;
    }
</style>