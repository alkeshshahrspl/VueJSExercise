new Vue({
  el: '#exercise',
  data: {
    applyEffect: false,
    classArray: ['red', 'large', 'border-right'],
    inputClass: '',
    apply: false,
    inputClassConditionaly: '',
    inputStyle: 'width: 66px;height: 66px;border: 1px solid',
    progress: "width: 0%"


  },
  computed: {
    startEffectClass: function () {
      return {
        highlight: this.applyEffect,
        shrink: !this.applyEffect
      };
    }
  },
  methods: {
    startEffect: function () {
      setInterval(function () {
        this.applyEffect = !this.applyEffect;
      }.bind(this), 500);
    },
    startProgress: function () {
      var progress = 0;
      var interval = setInterval(function () {
        progress++;
        this.progress = 'width: ' + progress + '%';
        if (progress == 100) {
          clearInterval(interval);
        }
      }.bind(this), 10);
    }
  }
});
