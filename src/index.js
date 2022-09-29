import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { getCountryListMarkUp } from './markup/list-markup';
import { getCountryMarkUp } from './markup/country-markup';

const inputRef = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

async function onInputChange(e) {
  const value = e.target.value.toLowerCase().trim();
  console.log(e.target.value);
  if (value === '') return;

  let data = null;
  try {
    data = await fetchCountry(value);
    console.log(data);
  } catch (e) {
    Notify.failure(e.message);
    data = [];
    return;
  }

  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  if (data.length === 1) {
    Notify.success('1');
    updateContent(countryInfoRef, getCountryMarkUp(data[0]));
    return;
  }

  Notify.success('Other');
  updateContent(countryListRef, getCountryListMarkUp(data));
}

function updateContent(el, markup) {
  removeChildren(countryListRef);
  removeChildren(countryInfoRef);
  el.insertAdjacentHTML('beforeend', markup);
}

function fetchCountry(value) {
  const URL = 'https://restcountries.com/v3.1/name';
  return fetch(
    `${URL}/${value}?fields=capital,name,population,flags,languages`
  ).then(res => {
    console.log(1, res.ok, res);
    if (!res.ok) {
      throw new Error('Oops, there is no country with that name');
      return;
    }
    return res.json();
  });

  // .then(res => {
  //   console.log(2, res);
  //   return res.map(it => it.name.official);
  // });
}
function removeChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// Используй публичный API Rest Countries, а именно ресурс name, возвращающий массив объектов стран удовлетворивших критерий поиска. Добавь минимальное оформление элементов интерфейса.

// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name и возвращает промис с массивом стран - результатом запроса. Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.

// Фильтрация полей
