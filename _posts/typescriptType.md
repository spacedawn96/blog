---
id: 1
title: 'typescript'
about: 'Typescript'
excerpt: 'from typescript'
coverImage: '/assets/typescript.png'
date: '2021-02-03T13:35:07.322Z'
author:
  name: spacedawn96
  picture: '/assets/tim.jpeg'
ogImage:
  url: '/assets/typescript.png'
---


## 타입스크립트 어떻게 동작하는가?

Javascript는 프로그래머가 작성한 텍스트를 컴파일러가 파싱하여 AST라는 자료구조로 변환합니다 그리고 컴파일러는 다시 AST를 바이트코드로 변환합니다 그 다음 런타임에서 바이트코드를 계산합니다

Typescript는 컴파일러가 코드를 바이트코드 대신 자바스크립트로 변환시킵니다 이후 일반적인 자바스크립트 코드를 실행하는 순서로 실행됩니다 정리를 하면

1. 타입스크립트 소스 -> 타입스크립트 AST 
2. 타입검사기가 AST를 확인
3. 타입스크립트 AST -> 자바스크립트소스 
4. 자바스크립트소스 소스 -> 자바스크립트소스 AST
5. AST -> 바이트코드 
6. 런타임이 바이트코드를 계산합니다

1~3은 tsc가 실행하며 4~6은 브라우저, Node js, 기타 자바스크립트 엔진 같은 자바스크립트 런타임이 실행합니다 타입스크립트 컴파일러는 AST를 만들어 결과 코드를 내놓기 전에 타입을 확인하기 때문에 자바스크립트를 사용하는거보다 타입의 안정성이 높아집니다

자바스크립트가 프로그램을 실행하기전까진 타입을 알 수 없습니다 자바스크립트는 런타임에 예외를 던지거나 암묵적으로 형변환을 합니다
타입스크립트는 컴파일 타임에 문법 에러와 타입 관련 에러를 모두 검출합니다
## Typescript types

![Cat](typescript.png)

### 1.String

string은 문자열 리터럴 또는 템플릿 문자열과 같은 텍스트 데이터 유형에 사용 됩니다 
```ts
const language: string = 'TypeScript';
const message: string = `I'm programming in ${language}!`;
```

### 2.number

number은 다음과 같이 정수 및 부동 소수점을 나타내는데 사용됩니다

```ts
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 
```
### 3.Array

배열은 두 가지 사용법이 있습니다 

```ts
const primeNumbers: number[] = [2, 3, 5, 7, 11]; 

const primeNumbers: Array<number> = [2, 3, 5, 7, 11];
```

두 가지 방법 모두 동일 합니다, 보통 배열을 만들때  

```ts
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

let fruits: Array<string> = ['Apple', 'Orange', 'Banana']; // 이렇게 배열을 타입을 정해서 만드는 것이 좋습니다

```

두 가지 방법 모두 동일합니다 

```ts
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
```

배열은 다양한 데이터 타입을 함께 쓸 수 있습니다 

### 4.BigInt

bigint는 es2020의 새로운 타입 입니다 

```ts
const bigNumber: BigInt = 9007199254740993n;

const myBigInt = BigInt(9007199254740992);
const myBigInt2 = 9007199254740992n;
console.log(myBigInt);  //9007199254740992n
console.log(myBigInt2); //9007199254740992n

```

bigint는 number와 비교 했을때 완전히 같지는 않습니다

```ts
console.log(0n == 0); // true
console.log(0n === 0); // false
console.log(1n < 2); // true
```

### 5.Symbol

심벌은 es2015에 추가된 기능힙니다 심벌은 객체와 맵에서 문자열 키를 대신하는 용도로 사용됩니다

```ts
let a = Symbol('a') //symbol
let b = Symbol('a') //symbol
var c = a === b //false
```
자바스크립트에서 Symbol('a')는 주어진 이름으로 새로운 Symbol을 만든다는 의미 입니다 symbol은 uniqe하여 다른 symbol과 == 또는 ===로 비교했을때 같지 않다고 판단 됩니다



### 6.Any

any는 사용하지 않는 것이 좋습니다

> nolmplicitAny : 암묵적인 any가 나타났을 때 예외를 일으키고 싶다면 nolmplicitAny 활성화 하면 됩니다

### 7.Unknown

타입을 알 수 없는 값이 있을 때 any 대신 unknown을 사용합시다 

```ts
let a : unknow = 30 // unknow
let c = a + 10 // Error a는 unknow 입니다
if (typeof a === 'number') {
    let d = a + 10 // a를 number로 정했기 때문에 에러가 발생하기 않습니다
}
```

unknown을 활용해 타입을 줄일수도 있습니다

```ts
function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  } // value가 function 타입일 경우 name 프로퍼티에 접근할 수 있습니다

  if (value instanceof Date) {
    return value.toISOString();
  }// vlaue가 Date 타입일 경우 toISOString을 호출할 수 있습니다

  return String(value);
}
```


### 8.Boolean

 boolean은 타입 true false 두 개의 값을 갖습니다  이 타입으로 비교연산(==,===,||,&&) 등 유용하게 사용 할 수 있습니다 
 
 boolean을 정의하는 법을 알아봅시다. 
```ts
let a = true // boolean
const c = true  // true, const는 더이상 값이 바뀌지 않기때문에 자동적으로 true를 추론합니다 
let d : boolean = true
let d : true = true // true
```

### 9.Object

타입스크립트는 객체 프로퍼티에 엄격한 편입니다 예를 들어

```ts
let a : {b : number }
a = {} // 에러를 띄웁니다 b프로퍼티가 없습니다
```
없던 프로퍼티를 추가 할 수 있는 방법도 있습니다

```ts
let a : {
    b: number
    c?:string
    [key:number]:boolean // a는 boolean 타입의 값을 갖는 number 타입의 프로퍼티를 여러 개를 포함 할 수 있습니다
}
ex)
a = {b: 1}
a = {b: 1, c: 'd'}
a = {b : 1, 10: true, 20:false} 
```
* index signature
 [key: T]: U 같은 문법을 인덱스 시그니처라 부르며 인덱스 시그니처의 키(T)는 반드시 number나 string 타입에 할당 할 수 있는 타입이어야 합니다 

* Indexed Access Types
인덱싱 된 타입을 사용하여 다른 유형의 특정 속성을 조회 할 수 있습니다
```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number

인덱싱 타입도 타입이기 때문에 unions, keyof 등 다른 타입들도 사용이 가능합니다 
type I1 = Person["age" | "name"]; // type I1 = string | number
    
type I2 = Person[keyof Person]; // type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean
 ```
### 10.Null, Undefined, nerver, void

* null : null은 값이 없습니다
* undefined : undefined은 값을 아직 정의하지 않습니다
* void : void는 아무것도 반환하지 않는 함수의 반환 타입 입니다 (예: console.log)
* never : never은 절대 반환하지 않는(예외나 영원히 실행되는) 함수 타입을 가르킵니다

```ts
function a(x: number){
  if(x < 10){
    return x
  }

  return null
} // null

function b(){
  return undefined
} // undefined

function c(){
  let a = 2+2
} // void

function d(){
  while(true){
     do()
  }
} // never
```

### 11.Enum

Enum은 해당 타입으로 사용할 수 있는 값을 열거 하는 방법이다 Enum은 키를 값에 할당하는, 순서가 없는 자료구조 입니다 


```ts
enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
} 


enum PrintMedia {
  Newspaper = 1 // 첫 번째 값을 직접 초기화 할 수 있습니다 
  Newsletter,
  Magazine,
  Book
} 


enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
} // enum은 순차적인 값을 사용할 필요가 없습니다 

```

첫 번째 enum입니다 enum은 저장 될 때 항상 숫자 값이 할당 됩니다  첫 번째는 0  그 다음 값은 1씩 증가 합니다 

```ts
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
```
enum은 반환 타입으로도 사용될 수 있습니다

enum은 문자열로 초기화도 가능합니다 문자열 enum은 좀 더 나은 가독성을 제공합니다 

```ts
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE
```

문자열 enum은 number와 달리 개별적으로 값을 초기화 해주어야 합니다 

### Objects vs Enums

 object와 as const를 이용하면 Enums을 대신해서 쓸 수 있습니다 

```ts
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // as const를 쓰지 않으면 Up이 아닌 어떠한 것도 올 수 있습니다, 즉 ? : 0이 됩니다 as const를 쓰므로 UP의 number은 0 인걸 확인 할 수 있습니다

EDirection.Up;  //(enum member) EDirection.Up = 0

ODirection.Up; // (property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[
  // 1 | 2 | 3 | 4
  keyof typeof ODirection
  ];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
```



