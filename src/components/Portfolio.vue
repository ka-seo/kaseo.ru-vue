<template lang="pug">
    .section#portfolio
        .section__inner
            h1.title.section__title {{ input.title }}
            p {{ portfolioDescription }}
            p(v-if="input.loading") Loading...
            .portfolio-filter
                ul
                    li(v-for="year in years", @click="sortby(year)", :class="activeYear == year ? 'active' : '' ") {{ year }}
            .row
                .work(v-for="item, index in filteredItems", v-if="item.name != ''", :class="'work--' + index")
                    .work__item
                        .work__figure
                            img(:src="item.img", :alt="item.name").work__img
                            .work__content(:class="{'none-descr' : item.text == ''}")
                                a(:href="item.link", target="_blank" class="work__link")
                                h3.work__title {{ item.name }}
                                p.work__text(v-if="item.text") {{ item.text }}
                        .work__footer
                            span.work__footer_l
                                span.work__date {{ item.date.month }} {{ item.date.year }}
                            span.work__footer_r
                                a(:href="item.link", target="_blank").btn Look Demo

</template>

<script>
    export default {
        name: 'portfolio',
        props: {
            input: {
                type: Object,
                required: true
            },
            works: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
                years: ['2017', '2016', '2015', '2014', '2013', '2012', '2011'],
                activeYear: '2017'
            }
        },
        computed: {
            portfolioDescription() {
                const date = new Date(),
                      currentYear = date.getFullYear();

                let experience = currentYear - this.years[this.years.length - 1] + 2;
                let countWorks = Math.round(this.works.length * 5);

                return `For ${experience} years I created more than ${countWorks} projects. Here are some of them.`
            },
            filteredItems() {
                return this.works.filter(item => {
//                    if(this.activeYear == 'all') return this.works;
                    return item.date.year.indexOf(this.activeYear) > -1
                })
            },
            sortedArray() {
                function compare(a, b) {
                    if (a.date.year < b.date.year)
                        return -1;
                    if (a.date.year > b.date.year)
                        return 1;
                    return 0;
                }

                return this.works.sort(compare);
            }
        },
        methods: {
            linkName(type) {
                console.log(type);

                switch(type) {
                    case 'makeup' : return 'look demo'; break;
                    case 'website' : return 'visit website'; break;
                    case 'design' : return 'look image'; break;
                    default: return 'Look work';
                }
            },
            sortby(year) {
                this.activeYear = year;
            },
        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .work {
        padding: 1rem;
        @include clearfix;

        @media (min-width: $breakpoint-md) {
            width: 50%;
            float: left;

            &:nth-child(2n+1) {
                clear: both;
            }
        }

        &__item {
            position: relative;
            box-shadow: 0 0 1.5rem rgba(#000, .1);

            &:hover {
                .work {
                    &__img {
                        filter: blur(5px);
                    }
                    &__content {
                        top: 0;
                        /*background: transparentize(#000, .35);*/
                    }
                }
            }
        }

        &__figure {
            position: relative;
            max-height: 245px;
            overflow: hidden;
            background: #fff;

            a {
                display: block;
            }
        }

        &__img {
            max-width: 100%;
            filter: blur(0);
            transition-delay: .25s;
            transition: filter ease-in-out;
        }

        &__content {
            position: absolute;
            top: -100%;
            right: 0;
            bottom: auto;
            left: 0;
            width: 100%;
            height: 100%;
            color: #fff;
            padding: 1rem;
            text-align: left;
            background: transparentize($color-base, .3);
            transition: .2s ease-in-out;

            &.none-descr {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                align-content: center;
                justify-content: center;
            }
        }

        &__link {
            display: block;
            color: #fff;
            text-decoration: none;
            background: transparent;
            position: absolute;
            top: 0;
            right: 0;
            bottom: auto;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        &__title {
            margin: 0;
            padding: 0;
            font-family: $font-primary;
            font-size: 1.125rem;
            font-weight: normal;
        }

        &__text {
            font-size: .85rem;
        }

        &__footer {
            display: table;
            width: 100%;

            &_l,
            &_r{
                display: table-cell;
                vertical-align: middle;
                text-align: right;
            }
            &_l {
                width: 150px;
                padding:0 1.125rem;
                text-align: left;

                @media (max-width: 375px) {
                    width: 130px;
                    padding:0 1rem;
                }
            }

            .btn {
                border: 0;
            }
        }

        &__date {
            color: #999;
            font-size: .85rem;
        }


    }

    .portfolio-filter {
        margin: 0 auto 2rem;
        padding: 0;
        position: relative;

        @media (max-width: $breakpoint-sm) {
            &:before {
                content: "";
                position: absolute;
                z-index: 3;
                right: 10px;
                top: 50%;
                margin-top: -10px;
                width: 20px;
                height: 20px;
                background: url("../img/swipe.svg") center no-repeat;
                -webkit-background-size: 18px;
                background-size: 18px;
                animation: menu-hint 2s linear infinite;
            }

            &:after {
                content: "";
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                width: 65px;
                z-index: 1;
                background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%);
                background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,1) 100%);
                background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 );
            }

            @keyframes menu-hint {
                25% {
                    transform:translateX(7px);
                }
                75% {
                    transform:translateX(-7px);
                }
            }
        }


        ul {
            list-style: none inside none;
            white-space: nowrap;
            margin: 0 auto;
            padding: 0;

            @media (max-width: $breakpoint-sm) {
                /*max-width: 400px;*/
                overflow-y: auto;
                border: 1px solid red;
                overflow: -moz-scrollbars-none;
                -ms-overflow-style: none;
                -webkit-overflow-scrolling: touch;

                &::-webkit-scrollbar { width: 0; }
            }
        }

        li {
            display: inline-block;
            vertical-align: middle;
            margin: 0 .25rem;
            padding: .125rem .5rem;
            user-select: none;
            cursor: pointer;
            text-transform: uppercase;
            transition: background .2s ease-in-out;

            &.active,
            &.active:hover {
                background-color: $color-base;
                color: #fff;
            }

            &:hover {
                background-color: #ccc;
            }
        }
    }
</style>