import elements from "../base";
import * as container from "./Components/Container/Container";
import * as userPosts from "./Components/UserPosts/UserPosts";

const testPost = [
  {
    time: "1시간 전",
    user: "Seong",
    text: "안녕하세요",
    comment: "3",
    view: "15",
    vote: "20",
  },
  {
    time: "1일 전",
    user: "Rachel",
    text: "Test Text",
    comment: "10",
    view: "20",
    vote: "30",
  },
  {
    time: "1주일 전",
    user: "David",
    text: "Hi, I'm David.",
    comment: "4",
    view: "40",
    vote: "5",
  },
  {
    time: "1개월 전",
    user: "Jay",
    text: "바닐라 자바스크립트로 개발하기",
    comment: "30",
    view: "40",
    vote: "60",
  },
];

const renderPostsAsync = (postArry, num = 0) => {
  const arry = postArry;
  let i = num;
  if (i === arry.length) return;
  setTimeout(() => {
    document
      .querySelector(".posts_container")
      .insertAdjacentHTML("beforeend", userPosts.markUp(arry[i]));
    i++;
    renderPostsAsync(arry, i);
  }, 1000);
};

const userPostMarkUp = (postArry) => {
  let markUp = "";
  for (let i = 0; i < postArry.length; i++) {
    markUp += userPosts.markUp(postArry[i]);
  }
  return markUp;
};

export const render = () => {
  elements.content.insertAdjacentHTML("beforeend", container.markUp());
  // renderPostsAsync(testPost);
  document
    .querySelector(".posts_container")
    .insertAdjacentHTML("beforeend", userPostMarkUp(testPost));

  userPosts.eventPosts();
  userPosts.eventVotes();
};

export const event = () => {};
