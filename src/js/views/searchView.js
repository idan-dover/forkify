class SearchView {
  _parentEl = document.querySelector(`.search`);

  _clear() {
    this._parentEl.querySelector(`.search__field`).value = '';
  }

  getQuery() {
    const query = this._parentEl.querySelector(`.search__field`).value;
    this._clear();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
