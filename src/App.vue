<template>
    <div class="container">
        <!--ToDo: Load app-header-->
        <app-header></app-header>

        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view-->
                    <router-view></router-view>

                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    //ToDo: Import Header Component
    import Header from './components/Header.vue';

    export default {
        //ToDo: Initialize Header component and name it appHeader
        components: {
            appHeader: Header,
        },

        //ToDo: On page creation dispatch 'initStocks' to the vuex $store
        created() {
            this.$store('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    /*ToDo: Create slide-in effect for enter-active*/
    .enter-active{
        animation: slide-in 1s ease-out forwards;
    }

    /*ToDo: Create slide-in effect for leave-active*/
    .leave-active{
        animation: slide-in 1s ease-out backwards;
    }

    /*ToDo: Create Keyframes for slide-in, remember to include from and to*/
        /*You can use any settings*/
    @keyframes slide-in{
        from{ transform: rotateY(0deg)}
        to{ transform: rotateY(90deg)}
    }
    /*ToDo: Create Keyframes for slide-out, remember to include from and to*/
        /*You can use any settings*/
    @keyframes slide-out{
        from{ transform: rotateY(0deg)}
        to{ transform: rotateY(90deg)}
    }

</style>

