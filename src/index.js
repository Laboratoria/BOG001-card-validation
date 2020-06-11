import validator from './validator.js';

console.log(validator);

const instrumentsPage = document.getElementById('instruments'); //pantalla 1
const paymentPage = document.getElementById('payment'); //pantalla 2
const buttonBuy = document.getElementById('btnBuy'); //Botón comprar
const buttonDisabled = document.querySelector('.btnDisabled'); //Botón agotado, solo selecciona el primer elemento de la clase

buttonBuy.addEventListener('click', showPayment);

function showPayment() {
  paymentPage.classList.remove('hidden');
  instrumentsPage.classList.add('hidden');
}

buttonDisabled.addEventListener('click', noStock);

function noStock() {
  alert('Muy pronto lo tendremos en stock');
}


/*const form = document.querySelector('#formCard');
for (let i = 1; i <= 12; i++) {
    let opcion =document.creatElement("option");
    opcion.value = i;
    opcion.innerText = i;
    form.selectMonth.appendChild('opcion');
}*/
