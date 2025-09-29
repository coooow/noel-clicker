let baseCostNoelito = 10;
let multiplierNoelito = 1.00;
let numberOfNoelitos = 0;

function counterAdd(){
    var counterText = document.getElementById("counter-text");
    var currentCount = parseInt(counterText.innerText.split(": ")[1]);
    currentCount++;
    counterText.innerText = "Noels: " + currentCount;
}

function buyNoelito(){
    var counterText = document.getElementById("counter-text");
    var currentCount = parseInt(counterText.innerText.split(": ")[1]);
    if (currentCount >= baseCostNoelito) {
        currentCount -= baseCostNoelito;
        counterText.innerText = "Noels: " + currentCount;
        multiplierNoelito += 0.15;
        baseCostNoelito = Math.floor(baseCostNoelito * 1.30);
        numberOfNoelitos++;
        document.getElementById("helpers")
            .insertAdjacentHTML("afterend",
                `<div id="noelito` +  numberOfNoelitos + `">
                    <img src="./images/noelito.gif" alt="">
                </div>`
            )
    } else {
        alert("Not enough Noels!");
    }
}    