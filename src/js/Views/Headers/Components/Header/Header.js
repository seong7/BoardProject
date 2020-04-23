import elements from "../../../base";
import "./Header.css";

export const markup = () => `
<div class="header">
    <a>
        <!-- <i class="fas fa-comments"></i> -->
        <!-- <i class="far fa-comment-dots"></i> -->
        <!-- <i class="far fa-comments"></i> -->
        <!-- <i class="fas fa-code"></i> -->
        <p>
            <strong>< /&nbsp></strong>
        </p>
    </a>
    <div>
        <button id="loginBtn" class="blackBtn">로그인</button>
        <button id="signupBtn" class="whiteBtn">회원가입</button>
    </div>
</div>

`;

export const eventLoginBtn = () => {
  document.querySelector("#loginBtn").addEventListener("click", () => {
    // console.log("로그인");
  });
};
export const eventSignupBtn = () => {
  document.querySelector("#signupBtn").addEventListener("click", () => {
    // console.log("회원가입");
  });
};
