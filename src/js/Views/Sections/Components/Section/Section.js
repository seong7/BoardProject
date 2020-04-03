import elements from "../../../base";
import "./Section.css";

export const markUp = () => `
<section>
    <p>
        <strong>간단한 회원가입</strong>으로</br>
    </p>
    <p>
        <strong>누구나</strong> 사용 가능한 <strong>게시판</strong>
    </p>
    <button id="startBtn" class="blackBtn">시작하기</button>
</section>
`;

export const eventStartBtn = () => {
  document.querySelector("#startBtn").addEventListener("click", () => {
    // console.log("시작하기");
  });
};
