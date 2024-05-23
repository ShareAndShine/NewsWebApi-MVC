/* Version 1
import { fetchNews } from './model.js';
import { renderNews } from './view.js';
import { newsapiurl } from './api.js';
import './news-article.js';

console.log('App is running!');

window.addEventListener('load', async () => {
  try {
    const articles = await fetchNews(newsapiurl);
    console.log('Articles:', articles);
    renderNews(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
});

*/
import { fetchNews, fetchNewsV1,fetchNewsFromFile, saveSelectedCountry, getSelectedCountry } from './model.js';
import { renderNews, setupCountryDropdown, setSelectedCountry } from './view.js';
import './news-article.js';

async function loadNews() {
  const selectedCountry = getSelectedCountry();
  setSelectedCountry(selectedCountry);

  console.log('selectedCountry::' + selectedCountry);
  try {
    const articles = await fetchNewsFromFile(selectedCountry);
    console.log('articles::' + articles);
    renderNews(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

window.addEventListener('load', () => {
  setupCountryDropdown((selectedCountry) => {
    saveSelectedCountry(selectedCountry);
    loadNews();
  });
  
  loadNews();
});
