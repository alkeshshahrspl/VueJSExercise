new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert("Button clicked!");
            },
            storeValue: function(event) {
                this.value = event.target.value;
            }
        }
    });