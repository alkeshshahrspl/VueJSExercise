<template>
    <div>
        <stock v-for="stock in stocks" :stock="stock"></stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            Stock
        }
    }
</script>

<style>
    
</style>