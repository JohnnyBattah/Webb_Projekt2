function signera(){
    let email = document.querySelector("#email").value;
    alert("Tack för att du anmält dig till vårt nyhetsbrev!");
    document.querySelector("#email").value = "";
}

let varukorgContainer = document.querySelector("#varukorg-container");

function visaVarukorg() {
    varukorgContainer.classList.add("open"); // Lägg till klassen "open"
}

function döljVarukorg() {
    varukorgContainer.classList.remove("open"); // Ta bort klassen "open"
}