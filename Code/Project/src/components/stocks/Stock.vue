<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFund}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buy" :disabled="insufficientFund || quantity <= 0 || !Number.isInteger(Number(quantity))">{{ insufficientFund ? 'No Fund' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['stock'],
    data () {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFund () {
            return Number(this.quantity) * this.stock.price > Number(this.funds);
        }
    },
    methods: {
        buy () {
            const order = {
                id: this.stock.id,
                name: this.stock.name,
                price: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
    
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>