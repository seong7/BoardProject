import elements from "../base";
import * as header from "./Components/Header";

export const render = () => {
  elements.header.insertAdjacentHTML("afterbegin", header.markup());
};

export const test = () => {};
