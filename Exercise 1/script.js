new Vue({
    el: "#exercise",
    data: {
        name: "Yuriy",
        age: 33,
        imgUrl: "https://placeimg.com/100/100/any"
    },
    methods: {
        random1To100: function() {
            return Math.floor(Math.random() * 100) + 1;
        },

        changeName: function(event) {
            this.name = event.target.value;
        }
    }
});