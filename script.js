// Nyckel för att lagra varukorgen i localstorage
const varukorgNyckel = "varukorg_data";

// Hämta varukorgen från localstorage vid sidladdning
let varukorg = JSON.parse(localStorage.getItem(varukorgNyckel)) || [];

// Funktion för att spara varukorgen i localstorage
function sparaVarukorg(){
    let jsonVarukorg = JSON.stringify(varukorg); // Konverterar till JSON-format
    localStorage.setItem(varukorgNyckel, jsonVarukorg); // Spara i localstorage
}

// Funktion för att hämta varukorgen vid sidladdning
function hämtaVarukorg(){
    let jsonVarukorg = localStorage.getItem(varukorgNyckel);

    if (jsonVarukorg == null) {
        return; // Om det inte finns något i localStorage, avsluta funktionen
    }

    varukorg = JSON.parse(jsonVarukorg); // Konverterar JSON tillbaka till en array
    uppdateraVarukorg(); // Uppdaterar varukorgen i HTML 
}

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

// Skapa en namn som tar emot namn och pris som inparametrar
function läggTillIVarukorg(namn, pris){
    let produkt = {
        namn: namn,
        pris: pris
    };
    varukorg.push(produkt); // Lägger produkten i varukorgen
    sparaVarukorg(); // Sparar varukorgen i localstorage    
    uppdateraVarukorg(); // Uppdaterar innehållet i varukorgen
}

// Funktion som uppdaterar varukorgen i HTML
function uppdateraVarukorg(){
    let varukorgInnehåll = document.querySelector("#varukorg-innehåll");
    let totalPrisElement = document.querySelector("#total-pris");

    varukorgInnehåll.innerHTML = ""; // Rensa varukorgen innan vi lägger till nya produkter
    let totalpris = 0;

    for (let produkt of varukorg){
        varukorgInnehåll.innerHTML += `<p>${produkt.namn} - ${produkt.pris} kr</p>`;
        totalpris += produkt.pris; // Adderar produktens pris till totalen
    }

    totalPrisElement.innerHTML = `Totalt: ${totalpris}:-`;
}

// Kör hämtaVarukorg() när sidan laddas
hämtaVarukorg();

// Koppla "Köp"-knapparna till funktionen och skicka inparametrar
document.querySelector("#knapp1").addEventListener("click", function(){
    läggTillIVarukorg("Creed Aventus", 3500);
});

document.querySelector("#knapp2").addEventListener("click", function(){
    läggTillIVarukorg("Roja Parfums Elysium", 3000);
});

document.querySelector("#knapp3").addEventListener("click", function(){
    läggTillIVarukorg("Tom Ford Oud Wood", 2500);
});

document.querySelector("#knapp4").addEventListener("click", function(){
    läggTillIVarukorg("Xerjoff Naxos", 2700);
});

document.querySelector("#knapp5").addEventListener("click", function(){
    läggTillIVarukorg("Amouage Interlude Man", 3200);
});

document.querySelector("#knapp6").addEventListener("click", function(){
    läggTillIVarukorg("Kilian Black Phantom", 3400);
});
