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
      const historyData = requestHistoryData();
      this.historyCardComponents = setHistoryDataToHistoryCard(historyData);
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

function setHistoryDataToHistoryCard(historydata) {
  return historydata.map((history) => new HistoryCard(history));
}

async function requestHistoryData() {
  const url = "http://3.38.224.138/histories";
  const res = await fetch(url, {
    mode: "cors",
    credentials: "include",
  });
  const data = res.json();

  return data;
}
