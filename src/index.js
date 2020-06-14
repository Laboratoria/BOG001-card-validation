import validator from './validator.js';

console.log(validator);

const inputNumberTC = document.getElementById('inputNumberCard');
const btnSubmit = document.getElementById('validDataCard');
// Validación tarjeta
const errorValidation = document.getElementById('errorValidation')

inputNumberTC.addEventListener('blur', function(){
  const isValid = validator.isValid(inputNumberTC.value);
  console.log(isValid);
  
  if (isValid == false) {
    errorValidation.textContent = "El numero de tarjeta ingresado es invalido"
  } else {
    errorValidation.textContent = ""
  }
  
  let mask = validator.maskify(inputNumberTC.value);
  inputNumberTC.value = mask;  
  
});

// Reflejar Número en TC, no admitir letras en el campo
const numberCreditCard = document.getElementById('dataNumber');

inputNumberTC.addEventListener('keyup', e => {
  let numberValue = e.target.value;//Guardar el valor del input para abajo generar método replace con expresiones regulares
  inputNumberTC.value = numberValue.replace(/\D/g, '');// \D = Busca las letras y las reemplaza por string vacío
  numberCreditCard.textContent = numberValue;
  if(numberValue == ''){
    numberCreditCard.textContent = '#### #### #### ####';
  }
});

// Cambio de pantallas
const buttonBuy = document.getElementById('btnBuy'); //Botón comprar
const instrumentsPage = document.getElementById('instruments'); //pantalla 1
const paymentPage = document.getElementById('payment'); //pantalla 2

buttonBuy.addEventListener('click', showPayment);

function showPayment() {
  paymentPage.classList.remove('hidden');
  instrumentsPage.classList.add('hidden');
}

// Alerta de no stock para botón "Agotado"
const buttonDisabled = document.querySelector('.btnDisabled'); //Botón agotado, solo selecciona el primer elemento de la clase
buttonDisabled.addEventListener('click', noStock);

function noStock() {
  alert('Muy pronto lo tendremos en stock');
}

const form = document.getElementById('formCard'); //Formulario
// Menú desplegable en el select mes
for (let i = 1; i <= 12; i++) {
  let optionMonths = document.createElement('option');
  optionMonths.value = i;
  optionMonths.textContent = i;
  form.selectMonth.appendChild(optionMonths);
}

// Menú desplegable en el select año
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 4; i++){
  let optionYears = document.createElement('option');
	optionYears.value = i;
	optionYears.textContent = i;
	form.selectYear.appendChild(optionYears);
}

// Reflejar Nombre en TC 
const nameCreditCard = document.getElementById('dataName');
const inputNameTC = document.getElementById('inputName');

inputNameTC.addEventListener('keyup', e => {
  let nameValue = e.target.value;
  inputNameTC.value = nameValue.replace(/\d/g,'').replace(/\W/g,'');// \d= Dígitos \W= Ni letra, ni dígito
  nameCreditCard.textContent = nameValue;
  if (nameValue == ''){
    nameCreditCard.textContent = 'Nombre titular';
  }
});

// Reflejar Mes en TC
const monthCreditCard = document.getElementById('month');
const inputMonthTC = document.getElementById('selectMonth');
inputMonthTC.addEventListener('change', e => monthCreditCard.textContent = e.target.value);

// Reflejar año en TC
const inputYearTC = document.getElementById('selectYear');
const yearCreditCard = document.getElementById('year');
inputYearTC.addEventListener('change', e => yearCreditCard.textContent = e.target.value.slice(2));