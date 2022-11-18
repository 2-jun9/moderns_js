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
