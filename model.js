/* Version 1
export async function fetchNews(apiUrl) {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const json = await res.json();
    return json.articles;
  }

  */
  const apikey = '2d036a5806d54c36b1f2d50e2002ec19';
  export async function fetchNews(countryCode) {
    const newsapiurl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apikey}`;
    const res = await fetch(newsapiurl);
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const json = await res.json();
    return json.articles;
  }
  
  export function saveSelectedCountry(countryCode) {
    localStorage.setItem('selectedCountry', countryCode);
  }
  
  export function getSelectedCountry() {
    return localStorage.getItem('selectedCountry') || 'us';
  }
  