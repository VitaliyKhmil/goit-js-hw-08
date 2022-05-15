import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};
const KEYDATA = 'feedback-form-state';
Object.keys(formData).forEach(item => (form.elements[item].value = formData[item]));


function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEYDATA, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const formInputNames = Object.keys(e.currentTarget.elements).filter(item => isNaN(item));
    if (!formInputNames.every(item => e.currentTarget.elements[item].value)) {
      alert('Заповніть усі поля форми!');
      return;
    }  
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(KEYDATA)));  
  localStorage.removeItem(KEYDATA);  
}

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

