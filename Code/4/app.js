new Vue({
  el: '#exercise',
  data: {
    divEffect: {
      highlight: true,
      shrink: false
    },
    color: {
      'bg-color': true
    },
    colorClass: "color",
    divClass: 'red',
    div2Class: '',
    div3Class: '',
    defaultClass: false,
    progress: 0
  },
  methods: {
    startEffect: function() {
      const self = this;
      setInterval(function(){
        self.divEffect.highlight = !self.divEffect.highlight;
        self.divEffect.shrink = !self.divEffect.shrink;
      }, 1000);
    },
    startProgress: function() {
      const self = this;
      const interval = setInterval(function(){
        self.progress++;
        if(self.progress == 100) {
            clearInterval(interval);
        }
      }, 10);
    }
  }
});
