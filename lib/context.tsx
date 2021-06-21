import { createContext, useReducer } from 'react';

interface InitialStateItem {
  id: number;
  name: string;
  url: string;
  descriable: string;
  post?: any;
}

interface InitialState {
  filterList: InitialStateItem[];
  activeFilter: any;
  currentState: any;
}

const initialState: InitialState = {
  filterList: [
    {
      id: 1,
      name: 'React',
      url: '/javascript.png',
      descriable: `
      React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. `,
    },
    {
      id: 2,
      name: 'Javascript',
      url: '/javascript.png',
      descriable: `
      JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.`,
      post: [
        {
          id: 1,
          title: '',
          subtitle: [],
        },
        {
          id: 2,
          title: '',
          subtitle: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Typescript',
      url: '/typescript.png',
      descriable: `
      TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

      Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

      Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.`,
      post: [
        {
          id: 1,
          title: 'Typescript Types',
          subtitle: [
            {
              id: 1,
              postTitle: 'L 1. Baisc Type',
              date: '2021/06/17',
              linkTo: 'typescriptType',
            },
            {
              id: 2,
              postTitle: 'L 2. Funtion Type',
              date: '2021/06/18',
              linkTo: 'typescriptFunction',
            },
          ],
        },
        {
          id: 2,
          title: 'Typescript advance',
          subtitle: [
            {
              id: 1,
              postTitle: 'L 1. Advance Types',
              date: '2021/06/20',
              linkTo: 'typescriptAdvanceType',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Design Patterns',
      url: '/typescript.png',
      descriable: `
      In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. 
      
      It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. 
      
      Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.`,
      post: [
        {
          id: 1,
          title: 'Behavioral Patterns',
          subtitle: [
            {
              postTitle: 'L Strategy',
              date: '2021/06/121',
              linkTo: 'strategy',
            },
            {
              postTitle: ' Typescript 함수',
              date: '2021/06/18',
              linkTo: 'typescriptFunction',
            },
            {
              postTitle: ' Typescript 클래스',
              date: '2021/06/18',
              linkTo: 'typescriptClass',
            },
          ],
        },
        {
          id: 2,
          title: 'Typescript advance',
          subtitle: [
            {
              postTitle: 'second post',
              date: '2021/09/21',
            },
            {
              postTitle: 'second post22',
              date: '2021/09/21',
            },
            {
              postTitle: 'second post33',
              date: '2021/09/21',
            },
          ],
        },
      ],
    },
  ],
  activeFilter: [],
  currentState: [],
};

function reducer(state: InitialState, action: any) {
  return { ...state, ...action };
}
export const SelectContext = createContext(null);

const SelectContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
