/* Version 1:
export function renderNews(articles) {
  console.log('Render news');
  const main = document.getElementById('news-container');
    main.innerHTML = '';
    articles.forEach(article => {
      const el = document.createElement('news-article');
      //console.log('article::' + JSON.stringify(article));
      el.article = article;
      console.log(el);
      main.appendChild(el);
    });
  }
*/

export function renderNews(articles) {
  const main = document.getElementById('news-container');
  main.innerHTML = '';
  articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}

export function setupCountryDropdown(onCountryChange) {
  const countrySelect = document.getElementById('country-select');
  countrySelect.addEventListener('change', (event) => {
    onCountryChange(event.target.value);
  });
}

export function setSelectedCountry(countryCode) {
  const countrySelect = document.getElementById('country-select');
  countrySelect.value = countryCode;
}
