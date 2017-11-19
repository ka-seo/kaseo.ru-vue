<template>
    <ul class="widget-menu widget__menu">
        <li v-for="item in treeData" class="widget-menu__item">
            <a
                    :class="['widget-menu__link', {'widget-menu__link--active': item.active }, {'widget-menu__link--loading' : !loading }]"
                    :href="item.url"
                    @click="onClickItem">
                {{ item.label }}
            </a>

            <span class="progress progress--sm" v-show="!loading && item.items">
                <span class="indeterminate"></span>
            </span>

            <ul v-if="item.items" class="widget-menu widget-menu--sub">

                <li v-for="subItem in item.items" class="widget-menu__item">
                    <a :class="['widget-menu__link', {'widget-menu__link--active': subItem.active }]" :href="subItem.url" @click="onClickItem($event)">
                        {{ subItem.label }}
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'menu',
    props: {
        treeData:{
            type: Array,
            default: function () { return [] },
            required: true
        }
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        onClickItem(e) {
            e.preventDefault();
            let el = e.target;
            alert(el.innerHTML.replace(/\s{2,}/g, ' '));


//            $(el).closest('.widget').find('.widget-menu__link').removeClass('widget-menu__link--active');
//            $(el).addClass('widget-menu__link--active');
        },
        loadCampaign() {
            const that = this;
//            that.axios.post('/api/vk/get-active-campaign-in-menu')
//                .then(function(response){
//                    let items = [];
//
//                    response.data.forEach(function(item) {
//                        items.push({
//                            label : item.vk_name,
//                            url : '/ads?act='+item.vk_id,
//                            active:false
//                        });
//                    });
//
//                    that.loading = true;
//
//                    that.treeData.forEach(function(item) {
//                        if (item.name=='ads') item.items=items;
//                    });
//                });
        }
    },
    beforeMount() {
        this.loadCampaign();
    }
}
</script>

<style lang="scss">

</style>