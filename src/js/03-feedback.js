import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getDataByKey() {
  return JSON.parse(localStorage.getItem('feedback-form-state'));
}

function onSubmitForm(e) {
  console.log(getDataByKey());
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function dataFromLocalStorage() {
  const data = getDataByKey();
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);