<template lang="pug">
    section.main-section
        header.header
            intro-block(:input="introData")

        //about-block(:input="aboutData")

        portfolio-block(:input="portfolioData", :works="worksData")
</template>

<script>
    import axios from 'axios'

    import IntroBlock from '../components/Intro.vue'
    import AboutBlock from '../components/About.vue'
    import PortfolioBlock from '../components/Portfolio.vue'

    export default {
        name: 'main',
        components: {
            IntroBlock,
            AboutBlock,
            PortfolioBlock,
        },
        props: {

        },
        beforeMount(){
            this.loadPortfolio()
        },
        data() {
            return {
                introData: {
                    title: 'I am Andrew Klimov.',
                    text: 'I create crossbrowser responsive HTML page layouts and make it live using JavaScript. My toolset includes Pug, SCSS, JS (ES6), Vue.js, Webpack, Git, Photoshop. I can help you with converting website design to HTML templates, with developing frontend<br>for your project and with optimizing existing code.',
//                    text: 'I\'m a frontend developer with over 8 years of experience from Belarus.',
                    btn: {
                        label: 'view my portfolio',
                        url: '#portfolio'
                    }
                },
                aboutData: {
                    title: 'how can I help you',
                    text: 'I create crossbrowser responsive HTML page layouts and make it live using JavaScript. My toolset includes Pug (Jade), SCSS, JavaScript (ES6), Webpack, Git, Photoshop. I can help you with converting website design to HTML templates, with developing frontend for your project and with optimizing existing code.',
                    btn: {
                        label: 'Download resume',
                        url: 'Andrew.Klimov.Frontend-developer.pdf'
                    }
                },
                portfolioData: {
                    title: 'My portfolio',
                    text: '',
                    btn: {
                        label: 'Download resume',
                        url: '#download'
                    },
                    loading: false
                },
                worksData: []
            }
        },
        methods: {
            loadPortfolio() {
                this.portfolioData.loading = true;
                axios
                    .get('portfolio.json')
                    .then(response => {
                        this.portfolioData.loading = false;
                        this.worksData = response.data.portfolio;
                    })
                    .catch(error => {
                       console.error("Error load portfolio:");
                       console.error(error);
                    });
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .main-section {
        padding: 1rem;
        min-height: 100%;

        @include clearfix;

        @media (min-width: $breakpoint-lg) {
            width: 70%;
            float: right;
        }
    }

    .header {
        height: 100%;
    }
</style>