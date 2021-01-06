import validator from './validator.js';

console.log(validator);

// Code to interact with the DOM.

const logo = document.getElementById('logo');
const onboardingView = document.getElementById('onboarding');
const cardView = document.getElementById('card-view');
const btnStart = document.getElementById('start');

btnStart.addEventListener('click', function(){
  onboardingView.classList.add('hidden');
  cardView.classList.remove('hidden');
})

logo.addEventListener('click', function(){
  cardView.classList.add('hidden');
  onboardingView.classList.remove('hidden');
})
