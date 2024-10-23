// dati da inserire da parte dell'utente
const travelKm =  document.getElementById('travel-km');
const passengerAge = document.getElementById('passenger-age');

const formElement = document.getElementById('form-element');
// azioni che vengono eseguite all'invio dei dei dati
formElement.addEventListener('submit', function (event) {
    
    event.preventDefault();
  
    const km = travelKm.value;
    console.log(km)
    const age = passengerAge.value;
    console.log(age)
    priceCalcolator (km,age)
    console.log(priceCalcolator (km,age))
   
});


// funzione di calcolo prezzo
 function priceCalcolator (km,age){
    const priceForKm = 0.21
    let discount = age < 18 ? km * priceForKm  * 20 / 100
                : age > 65 ? km * priceForKm * 40 / 100
                : 0;
    const finalPrice = (km * priceForKm - discount).toFixed(2)
    
    return finalPrice
   
 }










