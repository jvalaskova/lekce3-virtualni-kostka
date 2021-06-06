// tady je místo pro náš program



function hrej() {
    let kostka = document.querySelector("#kostka");
    let zprava = document.querySelector("#zprava");
    let hod = Math.floor(Math.random() * 6 + 1); 
    kostka.src = "obrazky/" + hod + ".png";

    if (hod === 6) {
        zprava.textContent = "Vyhrál jsi! Hodil jsi číslo 6."
    } else {
        zprava.textContent = "Hodil jsi číslo" + hod + ", zkus to znovu.";
    }

}

