import { store } from "../store.js";
import { $ } from "../utils.js";

export default class TaskCard {
  constructor(card) {
    this.id = card.id;
    this.type = "idle";
    store.initState(this.id);
    store.setState(this.id, card);
  }

  template() {
    // types = ["idle", "delete", "drag", "place"];
    const card = store.state[this.id];
    return `
        <li class="work__item">
          <div class="task-${this.type}">
            <div class="task-${this.type}__contents">
              <h3 class="task-${this.type}__title">${card.title}</h3>
              <p class="task-${this.type}__desc">${card.contents}</p>
              <strong class="task-${this.type}__author">author by ${card.userId}</strong>
            </div>
            <div class="task-${this.type}__btn">
              <div class="task-${this.type}__btn--remove" data-num=${this.id}></div>
            </div>
          </div>
        </li>
    `;
  }

  render() {
    $(`.card-${this.id}`).innerHTML = this.template();
    store.subscribe(this.id, this.render.bind(this));
  }
}
