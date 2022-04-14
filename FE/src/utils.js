function $(selector) {
  return document.querySelector(`${selector}`);
}

function removeElement(el) {
  el.remove();
}

export { $, removeElement };
