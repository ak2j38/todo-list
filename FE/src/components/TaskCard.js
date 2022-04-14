import { store } from "../store.js";
import { $ } from "../utils.js";
import { CardModificationForm } from "./CardModificationForm.js";

export default class TaskCard {
  constructor(card) {
    this.id = card.id;
    this.card = card;
    store.initState(this.id);
    store.setState(this.id, card);
    store.subscribe(this.id, this.render.bind(this));
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
    $(`.item-${this.id}`).addEventListener("dblclick", (e) => {
      // function 담당해라_카드_수정

      // 기존 카드 숨기기
      const cardEl = $(`.item-${this.id}`);
      cardEl.style.display = "none";

      // 더블클릭한 박스 정보 토대로 카드수정폼 생성
      const modificationForm = new CardModificationForm({ card: this.card });
      $(`.card-${this.id}`).insertAdjacentHTML(
        "afterbegin",
        modificationForm.template()
      );

      // console.log(modificationForm);

      const newState = {
        id: this.id,
        userId: "rumka",
        title: "카드 생성",
        contents: "하기",
        cardStatusName: "해야할 일",
      };
      // store.setState(this.id, newState);
    });
  }
}
