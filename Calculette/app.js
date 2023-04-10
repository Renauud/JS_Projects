(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    let ops = document.querySelectorAll(".ops");

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){   

        value = e.target.dataset.num;
        screen.value += value;
        })
    });

    ops.forEach(function(button){
        button.addEventListener("click", function(e){
            if(screen.value[screen.value.length - 1] === "+" ||
            screen.value[screen.value.length - 1] === "-" ||
            screen.value[screen.value.length - 1] === "/" ||
            screen.value[screen.value.length - 1] === "*"||
            screen.value[screen.value.length - 1] === "."){
            value = "";
        }else{
            value = e.target.dataset.num;
        }
        screen.value += value;
    })
});

    equal.addEventListener("click", function(e){
        if(screen.value === ""){
            screen.value = "";
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function(e){
        screen.value = "";
    })

})();