<template>
    <div class="top-profile right-align" v-click-outside="close">
        <div class="popover-parent">
            <a href="#" class="top-profile__link" :class="{ 'hover' : popoverShow }" @click="onPopover">
                <span class="top-profile__name">{{ user.name }}</span>
                <img class="top-profile__img" :src="user.avatar" :alt="user.name"/>
                <span :class="['top-profile__arrow', popoverShow ? 'triangle-up' : 'triangle-down']"></span>
                <!--<span class="top-profile__arrow"></span>-->
            </a>

            <div class="popover popover--default" v-if="popoverShow">
                <div class="popover__content">
                    <ul class="profile-menu">
                        <li class="profile-menu__item" v-for="item in menu"><a :href="item.url">{{ item.label }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vClickOutside from 'v-click-outside'
    Vue.use(vClickOutside);

    export default {
        name: "popover",
        props: {
            user: {
                type: Object
            },
            menu: {
                type: Array
            },
        },
        data() {
            return {
                popoverShow: false,
            }
        },
        methods: {
            onPopover: function(e) {
                e.preventDefault();
                this.popoverShow = !this.popoverShow;
            },
            close: function() {
                this.popoverShow = false;
            }
        }
    }
</script>

<style lang="scss">
    $font-size: 16px;
    .popover {
        position: absolute;
        top: auto;
        right: 0;
        left: auto;
        width: 160px;
        padding: 0;
        margin-top: 5px;
        background: #fff;
        border: 1px solid #c5d0db;
        color: #000;
        text-align: left;
        z-index: 800;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,.1);

        &--default {
            &:before,
            &:after {
                position: absolute;
                pointer-events: none;
                border: solid transparent;
                content: '';
                height: 0;
                width: 0;
                bottom: 100%;
                right: 42px;
            }

            &:before {
                border-width: 6px;
                margin: 0 -6px;
                border-bottom-color: #c5d0db;
            }

            &:after {
                border-width: 5px;
                margin: 0 -5px;
                border-bottom-color: #fff;
            }
        }

        &--edit-form {
            width: 270px;
            top: -19px !important;
            left: -17px !important;

            .popover {
                &__content {
                    padding: 10px;
                }
            }
        }

        &-parent {
            position:relative;
        }

        &__content {
            padding: 4px 0;
        }

        &__trigger {
            display: inline-block;
            color: #2A5885;
        }

        &_caret {
            right: -10px;

            &:before {
                content:"";
                position: absolute;
                right:10px;
                top: -16px;
                width: 0;
                height: 0;
                border: 8px solid transparent;
                border-bottom: 8px solid #fff;
            }
        }
    }

    .open .popover{
        display:block;
        animation: popover-in .3s ease forwards;

        @keyframes popover-in {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
    }


    .form-editor-value {

    }

    .form-editor {
        &__body {

        }

        &__footer {
            margin-top: 10px;
        }
    }


    .top-profile {

        &__link {
            display: inline-block;
            white-space: nowrap;
            line-height: 42px;
            height: 42px;
            padding: 0 10px;
            color: #fff;
            font-weight: 600;
            transition: background 0.1s ease-in-out;

            &:hover,
            &:focus,
            &.hover {
                text-decoration: none;
                background: #4c6e95;
            }
        }

        &__name {
            padding-right: 10px;
            display: inline-block;
            vertical-align: top;
            color: #fff;
            font-size: $font-size - 2;
        }

        &__img {
            display: inline-block;
            vertical-align: top;
            width: 28px;
            height: 28px;
            border-radius: 14px;
            margin: 7px 0;
        }

        &__arrow {
            display: inline-block;
            vertical-align: top;
            background-position: right 0;
            margin: 18px 8px 0 7px;
            width: 8px;
            height: 4px;
            opacity: 0.45;
        }
    }

    .triangle {
        $arrow-size: 4px;
        &-up {
            width: 0;
            height: 0;
            border-left: $arrow-size solid transparent;
            border-right: $arrow-size solid transparent;
            border-bottom: $arrow-size solid #fff;
        }

        &-down {
            width: 0;
            height: 0;
            border-left: $arrow-size solid transparent;
            border-right: $arrow-size solid transparent;
            border-top: $arrow-size solid #fff;
        }
    }

    .profile-menu {
        margin: 0;

        &__item {
            font-size: $font-size - 2;

            a {
                display: block;
                white-space: nowrap;
                position: relative;
                padding: 5px 15px;
                color: #2a5885;
                text-decoration: none;

                &:hover {
                    text-decoration: none;
                    background-color: #e4eaf0;
                }
            }
        }
    }
</style>