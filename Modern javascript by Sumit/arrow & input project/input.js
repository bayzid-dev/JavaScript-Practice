

const searchInput = document.querySelector(".search")

const display = document.querySelector(".result")

const thanks = document.querySelector(".thanks")


//normal function that works perfectly

function show() {
    display.innerHTML = this.value;

    var self = this;

    setTimeout(function(){
        thanks.innerHTML = `you have typed: ${self.value}`
    },4)
};


searchInput.addEventListener("keyup",show)