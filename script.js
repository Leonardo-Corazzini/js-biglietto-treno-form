// dati da inserire da parte dell'utente
const travelKm =  document.getElementById('travel-km');
const passengerAge = document.getElementById('passenger-age');


const price = document.getElementById('price')
const formElement = document.getElementById('form-element');
const priceSection = document.getElementById('price-section')
const rechargeBtn = document.getElementById('recharge-btn')
const resetBtn = document.getElementById('reset-btn')
const alertSection = document.getElementById('alert-section')
const errorText = document.getElementById ('error-text')
// azioni che vengono eseguite all'invio dei dei dati

formElement.addEventListener('submit', function (event) {
    
    event.preventDefault();

    priceSection.classList.add('d-none');
    alertSection.classList.add('d-none')
    const km = parseInt(travelKm.value);
    console.log(km);
    const controlKM = controlData (km);
    const age = parseInt(passengerAge.value);
    console.log(age);
    const controlAge = controlData (km);
    if (controlKM && controlAge){
        const userPrice = priceCalcolator (km,age);
        console.log(userPrice);
        priceSection.classList.remove('d-none');
        price.innerText= userPrice;
    }
    
    // travelKm.value = '';
    // passengerAge.value = '';
});
rechargeBtn.addEventListener('click',function(){
    location.reload()
})
resetBtn.addEventListener('click',function(){
    location.reload()
})
// validazione dati
function controlData (number){
    let isANumber = true
    if(isNaN(number)){
        alertSection.classList.remove('d-none')
        errorText.innerText = 'Solo validi soltanto caratteri numerici'; 
        isANumber = false;
    }
    return isANumber ;
    
};
// funzione di calcolo prezzo
 function priceCalcolator (km,age){
    const priceForKm = 0.21
    let discount = age < 18 ? km * priceForKm  * 20 / 100
                : age > 65 ? km * priceForKm * 40 / 100
                : 0;
    const finalPrice = (km * priceForKm - discount).toFixed(2)
    
    return finalPrice
   
 }










