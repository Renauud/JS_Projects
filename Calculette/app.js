(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    let ops = document.querySelectorAll(".ops");
    let notAllowedFirst = document.querySelectorAll(".notAllowedFirst");
    // let res = false;

    //à faire :
    // après un calcul, empêcher de rentrer un nombre après le résultat mais autoriser uniquement un opérateur via la variable res
    // empêcher de sasir / et * si la chaîne est vide
    // boucle for pour vérifier le nombre de . dans value, s'il apparait plus d'une fois, impossible de saisir
    //refaire les fonctions pour éviter les contradictions

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

    notAllowedFirst.forEach(function(button){
        button.addEventListener("click", function(e){
            let value;
            if(screen.value === ""){
                value = "";
            }else{
                value = e.target.dataset.num
            }
        screen.value += value;
        })
    })


    equal.addEventListener("click", function(e){
        if(screen.value === ""){
            screen.value = "";
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
        // res = true;
    });

    clear.addEventListener("click", function(e){
        screen.value = "";
    })

})();