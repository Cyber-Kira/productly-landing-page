import { Modal } from "./Modal";

export class ArticleModal extends Modal {
  constructor(classess, { id, wide, title, urlToImage, tags, content, date }) {
    super(classess);
    this.id = id;
    this.wide = wide;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.content = content;
    this.date = date;
  }

  // Article Generator
  generateContent() {
    let template = "";
    let content = document.createElement("div");
    content.className = "article-modal__content";

    this.urlToImage &&
      (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

    if (this.title || this.tags || this.content || this.date) {
      template += '<div class="strategy__content">';

      this.date && (template += `<p class="strategy__date">${this.date}</p>`);

      this.title &&
        (template += `<h3 class="strategy__title">${this.title}</h3>`);

      this.content &&
        (template += `<pclass="strategy__text">${this.content}</p>`);

      if (this.tags) {
        template += `<div class="strategy__tags">`;
        this.tags.map((tag) => {
          template += `<span class="tag">${tag}</span>`;
        });
        template += "</div>";
      }

      template += "</div>";
    }

    content.innerHTML = template;
    return content;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}
