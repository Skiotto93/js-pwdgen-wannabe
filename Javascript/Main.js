//Chiedi all’utente il suo nome
const firstName = prompt (`Digita il tuo nome`);
//chiedi il cognome dell'utente
const lastName = prompt (`Digita il tuo cognome`);
//chiedi colore preferito dell'utente
const favoriteColor = prompt (`Digita il tuo colore preferito`);
//Creo una variabile che contenga tutti e 3 i risultati
const all = (firstName + lastName + favoriteColor);
//Scrivi sulla pagina i risultati combinati + 76 (che sta per classe76)
document.getElementById("password").innerHTML = (all + 76)