// 맵(Map)
// 키가 있는 데이터를 저장, 객체와 유사하지만 키에 다양한 자료형을 허용한다는 점에서 차이가 존재함

let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size);

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);
  script.onerror = () =>
    callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

  document.head.append(script);
}

loadScript("./script.js", function (error, script) {
  if (error) {
    // 에러 처리
  } else {
    // 스크립트 로딩이 성공적으로 끝남
  }
});

// 콜백 기반 비동기 처리
// 오류 우선 콜백, callback의 첫 번째 인수는 에러를 위해 남겨둠. 에러가 발생하면 이 인수를 이용해 callback(err)이 호출됨
// 두 번째 인수(필요하면 인수를 더 추가할 수 있음)는 에러가 발생하지 않았을 때를 위해 남겨둠, 원하는 동작이 성공한 경우엔 callback(null, result1, result2 .. 이 호출됨)
// 단일 콜백 함수에서 에러 케이스와 성공 케이스 모두를 처리할 수 있음

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
