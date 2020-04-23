import elements from "../base";
import * as section from "./Components/Section/Section";

export const render = () => {
  elements.content.insertAdjacentHTML("afterbegin", section.markUp());
  section.eventStartBtn();
};
export const test = () => {};
