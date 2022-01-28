export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = "";
    this.modalContent = "";
    this.modalCloseBtn = "";
    this.overlay = "";
  }

  buildModal(content) {
    //Overlay
    this.overlay = this.createDomNode(
      this.overlay,
      "div",
      "overlay",
      "overlay_modal"
    );

    //Modal
    this.modal = this.createDomNode(this.modal, "div", "modal", this.classes);

    //Modal Content
    this.modalContent = this.createDomNode(
      this.modalContent,
      "div",
      "modal__content"
    );

    //Close Button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      "span",
      "modal__close-icon"
    );
    this.modalCloseBtn.innerHTML = `<svg height="25px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="25px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>`;

    this.setContent(content);

    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    // Open Modal
    this.openModal();
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  setContent(content) {
    if (typeof content === "string") {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = "";
      this.modalContent.append(content);
    }
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close-icon")) {
      document.querySelector(".overlay").remove();
    }
  }
}
