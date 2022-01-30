// Oppgave 1
// Lytter etter trykk på knappen og når knappen trykkes så blir teksten fjernet.
document.getElementById("remove-btn").addEventListener("click", function () {
  document.getElementById("remove").style.display = "none";
});

// Oppgave 2
// samme som forrige oppgave, men her endrer vi på teksten til det vi vil ha.
document.getElementById("change-btn").addEventListener("click", function () {
  document.getElementById("change").innerHTML =
    "Dette er min nye tekst som vises";
});
// Oppgave 3

//Lytter til endringer i input feltet, hver gang en endring skjer oppdaterer jeg HTML teksten til verdien av input feltet.
document.getElementById("input").addEventListener("input", function () {
  document.getElementById("input-text").innerHTML = input.value;
});

// Oppgave 4

// En liste som skal skrives ut senere.
const myList = ["item one", "item two", "item three"];
// lytter etter knappetrykk
document.getElementById("write-list").addEventListener("click", function () {
  // Her endrer jeg innerHTML i ul til listen "myList" og setter den sammen med komma ved hjelp av join.
  document.getElementById("ul").innerHTML = myList.join(", ");
});
// Oppgave 5

// variabel for å kunne hente verdien i select menyen senere.
let selectMenu = document.getElementById("select");
// Variabel for å kunne hente verdien av input feltet senere.
let textField = document.getElementById("text");
//Lytter etter knappetrykk og kjører en funksjon
document.getElementById("create").addEventListener("click", function () {
  //Her har jeg en if test for hver mulighet i selektor menyen
  //Hvis noen av disse er sanne sp tar den texten i input feltet og legger det inn i div elementet som heter placeholder og legger til html taggen som stemmer med selektor valget.
  if (selectMenu.value === "h2") {
    document.getElementById("placeholder").innerHTML =
      "<h2>" + textField.value + "</h2>";
  }
  if (selectMenu.value === "h3") {
    document.getElementById("placeholder").innerHTML =
      "<h3>" + textField.value + "</h3>";
  }
  if (selectMenu.value === "span") {
    document.getElementById("placeholder").innerHTML =
      "<span>" + textField.value + "</span>";
  }
  if (selectMenu.value === "p") {
    document.getElementById("placeholder").innerHTML =
      "<p>" + textField.value + "</p>";
  }
});
// Oppgave 6
//Lytter etter knappetrykk og fjerner list style som vil gjøre et "bullet points" blir fjernet fra listen.
document.getElementById("remove-li").addEventListener("click", function () {
  document.getElementById("list").style.listStyle = "none";
});
// Oppgave 7

//Variabel som viser value til intup feltet eller hvor mange karakterer som befinner seg der.
var nameValue = document.getElementById("name").value;
//En const for å enkelt få tak i knappen.
const nameBtn = document.getElementById("order");
// Lytter etter input i feltet, så hver gang noe endres i input feltet kjøres funksjonen under
document.getElementById("name").addEventListener("input", function () {
  //her oppdaterer vi variabelen nameValue til det som står i input feltet nå.
  nameValue = document.getElementById("name").value;
  checkNameLength();
});
function checkNameLength() {
  //Kjøres hvis lengden på input feltet er lengre enn 4
  if (nameValue.length > 4) {
    //Knappen deaktiveres hvis dette er sant.
    nameBtn.disabled = true;
  } else {
    // hvis det over ikke er sant så skal knappen aktiveres, dette for å ha muligheten til å reaktivere knappen hvis man fjerner karakterer til man har 4 eller mindre igjen.
    nameBtn.disabled = false;
  }
}
// Oppgave 8

// Her lytter jeg til knappetrykk, og på knappetrykk så kjøres funksjonen som går igjennom alle liste-elementene og legger til en border.
document.getElementById("color").addEventListener("click", borderFunction);
function borderFunction() {
  const listItems = document.querySelectorAll(".children li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.border = "2px solid red";
  }
}
