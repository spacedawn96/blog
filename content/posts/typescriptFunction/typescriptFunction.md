---
title: Function Type
description: The first post is the most memorable one.
date: 2021-06-19T11:00:00.000Z
---


## Functions

다음은 타입스크립트의 함수의 예 입니다

```ts
function add(a:number, b:number): number {
    return a + b
} // 반환 타입은 적지 않아도 된다 보통 타입스크립트가 알아서 추론해 준다

```

### Generic Functions

제네릭은 프로그램을 작성할 때 재사용이 가능하고 유연하며 확장이 가능합니다 

```ts
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error
```

제네릭은 하나의 데이터 타입이 아닌 다양한 데이터 타입으로 호출하거나 사용할 수 있습니다 
 
 ### 타입한정 제네릭

```ts
type TreeNode = {
    value : string
} // 일반 TreeNode

type LeafNode = TreeNode & {
    isLeaf : true
} // 자식을 갖지 않는 TreeNode 인 LeafNode

type InnerNode = TreeNode & {
    children : [TreeNode] | [TreeNode, TreeNode]
} // 자식을 갖는 TreeNode 인 InnerNode
```

일반적인 이진 트리입니다 TreeNode는 value하나 LeafNode는 value와 항상 true인 isLeaf, InnerNode는 value와 한 개나 두 개의 자식을 가르킬 수 있는 children프로퍼티를 포함 합니다

다음으로 TreeNode를 인수로 받아 value에 매핑 함수를 적용해 새로운 TreeNode를 반환하는 mapNode 함수를 구현해 봅시다

```ts
let a : TreeNode = {value:'a'}
let a : LeafNode = {value:'b' , isLeaf:true}
let a : InnerNode = {value:'a', children:[b]}

let a1 = mapNode(a, _ => _.toUpperCase()) / TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()) / LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()) / InnerNode
```

TreeNode의 서브타입을 인수로 받아 같은 서브타입인 mapNode 함수를 구현해 봅시다

```ts
function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
): T{
    return {
        ...node,
        value: f(node.value)
    }
}
```

extends TreeNode의 뜻은 TreeNode이거나 아니면 TreeNode의 서브타입만 올 수 있게 타입을 제한합니다 즉 TreeNode, LeafNode, InnerNode만 올 수 있습니다

만약 extends를 빼고 T라고만 쓰면 T타입의 대한 상한 경계가 없기 때문에 value의값이 뭐든 올 수 있기 때문에 안전하지 않습니다 

T를 아예 사용하지 않고 mapNode를(node: TreeNode, f:(value:string) => string) => TreeNode 처럼 선언하면 매핑되면서 타입 정보가 날아가 a1,b1,c1 모두 TreeNode가 됩니다

