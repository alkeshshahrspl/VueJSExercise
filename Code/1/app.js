new Vue({
    el: '#exercise',
    data: {
        name: 'Yuvraj Chauhan',
        age: 27,
        imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png'
    },
    methods: {
        random: function () {
            return Math.random();
        }
    }
});