import View from "./View.js";

import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentEl = document.querySelector(`.pagination`);

  _generateMarkup() {
    const currPage = this._data.page;
    let numPages = this._data.results.length / this._data.resultsPerPage;
    numPages = Math.ceil(numPages);
    //Page 1 and there are other pages
    if (currPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    //Last page
    if (currPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>
        `;
    }
    //Other page
    if (currPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    //Page 1 no other pages
    return "";
  }
}

export default new PaginationView();
