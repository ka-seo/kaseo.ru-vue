<template lang="pug">
    div.app
        side-bar
        main-section


</template>

<script>
//require('./sass/utilities/_normalize.scss')
//import './sass/utilities/_normalize.scss'

import HeaderBar from './components/HeaderBar.vue'
import SideBar from './components/Sidebar.vue'
import MainSection from './components/MainSection.vue'


export default {
    components: {
        HeaderBar,
        SideBar,
        MainSection
    },
    data(){
        return {
            error: undefined,
            loading: true,
            logoData: {
                url: '/',
                badge: 'KaSeo'
            },
        }
    },
}

</script>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Barlow:300,400|Didact+Gothic&subset=cyrillic');
    @import "./sass/styles";

    /*APP Styles*/
    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        padding: 0 15px;
    }

    @media (min-width: 600px) {
        .container {
            max-width: 70%;
        }
    }
</style>