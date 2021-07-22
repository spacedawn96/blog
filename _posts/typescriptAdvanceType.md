---
id: 4
title: 'typescript'
about: 'Advance Tytpe'
excerpt: 'from typescript'
coverImage: '/assets/typescript.png'
date: '2021-02-03T13:35:07.322Z'
author:
  name: spacedawn96
  picture: '/assets/tim.jpeg'
ogImage:
  url: '/assets/typescript.png'
---
## Creating Types from Types

### 1. Keyof

keyof를 사용하면 객체의 모든 키를 문자열 리터럴 타입 유니온으로 얻을 수 있습니다

```ts
interface User {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "Type",
  lastName: "Script"
};

type Keys = keyof User; // "firstName" | "lastName"
```

### 2. Typeof 

typeof는 변수의 데이터 타입을 반환하는 연산자입니다, 자바스크립트도 typeof 연산자가 있습니다 

```jsx

//jsx
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"
```

## Utility Types

### 1. Partial<Type,>

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
     // without title
  description: "throw out trash",
});
```
모든 프로퍼티 타입을 optional로 바꿉니다 



### 2. Required<Type,>

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 }; //error b가 필요합니다
```

Partial과 반대로 모든 프로퍼티는 필수가 됩니다

### 3. Readonly<Type,>

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
```

프로퍼티를 readonly로 바꿉니다 readonly로 바뀐 프로퍼티는 수정할 수 없습니다


### 4. Record<Keys,Type>

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris; //const cats: Record<CatName, CatInfo>
```

타입스크립트 내장 Record 타입을 이용하면 무언가를 매핑하는 용도로 객체를 활용할 수 있습니다

### 5. Pick<Type, Keys>

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo; // const todo: TodoPreview
```

객체 프로퍼티중 일부만 뽑아올 수 있습니다

### 6. Omit<Type, Keys>


```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo; // const todo: TodoPreview

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo; // const todoInfo: TodoInfo
```

선택된 프로퍼티의 키를 뽑아 삭제시킵니다