// 테스트코드
// Mocha: 핵심테스트 프레임워크 -> describe, it 과 같은 테스팅 함수와 테스트 실행 관련 주요 함수 제공
// Chai: 다양한 assertion을 제공해주는 라이브러리
// Sinon: 함수의 정보를 캐내는 데 사용되는 라이브러리, 내장 함수 등을 모방함

// 객체
let user = new Object();

// 객체 리터럴(object literal)
let user2 = {};
let user3 = {
  name: "John",
  age: 30,
};

console.log(user3.name);
console.log(user3.age);

// 객체는 참조에 의해 저장되고 복사됨, 객체가 저장되어있는 메모리 주소인 객체에 대한 참조 값이 저장됨
let userr = {
  name: "John",
};

let admin = userr; // userr의 참조값을 복사함, 객체 자체는 복사되지 않음

admin.name = "Pete";
alert(userr.name); // Pete가 출력됨
