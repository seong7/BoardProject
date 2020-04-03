import elements from "../../base";
import * as userPosts from "./UserPosts";

export const userPostMarkUp = (postArry) => {
  let markUp = "";
  for (let i = 0; i < postArry.length; i++) {
    markUp += userPosts.markUp(postArry[i]);
  }
  document.querySelector(".posts_container").insertAdjacentHTML("beforeend", markUp);
  // return markUp;
};

export const markUp = () => `
<div class="posts_container">
</div>
`;

export const renderPosts = (postArry, num = 0) => {
  const arry = postArry;
  let i = num;
  if (i === arry.length) return;
  // for (let i = 0; i < postArry.length; i++) {
  setTimeout(() => {
    document
      .querySelector(".posts_container")
      .insertAdjacentHTML("beforeend", userPosts.markUp(arry[i]));
    i++;
    renderPosts(arry, i);
  }, 1000);
  // }
};
export const test = () => {};
