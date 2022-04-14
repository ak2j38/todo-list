import { store } from "../store.js";
import { $ } from "../utils.js";
import { CardModificationForm } from "./CardModificationForm.js";

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
    const type = "idle";
    const card = store.state[this.id];
    return `
        <li class="work__item item-${this.id}">
          <div class="task-${type}">
            <div class="task-${type}__contents">
              <h3 class="task-${type}__title">${card.title}</h3>
              <p class="task-${type}__desc">${card.contents}</p>
              <strong class="task-${type}__author">author by ${card.userId}</strong>
            </div>
            <div class="task-${type}__btn">
              <div class="task-${type}__btn--remove"></div>
            </div>
          </div>
        </li>
    `;
  }
  render() {
    $(`.card-${this.id}`).innerHTML = this.template();
    // store.subscribe(this.id, this.render.bind(this));
  }
  addEvent() {
    $(`.item-${this.id}`).addEventListener("dblclick", () =>
      this.handleCardModification()
    );
  }

  handleCardModification() {
    const cardEl = $(`.item-${this.id}`);
    cardEl.style.display = "none";

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
  }
}
