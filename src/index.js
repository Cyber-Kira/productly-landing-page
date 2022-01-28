import { Article } from "./js/Article";
import { ArticleModal } from "./js/ArticleModal";
import { Modal } from "./js/Modal";

const data = [
  {
    id: 1,
    wide: false,
    title: "Increase Prosperity With Positive Thinking",
    urlToImage: "./src/img/strategies/1.jpg",
    tags: ["Art", "Design"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.",
    date: "01.01.2022",
  },
  {
    id: 2,
    wide: false,
    title: "Motivation Is The First Step To Success",
    urlToImage: "./src/img/strategies/2.jpg",
    tags: ["Culture"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.",
    date: "02.01.2022",
  },
  {
    id: 3,
    wide: false,
    title: "Success Steps For Your Personal Or Business Life",
    urlToImage: "./src/img/strategies/3.jpg",
    tags: ["Culture", "Design", "Art"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique, enim ex a esse dolor, facere labore sed quaerat ullam veritatis consequuntur earum tempore illum harum ipsam, eligendi doloremque perferendis.",
    date: "03.01.2022",
  },
];

window.onload = function () {
  // Render Articles
  if (data) {
    renderArticlesToDom(data);
  }

  // Tags
  addTagsClickHandler();

  //Generate Base Modal From Modal Class
  addToolsClickHandler();
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll(".strategies__tags .tag");

  tags.forEach((tag) => {
    tag.classList.remove("tag_selected");
    tag.classList.add("tag_bordered");
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.remove("tag_bordered");
  clickedTag.classList.add("tag_selected");
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");

  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");

  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    strategy.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove("strategy_hidden");
      }
    });
  });
};

const addTagsClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;

      removeSelectedTags();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === "All") {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const getStrategiesWrapper = () => {
  const strategiesContainer = document.querySelector(".strategy-wrapper");
  strategiesContainer.innerHTML = "";
  return strategiesContainer;
};

const renderArticlesToDom = (data) => {
  const strategiesWrapper = getStrategiesWrapper();
  generateArticles(data).forEach((article) => {
    strategiesWrapper.append(article.generateArticle());
  });

  addStrategyClickHandler();
};

const addStrategyClickHandler = () => {
  document.querySelector(".strategy-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".strategy")) {
      const clickedStrategyId = e.target
        .closest(".strategy")
        .getAttribute("data-id");
      const clickedStrategyData = getClickedData(clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
  });
};

const renderArticleModalWindow = (article) => {
  new ArticleModal("article-modal", article).renderModal();
};

const getClickedData = (id) => {
  return data.find((article) => article.id === +id);
};

const generateArticles = (data) => {
  let articles = [];
  data.forEach((item) => {
    articles.push(new Article(item));
  });
  return articles;
};

const addToolsClickHandler = () => {
  document
    .querySelector(".tools__button .button")
    .addEventListener("click", (e) => {
      generateToolsModal();
    });
};

const generateToolsModal = () => {
  renderModalWindow("Test content for Tools Modal");
};

const renderModalWindow = (content) => {
  new Modal("tools-modal").buildModal(content);
};
