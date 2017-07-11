new Vue({
    el: "#app",
    data: {
        name: 'rushabh',
        age: 28,
		randomNumber: '',
        imageSrc: 'vuejs-logo.jpg',
        inputValue: 'Text Input'
    },
    methods: {
    	generateRandomNumber: function() {
      	this.randomNumber = Math.random();
      }
    }
})
