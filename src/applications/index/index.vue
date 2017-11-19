<template lang="pug">
    div.flex
        h1
            |Hello, I'm index.html!
</template>

<script>

export default {
    components: {

    },
    data(){
        return {
            error: undefined,
            loading: true,
        }
    },
}
</script>


<style lang="scss">
    .flex {
        transition: all .2s linear;
        transform: rotate(-10deg);
        border-radius: 10px;
    }
   h1 {
       color: red;
       text-align: center;
       margin: .2vh;
   }
</style>