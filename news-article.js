class NewsArticle extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set article(article) {
    console.log('Setting article:' + JSON.stringify(article));
    const defaultImg = 'https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-landscape-jpg-wallpapers-free-download-image_2573540.jpg';
    this.root.innerHTML = `
            <style>
                      h2 {
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;
                        font-size: 1.5rem;
                        margin: 16px;
                      }
                      a,
                      a:visited {
                        text-decoration: none;
                        color: inherit;
                    }
                    img {
                      width: 100%;
                      height: 200px;
                      object-fit: cover;
                    }
                    p {
                      font-family: 'Roboto', sans-serif;
                      font-weight: 400;
                      font-size: 1rem;
                      padding: 0 16px 16px;
                    }
          </style>
    <a href="${article.url}" target="_blank">
      <img src="${article.urlToImage ? article.urlToImage : defaultImg}" alt="${article.title}">
      <h2>${article.title}</h2>
      <p>${article.description}</p>
    </a>`;
  }
}

customElements.define('news-article', NewsArticle);
