import { GET_COLUMNS } from "../dummyData.js";
import Column from "./Column.js";

export default class Columns {
  constructor(target) {
    this.target = target;
    this.columnComponents = GET_COLUMNS.map((column) => new Column(column));
  }

  template() {
    return `
      ${this.columnComponents.reduce(
        (prev, column) => prev + column.template(),
        ""
      )}
    `;
  }
  render() {
    this.target.innerHTML = this.template();

    this.columnComponents.forEach((column) => {
      column.addEvent();
      column.taskCardComponents.forEach((card) => card.addEvent());
    });
  }
}
