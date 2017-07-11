new Vue({
        el: '#exercise',
        data: {
            value: '',
        },
        methods:{
            showAlert: function() {
                alert("Alert message");
            },
            setInputValue: function(event) {
                this.value = event.target.value;
            }
        },
    });
    