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
    const res = await fetch(newsapiurl).catch(error =>  console.log('Error in news fetch:: ' + error));
    if (!res.ok) {
      throw new Error('Failed to fetch news');
    }
    const json = await res.json();
    return json.articles;
  }
  

  export async function fetchNewsV1(countryCode) {
    const newsapiurl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apikey}`;
    return fetch(newsapiurl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        return res.json();
      })
      .then(json => {
        return json.articles;
      })
      .catch(error => {
        console.log('Error in news fetch:: ' + error);
        throw error;
      });
  }


  export function fetchNewsFromFile() {
    const jsonFilePath = './news.json'; // Path to your local JSON file
  
    return fetch(jsonFilePath)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        return res.json();
      })
      .then(json => {
        return json.articles;
      })
      .catch(error => {
        console.log('Error in news fetch:: ' + error);
        throw error;
      });
  }
  
  export function saveSelectedCountry(countryCode) {
    localStorage.setItem('selectedCountry', countryCode);
  }
  
  export function getSelectedCountry() {
    return localStorage.getItem('selectedCountry') || 'us';
  }
  