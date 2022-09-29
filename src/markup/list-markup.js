export function getCountryListMarkUp(countryList) {
  return countryList.map(it => getListItemMarkUp(it)).join('');
}

function getListItemMarkUp(item) {
  const {
    name: { official },
  } = item;

  return `
  <li>${official}</li>
  `;
}
