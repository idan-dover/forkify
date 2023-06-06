import View from './View.js';
import { MODAL_RENDER_DELAY } from './../config.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector(`.upload`);
  _window = document.querySelector(`.add-recipe-window`);
  _overlay = document.querySelector(`.overlay`);
  _btnOpen = document.querySelector(`.nav__btn--add-recipe`);
  _btnClose = document.querySelector(`.btn--close-modal`);

  _message = `recipe was succefully uploaded :)`;

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener(`click`, this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener(`click`, this.toggleWindow.bind(this));
    this._overlay.addEventListener(`click`, this.toggleWindow.bind(this));
  }

  toggleWindow() {
    this._overlay.classList.toggle(`hidden`);
    this._window.classList.toggle(`hidden`);
    setTimeout(this._timeToRender.bind(this), MODAL_RENDER_DELAY);
  }

  _timeToRender() {
    this.render([1]);
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener(`submit`, function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
    <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input required name="title" type="text" />
        <label>URL</label>
        <input required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input required name="image" type="text" />
        <label>Publisher</label>
        <input required name="publisher" type="text" />
        <label>Prep time</label>
        <input required name="cookingTime" type="number" />
        <label>Servings</label>
        <input required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input type="text" required name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 2</label>
        <input type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 3</label>
        <input type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 4</label>
        <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 5</label>
        <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 6</label>
        <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>
    `;
  }
}

export default new AddRecipeView();
