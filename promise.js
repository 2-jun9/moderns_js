// 콜백 지옥을 피하기 위해서 나온 개념 -> promise

// 제작 코드, 소비 코드, 프라미스
// 제작 코드는 시간이 걸리는 일을 수행함
// 소비 코드는 제작 코드의 결과를 기다렸다가 이를 소비함
// 프라미스는 제작 코드와 소비 코드를 연결해 주는 특별한 자바스크립트 객체,
// 시간이 얼마나 걸리든 상관없이 약속한 결과를 만들어 내는 제작코드가 준비되었을 때, 모든 소비 코드가 결과를 사용할 수 있도록 해줌

let promise = new Promise(function (resolve, reject) {
  // executor (제작 코드), new promise가 만들어질 때 자동으로 실행됨
  // resolve -> 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
  // reject -> 에러 발생 시 에러 객체를 나타내는 error와 함께 호출
  setTimeout(() => resolve("완료"), 1000);
  reject(new Error("..."));
});

promise.then(
  (result) => alert(result), // resolve 함수는 첫 번째 함수(인수)를 실행함, 프라미스가 이행되었을 때 실행
  (error) => alert(error) // 프라미스가 거부된 경우 실행
);

promise.catch(alert); // .then에서 첫 번째 인수를 null로 전달하는 것과 동일하게 작동함, 프라미스가 거부된 케이스만 다룸

promise.finally(); // finally 핸들러에는 인수가 없음, 절차를 마무리하는 보편적인 동작을 수행
// 결과를 처리하기 위해 만들어 진 게 아님, 결과는 finally를 통과해서 전달됨

// 예시
function loadScript(src, callback) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () =>
      reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    document.head.append(script);
  });
}

let promise2 = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise2.then(
  (script) => alert(`${script.src}을 불러왔습니다!`),
  (error) => alert(`Error: ${error.message}`)
);

promise.then((script) => alert("또다른 핸들러..."));

function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitioned", function handler() {
        div.removeEventListener("transitioned", handler);
        resolve(div);
      });
    }, 0);
  });
}

showCircle(150, 150, 100).then((div) => {
  div.classList.add("message-ball");
  div.append("Hello, world!");
});
