export class Article {
  constructor({ id, wide, title, urlToImage, tags, content, date }) {
    this.id = id;
    this.wide = wide;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.content = content;
    this.date = date;
  }

  // Article Generator
  generateArticle() {
    let template = "";
    let article = document.createElement("article");
    article.className = "strategy block-shadowed";
    article.setAttribute("data-id", this.id);

    this.urlToImage &&
      (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

    if (this.title || this.tags) {
      template += '<div class="strategy__content">';

      this.title &&
        (template += `<h3 class="strategy__title">${this.title}</h3>`);

      if (this.tags) {
        template += `<div class="strategy__tags">`;
        this.tags.map((tag) => {
          template += `<span class="tag">${tag}</span>`;
        });
        template += "</div>";
      }

      template += "</div>";
    }

    article.innerHTML = template;
    return article;
  }
}
