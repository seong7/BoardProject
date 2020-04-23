import elements from "../base";
import * as header from "./Components/Header/Header";

export const render = () => {
  elements.header.insertAdjacentHTML("afterbegin", header.markup());
  header.eventLoginBtn();
  header.eventSignupBtn();
};

export const test = () => {};
