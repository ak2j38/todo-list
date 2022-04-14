import { GET_CARD } from "../dummyData.js";
import { $, removeElement } from "../utils.js";
import { CardModificationForm } from "./CardModificationForm.js";
import TaskCard from "./TaskCard.js";

export default class Column {
  constructor(column) {
    this.columnId = column.id;
    this.columnTitle = column.title;
    this.taskCardComponents = GET_CARD(this.columnId).map(
      (card) => new TaskCard(card)
    );
    this.isOpenModificationForm = false;
  }
  template() {
    return `
      <div class="work">
        <div class="work__header">
          <div class="work__left">
            <h2 class="work__title">${this.columnTitle}</h2>
            <strong class="work__counter">${this.getCardLength()}</strong>
          </div>
          <div class="work__btn">
            <div 
              data-name="${this.columnTitle}" 
              class="work__btn--add btn-${this.columnId}">
            </div>
            <div class="work__btn--remove"></div>
          </div>
        </div>
        <div class="work__body">
          <ul class="work__list list-${this.columnId}">
            ${this.taskCardComponents.reduce(
              (prev, cur) =>
                prev + `<div class="${cur.id}">${cur.template()}</div>`,
              ""
            )}
          </ul>
        </div>
      </div>
    `;
  }
  getCardLength() {
    return this.taskCardComponents.length;
  }
  addEvent() {
    $(`.btn-${this.columnId}`).addEventListener("click", (e) =>
      this.handleCardAddition(e)
    );
  }

  handleCardAddition(e) {
    if (this.isOpenModificationForm) {
      const modificationForm = $(".task");
      removeElement(modificationForm);
      this.isOpenModificationForm = false;
      return;
    }
    this.createModificationForm();
    this.isOpenModificationForm = true;
  }
  createModificationForm() {
    const list = $(`.list-${this.columnId}`);
    const modificationForm = new CardModificationForm({ column: this });
    list.insertAdjacentHTML("afterbegin", modificationForm.template());
    modificationForm.addEvent();
  }
}
