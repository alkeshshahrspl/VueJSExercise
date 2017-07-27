new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeInterval: 5000
    },
    computed: {
        result: function () {
            return this.value == 37 ? 'Done!' : 'not there yet!';
        }
    },
    watch: {
        result: function () {
            setTimeout(function () {
                console.log(this.value);
                console.log('Set time out called!');
                this.value = 0;
                console.log(this.value);
            }, this.timeInterval);
        }
    }
});