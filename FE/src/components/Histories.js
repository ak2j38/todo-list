import HistoryCard from "./HistoryCard.js";
import { store } from "../store.js";
import { $ } from "../utils.js";

export default class Histories {
  constructor(target) {
    this.target = target;
    store.initState("history");
    store.subscribe("history", this.render.bind(this));
  }

  template() {
    return `
        <button class="history__btn--close">x</button>
        ${this.historyCardComponents.reduce(
          (prev, h) => prev + h.template(),
          ""
        )}
    `;
  }

  render() {
    this.target.innerHTML = this.template();
  }

  addEvent() {
    $(".header__menu").addEventListener("click", () => {
      showHistoryView();
<<<<<<< HEAD
      const historyData = requestHistoryData();
      this.historyCardComponents = setHistoryDataToHistoryCard(historyData);
=======
      const historyData = requestData();
      this.historyCardComponents = historyData.map(
        (history) => new HistoryCard(history)
      );
>>>>>>> 930f577e93865b62fc46aba33cbf68286b273141
      store.setState("history", historyData);
    });
    $(".history__btn--close").addEventListener("click", () => {
      hideHistoryView();
    });
  }
}

function showHistoryView() {
  $(".history").style.right = "0";
}

function hideHistoryView() {
  $(".history").style.right = "-45.2rem";
}

<<<<<<< HEAD
function setHistoryDataToHistoryCard(historydata) {
  return historydata.map((history) => new HistoryCard(history));
}

async function requestHistoryData() {
=======
async function requestData() {
>>>>>>> 930f577e93865b62fc46aba33cbf68286b273141
  const url = "http://3.38.224.138/histories";
  const res = await fetch(url, {
    mode: "cors",
    credentials: "include",
  });
  const data = res.json();

  return data;
}
