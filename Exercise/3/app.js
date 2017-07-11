var vm = new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        methods: {

        },
        computed: {
            result: function() {
               return this.value > 37 ? "Done" : "Not There Yet";
            }
        },
        watch: {
            result: function() {
                setTimeout(function(){
                    vm.value = 0;   
                }, 2000);
            }
        },

    });
    