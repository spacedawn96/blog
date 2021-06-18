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
      id: 2,
      name: 'Typescript',
      url: '/typescript.png',
      descriable: `
      TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

      Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

      Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.`,
      post: [
        {
          id: 1,
          title: 'Typescript 타입',
          subtitle: [
            {
              postTitle: 'L Typescript 타입',
              date: '2021/06/17',
              linkTo: 'typescript',
            },
          ],
        },
        {
          id: 2,
          title: '',
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
