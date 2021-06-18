---
title: Typescript function
description: The first post is the most memorable one.
date: 2021-06-17T11:00:00.000Z
---


## Generic Functions

```ts
type Filter = {
    <T>(arry:T[] , f: (item: T )=> boolean ): T[]
}
```
filter라는 함수에 T라는 제네릭 타입 매개변수를 사용합니다 이 타입은 지금 무엇인지 알 수 없지만 어디선가 filter를 호출할 때마다 타입스크립트가 추론합니다 <>꺾쇠괄호를 추가하는 위치에 따라 제네릭의 범위가 결정됩니다
 