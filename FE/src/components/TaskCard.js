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
    $(`.remove-btn-${this.card.id}`).addEventListener(
      "mouseover",
      ({ target }) => {
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle")
          .classList.add("task-delete");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle")
          .classList.remove("task-idle");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__contents")
          .classList.add("task-delete__contents");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__contents")
          .classList.remove("task-idle__contents");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__title")
          .classList.add("task-delete__title");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__title")
          .classList.remove("task-idle__title");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__desc")
          .classList.add("task-delete__desc");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__desc")
          .classList.remove("task-idle__desc");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__author")
          .classList.add("task-delete__author");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__author")
          .classList.remove("task-idle__author");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__btn")
          .classList.add("task-delete__btn");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__btn")
          .classList.remove("task-idle__btn");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__btn--remove")
          .classList.add("task-delete__btn--remove");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-idle__btn--remove")
          .classList.remove("task-idle__btn--remove");
      }
    );
    $(`.remove-btn-${this.card.id}`).addEventListener(
      "mouseout",
      ({ target }) => {
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete")
          .classList.add("task-idle");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete")
          .classList.remove("task-delete");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__contents")
          .classList.add("task-idle__contents");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__contents")
          .classList.remove("task-delete__contents");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__title")
          .classList.add("task-idle__title");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__title")
          .classList.remove("task-delete__title");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__desc")
          .classList.add("task-idle__desc");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__desc")
          .classList.remove("task-delete__desc");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__author")
          .classList.add("task-idle__author");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__author")
          .classList.remove("task-delete__author");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__btn")
          .classList.add("task-idle__btn");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__btn")
          .classList.remove("task-delete__btn");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__btn--remove")
          .classList.add("task-idle__btn--remove");
        target
          .closest(`.card-${this.id}`)
          .querySelector(".task-delete__btn--remove")
          .classList.remove("task-delete__btn--remove");
      }
    );
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
