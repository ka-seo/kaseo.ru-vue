<template>
    <div class="page">
        <div class="page__header page-header">
            <div class="row align-wrapper">
                <div :class="['col', {'m8 xl9' : button.url}, {'s12' : !button.url }]">
                    <div class="page-header__inner crumbs">
                        <div class="crumb">{{ title }}</div>
                    </div>
                </div>
                <div class="col m4 xl3" v-if="button.url">
                    <div class="page-header__extra">
                        <a :href="button.url" class="btn btn-default">{{ button.title }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="page__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page',
        props: {
            title: {
                type: String,
                default: 'Default page title',
            },
            button: {
                type: Object,
                default: () => { return {} }
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/vars";
    @import "../sass/utilities/mixins";

    .page-header {
        padding: 10px 20px;
        margin: 0;
        border-bottom: 1px solid #e7e8ec;
        @include clearfix;

        .row {
            margin-bottom: 0;
            margin-left: -20px;
            margin-right: -20px;

            .col {
                padding: 0 20px;
            }
        }

        h1,h2,h3,h4,h5 {
            margin: 8px 0;
        }

        &__inner {
            font-size: 16px;
            //float: left;
        }

        &__extra {
            //float: right;
            text-align: right;
        }
    }

    .title {
        margin-bottom: 20px;

        &:after {
            content: '';
            display: block;
            padding-bottom: 12px;
            border-bottom: 1px solid #e7e8ec;
        }

        &__add {
            font-size: 14px;
        }
    }

    .page {
        &__content {
            padding: 20px;
            margin-bottom: 20px;
        }

        &__section {
            padding: 20px 0;

            &:last-child {
                padding-bottom: 0;
            }
        }
    }

    .devider-or {
        display: inline-block;
        vertical-align: middle;
        color: #777;
        margin: 0 7px;
    }

    .bg-dark {
        //background-color: #f9f9f9;
    }


    // Breadcrumbs
    .crumb {
        display: inline-block;
        white-space: nowrap;
        margin: 8px 0 0;
        text-overflow: ellipsis;

        &__link {
            color: #656565;
        }

        &__sep {
            padding-left: 6px;
            margin: 0 8px 0 10px;
            position: relative;
            top: 1px;
            height: 14px;
            /*background: url('#{$img}/breadcrumbs.png') -6px center no-repeat;*/
        }
    }
</style>