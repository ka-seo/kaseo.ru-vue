<template lang="pug">
    .header-bar
        a.logo(:href="logo.url") {{ logo.badge }}
</template>

<script>
    export default {
        name: 'header',
        props: {
            logo: {
                type: Object,
                required: true,
                default: {}
            }
        }
    }
</script>

<style lang="scss">
.header-bar {

}

    .logo {
        font-weight: bold;
        text-decoration: none;
    }
</style>