let baseCostNoelito = 10;
let numberOfNoelitos = 0;
let bonuses = 0;
let currentCount = 0;

const passiveIncome = () => {
    currentCount += bonuses;
    currentCount = Math.floor(currentCount * 100) / 100; // Round to 2 decimal places
    document.getElementById("counter-text").innerText = "Noels: " + currentCount;
}

function start(){
    setInterval(passiveIncome, 1000);
}

function counterAdd() {
    currentCount++;
    currentCount = Math.floor(currentCount * 100) / 100; // Round to 2 decimal places
    document.getElementById("counter-text").innerText = "Noels: " + currentCount;
}

function buyNoelito() {
    if (currentCount >= baseCostNoelito) {
        currentCount -= baseCostNoelito;
        currentCount = Math.floor(currentCount * 100) / 100; // Round to 2 decimal places
        document.getElementById("counter-text").innerText = "Noels: " + currentCount;

        baseCostNoelito = Math.floor(baseCostNoelito * 1.30);
        document.getElementById("noelitoPrice").innerText = baseCostNoelito + " Noels";

        numberOfNoelitos++;
        document.getElementById("helpers")
            .insertAdjacentHTML("beforeend",
                `<div id="noelito` + numberOfNoelitos + `">
                    <img src="./images/noelito.gif" alt="">
                </div>`
            )
        bonuses += 0.20;
    } else {
        alert("Not enough Noels!");
    }
}    