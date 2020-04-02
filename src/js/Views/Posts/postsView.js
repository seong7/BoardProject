import elements from "../base";
import * as UserPost from "./Components/UserPost";

export const render = () => {
  elements.board.insertAdjacentHTML("afterbegin", UserPost.markUp());
};
export const test = () => {};
