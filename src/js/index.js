import "normalize.css";
import "./style.css";
import * as headerView from "./Views/Headers/headerView";
import * as sectionView from "./Views/Sections/sectionView";
import * as postView from "./Views/Posts/postsView";
// import elements from "./Views/base";

window.addEventListener("load", () => {
  headerView.render();

  setTimeout(() => {
    sectionView.render();
    postView.render();
  }, 1000);
});
