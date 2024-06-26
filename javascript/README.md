240514~현재진행 (ing)
# JavaScript
* 자바스크립트는 절차적 언어, 객체지향언어, 함수형 언어, 논리형 언어이다. 
* 어떤 동작 결과를 내기 위해서는 결과만 생각하는 것이 아닌 그 결과를 내기 위한 과정과 데이터가 필요하다.
1. 목적 정하기 
2. 목적 도달을 위한 절차 정하기 
3. 객체, 속성, 메소드, 이벤트를 결정하여 코드 완성하기 
## 외부, 내부 스크립트와 주석 
### 외부스크립트
* `<script src="주석"></script>`
* `html` 파일 2개 이상에 하나의 `script`파일을 연결 시 파일 관리가 편하도록 외부 스크립트로 관리한다. 
* 객체 대상에 적용하는 자바스크립트일 수록 `body`태그 내에 `script`를 작성한다. 
* 객체 대상이 아닐 경우는 `script`위치를 찾기 쉽도록 `head`태그 내에 작성하기도 한다. 
### 내부스크립트
* `<script>/*스크립트작성위치*/</script>`
* 내부스크립트는 `script` 내에 `src` 속성을 쓰지 않는다. 
* 그 외 특징은 외부 스크립트와 동일 
### 주석
* `//내용` 한줄 주석
* `/*내용*/` 여러 줄 주석 
------------
## 객체, 속성, 메서드, 이벤트
### 객체와 속성
* 객체 : HTML태그, 자바스크립트에서 기본적으로 제공해주는 다양한 객체들
* 속성 : HTML 태그의 속성, 자바스크립트가 제공하는 객체에 해당하는 속성들 
* 객체.속성;
* 객체.속성.속성;
* 객체.속성.속성.속성;
* 속성 앞에는 반드시 객체가 있어야 한다. 
* 첫번째 속성 앞에는 반드시 객체가 있어야 한다. 
* 일반적으로 속성은 메서드보다 반드시 먼저 선언되어야 한다. 
* 속성은 `속성.속성` 2개 이상 필요 시 반복할 수 있다. 
### 객체와 메서드
* 메서드 : 자바스크립트가 제공하는 실행 명령어 
* 객체.메서드();
* 객체.속성.메서드();
* 객체.속성.속성.메서드();
* 메서드와 속성을 구분하는 쉬운 방법은 괄호 유무다.
* 메서드는 속성과 객체 뒤에서 마무리 실행명령어로 사용한다. 
### 중급에서 사용하는 객체, 속성, 메서드 활용 문법 
* `객체.메서드(객체.속성.메서드(););`
* `객체.속성.메서드(객체.속성);`
* `객체.속성.속성.메서드(객체.메서드(););`
* `객체.속성.메서드(객체.메서드(객체.속성.메서드();););`
## 변수
### `변수선언키워드 변수명 대입연산자 대입값`
### `var a = 1`
* 변수명은 영문 대소문자, $, _, 숫자를 사용할 수 있다. 
* 변수는 한 번에 한 가지값만 담을 수 있다. 
* 변수 처음 선언 시에는 반드시 선언키워드가 존재해야한다. 
* 이미 데이터를 가지고 있는 변수에 새로운 값을 대입하면 기존 값은 삭제되고 새로운 값만 대입된다.
* 자바스크립트는 절차형 언어이기 때문에 최종 데이터값이 정해졌다 하더라도 최종까지 도달하기 위해 중간에 삽입한 다른 데이터값도 작성 순서에 따라 존재하므로 언제든지 이용할 수 있다. 
### 변수 ox 퀴즈 
1. `var 1num = 10;` x
2. `var $num = 10;` o
3. `var 100num = 10;` x
4. `var num100 = 10;` o
5. `var console = 10;` x
6. `var log = hello;` x
7. `var Num = 10;`o 
8. `var num = js;` x
9. `var js = num;` x
10. `var num = 10` o
## 함수 (function)
* 재사용되는 문법 사용 시 함수를 이용하여 처리한다. 
* 함수 내에 재사용프로그래밍 코드를 여러 줄 입력하면 다시 그 복잡한 코드를 입력하지 않아도 간단하게 호출할 수 있다는 장점이 있다.
* `함수생성키워드 함수명(){재사용 프로그래밍}`
* `function name(){...}`
1. 처음 함수 생성 시 `function` 키워드 작성 
2. 함수 용도에 맞춰 의미있는 함수명 작성 `function 함수명`
3. 함수명 뒤 소괄호`()`붙이고 바로 그 뒤로 중괄호 `{}` 작성 
4. 중괄호 `{}` 내에 재사용되는 반복 프로그래밍 코드 작성 
5. 재사용 함수를 사용하고 싶은 위치에서 **함수호출하기**
### 함수 생성법과 호출법 
* 생성 : `function 함수명(){재사용프로그래밍}`
* 호출 : `함수명()`
* 함수를 호출 없이 생성만 하면 절대 화면에서 결과를 볼 수 없다. 
* 호출은 생성한 함수명과 동일하게 작성해야 한다. 
* 호출은 함수 생성 바깥쪽에서 작성해야한다. 
### 데이터 구분하는 쉼표와 연결연산자(+)
* `console.log("a는", a)`
* 위 쉼표 구분은 문자 "a는"과 변수 a를 각각 다르게 구분하여 필요 시 문자와 변수를 다르게 처리할 수 있다.
* `console.log("a는"+ a)`
* 위 연결연산자는 문자 "a는"과 변수 a를 하나로 연결하여 데이터를 하나로 통합시킨다. 기존 데이터 특징을 없애고 통일하기 때문에 추가 처리가 새로운 연산자를 쓰는 경우가 아니라면 불가능한다. 