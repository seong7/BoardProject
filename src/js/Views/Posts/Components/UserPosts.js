import "./UserPosts.css";

export const markUp = (post) => `
<div class="userPost">
  <div class="postContent">
    <div class="postHeader">
      <p>
        ${post.time} by ${post.user}
        <!--<i class="fas fa-user-circle"></i>-->
      </p>
      <!--<img src=""/>-->
    </div>
    <div class="postText">
      <p>${post.text}.</p>
    </div>
    <div class="postBottom">
        <p>  
          <i class="far fa-comment"></i>
          <!--<i class="far fa-comment-dots"></i>-->
          ${post.comment} comments
        </p>
        <p>
          <i class="fas fa-eye"></i>
          ${post.view} views
        </p>
    </div>
  </div>
  <div class="postVote">
    <!--<i class="fas fa-arrow-up"></i>-->
    <i class="fas fa-chevron-up"></i>
    <p>${post.vote}</p>
    <!--<i class="fas fa-arrow-down"></i>-->
    <i class="fas fa-chevron-down"></i>
  </div>
</div>
`;

export const test = () => {};
