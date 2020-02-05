window.onload = function () {
    new Vue({
        el: "#app",
        data: {
          list: [
              'Love your family, work super hard, live your passion.',
              'life shrinks and expands on the proportion of your willingness to take risks and try new things.',
              'There no longer has to be a difference between who you are and what you do.',
              'If your ship does not come in, swim out to meet it',
              'Your time is limited, so do not waste it trying to live like living someone else.',
              'Business has only two functions marketing and innovation.',
              'Have the end in mind and every day make sure your working towards it'
            ],
          chosenName: ''
        },
        methods: {
          picker: function(){
            var chosenNumber = Math.floor(Math.random() * this.list.length);
            this.chosenName = this.list[chosenNumber];
          }
      },
      created () {
        setInterval(() => {
            this.picker();
        }, 5000)
    }
      });
}