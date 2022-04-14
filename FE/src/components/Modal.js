import { $ } from "../utils";

export default class Modal {
  constructor({ target, card }) {
    this.target = target;
    this.card = card;
    this.render();
    this.addEvent();
  }
  template() {
    return `
      <div data-name="modal" class="modal">
        <div div class="modal__container">
          <div class="modal__check-message">
            선택한 카드를 삭제할까요?
          </div>
          <div class="modal__btns">
            <button data-name="cancel-btn" class="modal__btn--cancel">취소</button>
            <button data-name="remove-btn" class="modal__btn--remove">삭제</button>
          </div>
        </div>
      </div>
    `;
  }
  render() {
    this.target.insertAdjacentHTML("afterbegin", this.template());
  }
  addEvent() {
    $(`.modal`).addEventListener("click", (e) => this.handleModal(e));
  }
  handleModal(e) {
    const { name } = e.target.dataset;
    const isClikedRemoveBtn = name === "remove-btn";
    const isClikedGraySection = name === "modal";
    const isClikedCancelBtn = name === "cancel-btn";
    const modalEl = $(`.modal`);

    if (isClikedRemoveBtn) {
      const selectedCardEl = $(`.item-${this.card.id}`);
      selectedCardEl.remove();
      modalEl.remove();
      return;
    }
    if (isClikedGraySection || isClikedCancelBtn) {
      modalEl.remove();
    }
  }
}
