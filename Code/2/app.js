new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function(msg) {
            alert(msg);
        },
        handleKeydown: function (event) {            
            this.value = event.target.value;            
        }
    }    
});