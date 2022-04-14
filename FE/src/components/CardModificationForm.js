import { $, removeElement } from "../utils";

export class CardModificationForm {
  constructor({ target, column }) {
    this.target = target;
    this.column = column;
  }
  template() {
    const MAX_LENGTH = {
      TITLE: 50,
      CONTENTS: 500,
    };
    return `
      <li>
        <div class="task">
          <input type="text" class="task__title" placeholder="TITLE" maxlength="${MAX_LENGTH.TITLE}">
          <div name="text" class="task__desc" data-placeholder="BODY" maxlength="${MAX_LENGTH.CONTENTS}" contenteditable="true"></div>
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
    const taskCancelBtn = $(".task__cancel");
    taskTitleEl.addEventListener("keyup", (e) => this.handleInput(e));
    taskDescEl.addEventListener("keyup", (e) => this.handleInput(e));
    taskCancelBtn.addEventListener("click", () =>
      this.removeModificationForm()
    );
  }
  handleInput(e) {
    const taskTitleEl = $(".task__title");
    const taskDescEl = $(".task__desc");
    const isOccupiedInput =
      taskTitleEl.value.length || taskDescEl.innerText.length;
    const confirmBtn = $(".task__confirm");
    if (isOccupiedInput) {
      addClass({ el: confirmBtn, className: "active" });
      return;
    }
    removeClass({ el: confirmBtn, className: "active" });
  }
  removeModificationForm() {
    removeElement($(".task"));
    this.column.isOpenModificationForm = false;
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
