import { $ } from "../utils";

export class CardModificationForm {
  constructor(target) {
    this.target = target;
  }
  template() {
    return `
      <li>
        <div class="task">
          <input type="text" class="task__title" placeholder="TITLE">
          <input type="text" class="task__desc" placeholder="BODY">
          <div class="task__btns">
            <button class="task__cancel">취소</button>
            <button class="task__confirm">등록</button>
          </div>
        </div>
      </li>
    `;
  }
  addEvent() {
    const taskTitleEl = $(".task__title");
    const taskDescEl = $(".task__desc");
    taskTitleEl.addEventListener("keyup", (e) => this.handleInputLength(e));
    taskDescEl.addEventListener("keyup", (e) => this.handleInputLength(e));
  }
  handleInputLength(e) {
    const taskTitleEl = $(".task__title");
    const taskDescEl = $(".task__desc");
    const isOccupiedInput = taskTitleEl.value.length || taskDescEl.value.length;
    const confirmBtn = $(".task__confirm");
    if (isOccupiedInput) {
      addClass({ el: confirmBtn, className: "active" });
      return;
    }
    removeClass({ el: confirmBtn, className: "active" });
  }
}

function addClass({ el, className }) {
  const hasClass = el.classList.contains(className);
  if (hasClass) return;
  el.classList.add(className);
}

function removeClass({ el, className }) {
  el.classList.remove(className);
}
