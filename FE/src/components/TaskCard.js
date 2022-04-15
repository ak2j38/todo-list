import { store } from "../store.js";
import { $ } from "../utils.js";
import { CardModificationForm } from "./CardModificationForm.js";
import Modal from "./Modal.js";

export default class TaskCard {
  constructor({ column, card }) {
    this.id = card.id;
    this.column = column;
    this.card = card;
    store.initState(this.id);
    store.setState(this.id, this.card);
    store.subscribe(this.id, () => this.render());
    store.subscribe(this.id, () => this.addEvent());
  }

  template() {
    // types = ["idle", "delete", "drag", "place"];
    this.card = store.state[this.id];
    return `
        <li class="work__item item-${this.id}">
          <div class="task-idle">
            <div class="task-idle__contents">
              <h3 class="task-idle__title">${this.card.title}</h3>
              <p class="task-idle__desc">${this.card.contents}</p>
              <strong class="task-idle__author">author by ${this.card.userId}</strong>
            </div>
            <div class="task-idle__btn">
              <div class="task-idle__btn--remove remove-btn-${this.id}"></div>
            </div>
          </div>
        </li>
    `;
  }

  render() {
    $(`.card-${this.id}`).innerHTML = this.template();
  }

  addEvent() {
    $(`.item-${this.id}`).addEventListener("dblclick", () =>
      this.handleCardModification()
    );
    $(`.remove-btn-${this.card.id}`).addEventListener("click", (e) => {
      const modal = new Modal({ target: $(".wrap"), cardId: this.card.id });
    });
  }

  handleCardModification() {
    const cardEl = $(`.item-${this.id}`);
    hide(cardEl);

    const modificationForm = new CardModificationForm({
      column: this.column,
      card: store.state[this.id],
      type: "modification",
    });
    $(`.card-${this.id}`).insertAdjacentHTML(
      "afterbegin",
      modificationForm.template()
    );
    modificationForm.addEvent();

    function hide(el) {
      el.style.display = "none";
    }
  }
}
