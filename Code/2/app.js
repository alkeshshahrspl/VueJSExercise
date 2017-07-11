new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        store: function (event) {
            this.value = event.target.value;
        }
    }
});