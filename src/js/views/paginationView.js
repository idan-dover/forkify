import View from './View.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector(`.pagination`);

  addHandlerClick(handler) {
    this._parentEl.addEventListener(`click`, function (e) {
      const btn = e.target.closest(`.btn--inline`);

      if (!btn) {
        return;
      }

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    let numPages = this._data.results.length / this._data.resultsPerPage;
    numPages = Math.ceil(numPages);
    //Page 1 and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupBtn(true, currPage);
    }
    //Last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupBtn(false, currPage);
    }
    //Other page
    if (currPage < numPages) {
      return (
        this._generateMarkupBtn(false, currPage) +
        this._generateMarkupBtn(true, currPage)
      );
    }
    //Page 1 no other pages
    return '';
  }

  _generateMarkupBtn(next = false, page) {
    const direction = {
      to: `prev`,
      value: -1,
      arrow: `left`,
    };
    if (next) {
      direction.to = `next`;
      direction.value = 1;
      direction.arrow = `right`;
    }
    return `
        <button data-goto="${
          page + direction.value
        }" class="btn--inline pagination__btn--${direction.to}">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-${direction.arrow}"></use>
          </svg>
          <span>Page ${page + direction.value}</span>
        </button>
    `;
  }
}

export default new PaginationView();
