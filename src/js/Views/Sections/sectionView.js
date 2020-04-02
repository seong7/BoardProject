import elements from "../base";
import * as section from "./Components/Section";

export const render = () => {
  elements.content.insertAdjacentHTML("afterbegin", section.markUp());
};
export const test = () => {};
