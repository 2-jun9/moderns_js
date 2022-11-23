// 콜백을 받는 함수를 프라미스를 반환하는 함수로 바꾸는 것을 프라미스화 라고 합니다
// 기능을 구현 하다 보면 콜백보다는 프라미스가 더 편리함

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
}
